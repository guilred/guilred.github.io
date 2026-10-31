import { Link } from 'react-router-dom'
import { formatDate, getLatestPost } from '../../utils/blog.js'

export default function BlogCard({ blog }) {
  const latestPost = getLatestPost(blog.posts)
  const latestDate = latestPost?.date ?? ''
  const postCount = blog.posts?.length ?? 0

  return (
    <Link to={`/blogs/${blog.slug}`} className="card blog-card blog-card-link">
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
        <span className="card-link">read blog →</span>
      </div>
    </Link>
  )
}
