'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Smartphone, QrCode, Wallet, CheckCircle2, Crown } from 'lucide-react';

const STEPS = [
  {
    icon: Crown,
    step: '01',
    title: 'Book & Visit',
    body: 'Schedule your appointment on Calendly. Show up, get a precision cut. Your visit is logged automatically.',
    visual: (
      <div className="flex flex-col gap-2 rounded-2xl bg-white/10 p-4 text-xs font-mono text-white/80">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-400" /> Appointment confirmed</div>
        <div className="text-white/50">Tue, May 7 · 6:00 PM</div>
        <div className="mt-1 rounded-lg bg-white/10 p-2 text-center tracking-wide">Haircut + Beard — $60</div>
      </div>
    ),
  },
  {
    icon: QrCode,
    step: '02',
    title: 'Receive Your Pass Link',
    body: 'After check-in you\'ll get a text or email with a unique link to claim your TT Loyalty digital pass.',
    visual: (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-4">
        <div className="grid h-16 w-16 grid-cols-3 grid-rows-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={`rounded-sm ${[0,2,4,6,8].includes(i) ? 'bg-white' : 'bg-white/20'}`} />
          ))}
        </div>
        <span className="text-[10px] text-white/60 tracking-widest">SCAN TO CLAIM PASS</span>
      </div>
    ),
  },
  {
    icon: Smartphone,
    step: '03',
    title: 'Tap "Add to Wallet"',
    body: 'One tap adds your TT Loyalty pass to Apple Wallet or Google Wallet. No app download needed.',
    visual: (
      <div className="flex flex-col gap-2 rounded-2xl bg-white/10 p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 text-xs font-semibold text-white">
            <span className="text-base leading-none"></span> Add to Apple Wallet
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-white/20 px-3 py-2 text-xs font-semibold text-white">
            <span className="text-base leading-none">G</span> Google Wallet
          </div>
        </div>
        <p className="text-center text-[10px] text-white/50">Works on any iPhone or Android</p>
      </div>
    ),
  },
  {
    icon: Wallet,
    step: '04',
    title: 'Loyalty is Live',
    body: 'Your pass sits in your wallet with your visit count, tier status, and next reward. It updates automatically.',
    visual: (
      <div className="rounded-2xl bg-white/10 p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/60 uppercase tracking-widest">TT Loyalty</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase">Member</span>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-white/20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '65%' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-1.5 rounded-full bg-white"
          />
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-white/50">
          <span>Visit 4 of 6</span><span>Reward unlocks soon</span>
        </div>
        <div className="mt-3 text-center text-xs text-white/70">✓ Pass updated in Wallet</div>
      </div>
    ),
  },
];

export default function CTA() {
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Orbs */}
      <div className="orb absolute left-1/4 top-0 h-[60vmin] w-[60vmin] bg-[rgba(26,107,255,0.12)]" />
      <div className="orb absolute right-0 bottom-0 h-[40vmin] w-[40vmin] bg-[rgba(100,160,255,0.08)]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
            04 — TT Loyalty Pass
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            TT Loyalty<br />
            <span className="italic text-gradient">is Royalty.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[var(--fg-muted)] leading-relaxed">
            After your cut, a live Apple &amp; Google Wallet pass lands on your phone automatically —
            no app, no friction. Here&apos;s how it works.
          </p>
        </motion.div>

        {/* Step flow */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent lg:block" />

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-3xl bg-[var(--brand)] p-6 text-white"
                style={{ boxShadow: '0 20px 60px -16px rgba(26,107,255,0.45)' }}
              >
                {/* Specular */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)' }} />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-3xl bg-white/40" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-3xl font-bold tracking-tight text-white/20">{s.step}</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">{s.body}</p>

                  {/* Visual preview */}
                  <div className="mt-5">{s.visual}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Email capture */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 overflow-hidden rounded-[2.5rem] glass-card p-10 md:p-14"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[2.5rem] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem]"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(26,107,255,0.10), transparent 60%)' }} />

          <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                TT Loyalty Pass V1 — Coming Soon
              </div>
              <h3 className="mt-5 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                Be first on the list.<br />
                <span className="italic text-gradient">Royalty waits for no one.</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                Drop your email and you&apos;ll get early access to TT Loyalty Pass V1 —
                including your first booking link and a style questionnaire.
              </p>
            </div>

            <div className="w-full max-w-sm shrink-0">
              {!submitted ? (
                <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
                  <label htmlFor="cta-email" className="sr-only">Email address</label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 rounded-full glass px-5 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-[var(--brand)]/50 placeholder:text-[var(--fg-muted)]"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 shrink-0"
                    style={{ boxShadow: '0 8px 32px -8px rgba(26,107,255,0.65)' }}
                  >
                    Join early
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 rounded-full glass px-6 py-3.5 text-sm text-[var(--brand)]"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--brand)] text-white text-xs">✓</span>
                  You&apos;re on the list — we&apos;ll be in touch.
                </motion.div>
              )}
              <p className="mt-3 text-xs text-[var(--fg-muted)]">No spam. Cancel any time.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
