'use client';

import { motion } from 'framer-motion';
import { Crown, Scissors, Calendar, ShieldCheck, Smartphone, History } from 'lucide-react';

const PILLARS = [
  {
    icon: Crown,
    title: 'Heritage Craft',
    body:
      'Straight razors, hot towels, and a shop philosophy that treats every chair like a board reset.',
    notation: 'Nf3'
  },
  {
    icon: Smartphone,
    title: 'Digital Pass',
    body:
      'A membership tier-system that opens private booking windows, style history, and travel-shop access.',
    notation: 'O-O'
  },
  {
    icon: ShieldCheck,
    title: 'Strategy First',
    body:
      'We plan growth like a chess opening. Your fade is a position — your appointment cadence is the game.',
    notation: 'd4'
  },
  {
    icon: History,
    title: 'Style Memory',
    body:
      'Every visit is logged: clipper guard, neck taper, beard line. Your next barber picks up exactly where the last one left.',
    notation: 'Re1'
  },
  {
    icon: Scissors,
    title: 'Tour-Grade Tools',
    body:
      'Andis, Babyliss, Dovo. Sterilized between every pass. Calibrated weekly. Sharp the way it should be.',
    notation: 'Bxe5'
  },
  {
    icon: Calendar,
    title: 'Priority Squares',
    body:
      'Pass holders unlock evening, holiday, and tournament-week slots. The board never closes for the king.',
    notation: 'Qh5'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
            01 — The Philosophy
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Two crafts. <span className="italic text-gradient">One board.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[var(--fg-muted)]">
            E8 Square is a barber studio with the ops layer of a SaaS company.
            We thread tradition through software so the chair you sit in tomorrow
            knows everything the chair you sat in last month learned.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } }
          }}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3"
        >
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -4 }}
                data-cursor="card"
                className="group relative bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-elev)]"
              >
                <div className="absolute right-6 top-6 font-mono text-xs uppercase tracking-widest text-[var(--fg-muted)] opacity-60">
                  {String(i + 1).padStart(2, '0')} · {p.notation}
                </div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-transform group-hover:rotate-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{p.body}</p>

                {/* Hover sweep */}
                <motion.div
                  initial={false}
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
