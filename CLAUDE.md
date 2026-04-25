# CLAUDE.md — Viagem Sem Fim

Guia de contexto para o agente Claude Code. Leia antes de qualquer tarefa.

## O que é este projeto

Blog de viagens "Viagem Sem Fim" com landing page de venda de passagens aéreas.
Migrado de HTML/CSS estático para **Next.js 15 + Tailwind CSS v4 + TypeScript**.

## Stack

| Pacote | Versão | Função |
|---|---|---|
| next | ^15.1 | App Router, SSG/SSR |
| react | ^19 | UI |
| typescript | ^5 | Tipagem |
| tailwindcss | ^4 | Estilos (sem tailwind.config.ts) |
| lucide-react | ^0.468 | Ícones |
| react-hook-form | ^7.54 | Formulário de contato |
| react-hot-toast | ^2.4 | Toasts |

## Estrutura

```
app/
  globals.css          @import "tailwindcss" + .btn-primary + .input-field
  layout.tsx           Header, Navbar, Footer, Toaster — root layout
  page.tsx             Landing page de vendas (server component)
  destinos/page.tsx
  dicas/page.tsx
  historias/page.tsx
  contato/page.tsx
components/
  Navbar.tsx           'use client' — hamburguer + usePathname
  Footer.tsx           server — 2 colunas (marca + contato/newsletter)
  Card.tsx             server — card reutilizável com next/image
  Carousel.tsx         'use client' — 5 destinos, auto-play 4.5s, dots, setas
  SearchBar.tsx        'use client' — form destino/data/passageiros → /destinos
  ContactForm.tsx      'use client' — react-hook-form, 3 campos validados
  NewsletterForm.tsx   'use client' — email com confirmação visual
  WhatsAppButton.tsx   server — botão fixo bottom-right, abre wa.me
```

## Regras de arquitetura

- **Server Components por padrão.** Adicionar `'use client'` apenas quando houver hooks ou event handlers.
- **Event handlers nunca em Server Components** — causam erro de build. Extrair para um Client Component filho.
- **Tailwind v4:** não há `tailwind.config.ts`. Customizações de tema vão em `@theme {}` dentro de `app/globals.css`.
- **Imagens externas** precisam estar em `remotePatterns` no `next.config.ts`.
- **Classes utilitárias globais:** `.btn-primary` e `.input-field` definidas em `globals.css`.

## Configurações que o usuário pode querer mudar

```ts
// components/WhatsAppButton.tsx
const PHONE = '5511999999999'   // trocar pelo número real
const MESSAGE = 'Olá! ...'     // trocar pela mensagem desejada
```

```ts
// next.config.ts — adicionar domínios de imagem externos
remotePatterns: [
  { protocol: 'https', hostname: 'novo-dominio.com' },
]
```

## Comandos

```bash
# IMPORTANTE: no terminal bash, npm pode precisar do PATH explícito
export PATH="$PATH:/c/Program Files/nodejs"

npm run dev      # http://localhost:3000
npm run build    # sempre rodar antes de reportar tarefa concluída
npm run lint
```

## Git

- Repositório: https://github.com/brnnkrystian/blogviagens
- Branch principal: `main`
- O histórico anterior (HTML/CSS) foi substituído — force push já realizado

## Checklist antes de concluir qualquer tarefa

1. `npm run build` passou sem erros?
2. Novos componentes interativos têm `'use client'`?
3. Novos domínios de imagem foram adicionados ao `next.config.ts`?
4. Commitar e fazer push se o usuário pedir.
