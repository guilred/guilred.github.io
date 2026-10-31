import { socials } from '../data/socials.js'

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socials.map(({ label, href, icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" title={label} aria-label={label}>
          <i className={icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
