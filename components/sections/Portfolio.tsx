'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

// ─── Real posts from @trimbyblue via Behold ───────────────────────────────────
// Images served from Behold's CDN (behold.pictures) — stable, CORS-safe URLs.
// To keep this grid auto-updating in the future, swap POSTS for a live fetch:
//   fetch(`https://feeds.behold.so/OOTPBp0hnQrdWxZ9284n`)
// ─────────────────────────────────────────────────────────────────────────────

interface Post {
  id: string;
  prunedCaption?: string;
  thumbnailUrl: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  timestamp: string;
  permalink: string;
}

const POSTS: Post[] = [
  {
    id: '18101143960777362',
    timestamp: '2026-04-15T11:35:53+0000',
    permalink: 'https://www.instagram.com/reel/DXJpcBgkWhj/',
    mediaType: 'VIDEO',
    thumbnailUrl: 'https://behold.pictures/QLWJT6xkq5dijhPPVPvVWZeOjrB2/OOTPBp0hnQrdWxZ9284n/18101143960777362/large.jpg',
    prunedCaption: "If you don't work, you don't eat young man 🎯",
  },
  {
    id: '18090693629230405',
    timestamp: '2026-04-13T18:52:45+0000',
    permalink: 'https://www.instagram.com/reel/DXFR3ztkbU7/',
    mediaType: 'VIDEO',
    thumbnailUrl: 'https://behold.pictures/QLWJT6xkq5dijhPPVPvVWZeOjrB2/OOTPBp0hnQrdWxZ9284n/18090693629230405/large.jpg',
    prunedCaption: 'Always Thank God for all the ways that he Blessed me 🙏🏾',
  },
  {
    id: '18078472883527392',
    timestamp: '2026-04-09T22:03:45+0000',
    permalink: 'https://www.instagram.com/reel/DW7UtGZjwwP/',
    mediaType: 'VIDEO',
    thumbnailUrl: 'https://behold.pictures/QLWJT6xkq5dijhPPVPvVWZeOjrB2/OOTPBp0hnQrdWxZ9284n/18078472883527392/large.jpg',
    prunedCaption: 'Put that on Sum❕',
  },
  {
    id: '18076547390530739',
    timestamp: '2026-04-08T21:08:03+0000',
    permalink: 'https://www.instagram.com/reel/DW4pN3jD7TT/',
    mediaType: 'VIDEO',
    thumbnailUrl: 'https://behold.pictures/QLWJT6xkq5dijhPPVPvVWZeOjrB2/OOTPBp0hnQrdWxZ9284n/18076547390530739/large.jpg',
    prunedCaption: 'New Stocks. Look Good, Smell Good 🧪',
  },
  {
    id: '17896750521305929',
    timestamp: '2025-10-03T00:19:31+0000',
    permalink: 'https://www.instagram.com/reel/DPU53m3DABA/',
    mediaType: 'VIDEO',
    thumbnailUrl: 'https://behold.pictures/QLWJT6xkq5dijhPPVPvVWZeOjrB2/OOTPBp0hnQrdWxZ9284n/17896750521305929/large.jpg',
    prunedCaption: "Wanna book today, Let's talk about it 🎯",
  },
  {
    id: '17936402507962067',
    timestamp: '2025-10-01T21:05:24+0000',
    permalink: 'https://www.instagram.com/reel/DPR-8lrj7FT/',
    mediaType: 'VIDEO',
    thumbnailUrl: 'https://behold.pictures/QLWJT6xkq5dijhPPVPvVWZeOjrB2/OOTPBp0hnQrdWxZ9284n/17936402507962067/large.jpg',
    prunedCaption: 'Linc 🔗 in bio',
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const xScroll = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="portfolio" ref={ref} className="relative py-32 overflow-hidden">
      <div className="orb absolute right-0 top-0 h-[50vmin] w-[50vmin] bg-[rgba(26,107,255,0.06)]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">
              03 — Recent Work
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              The <span className="italic text-gradient">work.</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/trimbyblue"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover:border-[var(--brand)] transition"
          >
            @trimbyblue →
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              className="group relative overflow-hidden rounded-3xl glass-card cursor-pointer"
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-square overflow-hidden">
                  <motion.div
                    variants={{ hover: { scale: 1.04 } }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.thumbnailUrl}
                      alt={post.prunedCaption ?? 'Instagram post by @trimbyblue'}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {post.prunedCaption && (
                  <motion.div
                    initial={{ y: 8, opacity: 0.85 }}
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-x-0 bottom-0 p-4"
                  >
                    <div className="rounded-2xl glass p-3.5">
                      <p className="line-clamp-2 text-xs leading-relaxed text-[var(--fg-muted)]">
                        {post.prunedCaption}
                      </p>
                      <div className="mt-2.5 flex items-center gap-3 text-[10px] text-[var(--fg-muted)]">
                        <Heart className="h-3 w-3 text-[var(--brand)]" />
                        <MessageCircle className="h-3 w-3 text-[var(--brand)]" />
                        <span className="ml-auto opacity-60">
                          {new Date(post.timestamp).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </a>

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition duration-300 group-hover:ring-[var(--brand)]/40" />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.instagram.com/trimbyblue"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-[var(--brand)] hover:text-[var(--brand)] transition"
          >
            Follow @trimbyblue for more →
          </a>
        </motion.div>
      </div>

      <div className="relative mt-24 overflow-hidden">
        <motion.div
          style={{ x: xScroll }}
          className="flex whitespace-nowrap font-display text-[14vw] leading-none tracking-tighter text-[var(--fg)]/[0.04]"
        >
          {[0, 1].map((k) => (
            <span key={k} className="px-10">
              TT LOYALTY — PREMIUM CUTS — DIGITAL PASS — WHERE STYLE MEETS PRECISION —
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
