'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Crown } from 'lucide-react';
import Chessboard from '@/components/ui/Chessboard';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // Wire to your backend / Resend / Mailchimp here
  }

  return (
    <section id="cta" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--bg-elev)]/40 p-10 md:p-16"
        >
          {/* Background chess accent */}
          <div className="pointer-events-none absolute -right-12 -top-16 h-[460px] w-[460px] opacity-30 md:opacity-50">
            <Chessboard className="h-full w-full" highlight="e8" />
          </div>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 20% 50%, var(--brand-soft), transparent 60%)'
            }}
          />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand"
              >
                <Crown className="h-3.5 w-3.5" />
                The pass · Members v2
              </motion.div>

              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Take the chair. <br />
                <span className="italic text-gradient">Make the move.</span>
              </h2>

              <p className="mt-5 max-w-xl text-[var(--fg-muted)]">
                Reserve your slot on the board. We&apos;ll send your digital pass, your
                first booking link, and a starter style memory questionnaire.
              </p>

              {!submitted ? (
                <form
                  onSubmit={onSubmit}
                  className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@kingside.com"
                    className="flex-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-5 py-3.5 text-sm outline-none transition focus:border-brand"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_60px_-15px_rgba(26,107,255,0.7)] transition hover:bg-brand-600"
                    data-cursor="cta"
                  >
                    Get the pass
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 inline-flex items-center gap-3 rounded-full border border-brand/40 bg-brand-soft px-6 py-3.5 text-sm"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white">✓</span>
                  Check your inbox — your move&apos;s on the way.
                </motion.div>
              )}

              <p className="mt-5 text-xs text-[var(--fg-muted)]">
                No spam. Cancel any time. We move on your tempo.
              </p>
            </div>

            {/* Floating pass card */}
            <motion.div
              initial={{ opacity: 0, y: 28, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, y: -6 }}
              className="relative mx-auto w-full max-w-sm"
              data-cursor="card"
            >
              <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-brand to-brand-700 p-7 text-white shadow-[0_40px_80px_-30px_rgba(26,107,255,0.6)]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                      E8 · Digital Pass
                    </div>
                    <div className="mt-2 font-display text-2xl tracking-tight">
                      Knight Tier
                    </div>
                  </div>
                  <Crown className="h-6 w-6 opacity-90" />
                </div>

                <div className="mt-10 font-mono text-sm">
                  ●●●●  ●●●●  ●●●●  E8 · 24
                </div>

                <div className="mt-8 flex items-end justify-between text-xs">
                  <div>
                    <div className="font-mono uppercase opacity-70">Member</div>
                    <div className="mt-0.5 font-medium">YOUR&nbsp;NAME</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono uppercase opacity-70">Slot</div>
                    <div className="mt-0.5 font-medium">TUE · 18:00</div>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    background:
                      'repeating-conic-gradient(rgba(255,255,255,0.15) 0% 25%, transparent 0% 50%) 0 / 28px 28px'
                  }}
                />
              </div>

              {/* Glow */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 translate-y-8 scale-95 rounded-3xl bg-brand opacity-30 blur-3xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
