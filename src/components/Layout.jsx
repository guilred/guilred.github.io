import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar.jsx'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (previousPathname.current === pathname) return

    previousPathname.current = pathname
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
