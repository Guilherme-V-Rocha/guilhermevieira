import { Gauge, Shield, TestTube, Zap } from 'lucide-react'

export const projects = [
  {
    id: 1,
    title: 'Learn TDD — Formulários com Validação Type-Safe',
    stack: [
      'Next.js 16',
      'React 19',
      'Tailwind 4',
      'Jest',
      'React Hook Form',
      'Zod',
    ],
    description:
      'Projeto de estudo focado em TDD (Test-Driven Development) aplicado a formulários complexos. Desenvolvido com Next.js 16 e React 19, utiliza React Hook Form para performance em forms, Zod para validação type-safe e Jest com Testing Library para testes unitários. Cada regra de validação é testada antes de ser implementada.',
    metrics: [
      { icon: TestTube, label: 'Testes unitários', value: 'Jest + RTL' },
      { icon: Shield, label: 'Validação', value: 'Zod type-safe' },
      { icon: Zap, label: 'Forms performáticos', value: 'React Hook Form' },
    ],
    github: 'https://github.com/Guilherme-V-Rocha/learn_tdd',
    demo: null,
    tags: [
      '#nextjs16',
      '#tdd',
      '#jest',
      '#zod',
      '#react-hook-form',
      '#tailwind4',
    ],
  },
  {
    id: 2,
    title: 'Product Store — Loja com Data Fetching e Animações',
    stack: [
      'Next.js 14',
      'React 18',
      'TanStack Query',
      'styled-components',
      'Framer Motion',
      'Jest',
    ],
    description:
      'Loja de produtos construída como desafio técnico. Utiliza TanStack Query para cache inteligente de dados e sincronização de estado, styled-components para arquitetura CSS-in-JS modular e Framer Motion para transições de interface. Dados mockados com Faker.js para simular ambiente de produção.',
    metrics: [
      { icon: Gauge, label: 'Cache de dados', value: 'TanStack Query' },
      { icon: Zap, label: 'Animações', value: 'Framer Motion' },
      { icon: Shield, label: 'Testes', value: 'Jest + RTL' },
    ],
    github: 'https://github.com/Guilherme-V-Rocha/desafio',
    demo: null,
    tags: [
      '#nextjs14',
      '#tanstack-query',
      '#styled-components',
      '#framer-motion',
      '#jest',
    ],
  },
  {
    id: 3,
    title: 'Sales Dashboard — Visualização de Dados com Next.js 15',
    stack: ['Next.js 15', 'React 19', 'Tailwind 4', 'SVGR'],
    description:
      'Dashboard de vendas com visualização de dados em tempo real. Construído com Next.js 15 e React 19, utiliza Tailwind CSS 4 para estilização utilitária e SVGR para transformar SVGs em componentes React manipuláveis. Foco em performance de renderização e componentes gráficos reutilizáveis. Deployado na Vercel com acesso funcional.',
    metrics: [
      { icon: Gauge, label: 'Next.js', value: '15.3.2' },
      { icon: Zap, label: 'SVGs como componentes', value: 'SVGR' },
      { icon: Shield, label: 'Tailwind', value: 'v4' },
    ],
    github: 'https://github.com/Guilherme-V-Rocha/sales-dashboard',
    demo: 'https://dashboard-nu-wod.vercel.app/dashboard',
    tags: ['#nextjs15', '#react19', '#tailwind4', '#svgr', '#dashboard'],
  },
]
