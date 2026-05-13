import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { DigitalTwinViz } from '@/components/DigitalTwinViz';
import { CaseStudies } from '@/components/CaseStudies';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import Script from 'next/script';
import { servicesSchema } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <Script
        id="schema-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Hero />
      <Services />
      <DigitalTwinViz />
      <CaseStudies />
      <About />
      <Contact />
    </>
  );
}
