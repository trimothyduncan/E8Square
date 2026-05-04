'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WORKS = [
  { title: 'The Clean Drop',   tag: 'Skin fade · Mid · Textured' },
  { title: 'Disconnected Crop', tag: 'Scissor · Hard part'        },
  { title: 'Classic Taper',    tag: 'Clipper · Natural finish'    },
  { title: 'Long & Layered',   tag: 'Scissor · Layered texture'  },
  { title: 'Beard Sculpt',     tag: 'Line-up · Full sculpt'      },
  { title: 'Father & Son Set', tag: 'Duo booking · Studio'       },
];

function WorkTile({ idx }: { idx: number }) {
  const palettes = [
    ['#1a6bff', '#0a3fa8'],
    ['#2563eb', '#1e40af'],
    ['#3b82f6', '#1d4ed8'],
    ['#1d4ed8', '#1e3a8a'],
    ['#4787ff', '#1a6bff'],
    ['#60a5fa', '#2563eb'],
  ];
  const [a, b] = palettes[idx % palettes.length];

  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id={`g-${idx}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a} stopOpacity="0.92" />
          <stop offset="100%" stopColor={b} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g-${idx})`} />
      {/* Abstract silhouette */}
      <ellipse cx="200" cy="195" rx="85" ry="100" fill="rgba(0,0,0,0.28)" />
      <path d="M 115 285 Q 200 235 285 285 L 295 500 L 105 500 Z" fill="rgba(0,0,0,0.28)" />
      {/* Shine */}
      <rect x="0" y="0" width="400" height="500" fill="url(#shine)" opacity="0.12" />
      <defs>
        <linearGradient id="shine" x1="0" y1="0" x2="0.4" y2="0.4">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const xScroll = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="portfolio" ref={ref} className="relative py-32 overflow-hidden">
      <div className="orb absolute right-0 top-0 h-[50vmin] w-[50vmin] bg-[rgba(26,107,255,0.06)]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
              03 — Recent Work
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              The <span className="italic text-gradient">work.</span>
            </h2>
          </div>
          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover:border-[var(--brand)] transition"
          >
            View all →
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              className="group relative overflow-hidden rounded-3xl glass-card cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.div
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full"
                >
                  <WorkTile idx={i} />
                </motion.div>
              </div>

              {/* Info overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <motion.div
                  initial={{ y: 10, opacity: 0.9 }}
                  variants={{ hover: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl glass p-4"
                >
                  <h3 className="font-display text-lg tracking-tight">{w.title}</h3>
                  <p className="mt-0.5 text-xs text-[var(--fg-muted)]">{w.tag}</p>
                </motion.div>
              </div>

              {/* Hover ring */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition duration-300 group-hover:ring-[var(--brand)]/40" />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Scrolling wordmark */}
      <div className="relative mt-24 overflow-hidden">
        <motion.div
          style={{ x: xScroll }}
          className="flex whitespace-nowrap font-display text-[14vw] leading-none tracking-tighter text-[var(--fg)]/[0.04]"
        >
          {[0, 1].map((k) => (
            <span key={k} className="px-10">
              E8 SQUARE — PREMIUM STUDIO — DIGITAL PASS — WHERE STYLE MEETS PRECISION —
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
