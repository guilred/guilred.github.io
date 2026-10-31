import { getMediaDate } from '../content/media.js'

function normalizeMedia(media) {
  if (!media) return []
  return Array.isArray(media) ? media : [media]
}

export function getPostDate(post) {
  const mediaDates = normalizeMedia(post?.media)
    .map((item) => getMediaDate(item?.src))
    .filter(Boolean)
    .sort()

  if (mediaDates.length > 0) return mediaDates[0]

  return post?.date ?? ''
}

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getPostSlug(post) {
  return post.slug || slugify(post.title)
}

export function sortPosts(posts = []) {
  return [...posts].sort((a, b) => getPostDate(b).localeCompare(getPostDate(a)))
}

export function getLatestPost(posts = []) {
  return sortPosts(posts)[0] ?? null
}

export function formatDate(date) {
  if (!date) return ''

  const parsed = new Date(`${date}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return date

  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
