'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp } from '@/lib/motion-variants';
import { siteConfig } from '@/lib/seo';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    sector: 'industriel',
    message: ''
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus('success');
      setForm({ name: '', email: '', company: '', sector: 'industriel', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden bg-cream-100">
      {/* Premium glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[60vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 179, 166, 0.3), transparent 60%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="container-luxe relative">
        <SectionHeading
          align="center"
          tag="Contact"
          title={
            <>
              Parlons de votre <span className="text-chrome-shimmer">transformation.</span>
            </>
          }
          subtitle="Premier échange offert (45 minutes, sans engagement). Diagnostic Industrie 4.0, démo Digital Twin, étude de votre cas spécifique."
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left — coordonnées */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-ink-900/8 bg-cream hover:bg-cream-200 hover:border-ink-900/20 transition-all duration-500 ease-luxe"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-chrome-200 to-cream-200 border border-chrome-300/40 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4.5 h-4.5 text-ink-900" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-ink-900/45 mb-1.5">Email</div>
                  <div className="text-base font-medium text-ink-900 truncate group-hover:text-ink-700 transition-colors duration-300">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-ink-900/8 bg-cream hover:bg-cream-200 hover:border-ink-900/20 transition-all duration-500 ease-luxe"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-chrome-200 to-cream-200 border border-chrome-300/40 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4.5 h-4.5 text-ink-900" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-ink-900/45 mb-1.5">WhatsApp Business</div>
                  <div className="text-base font-medium text-ink-900 group-hover:text-ink-700 transition-colors duration-300">
                    {siteConfig.contact.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-ink-900/8 bg-cream">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-chrome-200 to-cream-200 border border-chrome-300/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-ink-900" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-ink-900/45 mb-1.5">Localisation</div>
                  <div className="text-base font-medium text-ink-900">
                    {siteConfig.contact.location}
                  </div>
                  <div className="text-xs text-ink-900/45 mt-1">Intervention sur tout site industriel MENA</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-ink-900/15 bg-gradient-to-br from-ink-900 to-ink-800 text-cream">
              <div className="text-[10px] tracking-[0.25em] uppercase text-chrome-300 mb-3">Notre engagement</div>
              <p className="text-sm text-cream/85 leading-relaxed">
                Tout premier échange est <strong className="text-cream">gratuit</strong> et <strong className="text-cream">sans engagement</strong>.
                Si nous décidons de travailler ensemble, nous démarrons par un audit forfaitaire dont vous gardez le livrable même si vous ne poursuivez pas avec nous.
              </p>
            </div>
          </motion.aside>

          {/* Right — formulaire */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="bg-cream rounded-2xl p-8 md:p-10 space-y-6 border border-ink-900/8 shadow-luxe-light"
              aria-label="Formulaire de contact"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  id="name"
                  label="Nom complet"
                  type="text"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Karim Belkacem"
                />
                <Field
                  id="email"
                  label="Email professionnel"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="karim@entreprise.dz"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  id="company"
                  label="Entreprise"
                  type="text"
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                  placeholder="Nom de votre société"
                />
                <div className="space-y-2">
                  <label htmlFor="sector" className="block text-[11px] tracking-[0.2em] uppercase text-ink-900/55">
                    Secteur
                  </label>
                  <select
                    id="sector"
                    value={form.sector}
                    onChange={(e) => setForm({ ...form, sector: e.target.value })}
                    className="w-full bg-cream-200 border border-ink-900/12 rounded-xl px-4 py-3.5 text-sm text-ink-900 focus:outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10 transition-all duration-300"
                  >
                    <option value="industriel">Industriel</option>
                    <option value="cimenterie">Cimenterie / Matériaux</option>
                    <option value="ceramique">Céramique</option>
                    <option value="agroalimentaire">Agroalimentaire</option>
                    <option value="pharma">Pharma</option>
                    <option value="immobilier">Promotion immobilière</option>
                    <option value="energie">Énergie / Utilities</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-[11px] tracking-[0.2em] uppercase text-ink-900/55">
                  Votre projet en quelques mots
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Décrivez brièvement votre site, vos enjeux, et le type d'accompagnement qui vous intéresse…"
                  className="w-full bg-cream-200 border border-ink-900/12 rounded-xl px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-900/35 focus:outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10 transition-all duration-300 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-xs text-ink-900/45">
                  Vos informations restent confidentielles. Aucun partage tiers.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="btn-luxe-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'idle' && (<><Send className="w-4 h-4" /> Envoyer</>)}
                  {status === 'submitting' && (<><Loader2 className="w-4 h-4 animate-spin" /> Envoi…</>)}
                  {status === 'success' && (<><CheckCircle2 className="w-4 h-4" /> Reçu — réponse sous 24h</>)}
                  {status === 'error' && (<><Send className="w-4 h-4" /> Réessayer</>)}
                </button>
              </div>

              {status === 'error' && (
                <p role="alert" className="text-xs text-red-600">
                  Une erreur est survenue. Merci de réessayer ou de nous contacter directement par email.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  required,
  value,
  onChange,
  placeholder
}: {
  id: string;
  label: string;
  type: 'text' | 'email';
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-[11px] tracking-[0.2em] uppercase text-ink-900/55">
        {label}{required && <span className="text-chrome-700 ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-cream-200 border border-ink-900/12 rounded-xl px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-900/35 focus:outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10 transition-all duration-300"
      />
    </div>
  );
}
