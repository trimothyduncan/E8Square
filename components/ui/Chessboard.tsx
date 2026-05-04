'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

type Props = {
  size?: number;     // squares per side
  className?: string;
  highlight?: string; // e.g. "e8" — chess notation
};

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

/**
 * Animated chessboard backdrop. Squares stagger in like a tide.
 * Used as a hero accent.
 */
export default function Chessboard({ size = 8, className, highlight = 'e8' }: Props) {
  const squares = useMemo(() => {
    const cells: { file: string; rank: string; dark: boolean; isHighlight: boolean }[] = [];
    for (let r = 0; r < size; r++) {
      for (let f = 0; f < size; f++) {
        const file = FILES[f];
        const rank = RANKS[r];
        cells.push({
          file,
          rank,
          dark: (r + f) % 2 === 1,
          isHighlight: `${file}${rank}` === highlight
        });
      }
    }
    return cells;
  }, [size, highlight]);

  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
        aspectRatio: '1 / 1'
      }}
    >
      {squares.map((sq, i) => (
        <motion.div
          key={`${sq.file}${sq.rank}`}
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.005 * i,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative"
          style={{
            background: sq.isHighlight
              ? 'var(--brand)'
              : sq.dark
              ? 'color-mix(in oklab, var(--fg) 8%, transparent)'
              : 'transparent',
            outline: '1px solid var(--border)'
          }}
        >
          {sq.isHighlight && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute inset-0 grid place-items-center font-mono text-xs text-white/90"
            >
              e8
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
