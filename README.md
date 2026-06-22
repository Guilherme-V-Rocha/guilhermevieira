<div align="center">

# Portfolio — Precision Brutalism

Portfólio pessoal de **Guilhermer V.**, Frontend Engineer.

[🔗 Live Demo](https://SEU-DOMINIO.vercel.app)

</div>

---

## 📸 Preview

<div align="center">
  <img src="public/screenshots/hero.png" alt="Hero Section" width="100%" />
</div>

<div align="center" style="margin-top: 16px;">
  <img src="public/screenshots/projects.png" alt="Projects Section" width="100%" />
</div>

---

## 🎯 Sobre

Este portfólio documenta minha trajetória como **Frontend Engineer**.

Em **2023**, atuei na **Viptech** como Frontend Developer, onde arquitetei aplicações React, desenhei interfaces e otimizei builds — migrando de Webpack para Vite e reduzindo tempo de build em ~90%.

Após um período de pausa e recalibragem profissional, retornei em **setembro de 2025** com estudo focado. Desde então, publiquei **9 projetos no GitHub**, aprofundando Next.js 15/16 com RSC e PPR, TDD, TypeScript e Go para backend.

O design segue o conceito **Precision Brutalism** — Tactile Brutalism + Technical Mono + refinamento design-aware. Criado para provar autoria humana contra a homogeneização de templates gerados por IA.

### Acessibilidade

- Contraste WCAG 2.1 AA em todos os textos
- Focus rings visíveis para navegação por teclado
- Semântica HTML5 para leitores de tela
- `scroll-behavior: smooth` para navegação acessível

---

## 🛠 Stack

| Tecnologia     | Versão | Uso                             |
| -------------- | ------ | ------------------------------- |
| Next.js        | 16.2   | Framework e App Router          |
| React          | 19     | UI declarativa                  |
| TypeScript     | 5.7    | Tipagem end-to-end              |
| Tailwind CSS   | 4      | Estilização utilitária          |
| Lucide React   | 0.468  | Ícones                          |
| JetBrains Mono | —      | Tipografia monospaced (títulos) |
| Inter          | —      | Tipografia de corpo             |

---

## 🎨 Design System: Precision Brutalism

### Paleta

| Token            | Hex       | Uso                                           |
| ---------------- | --------- | --------------------------------------------- |
| Background       | `#0a0a0a` | Fundo principal (quase-preto, não puro)       |
| Foreground       | `#e5e5e5` | Texto principal (off-white)                   |
| Foreground Muted | `#a3a3a3` | Texto secundário                              |
| Primary          | `#dc2626` | CTAs, hover, destaques (usado com disciplina) |
| Accent           | `#f59e0b` | Métricas, labels técnicos                     |
| Border           | `#262626` | Bordas de 1px precisas                        |
| Surface          | `#171717` | Cards e superfícies elevadas                  |

### Textura

Noise CSS sutil (1.5% opacity) sobre o fundo escuro, adicionando tactilidade sem impactar performance.

### Tipografia

- **Títulos e labels:** JetBrains Mono (monospaced, técnico, preciso)
- **Corpo:** Inter (legível, neutro, profissional)

### Layout

Bento Grid assimétrico, whitespace estratégico, dark-first only (sem toggle de tema).

---

## 📁 Estrutura

```
NEW-PORTFOLIO/
├── .next/                  # Build output (Next.js)
├── node_modules/           # Dependências
├── public/
│   ├── screenshots/        # Screenshots para README
│   │   ├── hero.png
│   │   └── projects.png
│   └── cv-guilherme-v.pdf  # Currículo para download
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── Header.tsx          # Sticky header com links sociais
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Nome, métricas, CTAs
│   │   │   ├── Projects.tsx        # 3 projetos com narrativa e métricas
│   │   │   ├── About.tsx           # História + stack honesta
│   │   │   └── Contact.tsx         # Contato + em estudo + footer
│   │   ├── data/
│   │   │   ├── Info.ts             # Informações pessoais e narrativa
│   │   │   ├── Posts.ts            # Posts do estudos
│   │   │   ├── Project.ts          # Dados dos 3 projetos
│   │   │   └── Stack.ts            # Stack técnica com níveis
│   │   ├── globals.css             # Tokens de design e noise texture
│   │   ├── layout.tsx              # Root layout, metadata SEO, fontes
│   │   ├── page.tsx                # Landing page (monta as 4 seções)
│   │   └── favicon.ico
│   ├── .gitignore
│   ├── next-env.d.ts
│   ├── next.config.ts              # Configuração de export estático
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs          # Configuração PostCSS
│   ├── README.md                   # Este arquivo
│   └── tsconfig.json
```

### Por que separar os dados em `src/app/data/`?

A arquitetura separa **dados** (`Info.ts`, `Project.ts`, `Stack.ts`, `Posts.ts`) de **apresentação** (`sections/`). Isso permite:

- **Manutenção:** Atualizar projetos, stack ou contato sem tocar em componentes
- **Reutilização:** Mesmos dados podem alimentar diferentes views no futuro
- **Type safety:** Interfaces TypeScript garantem consistência entre dados e UI
- **Escalabilidade:** Adicionar novos projetos é apenas editar um arquivo de data

---

## 🚀 Como rodar

### Pré-requisitos

- Node.js 20+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Guilherme-V-Rocha/guilhermevieira.github.io
cd portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`

### Build para produção

```bash
npm run build
```

Saída estática em `/.next` — pronta para deploy em qualquer CDN (Vercel, Netlify, GitHub Pages).

---

## 📊 Métricas & Performance Budget

> ⚠️ **Atualize após o deploy:** Rode `npx lighthouse https://SEU-DOMINIO.vercel.app` e substitua os valores abaixo.

| Métrica                        | Valor               | Ferramenta        | Meta    |
| ------------------------------ | ------------------- | ----------------- | ------- |
| Lighthouse Performance         | **ATUALIZAR** / 100 | Lighthouse CI     | ≥ 90    |
| LCP (Largest Contentful Paint) | **ATUALIZAR** s     | Web Vitals        | < 1.2s  |
| FID (First Input Delay)        | **ATUALIZAR** ms    | Web Vitals        | < 100ms |
| CLS (Cumulative Layout Shift)  | **ATUALIZAR**       | Web Vitals        | < 0.1   |
| Bundle JS                      | **ATUALIZAR** KB    | Next.js build     | < 200KB |
| Bundle CSS                     | **ATUALIZAR** KB    | Next.js build     | < 15KB  |
| Build time                     | **ATUALIZAR** s     | Next.js 15 export | < 5s    |

---

## 🎨 Personalização

Para adaptar este portfólio para você:

1. **Conteúdo:** Edite os arquivos em `src/app/data/` (`Info.ts`, `Project.ts`, `Stack.ts`, `Posts.ts`)
2. **Cores:** Modifique os tokens em `src/app/globals.css` e `tailwind.config.ts`
3. **Projetos:** Atualize `src/app/data/Project.ts` com seus repositórios reais
4. **Links:** Substitua URLs de GitHub, LinkedIn e email em `src/app/data/Info.ts`
5. **Currículo:** Coloque seu PDF em `public/cv-guilherme-v.pdf`
6. **Screenshots:** Adicione imagens em `public/screenshots/` e atualize este README

---

## 📄 Licença

Este projeto é open source para fins de portfólio. Sinta-se livre para usar como base, mas personalize o conteúdo para refletir sua própria trajetória.

---
