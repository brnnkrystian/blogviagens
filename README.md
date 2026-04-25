# Viagem Sem Fim

Blog de viagens com landing page de venda de passagens, construído com **Next.js 15**, **Tailwind CSS v4** e **TypeScript**.

## Tecnologias

- [Next.js 15](https://nextjs.org/) — App Router, SSG/SSR
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — ícones
- [React Hook Form](https://react-hook-form.com/) — formulário de contato
- [React Hot Toast](https://react-hot-toast.com/) — notificações

## Funcionalidades

- **Landing page** persuasiva com carrossel de cidades, buscador de passagens, promoções, benefícios e depoimentos
- **Carrossel** com 5 destinos internacionais, auto-play e navegação por setas/dots
- **Botão flutuante do WhatsApp** com mensagem pré-preenchida
- **Formulário de contato** com validação inline
- **Newsletter** no footer com confirmação visual
- **SEO** — metadata com template de título em todas as páginas
- **Acessibilidade** — skip link, aria labels, focus rings, targets de toque ≥ 44px

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Landing page de vendas |
| `/destinos` | Grid de destinos |
| `/dicas` | Dicas de viagem |
| `/historias` | Histórias de viajantes |
| `/contato` | Formulário de contato |

## Como rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
# Acesse http://localhost:3000

# Build de produção
npm run build

# Iniciar em produção
npm start
```

## Configurações

**Número do WhatsApp** — edite `components/WhatsAppButton.tsx`:
```ts
const PHONE = '5511999999999' // DDI + DDD + número
const MESSAGE = 'Olá! Tenho interesse em comprar uma passagem.'
```

**Imagens externas** — domínios permitidos em `next.config.ts`:
```ts
remotePatterns: [
  { protocol: 'https', hostname: 'images.unsplash.com' },
]
```
