import { extname, join, relative, sep } from 'node:path'
import { readdir, stat } from 'node:fs/promises'

const VIRTUAL_ID = 'virtual:media-metadata'
const RESOLVED_ID = `\0${VIRTUAL_ID}`
const MEDIA_EXTENSIONS = new Set([
  '.mp4',
  '.webm',
  '.ogg',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.gif',
  '.avif',
])

async function walk(directory) {
  let entries

  try {
    entries = await readdir(directory, { withFileTypes: true })
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }

  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(directory, entry.name)
      return entry.isDirectory() ? walk(fullPath) : fullPath
    }),
  )

  return files
    .flat()
    .filter((file) => MEDIA_EXTENSIONS.has(extname(file).toLowerCase()))
}

function getEarliestDate(info) {
  const timestamps = [info.birthtimeMs, info.mtimeMs].filter(
    (timestamp) => Number.isFinite(timestamp) && timestamp > 0,
  )

  if (timestamps.length === 0) return info.mtime.toISOString().slice(0, 10)

  return new Date(Math.min(...timestamps)).toISOString().slice(0, 10)
}

export default function mediaMetadata() {
  let assetsRoot = ''
  let watchDirectories = []

  async function collectDates() {
    const files = (await Promise.all(watchDirectories.map((directory) => walk(directory)))).flat()
    const dates = {}

    for (const file of files) {
      const info = await stat(file)
      const key = relative(assetsRoot, file).split(sep).join('/')
      dates[key] = getEarliestDate(info)
    }

    return Object.fromEntries(
      Object.entries(dates).sort(([first], [second]) => first.localeCompare(second)),
    )
  }

  return {
    name: 'media-metadata',

    configResolved(config) {
      assetsRoot = join(config.root, 'src', 'assets')
      watchDirectories = [join(assetsRoot, 'diary-videos'), join(assetsRoot, 'images')]
    },

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
      return null
    },

    async load(id) {
      if (id !== RESOLVED_ID) return null

      const dates = await collectDates()
      return `export const mediaDates = ${JSON.stringify(dates, null, 2)}`
    },

    configureServer(server) {
      server.watcher.add(watchDirectories)

      const refresh = (file) => {
        if (!MEDIA_EXTENSIONS.has(extname(file).toLowerCase())) return

        const module = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (module) server.moduleGraph.invalidateModule(module)
        server.ws.send({ type: 'full-reload' })
      }

      server.watcher.on('add', refresh)
      server.watcher.on('unlink', refresh)
      server.watcher.on('change', refresh)
    },
  }
}
