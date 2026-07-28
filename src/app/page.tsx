import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'

export default function Home() {
  return (
    <main className="relative z-10">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
