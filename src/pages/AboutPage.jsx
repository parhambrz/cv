import SectionIntro from '../components/SectionIntro'

export default function AboutPage({ profile }) {
  return (
    <section className="panel hero-panel">
      <span className="hero-badge">Professional Profile</span>
      <SectionIntro eyebrow="About Me" title={profile.name} subtitle={profile.title} />
      <p className="long-text hero-about">{profile.about}</p>
      <ul className="highlight-list standalone">
        {profile.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </section>
  )
}
