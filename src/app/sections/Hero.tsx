'use client'

import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import { information } from '../data/Info'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-5xl w-full">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono-heading text-xs text-foreground-muted uppercase tracking-widest">
            Disponível para oportunidades
          </span>
        </div>

        <h1 className="font-mono-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
          Guilherme
          <span className="text-foreground-muted"> V.</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground-muted max-w-2xl mb-10 leading-relaxed">
          Frontend Engineer com experiência em arquitetura e design.
          <br className="hidden sm:block" />
          Retorno técnico em 2025-2026 com{' '}
          <span className="text-foreground">Next.js</span>,{' '}
          <span className="text-foreground">Zustand</span>,{' '}
          <span className="text-foreground">TDD</span> e{' '}
          <span className="text-foreground">TanStack Query</span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl">
          <div className="border border-border bg-surface/50 p-4">
            <div className="metric mb-1">Viptech 2023</div>
            <div className="text-sm text-foreground-muted">
              Arquitetura frontend & otimização de builds
            </div>
          </div>
          <div className="border border-border bg-surface/50 p-4">
            <div className="metric mb-1">GitHub 2026</div>
            <div className="text-sm text-foreground-muted">
              8 projetos publicados, commits ativos
            </div>
          </div>
          <div className="border border-border bg-surface/50 p-4">
            <div className="metric mb-1">Stack Atual</div>
            <div className="text-sm text-foreground-muted">
              Next.js 16, TDD, Zustand, Zod
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 text-sm font-medium transition-colors"
          >
            Ver Projetos
            <ArrowDown size={16} />
          </a>
          <a
            href={information.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border hover:border-foreground-muted text-foreground px-6 py-3 text-sm font-medium transition-colors"
          >
            GitHub
            <ExternalLink size={16} />
          </a>
          <a
            href="/cv-guilherme-v.pdf"
            download="cv-guilherme-v.pdf"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground text-sm transition-colors"
          >
            <Download size={16} />
            Baixar Currículo
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground-muted">
        <span className="text-xs font-mono-heading">scroll</span>
        <div className="w-px h-8 bg-border relative overflow-hidden">
          <div className="w-full h-4 bg-foreground-muted absolute top-0 animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
