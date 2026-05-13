'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion-variants';
import { cn } from '@/lib/utils';

type Props = {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  variant?: 'light' | 'dark';
};

export function SectionHeading({ tag, title, subtitle, align = 'left', className, variant = 'light' }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : '',
        className
      )}
    >
      <div className={cn('section-tag mb-6', align === 'center' && 'justify-center', variant === 'dark' && 'text-chrome-300')}>
        <span>{tag}</span>
      </div>
      <h2 className={cn(
        'text-display-lg font-display tracking-tight text-balance',
        variant === 'dark' ? 'text-cream' : 'text-ink-900'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-6 text-lg md:text-xl leading-relaxed text-balance',
          variant === 'dark' ? 'text-cream/70' : 'text-ink-900/60'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
