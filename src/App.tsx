import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Workflow from './sections/Workflow'
import Projects from './sections/Projects'
import AnalyticsLab from './sections/AnalyticsLab'
import LearningJourney from './sections/LearningJourney'
import GitHubSection from './sections/GitHubSection'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Workflow />
      <Projects />
      <AnalyticsLab />
      <LearningJourney />
      <GitHubSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
