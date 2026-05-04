'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Chessboard from '@/components/ui/Chessboard';

const headline = ['The', 'Final', 'Move', 'in'];
const accent = 'Grooming.';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  // Parallax
  const yBoard   = useTransform(scrollYProgress, [0, 1], ['0%',  '40%']);
  const yHead    = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden noise"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* radial brand glow */}
        <div
          className="absolute -top-1/3 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full opacity-50"
          style={{
            background:
              'radial-gradient(closest-side, var(--brand-soft), transparent 70%)'
          }}
        />
        {/* faint grid */}
        <div
          className="absolute inset-0 chessboard opacity-50"
          style={{ maskImage: 'radial-gradient(circle at 50% 40%, black, transparent 75%)' }}
        />
      </div>

      {/* Floating chessboard accent */}
      <motion.div
        style={{ y: yBoard }}
        className="absolute right-[-6vw] top-1/2 hidden h-[60vmin] w-[60vmin] -translate-y-1/2 lg:block"
      >
        <motion.div
          animate={{ rotate: [0, 1.2, 0, -1.2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="h-full w-full"
          style={{
            transform: 'perspective(1000px) rotateX(28deg) rotateY(-18deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <Chessboard className="h-full w-full rounded-2xl shadow-[0_40px_120px_-30px_rgba(26,107,255,0.45)]" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: yHead, opacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          <span className="text-[var(--fg-muted)]">Members&nbsp;Pass&nbsp;v2 — now live</span>
        </motion.div>

        <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[8.5rem]">
          <span className="block">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: 0.55 + i * 0.08,
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gradient italic"
          >
            {accent}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          A barber studio that thinks like a SaaS. Every cut is a calculated move —
          backed by a digital pass that tracks your schedule, your style memory,
          and your priority access to the chair.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#cta"
            data-cursor="cta"
            className="group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-sm font-medium text-white shadow-[0_18px_60px_-15px_rgba(26,107,255,0.7)] transition hover:bg-brand-600"
          >
            Claim your pass
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            data-cursor="link"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/40 px-6 py-4 text-sm font-medium backdrop-blur transition hover:border-brand"
          >
            See the playbook
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-[var(--border)] pt-6"
        >
          {[
            { k: '12yr', v: 'Master craft' },
            { k: '4.9★', v: '1,200+ reviews' },
            { k: '64sq', v: 'Members board' }
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-3xl tracking-tight md:text-4xl">{s.k}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-[var(--fg-muted)]">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--fg-muted)]"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
