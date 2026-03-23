import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ExternalLink, Filter } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { AGENDA_EVENTS, ACTUALITES, BULLETINS } from '../data/content'

const catColor = {
  Municipal: 'bg-forest-100 text-forest-700',
  Commerce:  'bg-amber-100 text-amber-700',
  Social:    'bg-blue-100 text-blue-700',
  Sport:     'bg-orange-100 text-orange-700',
  Cérémonie: 'bg-red-100 text-red-700',
  Événement: 'bg-purple-100 text-purple-700',
  Information:'bg-forest-100 text-forest-700',
  Travaux:   'bg-yellow-100 text-yellow-800',
}

const ALL_CATS = ['Tous', ...Array.from(new Set(AGENDA_EVENTS.map(e => e.category)))]

export default function Agenda() {
  const [filter, setFilter] = useState('Tous')
  const filtered = filter === 'Tous' ? AGENDA_EVENTS : AGENDA_EVENTS.filter(e => e.category === filter)

  return (
    <div>
      <PageHero
        title="Agenda & Actualités"
        subtitle="Restez informé des événements, manifestations et actualités de la commune de Meillac"
        breadcrumb={[{ label: 'Agenda & Actualités' }]}
      />

      {/* ══ AGENDA ══ */}
      <section className="page-section bg-cream">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
            <AnimatedSection>
              <div className="section-label"><Calendar size={12} /> Événements</div>
              <h2 className="section-title">Agenda de la commune</h2>
            </AnimatedSection>

            {/* Filter chips */}
            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap gap-2 items-center">
                <Filter size={13} className="text-gray-400" />
                {ALL_CATS.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-body font-semibold transition-all ${
                      filter === cat
                        ? 'bg-forest-800 text-white'
                        : 'bg-white border border-forest-200 text-forest-700 hover:bg-forest-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="space-y-4">
            {filtered.map((evt, i) => (
              <AnimatedSection key={evt.id} delay={i * 0.08}>
                <motion.div
                  layout
                  className="card p-5 flex gap-5 group hover:-translate-y-0.5"
                >
                  {/* Date block */}
                  <div className="shrink-0 w-16 flex flex-col items-center justify-center bg-forest-900 rounded-xl py-3 text-white">
                    <span className="font-display text-2xl font-bold leading-none">
                      {evt.date.split(' ')[0]}
                    </span>
                    <span className="font-body text-[10px] uppercase tracking-wider text-forest-300 mt-1">
                      {evt.date.split(' ')[1]?.slice(0, 4)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded-full ${catColor[evt.category] || 'bg-gray-100'}`}>
                        {evt.category}
                      </span>
                      <span className="text-xs text-gray-400 font-body">{evt.date} · {evt.time}</span>
                    </div>
                    <h3 className="font-body font-semibold text-forest-900 group-hover:text-forest-600 transition-colors">
                      {evt.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 mt-1 line-clamp-2">{evt.description}</p>
                  </div>

                  {/* Lieu */}
                  <div className="shrink-0 hidden sm:flex flex-col items-end justify-center gap-1 text-right">
                    <span className="font-body text-xs text-gray-400 uppercase tracking-wider">Lieu</span>
                    <span className="font-body text-sm font-medium text-forest-800">{evt.lieu}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400 font-body">
              Aucun événement dans cette catégorie.
            </div>
          )}
        </div>
      </section>

      {/* ══ ACTUALITÉS ══ */}
      <section className="page-section bg-white">
        <div className="container-main">
          <AnimatedSection className="mb-8">
            <div className="section-label">Nouvelles</div>
            <h2 className="section-title">Actualités communales</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTUALITES.map((actu, i) => (
              <AnimatedSection key={actu.id} delay={i * 0.1}>
                <article className="card h-full flex flex-col group hover:-translate-y-1">
                  {actu.image ? (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={actu.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                      <span className="font-display text-4xl text-forest-400 opacity-30">M</span>
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded-full ${catColor[actu.category] || 'bg-gray-100'}`}>
                        {actu.category}
                      </span>
                      <span className="text-xs text-gray-400 font-body">{actu.date}</span>
                    </div>
                    <h3 className="font-body font-semibold text-forest-900 group-hover:text-forest-600 transition-colors mb-2">
                      {actu.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">{actu.excerpt}</p>
                    {actu.link && (
                      <a
                        href={actu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center gap-1.5 text-xs font-body font-semibold text-forest-600 hover:text-forest-800"
                      >
                        En savoir plus <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BULLETINS ══ */}
      <section className="page-section bg-forest-50">
        <div className="container-main">
          <AnimatedSection className="mb-8">
            <div className="section-label">Publications</div>
            <h2 className="section-title">100% Meillac</h2>
            <p className="section-subtitle">Le bulletin communal édité deux fois par an — retrouvez tous les numéros depuis 2015.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">
            {BULLETINS.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <a
                  href={b.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 border border-gray-100 bg-white">
                    <img
                      src={b.cover}
                      alt={`Bulletin ${b.month} ${b.year}`}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="font-body font-semibold text-forest-800 text-xs">{b.month}</p>
                    <p className="font-body text-[11px] text-gray-400">{b.year}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="mt-10 text-center">
            <p className="font-body text-sm text-gray-500">
              Les bulletins plus anciens sont disponibles en mairie. Contactez-nous au <a href="tel:0299730225" className="text-forest-600 font-semibold">02 99 73 02 25</a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
