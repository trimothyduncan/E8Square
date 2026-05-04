'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WORKS = [
  { title: 'The Sicilian Fade', tag: 'Skin · Mid · Textured', notation: '1.e4 c5' },
  { title: 'Queen\'s Gambit',   tag: 'Scissor · Disconnected',  notation: '1.d4 d5' },
  { title: 'Knight\'s Cut',     tag: 'Crop · Hard part',        notation: 'Nf3' },
  { title: 'King\'s Indian',    tag: 'Long · Layered',          notation: 'Nf6 g6' },
  { title: 'Endgame Beard',     tag: 'Sculpt · Line up',        notation: 'Rxf7' },
  { title: 'Bishop Pair',       tag: 'Father + son set',        notation: 'Bb5' }
];

// Decorative tile rendered as styled SVG (no external assets)
function PortfolioTile({ idx }: { idx: number }) {
  // pseudo-random-but-stable seed
  const hue = (idx * 47) % 30;
  return (
    <svg
      viewBox="0 0 400 500"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={`g-${idx}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a6bff" stopOpacity="0.9" />
          <stop offset="100%" stopColor={`hsl(${220 + hue} 90% 50%)`} stopOpacity="0.55" />
        </linearGradient>
        <pattern id={`p-${idx}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="20" height="20" fill="rgba(255,255,255,0.05)" />
          <rect x="20" y="20" width="20" height="20" fill="rgba(255,255,255,0.05)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g-${idx})`} />
      <rect width="100%" height="100%" fill={`url(#p-${idx})`} />
      {/* Stylized profile silhouette */}
      <g fill="rgba(0,0,0,0.35)">
        <ellipse cx="200" cy="200" rx="80" ry="95" />
        <path d="M 120 290 Q 200 240 280 290 L 290 500 L 110 500 Z" />
      </g>
      {/* Cut overlay */}
      <g fill="rgba(255,255,255,0.12)">
        <path d="M 120 130 Q 200 80 280 130 L 280 180 Q 200 150 120 180 Z" />
      </g>
    </svg>
  );
}

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yMarquee = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section id="portfolio" ref={ref} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
              03 — The Book
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Recent <span className="italic text-gradient">games.</span>
            </h2>
          </div>
          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm hover:border-brand"
            data-cursor="link"
          >
            View full archive →
          </a>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              data-cursor="image"
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)]/40"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.div
                  variants={{
                    hover: { scale: 1.06 }
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full"
                >
                  <PortfolioTile idx={i} />
                </motion.div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0.85 }}
                  variants={{ hover: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-[var(--bg)]/80 p-5 backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl tracking-tight">{w.title}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)]">
                      {w.notation}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[var(--fg-muted)]">{w.tag}</p>
                </motion.div>
              </div>

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent transition group-hover:ring-brand/40" />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Algebraic notation marquee */}
      <div className="mask-fade-x relative mt-24 overflow-hidden">
        <motion.div
          style={{ x: yMarquee }}
          className="flex whitespace-nowrap font-display text-[15vw] leading-none tracking-tighter text-[var(--fg)]/5"
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="px-12">
              1.e4 — Nf3 — Bb5 — O-O — d4 — c4 — Qh5 — checkmate.
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
