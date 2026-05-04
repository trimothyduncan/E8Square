'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/brand/Logo';

const COLS = [
  {
    title: 'Studio',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Careers', href: '#' }
    ]
  },
  {
    title: 'The Pass',
    links: [
      { label: 'Pawn', href: '#services' },
      { label: 'Knight', href: '#services' },
      { label: 'King', href: '#services' },
      { label: 'Members log-in', href: '#' }
    ]
  },
  {
    title: 'Studio Hours',
    links: [
      { label: 'Tue – Fri · 10:00 → 20:00', href: '#' },
      { label: 'Sat · 09:00 → 18:00', href: '#' },
      { label: 'Sun · Members only', href: '#' },
      { label: 'Mon · Closed', href: '#' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)]">
      {/* Giant wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none select-none px-6 pt-20 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="font-display text-[18vw] leading-[0.85] tracking-tighter">
            <span className="italic text-gradient">E8</span>
            &nbsp;
            <span className="text-[var(--fg)]/15">SQUARE.</span>
          </div>
        </div>
      </motion.div>

      <div className="relative mx-auto mt-12 max-w-7xl px-6 pb-12 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="font-display tracking-[0.32em] text-sm">E8&nbsp;SQUARE</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-[var(--fg-muted)]">
              Heritage barbering, modern membership. Square by square.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-[var(--fg-muted)]">
                <MapPin className="h-4 w-4 text-brand" />
                88 Knight&apos;s Row, Suite&nbsp;E8
              </div>
              <div className="flex items-center gap-2 text-[var(--fg-muted)]">
                <Phone className="h-4 w-4 text-brand" />
                +1 (555) 010-0e8e
              </div>
              <div className="flex items-center gap-2 text-[var(--fg-muted)]">
                <Mail className="h-4 w-4 text-brand" />
                hello@e8square.com
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] hover:border-brand hover:text-brand"
                aria-label="Instagram"
                data-cursor="link"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] hover:border-brand hover:text-brand"
                aria-label="Email"
                data-cursor="link"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--fg-muted)]">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm transition hover:text-brand"
                      data-cursor="link"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--fg-muted)] md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} E8 Square Studio. All moves reserved.</span>
          <span className="font-mono uppercase tracking-[0.3em]">
            1.e4&nbsp;·&nbsp;e5 — your move.
          </span>
        </div>
      </div>
    </footer>
  );
}
