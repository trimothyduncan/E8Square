'use client';

import { motion } from 'framer-motion';
import { Crown, Smartphone, ShieldCheck, History, Scissors, Calendar } from 'lucide-react';

const PILLARS = [
  {
    icon: Crown,
    title: 'Heritage Craft',
    body: 'Straight razors, hot towels, and a philosophy that treats every appointment as a ritual — not a transaction.',
  },
  {
    icon: Smartphone,
    title: 'Digital Pass',
    body: 'A membership tier-system that opens private booking windows, style history, and travel-shop access — all in your wallet.',
  },
  {
    icon: ShieldCheck,
    title: 'Precision First',
    body: 'We sweat the details — the exact guard, the exact taper, the exact line. Every cut is deliberate and repeatable.',
  },
  {
    icon: History,
    title: 'Rewarding Loyalty',
    body: 'Every visit is logged: Leaving you eligible for perks, and us with the data to make every future visit better.',
  },
  {
    icon: Scissors,
    title: 'Pro-Grade Tools',
    body: 'Professional-grade clippers, trimmers, and straight razors — sterilized between every client, calibrated weekly, and maintained to a edge that performs the way it should.',
  },
  {
    icon: Calendar,
    title: 'Priority Access',
    body: 'Pass holders unlock evening, holiday, and high-demand slots before they open to walk-ins. Your time matters.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Ambient orb */}
      <div className="orb absolute right-0 top-1/3 h-[60vmin] w-[60vmin] bg-[rgba(26,107,255,0.07)]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
            01 — The Studio
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Two crafts.{' '}
            <span className="italic text-gradient">One brand.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[var(--fg-muted)] leading-relaxed">
            E8 Square is a barber studio with the infrastructure of a Digital Software company.
            We thread heritage craft through software so every visit builds on the last.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={card}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group relative rounded-3xl glass-card p-8 transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(26,107,255,0.15)]"
              >
                {/* Specular top edge on hover */}
                <div className="absolute inset-x-0 top-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand)] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{p.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
