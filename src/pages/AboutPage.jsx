import { UserRound } from 'lucide-react'
import SectionIntro from '../components/SectionIntro'

export default function AboutPage({ profile }) {
  return (
    <section className="panel hero-panel">
      <span className="hero-badge">Professional Profile</span>
      <SectionIntro eyebrow="About Me" title={profile.name} subtitle={profile.title} />

      <div className="about-layout">
        <div className="about-photo-wrap" aria-label="Profile photo placeholder">
          {profile.photo ? (
            <img className="about-photo" src={profile.photo} alt={`${profile.name} profile`} />
          ) : (
            <div className="about-photo-placeholder" aria-hidden="true">
              <UserRound size={36} />
              <span>Photo Placeholder</span>
            </div>
          )}
        </div>

        <div className="about-content">
          <p className="long-text hero-about">{profile.about}</p>

          <ul className="highlight-list standalone">
            {profile.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <section className="core-focus">
            <h3>Core Architectural Focus</h3>
            <div className="core-focus-grid">
              {profile.coreArchitecturalFocus.map((focus) => (
                <article className="core-focus-card" key={focus.title}>
                  <h4>{focus.title}</h4>
                  <ul>
                    {focus.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
