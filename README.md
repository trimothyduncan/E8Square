# E8 Square

> Where the barber's chair meets the digital pass. A chess-inspired studio site
> built as a production-quality Next.js application.

A modern, award-tier marketing site for **E8 Square** — a barber studio that
runs like a SaaS company. Heritage cuts, software-grade ops, membership tiers
mapped to chess pieces.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**, strict mode
- **Tailwind CSS** with a custom brand theme (`#1a6bff` + ivory/onyx neutrals)
- **Framer Motion** for entrance, scroll, and micro-interaction animations
- **Lucide** icons
- Premium font pairing — **Fraunces** (display serif), **Inter** (sans),
  **JetBrains Mono** (chess notation accents) — all via `next/font`

## What's inside

```
.
├── app/
│   ├── layout.tsx        # Root layout, fonts, theme provider, custom cursor
│   ├── page.tsx          # Home page composition
│   ├── globals.css       # Theme tokens, glass, chessboard, noise utilities
│   └── icon.svg          # Brand favicon
├── components/
│   ├── brand/Logo.tsx    # E8 Square mark (inline SVG, theme-aware)
│   ├── theme/ThemeProvider.tsx
│   ├── sections/
│   │   ├── Navbar.tsx    # Sticky, scroll-aware, glass on scroll
│   │   ├── Hero.tsx      # Parallax chessboard + reveal headline
│   │   ├── About.tsx     # Six pillars / interactive grid
│   │   ├── Services.tsx  # Three-tier digital pass (Pawn/Knight/King)
│   │   ├── Portfolio.tsx # 3x2 gallery with hover card lift
│   │   ├── CTA.tsx       # Email capture + animated pass card
│   │   └── Footer.tsx    # Giant wordmark + studio info
│   └── ui/
│       ├── Chessboard.tsx  # Animated 8x8 board, e8 highlight
│       ├── Cursor.tsx      # Custom cursor with variants
│       └── ThemeToggle.tsx
├── lib/cn.ts             # clsx + tailwind-merge helper
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## Run it locally

```bash
# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev

# 3) Open http://localhost:3000
```

### VS Code

- Open the `Website/` folder.
- Recommended extensions: **ESLint**, **Tailwind CSS IntelliSense**,
  **Prettier**.
- The integrated terminal will pick up `npm run dev` from the project root.

## Brand system

Colors and typography live in two places:

- `tailwind.config.ts` — `colors.brand.*`, `ivory`, `onyx`, `graphite`, `slate`
- `app/globals.css` — CSS variables (`--bg`, `--fg`, `--brand`, ...) for both
  light and dark themes. Toggle via the sun/moon button in the navbar.

To re-skin to a different brand color, change `#1a6bff` in `tailwind.config.ts`
and `--brand` in `globals.css`.

## Animations & interaction

- **Scroll parallax** in the hero (chessboard accent + headline)
- **Reveal-on-scroll** sections via `whileInView` with a custom easing curve
- **Stagger children** in About, Services, Portfolio
- **Custom cursor** — read by the `data-cursor="link|cta|card|image|brand"`
  attribute on interactive elements
- **Reduced-motion safe** — animations short-circuit when the user has
  `prefers-reduced-motion: reduce`

## Deploy to GitHub & Vercel

```bash
git init
git add .
git commit -m "feat: initial E8 Square site"

# Replace <user>/<repo>
git remote add origin git@github.com:<user>/<repo>.git
git branch -M main
git push -u origin main
```

Then connect the repo at <https://vercel.com/new> — no extra config required.

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<section>`)
- `aria-label`s on icon-only buttons
- Visible focus rings inherit from the browser default — overridden cursor
  hides only on fine-pointer devices
- Respects `prefers-reduced-motion`

## License

© E8 Square Studio. All moves reserved.
