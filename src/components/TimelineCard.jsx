import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, MapPin, CalendarDays } from 'lucide-react'

export default function TimelineCard({ item, section, index = 0 }) {
  const title = section === 'education' ? item.degree : item.role
  const org = section === 'education' ? item.school : item.company

  return (
    <motion.article
      className="timeline-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.38, ease: 'easeOut', delay: index * 0.05 }}
    >
      <div className="timeline-accent" aria-hidden="true" />
      <div className="timeline-card-main">
        <h3>{title}</h3>
        <p className="timeline-org">{org}</p>
        <p>{item.summary}</p>
        <div className="timeline-meta">
          <span>
            <CalendarDays size={16} />
            {item.start} - {item.end}
          </span>
          <span>
            <MapPin size={16} />
            {item.location}
          </span>
        </div>
      </div>
      <Link
        to={`/${section}/${item.id}`}
        className="detail-link"
        aria-label={`Open details for ${title}`}
      >
        View details
        <ChevronRight size={16} />
      </Link>
    </motion.article>
  )
}
