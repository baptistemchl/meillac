import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Send, CheckCircle, ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { HORAIRES } from '../data/content'

export default function Contact() {
  const [form, setForm]       = useState({ nom: '', email: '', objet: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 1400)
  }

  return (
    <div>
      <PageHero
        title="Contact"
        subtitle="La mairie de Meillac est à votre écoute — venez nous rendre visite ou contactez-nous par téléphone ou email"
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="page-section bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ── Infos pratiques ── */}
            <div>
              <AnimatedSection direction="right">
                <div className="section-label">Informations</div>
                <h2 className="section-title mb-8">Mairie & Agence Postale</h2>
              </AnimatedSection>

              {/* Contact cards */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: MapPin,
                    title: 'Adresse',
                    value: '1 place de la Mairie\n35270 Meillac',
                    href: 'https://www.google.fr/maps/place/Mairie/@48.411395,-1.8156275,17.75z',
                    external: true,
                    cta: 'Itinéraire',
                  },
                  {
                    icon: Phone,
                    title: 'Téléphone',
                    value: '02 99 73 02 25',
                    href: 'tel:0299730225',
                    external: false,
                    cta: 'Appeler',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    value: 'mairie.meillac@orange.fr',
                    href: 'mailto:mairie.meillac@orange.fr',
                    external: false,
                    cta: 'Écrire',
                  },
                  {
                    icon: Facebook,
                    title: 'Facebook',
                    value: 'Commune de Meillac',
                    href: 'https://www.facebook.com/communedemeillac/',
                    external: true,
                    cta: 'Voir la page',
                  },
                ].map(({ icon: Icon, title, value, href, external, cta }, i) => (
                  <AnimatedSection key={title} delay={i * 0.08} direction="right">
                    <div className="card p-5 flex items-center gap-4 group hover:-translate-y-0.5">
                      <div className="w-12 h-12 rounded-xl bg-forest-100 group-hover:bg-forest-200 transition-colors flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-forest-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-xs font-semibold text-forest-500 uppercase tracking-wider mb-0.5">{title}</p>
                        <p className="font-body font-medium text-forest-900 text-sm whitespace-pre-line">{value}</p>
                      </div>
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="shrink-0 text-xs font-body font-semibold text-forest-600 hover:text-forest-800 flex items-center gap-1 transition-colors"
                      >
                        {cta} {external && <ExternalLink size={10} />}
                      </a>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Horaires */}
              <AnimatedSection delay={0.3} direction="right">
                <div className="card p-6">
                  <h3 className="font-body font-semibold text-forest-800 mb-4 flex items-center gap-2">
                    <Clock size={16} /> Horaires d'ouverture
                  </h3>
                  <p className="font-body text-xs text-gray-400 mb-4">En vigueur depuis le 2 septembre 2024</p>
                  <div className="space-y-0">
                    {HORAIRES.map(({ day, matin, apmidi }, i) => {
                      const isToday = new Date().toLocaleDateString('fr-FR', { weekday: 'long' }).includes(day.toLowerCase().slice(0, 3))
                      return (
                        <div
                          key={day}
                          className={`flex items-start py-2.5 border-b border-forest-50 last:border-0 ${isToday ? 'bg-forest-50 -mx-2 px-2 rounded-lg' : ''}`}
                        >
                          <span className={`font-body font-medium text-sm w-24 shrink-0 ${isToday ? 'text-forest-700' : 'text-forest-800'}`}>
                            {day}
                            {isToday && <span className="ml-1.5 text-[10px] text-forest-500 font-semibold">• aujourd'hui</span>}
                          </span>
                          <div className="font-body text-sm text-gray-600">
                            <span>{matin}</span>
                            <span className="mx-2 text-gray-300">|</span>
                            <span>{apmidi}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <p className="font-body text-xs text-gray-400 mt-3">
                    * Le samedi : ouvert les semaines paires uniquement
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* ── Formulaire de contact ── */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="section-label">Message</div>
              <h2 className="section-title mb-8">Nous écrire</h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-forest-600" />
                  </div>
                  <h3 className="font-display text-2xl text-forest-900 mb-3">Message envoyé !</h3>
                  <p className="font-body text-gray-600">
                    Votre message a bien été transmis. Nous vous répondrons dans les meilleurs délais.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ nom: '', email: '', objet: '', message: '' }) }}
                    className="btn-outline mt-6"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-7 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wider mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.nom}
                        onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                        placeholder="Votre nom"
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wider mb-1.5">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="votre@email.fr"
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 transition-shadow"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wider mb-1.5">
                      Objet *
                    </label>
                    <select
                      required
                      value={form.objet}
                      onChange={e => setForm(f => ({ ...f, objet: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border border-forest-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 bg-white transition-shadow"
                    >
                      <option value="">Sélectionner un objet…</option>
                      <option>Démarche administrative</option>
                      <option>Urbanisme & Permis</option>
                      <option>École & Périscolaire</option>
                      <option>Voirie & Travaux</option>
                      <option>Associations</option>
                      <option>Agenda & Événements</option>
                      <option>Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-semibold text-forest-700 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Décrivez votre demande…"
                      className="w-full px-4 py-2.5 rounded-xl border border-forest-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 resize-none transition-shadow"
                    />
                  </div>

                  <p className="font-body text-xs text-gray-400">
                    * Champs obligatoires. Vos données sont utilisées uniquement pour répondre à votre demande.
                  </p>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>

          {/* ── Map ── */}
          <AnimatedSection delay={0.2} className="mt-14">
            <div className="card overflow-hidden">
              <div className="aspect-[21/7] md:aspect-[21/6]">
                <iframe
                  title="Mairie de Meillac"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1301.4!2d-1.8156275!3d48.411395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e9365e7e3f09b%3A0x8f8c664ae867400c!2sMairie%20de%20Meillac!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
