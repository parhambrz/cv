import { motion } from 'framer-motion'

export default function SectionIntro({ eyebrow, title, subtitle }) {
  return (
    <motion.header
      className="section-header"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </motion.header>
  )
}
