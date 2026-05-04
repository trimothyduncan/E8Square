'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Share2, Mail, MapPin, Phone } from 'lucide-react';

const COLS = [
  {
    title: 'Studio',
    links: [
      { label: 'About',     href: '#about'     },
      { label: 'Services',  href: '#services'  },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Careers',   href: '#'          },
    ],
  },
  {
    title: 'E8 Pass',
    links: [
      { label: 'Starter',       href: '#services' },
      { label: 'Member',        href: '#services' },
      { label: 'Elite',         href: '#services' },
      { label: 'Members login', href: '#'         },
    ],
  },
  {
    title: 'Hours',
    links: [
      { label: 'Tue – Fri · 10:00 – 20:00', href: '#' },
      { label: 'Sat · 09:00 – 18:00',       href: '#' },
      { label: 'Sun · Members only',         href: '#' },
      { label: 'Mon · Closed',               href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)]">
      {/* Giant wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="pointer-events-none select-none overflow-hidden px-6 pt-20 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="font-display text-[18vw] leading-[0.85] tracking-tighter">
            <span className="italic text-gradient">E8</span>
            &nbsp;
            <span className="text-[var(--fg)]/[0.07]">SQUARE.</span>
          </div>
        </div>
      </motion.div>

      <div className="relative mx-auto mt-10 max-w-7xl px-6 pb-12 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/e8-blue.png"
                  alt="E8 Square"
                  fill
                  className="object-contain"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(26,107,255,0.4))' }}
                />
              </div>
              <span className="font-display text-sm font-semibold tracking-[0.28em]">E8 SQUARE</span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--fg-muted)]">
              Premium grooming studio backed by a SaaS-grade membership platform.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-[var(--fg-muted)]">
                <MapPin className="h-4 w-4 shrink-0 text-[var(--brand)]" />
                88 Studio Row, Suite E8
              </div>
              <div className="flex items-center gap-2 text-[var(--fg-muted)]">
                <Phone className="h-4 w-4 shrink-0 text-[var(--brand)]" />
                +1 (555) 010-0E8E
              </div>
              <div className="flex items-center gap-2 text-[var(--fg-muted)]">
                <Mail className="h-4 w-4 shrink-0 text-[var(--brand)]" />
                hello@e8square.shop
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {[
                { icon: Share2, label: 'Instagram' },
                { icon: Mail,      label: 'Email'     },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full glass transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--fg-muted)]">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm transition hover:text-[var(--brand)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--fg-muted)] md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} E8 Square. All rights reserved.</span>
          <span className="uppercase tracking-[0.2em]">Where style meets precision.</span>
        </div>
      </div>
    </footer>
  );
}
