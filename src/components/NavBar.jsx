import { NavLink } from 'react-router-dom'
import SocialLinks from './SocialLinks.jsx'

export default function NavBar() {
  return (
    <nav className="icon-nav">
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </div>
      <SocialLinks />
    </nav>
  )
}
