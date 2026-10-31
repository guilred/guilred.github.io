import { formatDate, getPostSlug } from '../../utils/blog.js'
import PostMedia from './PostMedia.jsx'

function getParagraphs(text) {
  if (!text) return []

  const paragraphs = Array.isArray(text) ? text : String(text).split(/\n\s*\n/)
  return paragraphs.map((paragraph) => paragraph.trim()).filter(Boolean)
}

export default function BlogPost({ post }) {
  const slug = getPostSlug(post)
  const date = post.date ?? ''
  const paragraphs = getParagraphs(post.text)

  return (
    <article id={slug} className="blog-post">
      <header className="blog-post-header">
        {date && (
          <time className="blog-post-date" dateTime={date}>
            {formatDate(date)}
          </time>
        )}
        <h2 className="blog-post-title">
          {post.title}
          <a className="blog-post-anchor" href={`#${slug}`} aria-label={`Link to ${post.title}`}>
            #
          </a>
        </h2>
      </header>

      <div className="blog-post-body">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <PostMedia media={post.media} title={post.title} />
      </div>
    </article>
  )
}
