import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Footprints, Clock, ChevronRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { COMMUNE_STATS, PATRIMOINE, RANDONNEES } from '../data/content'

export default function LaCommune() {
  return (
    <div>
      <PageHero
        title="La Commune"
        subtitle="Histoire, patrimoine et paysages d'Ille-et-Vilaine au cœur de la Bretagne Romantique"
        breadcrumb={[{ label: 'La Commune' }]}
      />

      {/* ── Chiffres clés ── */}
      <section className="py-10 bg-forest-900">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {COMMUNE_STATS.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.09} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="font-display text-3xl md:text-4xl font-bold text-white">
                  {stat.value.toLocaleString('fr-FR')}{stat.suffix}
                </div>
                <div className="font-body text-forest-400 text-sm mt-1">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Histoire ── */}
      <section className="page-section bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection direction="right">
              <div className="section-label"><MapPin size={12} /> Origines</div>
              <h2 className="section-title mb-4">Histoire & Héritage</h2>
              <div className="accent-bar mb-6" />

              <div className="space-y-4 font-body text-gray-600 leading-relaxed">
                <p>
                  Meillac vient de <strong className="text-forest-800">« Aemiliacum fundus »</strong>. La terminaison <em>ac</em> indique une origine gallo-romaine. La commune englobait autrefois les territoires de La Chapelle-aux-Filtzméens (détaché en 1630) et de Lanhélin.
                </p>
                <p>
                  Cette paroisse dépendait de l'ancien évêché de Dol. Les actes les plus anciens concernant Meillac datent du 12ème siècle, le plus ancien remontant à l'an <strong className="text-forest-800">1137</strong> — <em>Parochia de Milliac</em>.
                </p>
                <p>
                  En 1137, Gilduin, fondant le monastère de la Vieuville, lui donna deux portions de la dîme de Meillac. Non loin de là se trouve le village de Pirieuc, ancien manoir donné aux moines de la Vieuville vers 1165.
                </p>
                <p>
                  Au lieu-dit <strong className="text-forest-800">la Bataille</strong>, Bertrand Du Guesclin livra combat à Robert Felton, commandant anglais, qui y fut fait prisonnier et emmené à Pontorson — un fait d'armes qui forge encore l'identité locale.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              {/* Timeline */}
              <div className="space-y-0">
                <h3 className="font-body font-semibold text-forest-700 text-xs uppercase tracking-widest mb-6">
                  Repères historiques
                </h3>
                {[
                  { year: '1137', event: 'Premier acte écrit mentionnant Meillac — Parochia de Milliac' },
                  { year: '1147', event: "Donation à l'abbaye de la Vieuville par la famille Troussier" },
                  { year: '1165', event: 'Don du manoir de Pirieuc aux moines par Zacharie de Montsorel' },
                  { year: '~1370', event: 'Bertrand Du Guesclin fait prisonnier Robert Felton à la Bataille' },
                  { year: '1416', event: 'Olivier de la Feuillée épouse Gervaise, dame du Bourgneuf' },
                  { year: '1630', event: 'Détachement de La Chapelle-aux-Filtzméens' },
                  { year: '1735', event: 'Le manoir du Bourgneuf passe à la famille De Gravé' },
                  { year: '1870', event: 'Construction de la copie de la Grotte de Lourdes' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 pb-5 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-forest-600 border-2 border-white shadow-sm shrink-0 mt-1" />
                      {i < 7 && <div className="w-0.5 flex-1 bg-forest-200 mt-1" />}
                    </div>
                    <div className="pb-1">
                      <span className="font-display font-bold text-forest-700 text-sm">{item.year}</span>
                      <p className="font-body text-gray-600 text-sm mt-0.5">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Patrimoine ── */}
      <section className="page-section bg-white">
        <div className="container-main">
          <AnimatedSection className="mb-10">
            <div className="section-label">Patrimoine</div>
            <h2 className="section-title">Sites remarquables</h2>
            <p className="section-subtitle">Découvrez le patrimoine bâti et naturel de Meillac</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATRIMOINE.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group card overflow-hidden h-full flex flex-col hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden bg-forest-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-body font-semibold text-forest-900 mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Randonnées ── */}
      <section className="page-section bg-forest-50">
        <div className="container-main">
          <AnimatedSection className="mb-10">
            <div className="section-label"><Footprints size={12} /> Plein air</div>
            <h2 className="section-title">Circuits de randonnée</h2>
            <p className="section-subtitle">Deux boucles praticables à pied, à vélo et à cheval au cœur du bocage meillacois.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RANDONNEES.map((rando, i) => (
              <AnimatedSection key={rando.name} delay={i * 0.15}>
                <div className="card p-7 flex flex-col gap-5 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="section-label">Circuit {i + 1}</div>
                      <h3 className="font-display text-2xl font-semibold text-forest-900">{rando.name}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-body font-semibold ${rando.difficulty === 'Modéré' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                      {rando.difficulty}
                    </span>
                  </div>

                  <div className="flex gap-5">
                    {[
                      { label: 'Distance', value: rando.distance },
                      { label: 'Durée', value: rando.duration },
                    ].map(m => (
                      <div key={m.label} className="flex-1 bg-forest-50 rounded-xl p-3 text-center">
                        <div className="font-display text-xl font-bold text-forest-800">{m.value}</div>
                        <div className="font-body text-xs text-forest-500 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="font-body text-gray-600 text-sm leading-relaxed">{rando.description}</p>

                  <a
                    href={rando.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary self-start !text-xs"
                  >
                    Télécharger la carte PDF <ExternalLink size={13} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map CTA ── */}
      <section className="page-section bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="container-main relative z-10 text-center">
          <AnimatedSection>
            <div className="section-label justify-center text-forest-400"><MapPin size={12} /> Localisation</div>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Trouver la mairie</h2>
            <p className="font-body text-forest-400 mb-8 max-w-md mx-auto">
              Mairie de Meillac — 1 place de la Mairie, 35270 Meillac, Ille-et-Vilaine
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.google.fr/maps/place/Mairie/@48.411395,-1.8156275,17.75z"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Ouvrir dans Google Maps <ExternalLink size={14} />
              </a>
              <Link to="/contact" className="glass-card px-6 py-3 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/20 transition-colors">
                Horaires d'ouverture <Clock size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
