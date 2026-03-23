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
  const socials = cvData.socials ?? []

  return (
    <div className="site-shell">
      <div className="bg-glow bg-glow-a" aria-hidden="true" />
      <div className="bg-glow bg-glow-b" aria-hidden="true" />

      <header className="site-header">
        <div>
          <p className="site-kicker">Curriculum Vitae</p>
          <h1>
            <Link to="/">{cvData.profile.name}</Link>
          </h1>
          <p className="site-title">{cvData.profile.title}</p>
        </div>

        <nav className="site-nav" aria-label="Main navigation">
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

        <div className="header-contact">
          <p>{cvData.profile.location}</p>
          <a href={`mailto:${cvData.profile.email}`}>{cvData.profile.email}</a>
          <div className="social-links">
            {socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
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
        </p>
      </footer>
    </div>
  )
}

export default Layout
