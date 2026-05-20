import type { Metadata } from 'next';
import { PillarPage } from '@/components/PillarPage';
import { getPillarBySlug } from '@/data/pillars';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/seo';

const pillar = getPillarBySlug('intelligence')!;

export const metadata: Metadata = {
  title: `${pillar.title} — ${pillar.subtitle} | Axion Studio`,
  description: pillar.tagline + ' ' + pillar.intro[0].slice(0, 140),
  openGraph: {
    title: `${pillar.title} · Axion Studio`,
    description: pillar.tagline,
    type: 'website',
    url: `${siteConfig.url}/intelligence`
  }
};

export default function Page() {
  const data = getPillarBySlug('intelligence');
  if (!data) notFound();
  return <PillarPage pillar={data} />;
}
