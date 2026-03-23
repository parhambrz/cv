import SectionIntro from '../components/SectionIntro'
import TimelineCard from '../components/TimelineCard'

export default function EducationPage({ education }) {
  return (
    <section className="panel">
      <SectionIntro
        eyebrow="Education"
        title="Academic timeline"
        subtitle="Each education item has its own detail route, generated from data IDs."
      />
      <div className="timeline-stack">
        {education.map((item, idx) => (
          <TimelineCard key={item.id} item={item} section="education" index={idx} />
        ))}
      </div>
    </section>
  )
}
