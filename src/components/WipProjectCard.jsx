export default function WipProjectCard({ project }) {
  const { tag, title, description, images } = project

  return (
    <article className="wip-row">
      {images.map(({ src, alt }) => (
        <img key={src} src={src} alt={alt} className="wip-img" />
      ))}
      <div className="wip-content">
        <span className="wip-tag">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}
