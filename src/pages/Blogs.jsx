import BlogCard from '../components/blog/BlogCard.jsx'
import { blogs } from '../content/blogs/index.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Blogs() {
  usePageMeta(
    "Guilred's Portfolio - Blogs",
    "Guilred's development diaries and project deep dives.",
  )

  return (
    <section aria-labelledby="blogs-title">
      <h2 id="blogs-title">Blogs</h2>
      <p className="blog-intro">Development diaries and project deep dives.</p>

      {blogs.length > 0 ? (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="blog-empty">No blogs yet. Check back soon!</p>
      )}
    </section>
  )
}
