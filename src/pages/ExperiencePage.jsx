import SectionIntro from '../components/SectionIntro'
import TimelineCard from '../components/TimelineCard'

export default function ExperiencePage({ experience }) {
  return (
    <section className="panel">
      <SectionIntro
        eyebrow="Experience"
        title="Professional timeline"
        subtitle=""
      />
      <div className="timeline-stack">
        {experience.map((item, idx) => (
          <TimelineCard key={item.id} item={item} section="experience" index={idx} />
        ))}
      </div>
    </section>
  )
}
