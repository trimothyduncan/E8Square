'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Wallet } from 'lucide-react';
import Image from 'next/image';

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
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] glass-card p-10 md:p-16"
        >
          {/* Inner top specular */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[2.5rem] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          {/* Brand glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem]"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(26,107,255,0.10), transparent 60%)' }} />

          <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* Left: copy + form */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]"
              >
                <Wallet className="h-3.5 w-3.5" />
                E8 Pass — Members v2
              </motion.div>

              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Secure your chair.
                <br />
                <span className="italic text-gradient">Start today.</span>
              </h2>

              <p className="mt-5 max-w-md leading-relaxed text-[var(--fg-muted)]">
                Drop your email and we&apos;ll send your digital pass, first booking link,
                and a style questionnaire to get your profile set up.
              </p>

              {!submitted ? (
                <form onSubmit={onSubmit} className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row">
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
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ boxShadow: '0 8px 32px -8px rgba(26,107,255,0.65)' }}
                  >
                    Get the pass
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 inline-flex items-center gap-3 rounded-full glass px-6 py-3.5 text-sm text-[var(--brand)]"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--brand)] text-white text-xs">✓</span>
                  Check your inbox — your pass is on the way.
                </motion.div>
              )}

              <p className="mt-4 text-xs text-[var(--fg-muted)]">No spam. Cancel any time.</p>
            </div>

            {/* Right: floating pass card */}
            <motion.div
              initial={{ opacity: 0, y: 28, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, y: -8, transition: { duration: 0.4 } }}
              className="relative mx-auto w-full max-w-sm"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-[var(--brand)] p-7 text-white"
                style={{ boxShadow: '0 32px 80px -20px rgba(26,107,255,0.6)' }}>
                {/* Specular */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 55%)' }} />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-3xl bg-white/40" />

                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">E8 · Digital Pass</div>
                    <div className="mt-2 font-display text-2xl font-bold tracking-tight">Member Tier</div>
                  </div>
                  <div className="relative h-10 w-10 opacity-90">
                    <Image src="/e8-blue.png" alt="" fill className="object-contain brightness-0 invert" aria-hidden />
                  </div>
                </div>

                <div className="mt-10 font-mono text-sm tracking-widest opacity-80">
                  •••• &nbsp;•••• &nbsp;•••• &nbsp;E8·24
                </div>

                <div className="mt-8 flex items-end justify-between text-xs">
                  <div>
                    <div className="font-mono uppercase opacity-60">Member</div>
                    <div className="mt-0.5 font-semibold">YOUR NAME</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono uppercase opacity-60">Next visit</div>
                    <div className="mt-0.5 font-semibold">TUE · 18:00</div>
                  </div>
                </div>
              </div>

              {/* Glow shadow */}
              <div aria-hidden className="absolute inset-0 -z-10 translate-y-8 scale-90 rounded-3xl bg-[var(--brand)] opacity-25 blur-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
