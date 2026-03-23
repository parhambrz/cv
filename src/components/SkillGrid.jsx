import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'

export default function SkillGrid({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((skill, idx) => {
        const Icon = Icons[skill.icon] ?? Icons.Sparkles

        return (
          <motion.article
            className="skill-pill"
            key={skill.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.04 }}
          >
            <div className="skill-icon-wrap">
              <Icon size={17} />
            </div>
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}
