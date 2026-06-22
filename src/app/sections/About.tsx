'use client'

import { stack } from '../data/Stack'

const levelColor: Record<string, string> = {
  Proficient: 'text-foreground',
  Familiar: 'text-foreground-muted',
  Learning: 'text-foreground-muted/60',
}

export function About() {
  return (
    <section id="sobre" className="px-6 py-24 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono-heading text-xs text-primary uppercase tracking-widest mb-3 block">
              Sobre
            </span>
            <h2 className="font-mono-heading text-3xl sm:text-4xl text-foreground mb-6">
              Arquitetura, design e retorno técnico
            </h2>

            <div className="space-y-4 text-foreground-muted text-sm leading-relaxed">
              <p>
                Em 2023, atuei como Frontend Developer na{' '}
                <span className="text-foreground">Viptech</span>, onde
                arquitetei aplicações React, desenhei interfaces e otimizei
                builds — migrando de Webpack para Vite e reduzindo tempo de
                build em ~90%.
              </p>
              <p>
                Após um período de pausa e recalibragem profissional, retornei
                em setembro de 2025 com estudo focado. Desde então, publiquei 8
                projetos no GitHub, aprofundando{' '}
                <span className="text-foreground">Next.js 15 com PPR</span>,{' '}
                <span className="text-foreground">TDD</span>,{' '}
                <span className="text-foreground">TanStack Query</span> e{' '}
                <span className="text-foreground">Zustand</span>. Estudando Go
                para expandir para fullstack.
              </p>
              <p>
                Busco oportunidades para aplicar essa stack moderna em projetos
                reais.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="font-mono-heading text-xs text-foreground-muted uppercase tracking-widest mb-2">
                Experiência
              </div>
              <div className="text-sm text-foreground">
                Frontend Developer — Viptech (2023, 2-3 meses)
              </div>
              <div className="text-xs text-foreground-muted mt-1">
                Arquitetura React, design de interfaces, otimização de builds
              </div>
            </div>
          </div>

          <div>
            <span className="font-mono-heading text-xs text-foreground-muted uppercase tracking-widest mb-3 block">
              Stack Honesta
            </span>
            <div className="border border-border">
              {stack.map((item, idx) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between px-4 py-3 ${
                    idx !== stack.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div>
                    <div className="font-mono-heading text-sm text-foreground">
                      {item.name}
                    </div>
                    <div className="text-xs text-foreground-muted mt-0.5">
                      {item.context}
                    </div>
                  </div>
                  <span
                    className={`font-mono-heading text-xs ${levelColor[item.level]} border border-border px-2 py-1`}
                  >
                    {item.level}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-foreground-muted mt-4">
              Níveis baseados em tempo de uso, projetos em produção e
              profundidade de estudo. Atualizado em junho de 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
