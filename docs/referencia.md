# Viagem Sem Fim — Referência do Projeto

## Visão Geral

Blog de viagens migrado de HTML/CSS estático para **Next.js 15** com **Tailwind CSS v4**, TypeScript e App Router. Arquitetura mobile-first com componentes reutilizáveis.

---

## Stack

| Tecnologia | Versão | Função |
|---|---|---|
| Next.js | ^15.1 | Framework React com SSG/SSR e App Router |
| React | ^19 | Biblioteca de UI |
| TypeScript | ^5 | Tipagem estática |
| Tailwind CSS | ^4 | Estilização utility-first |
| `@tailwindcss/postcss` | ^4 | Integração do Tailwind com PostCSS |
| `lucide-react` | ^0.468 | Ícones (tree-shaking, substitui Font Awesome) |
| `react-hook-form` | ^7.54 | Gerenciamento e validação de formulários |
| `react-hot-toast` | ^2.4 | Notificações toast |

---

## Estrutura de Arquivos

```
blogviagens-next/
├── app/
│   ├── globals.css          # Estilos globais + classes reutilizáveis
│   ├── layout.tsx           # Root layout: Header, Navbar, Footer, Toaster
│   ├── page.tsx             # Página inicial (/)
│   ├── destinos/
│   │   └── page.tsx         # /destinos
│   ├── dicas/
│   │   └── page.tsx         # /dicas
│   ├── historias/
│   │   └── page.tsx         # /historias
│   └── contato/
│       └── page.tsx         # /contato
├── components/
│   ├── Navbar.tsx           # Navegação com hamburguer (client component)
│   ├── Footer.tsx           # Rodapé
│   ├── Card.tsx             # Card genérico reutilizável
│   └── ContactForm.tsx      # Formulário de contato (client component)
├── docs/
│   └── referencia.md        # Este documento
├── public/                  # Assets estáticos
├── next.config.ts           # Configuração do Next.js (remote image patterns)
├── postcss.config.mjs       # Integração Tailwind v4
├── tsconfig.json
└── package.json
```

---

## Componentes

### `Navbar.tsx`
**Client Component** (`'use client'`)

Responsável pela navegação principal. Usa `usePathname()` para destacar o link ativo e `useState` para controlar o menu hamburguer no mobile.

```tsx
// Adicionar um novo link de navegação:
const links = [
  // ...links existentes
  { href: '/novo-link', label: 'Novo', Icon: IconName },
]
```

Props: nenhuma — os links são definidos internamente no array `links`.

---

### `Footer.tsx`
Server Component. Exibe o ano atual via `new Date().getFullYear()`. Sem props.

---

### `Card.tsx`
Server Component reutilizável para exibir conteúdo em grid nas páginas de Destinos, Dicas e Histórias.

| Prop | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | `string` | Sim | Título do card |
| `description` | `string` | Sim | Texto descritivo |
| `href` | `string` | Não | Link "Ler mais" — omitir se não houver |
| `image` | `string` | Não | URL da imagem (usa `next/image`) |
| `imageAlt` | `string` | Não | Texto alternativo da imagem |

---

### `ContactForm.tsx`
**Client Component** (`'use client'`). Gerenciado por `react-hook-form` com validação inline.

Campos validados:
- `nome` — obrigatório
- `email` — obrigatório, regex de formato
- `mensagem` — obrigatório, mínimo 10 caracteres

O envio exibe um toast de sucesso via `react-hot-toast`. Para integrar com um backend real, substitua o `setTimeout` em `onSubmit` por um `fetch` para a sua API.

---

## Páginas

### `/` — Início (`app/page.tsx`)
Hero com imagem prioritária (`priority`) e CTA para `/destinos`.

### `/destinos` (`app/destinos/page.tsx`)
Grid responsivo de cards: **1 coluna** (mobile) → **2 colunas** (sm) → **3 colunas** (lg).

Para adicionar um destino, inclua um objeto no array `destinos`:
```ts
{ id: 4, title: 'Nome do Destino', description: 'Descrição...' }
```

### `/dicas` (`app/dicas/page.tsx`)
Mesma estrutura que `/destinos`. Array `dicas` no topo do arquivo.

### `/historias` (`app/historias/page.tsx`)
Grid de **1 coluna** (mobile) → **2 colunas** (sm). Cards com `href` para "Ler mais".

### `/contato` (`app/contato/page.tsx`)
Layout de **2 colunas** no desktop (informações + formulário). Colunas empilhadas no mobile.

---

## Estilização

### Classes utilitárias globais (`app/globals.css`)

| Classe | Uso |
|---|---|
| `.btn-primary` | Botão/link azul padrão com hover, focus ring e estado disabled |
| `.input-field` | Campo de formulário com borda, focus ring e transição |

### Breakpoints (Tailwind v4 padrão)

| Prefixo | Largura mínima |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

---

## Configurações

### `next.config.ts` — Imagens externas

Para usar `next/image` com URLs externas, o domínio precisa estar em `remotePatterns`. Adicione novos domínios assim:

```ts
remotePatterns: [
  { protocol: 'https', hostname: 'seu-dominio.com' },
]
```

### `postcss.config.mjs` — Tailwind v4

Tailwind v4 não usa `tailwind.config.ts`. A configuração de tema é feita via `@theme` no CSS:

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-brand: #007bff;
}
```

---

## Comandos

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:3000)
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção (após build)
npm start

# Verificar erros de lint
npm run lint
```

---

## Acessibilidade

- Skip link "Pular para o conteúdo principal" (foco visível, `sr-only` por padrão)
- `aria-label` e `aria-expanded` no botão hamburguer
- `aria-current="page"` no link ativo da navbar
- `aria-hidden="true"` em ícones decorativos
- `role="alert"` nas mensagens de erro do formulário
- Targets de toque ≥ 44px nos links de navegação

---

## Metadados SEO

Cada página exporta `metadata` com `title` e `description`. O título usa o template definido no layout:

```ts
// app/layout.tsx
title: { template: '%s | Viagem Sem Fim', default: 'Viagem Sem Fim' }

// app/destinos/page.tsx
export const metadata: Metadata = { title: 'Destinos', description: '...' }
// Resultado: "Destinos | Viagem Sem Fim"
```
