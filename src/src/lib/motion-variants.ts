import type { Variants } from 'framer-motion';

/**
 * Cubic-bezier easing used across the site.
 * Strict tuple type for proper Framer Motion typing.
 */
export const easeLuxe: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeLuxe }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeLuxe }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeLuxe }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeLuxe }
  }
};

export const cardHover = {
  rest: { y: 0, transition: { duration: 0.4, ease: easeLuxe } },
  hover: { y: -6, transition: { duration: 0.4, ease: easeLuxe } }
};

/**
 * Shared viewport options for `whileInView`.
 * Using `amount: 0.15` (15 % de la section visible) au lieu de margin
 * — plus fiable que `margin: '-80px'` sur les sections déjà en vue
 * au chargement initial (qui pouvaient ne jamais déclencher l'animation).
 */
export const inViewOnce = {
  once: true,
  amount: 0.15 as const
};
