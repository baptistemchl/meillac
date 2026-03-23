import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Award, FileText, ExternalLink, Phone, Mail, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { ELUS, COMMISSIONS } from '../data/content'

const TABS = [
  { id: 'elus',       label: 'Les Élus',          icon: Users },
  { id: 'commissions',label: 'Les Commissions',   icon: Award },
  { id: 'conseil',    label: 'Conseil Municipal', icon: FileText },
]

const roleColors = {
  'Maire':          'bg-forest-800 text-white',
  '1ère Adjointe':  'bg-forest-600 text-white',
  '2ème Adjoint':   'bg-forest-500 text-white',
  '3ème Adjointe':  'bg-forest-400 text-white',
  '4ème Adjoint':   'bg-forest-300 text-forest-900',
  '5ème Adjointe':  'bg-forest-200 text-forest-900',
}

export default function VieMunicipale() {
  const { tab } = useParams()
  const [active, setActive] = useState(tab || 'elus')

  return (
    <div>
      <PageHero
        title="Vie Municipale"
        subtitle="Élus, commissions et délibérations du conseil municipal de Meillac"
        breadcrumb={[{ label: 'Vie Municipale' }]}
      />

      {/* Tab bar */}
      <div className="bg-white border-b border-forest-100 sticky top-16 z-30">
        <div className="container-main">
          <div className="flex gap-0 overflow-x-auto">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`relative flex items-center gap-2 px-5 py-4 font-body font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                  active === id
                    ? 'text-forest-800 border-forest-700'
                    : 'text-gray-500 border-transparent hover:text-forest-700'
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          {/* ══ ÉLUS ══ */}
          {active === 'elus' && (
            <section className="page-section bg-cream">
              <div className="container-main">
                {/* Maire — featured */}
                <AnimatedSection>
                  <div className="card p-0 overflow-hidden mb-10">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-64 bg-forest-900 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-28 h-28 rounded-2xl overflow-hidden mx-auto mb-4 ring-4 ring-gold-500/40">
                            <img
                              src={ELUS[0].photo}
                              alt={ELUS[0].name}
                              className="w-full h-full object-cover"
                              onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(ELUS[0].name)}&background=2D6A4F&color=fff&size=128` }}
                            />
                          </div>
                          <span className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-body font-bold rounded-full mb-2">
                            {ELUS[0].role}
                          </span>
                          <h2 className="font-display text-xl text-white font-semibold">{ELUS[0].name}</h2>
                        </div>
                      </div>
                      <div className="flex-1 p-8">
                        <p className="font-body text-gray-600 leading-relaxed mb-6">
                          Mesdames, Messieurs, les nombreuses visites effectuées sur votre site nous confortent dans le choix que les membres de la commission communication ont fait. Plus dynamique et plus moderne avec des informations qui vous sont utiles. Nous continuerons de faire évoluer cet outil indispensable.
                        </p>
                        <h3 className="font-body font-semibold text-forest-800 text-sm mb-3 uppercase tracking-wider">Responsabilités</h3>
                        <div className="space-y-2">
                          {ELUS[0].commissions.map((c, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle size={14} className="text-forest-500 mt-0.5 shrink-0" />
                              <span className="font-body text-gray-700">{c}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3 mt-6">
                          <a href="tel:0299730225" className="btn-outline !text-xs !py-2 !px-4">
                            <Phone size={12} /> Prendre RDV
                          </a>
                          <a href="mailto:mairie.meillac@orange.fr" className="btn-primary !text-xs !py-2 !px-4">
                            <Mail size={12} /> Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Autres élus */}
                <h3 className="font-body font-semibold text-forest-700 text-xs uppercase tracking-widest mb-6">Adjoints & Conseillers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                  {ELUS.slice(1).map((elu, i) => (
                    <AnimatedSection key={elu.name} delay={i * 0.08}>
                      <div className="card p-5 text-center group hover:-translate-y-1">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-3 ring-2 ring-forest-100 group-hover:ring-forest-300 transition-all">
                          <img
                            src={elu.photo}
                            alt={elu.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(elu.name)}&background=B7E4C7&color=1B4332&size=80` }}
                          />
                        </div>
                        <span className={`inline-block px-2.5 py-0.5 text-[10px] font-body font-bold rounded-full mb-2 ${roleColors[elu.role] || 'bg-forest-100 text-forest-800'}`}>
                          {elu.role}
                        </span>
                        <h4 className="font-body font-semibold text-forest-900 text-sm leading-tight">{elu.name}</h4>
                        <div className="mt-3 space-y-1">
                          {elu.commissions.slice(0, 2).map((c, ci) => (
                            <p key={ci} className="font-body text-[11px] text-gray-500">{c}</p>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={0.3}>
                  <div className="mt-10 p-5 rounded-2xl bg-forest-50 border border-forest-100 flex items-start gap-4">
                    <Phone size={18} className="text-forest-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body font-semibold text-forest-800 text-sm">Rencontrer un élu</p>
                      <p className="font-body text-sm text-gray-600 mt-0.5">
                        Tous les élus reçoivent sur rendez-vous. Contactez la mairie au <a href="tel:0299730225" className="text-forest-600 font-semibold">02 99 73 02 25</a> ou par email à <a href="mailto:mairie.meillac@orange.fr" className="text-forest-600 font-semibold">mairie.meillac@orange.fr</a>
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}

          {/* ══ COMMISSIONS ══ */}
          {active === 'commissions' && (
            <section className="page-section bg-cream">
              <div className="container-main">
                <AnimatedSection className="mb-8">
                  <div className="section-label">Organisation</div>
                  <h2 className="section-title">Les Commissions Municipales</h2>
                  <p className="section-subtitle">
                    Le conseil municipal est organisé en commissions thématiques, chacune pilotée par un adjoint responsable.
                  </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {COMMISSIONS.map((comm, i) => (
                    <AnimatedSection key={comm.name} delay={i * 0.09}>
                      <div className="card p-6 h-full flex flex-col gap-4 hover:-translate-y-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-body font-semibold text-forest-900 text-base">{comm.name}</h3>
                          <span className="text-xs font-body font-semibold px-2.5 py-1 bg-forest-100 text-forest-700 rounded-full whitespace-nowrap shrink-0">
                            Présidé par
                          </span>
                        </div>
                        <p className="font-body text-sm text-gray-600 leading-relaxed">{comm.description}</p>
                        <div className="mt-auto pt-4 border-t border-forest-100">
                          <p className="font-body text-xs text-forest-600 font-semibold">{comm.president}</p>
                          <p className="font-body text-xs text-gray-400 mt-1">
                            Membres : {comm.membres.join(' · ')}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ══ CONSEIL ══ */}
          {active === 'conseil' && (
            <section className="page-section bg-cream">
              <div className="container-main max-w-3xl">
                <AnimatedSection className="mb-8">
                  <div className="section-label">Délibérations</div>
                  <h2 className="section-title">Conseil Municipal</h2>
                  <p className="section-subtitle">
                    Les séances du conseil municipal sont publiques. Les comptes rendus sont disponibles en mairie et publiés sur ce site.
                  </p>
                </AnimatedSection>

                {/* Séances */}
                <AnimatedSection delay={0.1}>
                  <div className="card p-6 mb-6">
                    <h3 className="font-body font-semibold text-forest-800 mb-4">Prochaines séances 2026</h3>
                    <div className="space-y-3">
                      {[
                        { date: '28 mars 2026',  heure: '20h30', type: 'Ordinaire' },
                        { date: '23 mai 2026',   heure: '20h30', type: 'Ordinaire' },
                        { date: '25 juillet 2026', heure: '20h30', type: 'Ordinaire' },
                        { date: '26 septembre 2026', heure: '20h30', type: 'Ordinaire' },
                        { date: '28 novembre 2026', heure: '20h30', type: 'Budgétaire' },
                      ].map((s, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-forest-50 last:border-0">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center shrink-0">
                              <FileText size={16} className="text-forest-600" />
                            </div>
                            <div>
                              <p className="font-body font-medium text-forest-900 text-sm">{s.date}</p>
                              <p className="font-body text-xs text-gray-400">{s.heure} · Salle des fêtes</p>
                            </div>
                          </div>
                          <span className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full ${s.type === 'Budgétaire' ? 'bg-gold-100 text-gold-700' : 'bg-forest-100 text-forest-700'}`}>
                            {s.type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                  <div className="card p-6 mb-6">
                    <h3 className="font-body font-semibold text-forest-800 mb-4">Comptes rendus récents</h3>
                    <p className="font-body text-sm text-gray-500 mb-4">
                      Les comptes rendus de séances sont disponibles en mairie. Contactez-nous pour recevoir les documents par email.
                    </p>
                    <div className="space-y-3">
                      {[
                        '25 janvier 2026', '30 novembre 2025', '27 septembre 2025',
                        '26 juillet 2025',  '24 mai 2025',
                      ].map((date, i) => (
                        <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                          <div className="flex items-center gap-3">
                            <FileText size={14} className="text-forest-500" />
                            <span className="font-body text-sm text-forest-800">Conseil Municipal — {date}</span>
                          </div>
                          <span className="font-body text-xs text-gray-400">Disponible en mairie</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="rounded-2xl bg-forest-50 border border-forest-200 p-5">
                    <p className="font-body text-sm text-forest-700">
                      <strong>Séances publiques</strong> — Tout citoyen peut assister aux séances du conseil municipal.
                      Pour toute question, contactez la mairie au <a href="tel:0299730225" className="font-semibold text-forest-800">02 99 73 02 25</a>.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bretagne Romantique CTA */}
      <section className="py-12 bg-forest-900">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-forest-400 text-xs uppercase tracking-wider mb-1">Intercommunalité</p>
            <h3 className="font-display text-2xl text-white">Communauté de communes Bretagne Romantique</h3>
            <p className="font-body text-forest-400 text-sm mt-1">Meillac est membre de la communauté de communes Bretagne Romantique</p>
          </div>
          <a
            href="https://bretagneromantique.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shrink-0"
          >
            Visiter le site <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </div>
  )
}
