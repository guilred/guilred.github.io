export default function ProjectCard({ project }) {
  const { title, image, imageAlt, paragraphs, link, linkLabel } = project

  return (
    <article className="card">
      <img src={image} alt={imageAlt} className="card-img" />
      <div className="card-content">
        <h3>{title}</h3>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <a href={link} className="card-link" target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      </div>
    </article>
  )
}
