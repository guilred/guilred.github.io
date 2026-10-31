import { copyFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

await copyFile(join(distDir, 'index.html'), join(distDir, '404.html'))
console.log('Copied dist/index.html to dist/404.html')
