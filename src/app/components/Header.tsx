'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { information } from '../data/Info'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono-heading text-sm text-foreground hover:text-primary transition-colors"
        >
          Guilhermer.v
        </a>

        <nav className="flex items-center gap-5">
          <a
            href="#projetos"
            className="hidden sm:inline text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            Projetos
          </a>
          <a
            href="#sobre"
            className="hidden sm:inline text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="hidden sm:inline text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            Contato
          </a>

          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <a
              href={information.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={information.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${information.gmail}`}
              className="text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
