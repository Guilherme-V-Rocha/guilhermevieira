import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Guilherme V. — Frontend Engineer',
  description:
    'Frontend Engineer com experiência em arquitetura React, Next.js 15, TDD e design de interfaces. Retorno técnico em 2025-2026.',
  keywords: [
    'Frontend',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'TDD',
    'Zustand',
    'Zod',
  ],
  authors: [{ name: 'Guilherme V.' }],
  openGraph: {
    title: 'Guilherme V. — Frontend Engineer',
    description: 'Arquitetura · Next.js 15 · TDD · Performance',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="noise-bg min-h-screen antialiased">{children}</body>
    </html>
  )
}
