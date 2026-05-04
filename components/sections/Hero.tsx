'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const words = ['Premium', 'Grooming', '&', 'Digital'];
const accent = 'Membership.';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const yOrb1    = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const yOrb2    = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section ref={ref} id="top" className="relative isolate min-h-[100svh] overflow-hidden noise">

      {/* Ambient orbs */}
      <motion.div style={{ y: yOrb1 }} className="orb absolute -top-40 left-1/3 h-[70vmin] w-[70vmin] bg-[rgba(26,107,255,0.18)] opacity-70" />
      <motion.div style={{ y: yOrb2 }} className="orb absolute top-1/2 -right-20 h-[50vmin] w-[50vmin] bg-[rgba(100,160,255,0.12)]" />
      <div className="orb absolute -bottom-20 left-0 h-[40vmin] w-[40vmin] bg-[rgba(26,107,255,0.08)]" />

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--fg) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black, transparent)',
        }}
      />

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 md:px-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)] animate-pulse" />
          <span className="text-[var(--fg-muted)]">TT Loyalty Pass V1 — Coming Soon</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-tight">
          <span className="block overflow-hidden">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ delay: 0.45 + i * 0.07, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.2em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gradient italic"
          >
            {accent}
          </motion.span>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.65 }}
          className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl"
        >
          Private barber studio in the heart of the city.
          As well as a Tech company crafting the future of membership and loyalty programs for local businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ boxShadow: '0 12px 48px -12px rgba(26,107,255,0.65)' }}
          >
            Claim your pass
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >→</motion.span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-4 text-sm font-medium transition hover:border-[var(--brand)]"
          >
            View services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 grid max-w-lg grid-cols-3 gap-4"
        >
          {[
            { k: '12+', v: 'Years mastery' },
            { k: '4.9', v: 'Thousands of reviews' },
            { k: '1K+', v: 'Active members' },
          ].map((s) => (
            <div key={s.k} className="glass-card rounded-2xl p-4">
              <div className="font-display text-2xl font-bold tracking-tight md:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs text-[var(--fg-muted)]">{s.v}</div>
            </div>
          ))}
        </motion.div>

        {/* Floating logo accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-28 right-6 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-[180px] w-[180px]"
            style={{ filter: 'drop-shadow(0 0 40px rgba(26,107,255,0.45))' }}
          >
            <Image src="/e8-blue.png" alt="" fill className="object-contain" aria-hidden />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--fg-muted)]"
      >
        <span>Scroll</span>
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
