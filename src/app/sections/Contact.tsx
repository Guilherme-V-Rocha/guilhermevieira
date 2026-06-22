'use client'

import {
  ArrowUpRight,
  BookOpen,
  Code,
  FileText,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react'
import { information } from '../data/Info'

const studying = [
  {
    icon: Code,
    title: 'CSS Native Animations',
    description:
      'View Transitions API e scroll-driven animations para substituir Framer Motion.',
  },
  {
    icon: BookOpen,
    title: 'React Compiler & RSC',
    description:
      'Aprofundando Server Components e Partial Prerendering no Next.js 16.',
  },
]

export function Contact() {
  return (
    <section id="contato" className="px-6 py-24 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono-heading text-xs text-primary uppercase tracking-widest mb-3 block">
              Contato
            </span>
            <h2 className="font-mono-heading text-3xl sm:text-4xl text-foreground mb-6">
              Vamos conversar
            </h2>
            <p className="text-foreground-muted text-sm leading-relaxed mb-8 max-w-md">
              Estou aberto a oportunidades como Frontend Developer,
              especialmente em projetos com Next.js, arquitetura limpa e foco em
              performance. Seja para vaga CLT, PJ ou freelance.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${information.gmail}`}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <Mail
                  size={18}
                  className="text-foreground-muted group-hover:text-primary"
                />
                <span className="text-sm">{information.gmail}</span>
              </a>
              <a
                href={information.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <Github
                  size={18}
                  className="text-foreground-muted group-hover:text-primary"
                />
                <span className="text-sm">github.com/guilherme</span>
                <ArrowUpRight size={14} className="text-foreground-muted" />
              </a>
              <a
                href={information.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <Linkedin
                  size={18}
                  className="text-foreground-muted group-hover:text-primary"
                />
                <span className="text-sm">linkedin.com/in/guilherme</span>
                <ArrowUpRight size={14} className="text-foreground-muted" />
              </a>
              <a
                href="/cv-guilherme-v.pdf"
                download="cv-guilherme-v.pdf"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <FileText
                  size={18}
                  className="text-foreground-muted group-hover:text-primary"
                />
                <span className="text-sm">Baixar currículo (PDF)</span>
              </a>
            </div>
          </div>

          <div>
            <span className="font-mono-heading text-xs text-foreground-muted uppercase tracking-widest mb-3 block">
              Em Estudo
            </span>
            <h3 className="font-mono-heading text-lg text-foreground mb-6">
              O que estou aprendendo agora
            </h3>
            <div className="space-y-4">
              {studying.map((item) => (
                <div
                  key={item.title}
                  className="border border-border p-4 hover:bg-surface/60 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <item.icon
                      size={16}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    <div>
                      <h4 className="text-sm text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-foreground-muted">
            Guilhermer V. — Frontend Engineer
          </div>
          <div className="text-xs text-foreground-muted">
            Análise e Desenvolvimento de Sistemas
          </div>
          <div className="text-xs text-foreground-muted">
            © 2026 — Built with Next.js 15 + Tailwind
          </div>
        </footer>
      </div>
    </section>
  )
}
