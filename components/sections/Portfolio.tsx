'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Heart, MessageCircle, ImagePlus } from 'lucide-react';

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
// 1. Go to https://behold.so and sign up with your Instagram account (@trimbyblue)
// 2. Create a feed → copy the Feed ID (looks like: abcDEF123456)
// 3. Paste it below OR set NEXT_PUBLIC_BEHOLD_FEED_ID in your .env.local
const BEHOLD_FEED_ID =
  process.env.NEXT_PUBLIC_BEHOLD_FEED_ID ?? '';
// ─────────────────────────────────────────────────────────────────────────────

interface Post {
  id: string;
  caption?: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  timestamp: string;
  permalink: string;
}

function PostPlaceholder({ idx }: { idx: number }) {
  const gradients = [
    ['#1a6bff', '#0a3fa8'],
    ['#2563eb', '#1e40af'],
    ['#3b82f6', '#1d4ed8'],
    ['#1d4ed8', '#1e3a8a'],
    ['#4787ff', '#1a6bff'],
    ['#60a5fa', '#2563eb'],
  ];
  const [a, b] = gradients[idx % gradients.length];
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/50"
      style={{ background: `linear-gradient(135deg, ${a}55 0%, ${b}33 100%)` }}
    >
      <ImagePlus className="h-8 w-8" />
      <span className="text-xs font-mono tracking-wider">@trimbyblue</span>
    </div>
  );
}

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const xScroll = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!BEHOLD_FEED_ID) return;
    fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`)
      .then((r) => r.json())
      .then((data: Post[]) => setPosts(data.slice(0, 6)))
      .catch(() => {});
  }, []);

  const slots = Array.from({ length: 6 }, (_, i) => posts[i] ?? null);

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
          {slots.map((post, i) => (
            <motion.article
              key={post?.id ?? `placeholder-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              className="group relative overflow-hidden rounded-3xl glass-card cursor-pointer"
            >
              <a
                href={post?.permalink ?? 'https://www.instagram.com/trimbyblue'}
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
                    {post ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={
                          post.mediaType === 'VIDEO'
                            ? (post.thumbnailUrl ?? post.mediaUrl)
                            : post.mediaUrl
                        }
                        alt={post.caption ?? 'Instagram post by @trimbyblue'}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <PostPlaceholder idx={i} />
                    )}
                  </motion.div>
                </div>

                {post?.caption && (
                  <motion.div
                    initial={{ y: 8, opacity: 0.85 }}
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-x-0 bottom-0 p-4"
                  >
                    <div className="rounded-2xl glass p-3.5">
                      <p className="line-clamp-2 text-xs leading-relaxed text-[var(--fg-muted)]">
                        {post.caption}
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
