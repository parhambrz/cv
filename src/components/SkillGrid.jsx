import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'

export default function SkillGrid({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((group, idx) => {
        const Icon = Icons[group.icon] ?? Icons.Layers

        return (
          <motion.article
            className="skill-domain-card"
            key={group.domain}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.04 }}
          >
            <div className="skill-domain-head">
              <div className="skill-icon-wrap">
                <Icon size={17} />
              </div>
              <h3>{group.domain}</h3>
            </div>

            <ul className="skill-item-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        )
      })}
    </div>
  )
}
