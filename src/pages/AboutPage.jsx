import SectionIntro from '../components/SectionIntro'

export default function AboutPage({ profile }) {
  return (
    <section className="panel">
      <SectionIntro eyebrow="About Me" title={profile.name} subtitle={profile.title} />
      <p className="long-text">{profile.about}</p>
      <ul className="highlight-list standalone">
        {profile.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </section>
  )
}
