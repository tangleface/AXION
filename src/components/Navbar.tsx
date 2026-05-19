'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#services', label: 'Piliers' },
  { href: '#digital-twin', label: 'Digital Twin' },
  { href: '#case-studies', label: 'Applications' },
  { href: '#about', label: 'Studio' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <div className="container-luxe">
          <nav
            className={cn(
              'flex items-center justify-between rounded-full px-5 md:px-6 py-3 transition-all duration-500',
              scrolled ? 'glass-strong shadow-luxe-light' : 'bg-transparent'
            )}
            aria-label="Navigation principale"
          >
            <a href="#" aria-label="Axion Studio — Accueil" className="flex-shrink-0">
              <Logo />
            </a>

            <ul className="hidden lg:flex items-center gap-8" role="menubar">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <a
                    role="menuitem"
                    href={link.href}
                    className="relative text-[13px] text-ink-900/70 hover:text-ink-900 transition-colors duration-300 tracking-wide group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-ink-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-luxe origin-left" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 text-cream text-[13px] font-medium tracking-wide hover:bg-ink-800 transition-all duration-500 ease-luxe"
              >
                Démarrer un projet
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-500 ease-luxe" />
              </a>
            </div>

            <button
              type="button"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-full bg-ink-900/5 border border-ink-900/10 flex items-center justify-center text-ink-900"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-cream/97 backdrop-blur-xl pt-28 px-6"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.06 }}
              className="flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-display-md font-display text-ink-900 hover:text-chrome-700 transition-colors py-2 border-b border-ink-900/5"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="mt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-luxe-primary w-full justify-center"
                >
                  Démarrer un projet
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
