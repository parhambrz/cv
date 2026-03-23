import { Link, NavLink, useLocation } from 'react-router-dom'
import { BriefcaseBusiness, GraduationCap, Sparkles, UserRound } from 'lucide-react'
import { motion } from 'framer-motion'
import cvData from '../data/cv-data.json'

const navItems = [
  { to: '/', label: 'About', icon: UserRound },
  { to: '/skills', label: 'Top Skills', icon: Sparkles },
  { to: '/education', label: 'Education', icon: GraduationCap },
  { to: '/experience', label: 'Experience', icon: BriefcaseBusiness },
]

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="site-shell">
      <div className="bg-orb orb-a" aria-hidden="true" />
      <div className="bg-orb orb-b" aria-hidden="true" />

      <header className="topbar">
        <Link className="brand" to="/">
          <span className="brand-dot" aria-hidden="true" />
          {cvData.profile.name}
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink className="nav-link" to={to} end={to === '/'}>
                  <Icon size={16} aria-hidden="true" />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <motion.main
        key={location.pathname}
        className="page-wrap"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {children}
      </motion.main>

      <footer className="site-footer">
        <p>
          Built with React and static data for easy updates. Edit
          <strong> src/data/cv-data.json</strong> and rebuild.
        </p>
      </footer>
    </div>
  )
}

export default Layout
