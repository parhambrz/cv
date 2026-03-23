import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarRange, MapPin } from 'lucide-react'
import SectionIntro from '../components/SectionIntro'
import cvData from '../data/cv-data.json'
import { formatDateLabel } from '../utils/formatDate'

function DetailPage({ section }) {
  const { id } = useParams()
  const collection = section === 'education' ? cvData.education : cvData.experience
  const item = collection.find((entry) => entry.id === id)

  if (!item) {
    return <Navigate to={`/${section}`} replace />
  }

  const title = section === 'education' ? item.school : item.company
  const subtitle = section === 'education' ? item.degree : item.role
  const tags = section === 'education' ? item.tags : item.tech

  return (
    <section>
      <SectionIntro eyebrow={section} title={title} subtitle={subtitle} />

      <article className="panel detail-panel">
        <div className="detail-meta">
          <p>
            <CalendarRange size={15} aria-hidden="true" />
            {formatDateLabel(item.start)} - {formatDateLabel(item.end)}
          </p>
          <p>
            <MapPin size={15} aria-hidden="true" />
            {item.location}
          </p>
        </div>

        <p className="detail-summary">{item.summary}</p>

        <ul className="bullet-list detail-bullets">
          {item.details.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <div className="tag-wrap">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <Link className="back-link" to={`/${section}`} aria-label="Go back">
          <ArrowLeft size={16} aria-hidden="true" /> Back
        </Link>
      </article>
    </section>
  )
}

export default DetailPage
