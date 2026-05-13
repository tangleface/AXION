'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { easeLuxe } from '@/lib/motion-variants';

type Props = {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'p' | 'span';
};

export function AnimatedText({ text, className = '', delay = 0, as = 'h1' }: Props) {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) {
    const Comp = as as any;
    return <Comp className={className}>{text}</Comp>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: { y: '0%', opacity: 1, transition: { duration: 0.9, ease: easeLuxe } }
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
