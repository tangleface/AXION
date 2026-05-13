import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
};

export function Logo({
  className,
  variant = 'light',
  size = 'md',
  showWordmark = true
}: LogoProps) {
  const dims = {
    sm: { mark: 28, name: 'text-sm', sub: 'text-[8px]' },
    md: { mark: 34, name: 'text-base', sub: 'text-[9px]' },
    lg: { mark: 48, name: 'text-lg', sub: 'text-[10px]' }
  }[size];

  const wordmarkColor = variant === 'dark' ? 'text-cream' : 'text-ink-900';
  const subColor = variant === 'dark' ? 'text-chrome-300/80' : 'text-ink-900/55';

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <svg
        width={dims.mark}
        height={dims.mark}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logo-teal" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#00B5C5" />
            <stop offset="55%" stopColor="#0F6F7C" />
            <stop offset="100%" stopColor="#063C46" />
          </linearGradient>
        </defs>
        {/* Top pixelated tip */}
        <g fill="url(#logo-teal)">
          <rect x="108" y="14" width="10" height="10" />
          <rect x="123" y="10" width="14" height="12" />
          <rect x="98" y="28" width="14" height="10" />
          <rect x="116" y="26" width="22" height="12" />
        </g>
        {/* Main A body */}
        <polygon points="92,44 110,44 70,170 50,170" fill="url(#logo-teal)" />
        <polygon points="118,44 136,44 178,170 158,170" fill="url(#logo-teal)" />
        {/* Crossbar */}
        <rect x="76" y="118" width="76" height="12" fill="url(#logo-teal)" />
        {/* Bottom pixelated feet */}
        <g fill="url(#logo-teal)">
          <rect x="32" y="174" width="14" height="10" />
          <rect x="50" y="174" width="20" height="10" />
          <rect x="158" y="174" width="20" height="10" />
          <rect x="180" y="174" width="14" height="10" />
        </g>
      </svg>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={cn('font-display font-bold tracking-tight', dims.name, wordmarkColor)}>
            Axion
          </span>
          <span className={cn('tracking-[0.25em] uppercase -mt-0.5', dims.sub, subColor)}>
            Studio
          </span>
        </div>
      )}
    </div>
  );
}
