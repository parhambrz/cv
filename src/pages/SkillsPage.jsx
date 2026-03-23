import SectionIntro from '../components/SectionIntro'
import SkillGrid from '../components/SkillGrid'

export default function SkillsPage({ skills }) {
  return (
    <section className="panel">
      <SectionIntro
        eyebrow="Top Skills"
        title="Technical Strengths"
        subtitle=""
      />
      <SkillGrid skills={skills} />
    </section>
  )
}
