const images = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,webp,gif,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function resolveImage(path) {
  const normalizedPath = String(path).replaceAll('\\', '/').replace(/^\/+/, '')
  const key = `../assets/images/${normalizedPath}`
  const src = images[key]

  if (!src) {
    throw new Error(
      `[media] Image not found: ${key}. Check the path and file extension in your blog data.`,
    )
  }

  return src
}

export function image(path) {
  return resolveImage(path)
}
