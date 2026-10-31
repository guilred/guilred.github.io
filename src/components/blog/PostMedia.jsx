function normalizeMedia(media) {
  if (!media) return []
  return Array.isArray(media) ? media : [media]
}

export default function PostMedia({ media, title }) {
  const items = normalizeMedia(media)

  if (items.length === 0) return null

  return (
    <div className="post-media-list">
      {items.map((item, index) => {
        if (item.type !== 'video' && item.type !== 'image') {
          if (import.meta.env.DEV) {
            console.warn(
              `[PostMedia] Unsupported media type "${item.type}" in post "${title}". Use "video" or "image".`,
            )
          }
          return null
        }

        return (
          <figure className="post-media" key={`${item.type}-${item.src}-${index}`}>
            {item.type === 'video' ? (
              <video
                className="post-media-video"
                src={item.src}
                poster={item.poster}
                controls
                preload="metadata"
                playsInline
                aria-label={title}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                className="post-media-image"
                src={item.src}
                alt={item.alt ?? ''}
                loading="lazy"
              />
            )}
          </figure>
        )
      })}
    </div>
  )
}
