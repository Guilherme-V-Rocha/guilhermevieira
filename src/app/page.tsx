import { Header } from './components/Header'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
