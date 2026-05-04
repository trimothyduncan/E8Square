'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Variant = 'default' | 'link' | 'cta' | 'card' | 'image' | 'brand';

const VARIANT_LABEL: Record<Variant, string> = {
  default: '',
  link: '',
  cta: 'Move →',
  card: 'View',
  image: 'Open',
  brand: 'E8'
};

/**
 * Custom cursor with a chess-pawn aesthetic.
 * - Tiny dot follows the mouse
 * - Outer ring lags slightly (spring) and reacts to data-cursor hints
 */
export default function Cursor() {
  const [variant, setVariant] = useState<Variant>('default');
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    document.body.classList.add('has-custom-cursor');
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const closest = target?.closest?.('[data-cursor]') as HTMLElement | null;
      const v = (closest?.dataset.cursor as Variant | undefined) ?? 'default';
      setVariant(v);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
    };
  }, [x, y]);

  if (!visible) return null;

  const isExpanded = variant !== 'default';
  const label = VARIANT_LABEL[variant];

  return (
    <>
      {/* Dot */}
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[60] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-brand mix-blend-difference" />
      </motion.div>

      {/* Ring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[59] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            width: isExpanded ? 72 : 36,
            height: isExpanded ? 72 : 36,
            borderColor: isExpanded ? 'var(--brand)' : 'var(--fg)',
            backgroundColor: isExpanded ? 'var(--brand-soft)' : 'transparent'
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="grid place-items-center rounded-full border backdrop-blur-[2px]"
        >
          {label && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
