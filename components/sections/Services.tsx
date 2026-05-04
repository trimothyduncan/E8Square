'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const SERVICES = [
  {
    tier: 'Pawn',
    notation: '♙',
    price: '$45',
    cadence: 'per visit',
    summary: 'Clean, calculated. Walk-in pricing for the foundational moves.',
    perks: ['Signature cut', 'Hot-towel finish', 'Style memory log', 'Online booking']
  },
  {
    tier: 'Knight',
    notation: '♘',
    price: '$89',
    cadence: 'per month',
    summary: 'For the player who moves twice a month. Studio cadence, member rates.',
    perks: ['2 cuts / month', 'Beard sculpt', 'Priority squares', 'Style memory + photo log', '10% on shop products'],
    highlighted: true
  },
  {
    tier: 'King',
    notation: '♔',
    price: '$249',
    cadence: 'per month',
    summary: 'Concierge-level. House call, travel shop, and the full board.',
    perks: ['Unlimited cuts', 'House call (within 15mi)', 'Tournament-week slots', 'Personal barber assignment', 'Travel shop on tour', '20% on shop + apparel']
  }
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yLeft  = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="services" ref={ref} className="relative py-32">
      <motion.div
        style={{ y: yLeft }}
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full opacity-40"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{ background: 'radial-gradient(circle, var(--brand-soft) 0%, transparent 70%)' }}
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
              02 — The Pass
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Pick your <span className="italic text-gradient">opening.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-[var(--fg-muted)]"
          >
            Three tiers, mapped to chess pieces. Pause, switch, or upgrade from the
            members dashboard at any time. No long-game contracts.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.tier}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              data-cursor="card"
              className={`group relative overflow-hidden rounded-3xl border p-8 transition-all ${
                s.highlighted
                  ? 'border-brand bg-gradient-to-b from-brand-soft to-transparent'
                  : 'border-[var(--border)] bg-[var(--bg-elev)]/40 backdrop-blur'
              }`}
            >
              {s.highlighted && (
                <div className="absolute right-6 top-6 rounded-full bg-brand px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white">
                  Most picked
                </div>
              )}

              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl">{s.notation}</span>
                <span className="font-display text-2xl tracking-tight">{s.tier}</span>
              </div>

              <p className="mt-3 text-sm text-[var(--fg-muted)]">{s.summary}</p>

              <div className="mt-8 flex items-baseline gap-1">
                <span className="font-display text-5xl tracking-tight">{s.price}</span>
                <span className="text-sm text-[var(--fg-muted)]">/ {s.cadence}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {s.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition ${
                  s.highlighted
                    ? 'bg-brand text-white hover:bg-brand-600'
                    : 'border border-[var(--border)] hover:border-brand'
                }`}
                data-cursor="cta"
              >
                Take the {s.tier.toLowerCase()}
                <span aria-hidden>→</span>
              </a>

              {/* Decorative chess square overlay */}
              <div
                className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 opacity-10 transition-opacity group-hover:opacity-20"
                style={{
                  background:
                    'repeating-conic-gradient(var(--fg) 0% 25%, transparent 0% 50%) 0 / 32px 32px'
                }}
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
