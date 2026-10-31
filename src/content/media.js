import { mediaDates } from 'virtual:media-metadata'

const diaryVideos = import.meta.glob('../assets/diary-videos/**/*.{mp4,webm,ogg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const images = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,webp,gif,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function resolveMedia(files, root, path) {
  const normalizedPath = String(path).replaceAll('\\', '/').replace(/^\/+/, '')
  const key = `${root}${normalizedPath}`
  const src = files[key]

  if (!src) {
    throw new Error(
      `[media] File not found: ${key}. Check the path and file extension in your blog data.`,
    )
  }

  return src
}

function buildDateMap(files) {
  const map = new Map()

  for (const [key, src] of Object.entries(files)) {
    const assetKey = key.replace('../assets/', '')
    const date = mediaDates[assetKey]
    if (date) map.set(src, date)
  }

  return map
}

const mediaDateBySrc = new Map([...buildDateMap(diaryVideos), ...buildDateMap(images)])

export function diaryVideo(path) {
  return resolveMedia(diaryVideos, '../assets/diary-videos/', path)
}

export function image(path) {
  return resolveMedia(images, '../assets/images/', path)
}

export function getMediaDate(src) {
  return mediaDateBySrc.get(src) ?? ''
}
