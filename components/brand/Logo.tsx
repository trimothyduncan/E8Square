'use client';

import { motion } from 'framer-motion';

type Props = {
  className?: string;
  withWordmark?: boolean;
  monochrome?: boolean;
};

/**
 * E8 Square mark — crown + chessboard square + magnifier ring.
 * Re-built as scalable SVG so it stays crisp at every size and
 * can be tinted via currentColor.
 */
export default function Logo({ className, withWordmark = false, monochrome = true }: Props) {
  const fill = monochrome ? 'currentColor' : 'var(--brand)';

  return (
    <div className={className}>
      <motion.svg
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="E8 Square logo"
        role="img"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full"
      >
        {/* Crown */}
        <g fill={fill}>
          <path d="M70 70 C 90 30, 130 30, 160 60 C 190 30, 230 30, 250 70 C 250 70, 230 90, 200 80 C 200 80, 180 75, 160 80 C 140 75, 120 80, 120 80 C 90 90, 70 70, 70 70 Z" />
          {/* K cut-out badge */}
          <circle cx="160" cy="50" r="20" />
        </g>
        <g stroke="var(--bg)" strokeWidth="3" fill="none" transform="translate(160 50)">
          <path d="M -8 -10 L -8 10 M -8 0 L 8 -10 M -8 0 L 8 10" />
        </g>

        {/* Crown band with dots */}
        <g fill={fill}>
          <rect x="62" y="92" width="196" height="14" rx="3" />
          {Array.from({ length: 7 }).map((_, i) => (
            <circle key={i} cx={88 + i * 24} cy={84} r={5} />
          ))}
        </g>

        {/* E-shaped chessboard square in isometric perspective */}
        <g fill={fill}>
          <path
            d="
              M 50 130
              L 200 130
              L 220 150
              L 220 200
              L 70 200
              L 50 180
              Z
            "
          />
        </g>
        {/* E carve-outs */}
        <g fill="var(--bg)">
          <rect x="80" y="142" width="100" height="10" />
          <rect x="80" y="160" width="70"  height="10" />
          <rect x="80" y="178" width="100" height="10" />
        </g>

        {/* Magnifier ring (digital pass / search) */}
        <g fill={fill}>
          <path
            d="
              M 230 140
              C 280 140, 305 175, 280 205
              L 305 215
              L 285 215
              L 260 205
              C 220 215, 200 180, 230 140
              Z
            "
          />
        </g>
        <g fill="var(--bg)">
          <ellipse cx="252" cy="172" rx="22" ry="18" />
        </g>
      </motion.svg>

      {withWordmark && (
        <div className="mt-2 text-center font-display tracking-[0.35em] text-xs">
          E8&nbsp;SQUARE
        </div>
      )}
    </div>
  );
}
