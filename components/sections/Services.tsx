'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const TIERS = [
  {
    name: 'Starter',
    price: '$45',
    cadence: 'per visit',
    summary: 'Walk-in pricing for the essentials. Clean, precise, no commitment.',
    perks: ['Signature cut', 'Hot-towel finish', 'Style memory log', 'Online booking'],
  },
  {
    name: 'Member',
    price: '$89',
    cadence: 'per month',
    summary: 'For those who come twice a month. Member rates, member perks.',
    perks: ['2 cuts / month', 'Beard sculpt', 'Priority booking', 'Style memory + photo log', '10% on products'],
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$249',
    cadence: 'per month',
    summary: 'Concierge-level access. House calls, personal barber, no limits.',
    perks: ['Unlimited cuts', 'House call (within 15 mi)', 'First-access booking', 'Dedicated barber', 'Travel shop access', '20% on products & apparel'],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yGlow = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        style={{ y: yGlow }}
        className="orb absolute -left-40 top-1/3 h-[55vmin] w-[55vmin] bg-[rgba(26,107,255,0.09)]"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
              02 — Membership
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Choose your <span className="italic text-gradient">plan.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="max-w-sm text-[var(--fg-muted)] leading-relaxed"
          >
            Three tiers to match your cadence. Pause, switch, or cancel anytime from the members dashboard.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35 } }}
              className={`relative overflow-hidden rounded-3xl p-8 transition-all ${
                t.highlighted
                  ? 'bg-[var(--brand)] text-white'
                  : 'glass-card'
              }`}
              style={t.highlighted ? { boxShadow: '0 24px 72px -16px rgba(26,107,255,0.55)' } : {}}
            >
              {t.highlighted && (
                <>
                  {/* Specular shine on the highlighted card */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%)' }} />
                  <div className="absolute right-5 top-5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
                    Most popular
                  </div>
                </>
              )}

              <div className="font-display text-2xl font-bold tracking-tight">{t.name}</div>
              <p className={`mt-2 text-sm leading-relaxed ${t.highlighted ? 'text-white/75' : 'text-[var(--fg-muted)]'}`}>
                {t.summary}
              </p>

              <div className="mt-7 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold tracking-tight">{t.price}</span>
                <span className={`text-sm ${t.highlighted ? 'text-white/70' : 'text-[var(--fg-muted)]'}`}>/ {t.cadence}</span>
              </div>

              <ul className="mt-7 space-y-3">
                {t.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.highlighted ? 'text-white' : 'text-[var(--brand)]'}`} />
                    <span className={t.highlighted ? 'text-white/90' : ''}>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                  t.highlighted
                    ? 'bg-white text-[var(--brand)] hover:bg-white/90'
                    : 'glass border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand-soft)]'
                }`}
              >
                Get {t.name} <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
