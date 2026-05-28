# PJJ Imperatriz

Hub digital premium do **Projeto Juventude para Jesus (PJJ)** da **Comunidade Católica Shalom** em **Imperatriz — MA**.

Plataforma jovem, cinematográfica e escalável — não é um Linktree. É identidade digital, central de eventos e base para expansão do ecossistema PJJ.

---

## Visão

| Objetivo | Descrição |
|----------|-----------|
| Hub da juventude | Tudo em um só lugar: links, agenda, galeria, sobre |
| Evangelização moderna | Linguagem visual de movimento cultural, não site institucional antigo |
| Custo zero | Vercel + GitHub, sem backend obrigatório |
| Edição simples | Conteúdo em arquivos TypeScript/JSON — commit e deploy automático |

---

## Stack

- **Next.js 15+** (App Router)
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4**
- **shadcn/ui** (padrão CVA + Radix)
- **Framer Motion** — motion design
- **Lucide React** — ícones
- **next-themes** — tema escuro premium
- **Zod** + **React Hook Form** — prontos para formulários futuros
- **ESLint** + **Prettier** + **Husky** + **lint-staged** + **Commitlint**

---

## Estrutura do projeto

```
/app                 # Rotas, layout, SEO (sitemap, robots, OG)
/components
  /ui                # Design system (Button, Card, Dialog…)
  /layout            # Header, etc.
  /motion            # Reveal, particles, stagger
  /shared            # Cards reutilizáveis
/features            # Módulos por feature (gallery, home)
/sections            # Seções da landing page
/content             # Markdown opcional
/data                # Conteúdo editável (links, eventos, galeria)
/config              # Configuração global do site
/lib                 # Utils, fonts, motion, SEO
/hooks
/types
/styles              # Design tokens + globals.css
/providers
/public
  /images
  /videos
```

**Aliases:** `@/*` aponta para a raiz do projeto.

---

## Pré-requisitos

- [Node.js 20+](https://nodejs.org/)
- npm 10+
- Conta [GitHub](https://github.com) e [Vercel](https://vercel.com) (gratuitas)

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/pjj-imperatriz.git
cd pjj-imperatriz

# Instale dependências
npm install

# Variáveis de ambiente
cp .env.example .env.local
# Edite NEXT_PUBLIC_SITE_URL com a URL final

# Desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento (Turbopack) |
| `npm run build` | Build de produção |
| `npm run start` | Servir build local |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript sem emit |
| `npm run format` | Prettier em todo o projeto |

---

## Edição de conteúdo (sem painel admin)

Toda a equipe pode editar pelo GitHub (ou localmente + commit).

### Adicionar ou alterar um link rápido

Edite `data/links.ts`:

```ts
{
  id: "novo-link",
  title: "Título do card",
  description: "Descrição curta.",
  href: "https://...",
  icon: "flame", // ver lib/icons.ts
  featured: true,
  external: true,
},
```

Ícones disponíveis: `flame`, `tent`, `music-2`, `book-open`, `heart-handshake`, `message-circle` (e redes em `socials`).

### Adicionar um evento

Edite `data/events.ts`:

```ts
{
  id: "meu-evento",
  title: "Nome do evento",
  description: "Descrição.",
  date: "2026-06-15T19:00:00-03:00", // ISO com fuso
  location: "Local — Imperatriz/MA",
  href: "https://wa.me/...",
  banner: "/images/evento.jpg", // ou URL
  status: "upcoming", // upcoming | live | past | registration
  badge: "Destaque",
  showCountdown: true,
},
```

### Galeria

Edite `data/gallery.ts` e coloque imagens em `public/images/`.

### Redes sociais

Edite `data/socials.ts` — URLs do Instagram, YouTube, WhatsApp, etc.

### Textos do Hero e Sobre

Edite `data/config.ts` (`heroContent`, `aboutContent`).

### Configuração global (SEO, menu)

Edite `config/site.ts`.

---

## Imagens e vídeo do Hero

| Arquivo | Uso |
|---------|-----|
| `public/videos/hero.mp4` | Vídeo de fundo do Hero (recomendado: curto, leve, sem áudio) |
| `public/images/*` | Banners, galeria, OG customizado |

Se o vídeo não existir ou falhar, o site usa automaticamente a imagem de fallback configurada em `data/config.ts`.

**Dica:** Comprima vídeos (ex.: HandBrake) e imagens (WebP/AVIF) para Core Web Vitals altos.

---

## Deploy na Vercel (gratuito)

1. Faça push do projeto para um repositório GitHub.
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. Framework: **Next.js** (detectado automaticamente).
4. Variável de ambiente: `NEXT_PUBLIC_SITE_URL` = URL do deploy (ex. `https://pjj-imperatriz.vercel.app`).
5. Deploy.

Cada `git push` na branch principal gera um novo deploy automaticamente.

Região sugerida no `vercel.json`: `gru1` (São Paulo).

---

## Fluxo de trabalho da equipe

1. Editar arquivo em `/data` ou `/config`
2. `git add` → `git commit` → `git push`
3. Vercel publica em ~1–2 min

Commits seguem [Conventional Commits](https://www.conventionalcommits.org/) (enforced pelo Commitlint).

---

## Design system

Tokens em `styles/globals.css` (`@theme`):

- Cores: fundo profundo, superfícies, azul primário, glow
- Tipografia: Geist, Inter, Space Grotesk, Plus Jakarta Sans
- Utilitários: `.glass`, `.text-gradient`, `.glow-border`, `.section-padding`

Componentes base em `components/ui/`.

---

## SEO e performance

- Metadata API + Open Graph + Twitter cards
- `app/sitemap.ts` e `app/robots.ts`
- `app/opengraph-image.tsx` — imagem OG dinâmica
- JSON-LD (Organization) no layout
- `next/image` + formatos AVIF/WebP
- Lazy loading na galeria
- `prefers-reduced-motion` respeitado

---

## Acessibilidade

- HTML semântico e landmarks
- Skip link “Pular para o conteúdo”
- `aria-label` em controles e modais
- Foco visível (`:focus-visible`)
- Contraste em tema escuro premium

---

## Roadmap (arquitetura preparada)

- [ ] Blog (`/content` + MDX)
- [ ] CMS headless (opcional, free tier)
- [ ] Autenticação / dashboard admin
- [ ] Formulário de inscrição (Zod + RHF já na stack)
- [ ] Analytics (Vercel Analytics — free)
- [ ] PWA (`manifest.json`)
- [ ] Multi-page (pastorais, equipes)

---

## Boas práticas

- Não commitar `.env.local` nem segredos.
- Atualizar URLs reais em `data/socials.ts` e links do WhatsApp.
- Testar localmente com `npm run build` antes de eventos grandes.
- Imagens locais em `public/images/` para não depender de URLs externas em produção.

---

## Licença e créditos

Projeto desenvolvido para o **PJJ Imperatriz — Comunidade Católica Shalom**.

> *"A esperança da Igreja reside na juventude."* — São Paulo VI

---

**Juventude viva. Encontro real. Cristo no centro. Shalom.**
