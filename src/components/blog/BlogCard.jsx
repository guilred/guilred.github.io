import { Link } from 'react-router-dom'
import { formatDate, getLatestPost, getPostDate } from '../../utils/blog.js'

export default function BlogCard({ blog }) {
  const latestPost = getLatestPost(blog.posts)
  const latestDate = latestPost ? getPostDate(latestPost) : ''
  const postCount = blog.posts?.length ?? 0

  return (
    <article className="card blog-card">
      {blog.cover && (
        <img
          src={blog.cover}
          alt={blog.coverAlt ?? ''}
          className="card-img blog-card-img"
          loading="lazy"
        />
      )}
      <div className="card-content">
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <div className="blog-card-meta">
          <span>
            {postCount} {postCount === 1 ? 'post' : 'posts'}
          </span>
          {latestDate && (
            <span>
              Latest: <time dateTime={latestDate}>{formatDate(latestDate)}</time>
            </span>
          )}
        </div>
        <Link to={`/blogs/${blog.slug}`} className="card-link">
          read blog →
        </Link>
      </div>
    </article>
  )
}
