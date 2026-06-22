'use client'

import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/Project'

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <span className="font-mono-heading text-xs text-primary uppercase tracking-widest mb-3 block">
            Projetos Selecionados
          </span>
          <h2 className="font-mono-heading text-3xl sm:text-4xl text-foreground mb-4">
            Trabalhos que provam decisões técnicas
          </h2>
          <p className="text-foreground-muted max-w-xl">
            Cada projeto nasce de um problema real que enfrentei — na Viptech ou
            no estudo. Aqui, código e métrica falam mais que descrição.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border border-border bg-surface/30 hover:bg-surface/60 transition-colors duration-300"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-mono-heading text-xl sm:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono-heading text-xs text-foreground-muted border border-border px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted hover:text-foreground transition-colors"
                      aria-label="Repositório no GitHub"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-hover transition-colors"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse mr-1" />
                        Demo
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-sm text-foreground-muted border border-border px-2 py-1">
                        Repo only
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-foreground-muted text-sm leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="border border-border bg-background/50 p-3 flex items-center gap-3"
                    >
                      <metric.icon size={16} className="text-accent shrink-0" />
                      <div>
                        <div className="text-xs text-foreground-muted">
                          {metric.label}
                        </div>
                        <div className="font-mono-heading text-sm text-foreground">
                          {metric.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-foreground-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
