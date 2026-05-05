'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check, Clock, Scissors, Star } from 'lucide-react';

const SERVICES = [
  {
    category: 'Cuts',
    icon: Scissors,
    items: [
      { name: 'Haircut',              duration: '60 min', price: '$150 TTD' },
      { name: 'Taper Fade',           duration: '45 min', price: '$100 TTD' },
      { name: 'Beard & Bald Head',    duration: '45 min', price: '$100 TTD' },
      { name: 'Line Up / Edge Up',    duration: '30 min', price: '$70 TTD' },
      
    ],
  },
  {
    category: 'Packages',
    icon: Star,
    items: [
      { name: 'Facial',   duration: '60 min', price: '$100 TTD' },
      { name: 'Hot Towel Shave',        duration: '30 mins', price: '$60 TTD' },
      { name: 'Hot Towel(ONLY)',      duration: '20 min', price: '$40 TTD' },
      { name: 'Shampoo',      duration: '45 min', price: '$60 TTD' },
    ],
  },
];

const TIERS = [
  {
    name: 'Starter',
    price: '$180 TTD',
    cadence: 'per visit',
    summary: 'Walk-in pricing for the essentials. Clean, precise, no commitment.',
    perks: [
      'Signature haircut',
      'Hot-towel finish',
      'Style memory log',
      'Online booking via Calendly',
    ],
  },
  {
    name: 'TT Loyalty',
    price: '$300 TTD',
    cadence: 'per month',
    summary: 'Your pass, your perks. Two cuts a month, priority slots, and wallet access.',
    perks: [
      '2 cuts / month',
      'Hot-towel finish',
      'Beard sculpt included',
      'Priority booking',
      'Style memory + photo log',
      'Digital wallet pass',
      '10% off retail products',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$450 TTD',
    cadence: 'per month',
    summary: 'Concierge-level access. House calls, personal barber, no limits.',
    perks: [
      '2 Cuts / month',
      '1 Facial with hot-towel finish',
      'First-access booking',
      'Sunday & holiday availability',
      'Membership card + digital wallet pass',
      '20% off products & apparel',
    ],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yGlow = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      <motion.div
        style={{ y: yGlow }}
        className="orb absolute -left-40 top-1/3 h-[55vmin] w-[55vmin] bg-[rgba(26,107,255,0.09)]"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
              02 — Services & Membership
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Book your <span className="italic text-gradient">session.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="max-w-sm text-[var(--fg-muted)] leading-relaxed"
          >
            Book online through Calendly. TT Loyalty Royalty members get priority slots and wallet perks.
          </motion.p>
        </div>

        {/* A la carte services */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.map((group, gi) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card rounded-3xl p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl tracking-tight">{group.category}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between border-b border-[var(--border)] pb-3 last:border-0 last:pb-0">
                      <div>
                        <span className="text-sm font-medium">{item.name}</span>
                        <div className="mt-0.5 flex items-center gap-1 text-xs text-[var(--fg-muted)]">
                          <Clock className="h-3 w-3" />
                          {item.duration}
                        </div>
                      </div>
                      <span className="font-display text-lg font-bold text-[var(--brand)]">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/trimbyblue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full glass border-[var(--brand)] text-[var(--brand)] px-6 py-3 text-sm font-semibold transition hover:bg-[var(--brand-soft)]"
                >
                  Book on Calendly →
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Membership divider */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-20 flex items-center gap-6"
        >
          <div className="h-px flex-1 bg-[var(--border)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--fg-muted)]">Membership Plans</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
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
