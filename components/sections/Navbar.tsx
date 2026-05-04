'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const NAV = [
  { label: 'Studio',   href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#portfolio' },
  { label: 'E8 Pass',  href: '#cta' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      {/* Pill nav */}
      <motion.div
        animate={{
          paddingTop:    scrolled ? 10 : 14,
          paddingBottom: scrolled ? 10 : 14,
        }}
        transition={{ duration: 0.3 }}
        className={`relative flex w-full max-w-5xl items-center justify-between rounded-full px-5 md:px-6 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'border border-transparent'}`}
      >
        {/* Logo + wordmark */}
        <Link href="#top" className="flex items-center gap-2.5 relative z-10" aria-label="E8 Square home">
          <div className="relative h-9 w-9 shrink-0">
            <Image
              src="/e8-blue.png"
              alt="E8 Square"
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(26,107,255,0.5)]"
              priority
            />
          </div>
          <span className="hidden sm:block font-display text-sm tracking-[0.28em] font-semibold">
            E8&nbsp;SQUARE
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="relative z-10 hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-4 py-2 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="relative z-10 flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
            style={{ boxShadow: '0 4px 20px -4px rgba(26,107,255,0.55)' }}
          >
            Get the Pass <span aria-hidden>→</span>
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg-elev)]/60 backdrop-blur"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -8, pointerEvents: open ? 'auto' : 'none' }}
        transition={{ duration: 0.22 }}
        className="absolute left-4 right-4 top-[calc(100%+4px)] rounded-3xl glass p-5"
      >
        <nav className="flex flex-col gap-1">
          {NAV.map((item, i) => (
            <motion.div
              key={item.href}
              initial={false}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : -8 }}
              transition={{ delay: open ? 0.04 * i : 0 }}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium transition hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <Link
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white"
          >
            Get the Pass →
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
