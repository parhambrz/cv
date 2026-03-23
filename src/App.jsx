import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import EducationPage from './pages/EducationPage'
import ExperiencePage from './pages/ExperiencePage'
import DetailPage from './pages/DetailPage'
import cvData from './data/cv-data.json'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AboutPage profile={cvData.profile} />} />
        <Route path="/about" element={<AboutPage profile={cvData.profile} />} />
        <Route path="/skills" element={<SkillsPage skills={cvData.skills} />} />
        <Route
          path="/education"
          element={<EducationPage education={cvData.education} />}
        />
        <Route
          path="/experience"
          element={<ExperiencePage experience={cvData.experience} />}
        />
        <Route path="/education/:id" element={<DetailPage section="education" />} />
        <Route path="/experience/:id" element={<DetailPage section="experience" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
