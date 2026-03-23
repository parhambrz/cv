import SectionIntro from '../components/SectionIntro'
import SkillGrid from '../components/SkillGrid'

export default function SkillsPage({ skills }) {
  return (
    <section className="panel">
      <SectionIntro
        eyebrow="Top Skills"
        title="Technical strengths"
        subtitle="Change any skill in cv-data.json and rebuild; no component edits required."
      />
      <SkillGrid skills={skills} />
    </section>
  )
}
