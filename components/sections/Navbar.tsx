'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/brand/Logo';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/cn';

const NAV = [
  { label: 'The Studio', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'The Pass',   href: '#cta' }
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        animate={{
          paddingTop: scrolled ? 12 : 22,
          paddingBottom: scrolled ? 12 : 22
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 transition-all',
          scrolled && 'mt-3'
        )}
      >
        <motion.div
          animate={{
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(0px)',
            background: scrolled ? 'color-mix(in oklab, var(--bg-elev) 70%, transparent)' : 'transparent',
            borderColor: scrolled ? 'var(--border)' : 'transparent'
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 mx-3 rounded-full border md:mx-6"
          style={{ borderRadius: 999 }}
        />

        <Link
          href="#top"
          className="relative z-10 flex items-center gap-3"
          data-cursor="brand"
          aria-label="E8 Square home"
        >
          <Logo className="h-9 w-9" />
          <span className="hidden md:inline-block font-display tracking-[0.32em] text-sm">
            E8&nbsp;SQUARE
          </span>
        </Link>

        <nav className="relative z-10 hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-4 py-2 text-sm text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
              data-cursor="link"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(26,107,255,0.6)] transition hover:bg-brand-600"
            data-cursor="cta"
          >
            Book the chair
            <span aria-hidden>→</span>
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/60"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : -8,
          pointerEvents: open ? 'auto' : 'none'
        }}
        transition={{ duration: 0.25 }}
        className="md:hidden mx-4 mt-2 rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)]/85 backdrop-blur-xl p-4"
      >
        <nav className="flex flex-col">
          {NAV.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: open ? 1 : 0,
                x: open ? 0 : -10
              }}
              transition={{ delay: open ? 0.05 * i : 0 }}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-lg font-display"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <Link
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white"
          >
            Book the chair →
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
