import { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import BlogPost from '../components/blog/BlogPost.jsx'
import { blogs } from '../content/blogs/index.js'
import usePageMeta from '../hooks/usePageMeta.js'
import { formatDate, getLatestPost, getPostSlug, sortPosts } from '../utils/blog.js'

export default function Blog() {
  const { blogSlug } = useParams()
  const { hash } = useLocation()
  const blog = blogs.find((entry) => entry.slug === blogSlug)

  usePageMeta(
    blog ? `${blog.title} - Blogs` : "Blog not found - Guilred's Portfolio",
    blog?.description ?? 'The requested blog could not be found.',
  )

  useEffect(() => {
    if (!hash) return

    const id = decodeURIComponent(hash.slice(1))
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ block: 'start' })
  }, [hash, blogSlug])

  if (!blog) {
    return (
      <section className="blog-missing">
        <h2>Blog not found</h2>
        <p>That blog does not exist (yet).</p>
        <Link to="/blogs" className="card-link">
          ← All blogs
        </Link>
      </section>
    )
  }

  const posts = sortPosts(blog.posts)
  const latestPost = getLatestPost(blog.posts)
  const latestDate = latestPost?.date ?? ''

  return (
    <div className="blog-detail">
      <Link to="/blogs" className="blog-back">
        ← All blogs
      </Link>

      <header className="blog-header">
        {blog.cover && (
          <img
            src={blog.cover}
            alt={blog.coverAlt ?? ''}
            className="blog-cover"
            loading="lazy"
          />
        )}
        <div className="blog-header-content">
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <div className="blog-header-meta">
            <span>
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </span>
            {latestDate && (
              <span>
                Latest: <time dateTime={latestDate}>{formatDate(latestDate)}</time>
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="blog-posts" aria-label={`${blog.title} posts`}>
        {posts.length > 0 ? (
          posts.map((post) => <BlogPost key={getPostSlug(post)} post={post} />)
        ) : (
          <p className="blog-empty">No posts yet. Check back soon!</p>
        )}
      </section>
    </div>
  )
}
