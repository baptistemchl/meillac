import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText, Mail, BookOpen, School, Users, Briefcase,
  MapPin, Phone, Clock, ExternalLink, Download, ChevronRight,
  Recycle, Package
} from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { ASSOCIATIONS, PROFESSIONNELS } from '../data/content'

const TABS = [
  { id: 'demarches',      label: 'Démarches',      icon: FileText },
  { id: 'agence-postale', label: 'Agence Postale', icon: Package },
  { id: 'ecole',          label: 'École',          icon: School },
  { id: 'mediatheque',    label: 'Médiathèque',    icon: BookOpen },
  { id: 'associations',   label: 'Associations',   icon: Users },
  { id: 'professionnels', label: 'Professionnels', icon: Briefcase },
]

const typeColors = {
  Artisan:    'bg-orange-100 text-orange-700',
  Commerce:   'bg-blue-100   text-blue-700',
  Gîte:       'bg-purple-100 text-purple-700',
  Producteur: 'bg-green-100  text-green-700',
}

const secteurIcons = {
  'Éducation & Culture': '🎨',
  École: '🏫',
  Sport: '⚽',
  'Sport & Loisirs': '🏃',
  'Animation locale': '🎉',
  Social: '❤️',
  Séniors: '👴',
  'Sport Scolaire': '🏅',
  Culture: '📚',
  Musique: '🎵',
  Nature: '🌿',
}

export default function ViePratique() {
  const { tab } = useParams()
  const [active, setActive] = useState(tab || 'demarches')
  const [searchAssoc, setSearchAssoc] = useState('')
  const [searchPro, setSearchPro]     = useState('')

  const filteredAssoc = ASSOCIATIONS.filter(a =>
    a.name.toLowerCase().includes(searchAssoc.toLowerCase()) ||
    a.secteur.toLowerCase().includes(searchAssoc.toLowerCase())
  )
  const filteredPro = PROFESSIONNELS.filter(p =>
    p.name.toLowerCase().includes(searchPro.toLowerCase()) ||
    p.secteur.toLowerCase().includes(searchPro.toLowerCase()) ||
    p.type.toLowerCase().includes(searchPro.toLowerCase())
  )

  return (
    <div>
      <PageHero
        title="Vie Pratique"
        subtitle="Tous les services municipaux à votre disposition — démarches, école, médiathèque, associations et professionnels"
        breadcrumb={[{ label: 'Vie Pratique' }]}
      />

      {/* Tab bar */}
      <div className="bg-white border-b border-forest-100 sticky top-16 z-30 overflow-x-auto">
        <div className="container-main">
          <div className="flex gap-0 min-w-max">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`relative flex items-center gap-2 px-4 py-4 font-body font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                  active === id
                    ? 'text-forest-800 border-forest-700'
                    : 'text-gray-500 border-transparent hover:text-forest-700'
                }`}
              >
                <Icon size={14} />
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
          transition={{ duration: 0.25 }}
        >

          {/* ══ DÉMARCHES ══ */}
          {active === 'demarches' && (
            <section className="page-section bg-cream">
              <div className="container-main max-w-4xl">
                <AnimatedSection className="mb-8">
                  <div className="section-label">Services administratifs</div>
                  <h2 className="section-title">Démarches Administratives</h2>
                  <p className="section-subtitle">
                    Retrouvez ici les principales démarches disponibles à la mairie et les liens vers les services en ligne.
                  </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      title: 'Urbanisme & Permis de construire',
                      desc: 'Dépôt de permis de construire, déclarations préalables, certificats d\'urbanisme. Renseignements au PLU (Plan Local d\'Urbanisme).',
                      icon: '🏗️',
                      link: { label: 'Service Urbanisme National', href: 'https://www.service-public.fr/particuliers/vosdroits/N319' },
                    },
                    {
                      title: 'Carte d\'identité & Passeport',
                      desc: 'Les demandes de CNI et de passeport se font en mairie équipée. La commune de Meillac vous oriente vers les mairies compétentes les plus proches.',
                      icon: '🪪',
                      link: { label: 'Pré-demande en ligne', href: 'https://predemande.carte-identite.interieur.gouv.fr' },
                    },
                    {
                      title: 'État Civil',
                      desc: 'Actes de naissance, mariage et décès délivrés par la mairie. Les actes anciens sont consultables sur demande.',
                      icon: '📋',
                      link: null,
                    },
                    {
                      title: 'Assainissement',
                      desc: 'Raccordement au réseau d\'assainissement collectif, contrôle des installations individuelles (ANC). Renseignements en mairie.',
                      icon: '💧',
                      link: null,
                    },
                    {
                      title: 'Inscriptions scolaires',
                      desc: 'Inscription à l\'école élémentaire de Meillac. Se présenter en mairie avec livret de famille et carnet de santé.',
                      icon: '✏️',
                      link: { label: 'Page École', href: '#', onClick: () => setActive('ecole') },
                    },
                    {
                      title: 'Listes électorales',
                      desc: 'Inscription sur les listes électorales de la commune. Possible en ligne ou directement en mairie.',
                      icon: '🗳️',
                      link: { label: 'Inscription en ligne', href: 'https://www.service-public.fr/particuliers/vosdroits/R45035' },
                    },
                    {
                      title: 'Déchets & Valorisation',
                      desc: 'Le traitement des déchets est géré par le Smictom-Valcobreizh. Consultez les calendriers de collecte et les déchetteries.',
                      icon: '♻️',
                      link: { label: 'Smictom-Ille-Rance', href: 'https://www.smictom-ille-rance.fr/' },
                    },
                    {
                      title: 'Aide sociale — CCAS',
                      desc: 'Le Centre Communal d\'Action Sociale accompagne les personnes en difficulté. Présidé par le maire, le CCAS est accessible sur RDV.',
                      icon: '🤝',
                      link: null,
                    },
                  ].map((item, i) => (
                    <AnimatedSection key={item.title} delay={i * 0.07}>
                      <div className="card p-5 h-full flex flex-col gap-3 hover:-translate-y-0.5">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl leading-none">{item.icon}</span>
                          <h3 className="font-body font-semibold text-forest-900">{item.title}</h3>
                        </div>
                        <p className="font-body text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        {item.link && (
                          <a
                            href={item.link.href}
                            target={item.link.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="mt-auto flex items-center gap-1.5 text-xs font-body font-semibold text-forest-600 hover:text-forest-800 transition-colors"
                          >
                            {item.link.label} <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={0.5}>
                  <div className="mt-8 rounded-2xl bg-forest-900 p-6 flex flex-col sm:flex-row items-center gap-5">
                    <Phone size={24} className="text-gold-400 shrink-0" />
                    <div className="flex-1">
                      <p className="font-body font-semibold text-white">Besoin d'aide ?</p>
                      <p className="font-body text-sm text-forest-300 mt-0.5">
                        Notre équipe est disponible pour vous accompagner dans vos démarches. N'hésitez pas à nous appeler ou à passer à la mairie.
                      </p>
                    </div>
                    <a href="tel:0299730225" className="btn-gold shrink-0 !text-sm">
                      <Phone size={13} /> 02 99 73 02 25
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}

          {/* ══ AGENCE POSTALE ══ */}
          {active === 'agence-postale' && (
            <section className="page-section bg-cream">
              <div className="container-main max-w-2xl">
                <AnimatedSection className="mb-8">
                  <div className="section-label">Services postaux</div>
                  <h2 className="section-title">Agence Postale</h2>
                  <p className="section-subtitle">
                    L'agence postale communale est intégrée à la mairie. Elle propose les services postaux de proximité.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <div className="card p-7 mb-6">
                    <h3 className="font-body font-semibold text-forest-800 mb-5 flex items-center gap-2">
                      <Clock size={16} /> Horaires d'ouverture
                    </h3>
                    <div className="space-y-2">
                      {[
                        { day: 'Lundi',    h: 'Fermé le matin · 14h15–17h15' },
                        { day: 'Mardi',    h: '09h00–12h30 · 14h00–17h15' },
                        { day: 'Mercredi', h: '09h00–12h30 · Fermé l\'après-midi' },
                        { day: 'Jeudi',    h: '09h00–12h30 · 14h00–17h15' },
                        { day: 'Vendredi', h: '09h00–12h30 · 14h00–17h15' },
                        { day: 'Samedi',   h: '09h45–12h00 (semaines paires uniquement)' },
                      ].map(({ day, h }) => (
                        <div key={day} className="flex items-center justify-between py-2 border-b border-forest-50 last:border-0">
                          <span className="font-body font-medium text-forest-800 text-sm w-24">{day}</span>
                          <span className="font-body text-sm text-gray-600">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="card p-7">
                    <h3 className="font-body font-semibold text-forest-800 mb-4">Services disponibles</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        '📬 Affranchissement courrier', '📦 Dépôt colis', '💳 Retraits espèces',
                        '📮 Recommandés', '🏦 Comptes CCP basiques', '📰 Vente de timbres',
                      ].map(s => (
                        <div key={s} className="flex items-center gap-2 text-sm font-body text-forest-800 bg-forest-50 rounded-xl px-3 py-2">
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}

          {/* ══ ÉCOLE ══ */}
          {active === 'ecole' && (
            <section className="page-section bg-cream">
              <div className="container-main max-w-3xl">
                <AnimatedSection className="mb-8">
                  <div className="section-label">Enseignement</div>
                  <h2 className="section-title">École & Restaurant Scolaire</h2>
                  <p className="section-subtitle">
                    L'école primaire de Meillac accueille les élèves de maternelle au CM2. Un service de restauration scolaire est disponible sur place.
                  </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'École Primaire',
                      icon: '🏫',
                      items: ['Maternelle (TPS – GS)', 'Primaire (CP – CM2)', 'Encadrement qualifié', 'Activités périscolaires'],
                    },
                    {
                      title: 'Restaurant Scolaire',
                      icon: '🍽️',
                      items: ['Cuisine préparée sur place', 'Menus équilibrés', 'Produits locaux privilégiés', 'Tarification selon quotient familial'],
                    },
                    {
                      title: 'Accueil Périscolaire',
                      icon: '🌅',
                      items: ['Garderie du matin dès 7h30', 'Garderie du soir jusqu\'à 18h30', 'Centre de loisirs le mercredi', 'Sorties pédagogiques'],
                    },
                    {
                      title: 'Inscription & Contact',
                      icon: '📝',
                      items: ['Inscription en mairie', 'Livret de famille requis', 'Carnet de santé (vaccins)', 'Certificat de radiation si changement d\'école'],
                    },
                  ].map((card, i) => (
                    <AnimatedSection key={card.title} delay={i * 0.08}>
                      <div className="card p-6 h-full">
                        <div className="text-3xl mb-3">{card.icon}</div>
                        <h3 className="font-body font-semibold text-forest-900 mb-3">{card.title}</h3>
                        <ul className="space-y-2">
                          {card.items.map(item => (
                            <li key={item} className="flex items-start gap-2 text-sm font-body text-gray-600">
                              <ChevronRight size={13} className="text-forest-400 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={0.4} className="mt-6">
                  <div className="rounded-2xl bg-forest-50 border border-forest-200 p-5 flex items-start gap-4">
                    <Phone size={18} className="text-forest-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body font-semibold text-forest-800">Inscription & renseignements</p>
                      <p className="font-body text-sm text-gray-600 mt-1">
                        Pour toute question concernant l'école, contactez la mairie au <a href="tel:0299730225" className="text-forest-600 font-semibold">02 99 73 02 25</a>
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}

          {/* ══ MÉDIATHÈQUE ══ */}
          {active === 'mediatheque' && (
            <section className="page-section bg-cream">
              <div className="container-main max-w-3xl">
                <AnimatedSection className="mb-8">
                  <div className="section-label">Culture & Savoir</div>
                  <h2 className="section-title">Médiathèque de Meillac</h2>
                  <p className="section-subtitle">
                    Un espace convivial pour les livres, la musique, la presse et le numérique — ouvert à tous les habitants.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <div className="card p-7 mb-6">
                    <h3 className="font-body font-semibold text-forest-800 mb-5">Horaires d'ouverture</h3>
                    <div className="space-y-2">
                      {[
                        { day: 'Mardi',    h: '16h00–19h00' },
                        { day: 'Mercredi', h: '10h00–12h00 · 14h00–17h00' },
                        { day: 'Vendredi', h: '16h00–19h00' },
                        { day: 'Samedi',   h: '10h00–12h00' },
                      ].map(({ day, h }) => (
                        <div key={day} className="flex items-center justify-between py-2 border-b border-forest-50 last:border-0">
                          <span className="font-body font-medium text-forest-800 text-sm w-24">{day}</span>
                          <span className="font-body text-sm text-gray-600">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: '📚', title: 'Romans & BD', desc: 'Large fonds pour adultes, ados et enfants' },
                    { icon: '🎵', title: 'Musique & DVD', desc: 'CDs, films et documentaires à emprunter' },
                    { icon: '📰', title: 'Presse', desc: 'Journaux et magazines disponibles sur place' },
                    { icon: '💻', title: 'Accès Internet', desc: 'Postes informatiques en libre accès' },
                    { icon: '👶', title: 'Jeunesse', desc: 'Albums, contes et livres documentaires' },
                    { icon: '🎨', title: 'Animations', desc: 'Ateliers, lectures et événements culturels' },
                  ].map((item, i) => (
                    <AnimatedSection key={item.title} delay={i * 0.06}>
                      <div className="card p-4 text-center hover:-translate-y-1">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h4 className="font-body font-semibold text-forest-900 text-sm">{item.title}</h4>
                        <p className="font-body text-xs text-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ══ ASSOCIATIONS ══ */}
          {active === 'associations' && (
            <section className="page-section bg-cream">
              <div className="container-main">
                <AnimatedSection className="mb-6">
                  <div className="section-label">Vie associative</div>
                  <h2 className="section-title">Associations de Meillac</h2>
                  <p className="section-subtitle">Plus de 40 associations animent la commune tout au long de l'année.</p>
                </AnimatedSection>

                <AnimatedSection delay={0.1} className="mb-6">
                  <input
                    type="text"
                    placeholder="Rechercher une association ou un secteur…"
                    value={searchAssoc}
                    onChange={e => setSearchAssoc(e.target.value)}
                    className="w-full max-w-sm px-4 py-2.5 rounded-xl border border-forest-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 bg-white"
                  />
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredAssoc.map((assoc, i) => (
                    <AnimatedSection key={assoc.name} delay={i * 0.05}>
                      <div className="card p-4 flex items-center gap-4 hover:-translate-y-0.5">
                        <div className="text-2xl shrink-0">{secteurIcons[assoc.secteur] || '🏅'}</div>
                        <div>
                          <h4 className="font-body font-semibold text-forest-900 text-sm">{assoc.name}</h4>
                          <p className="font-body text-xs text-gray-500 mt-0.5">{assoc.secteur}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                {filteredAssoc.length === 0 && (
                  <div className="text-center py-12 text-gray-400 font-body">
                    Aucune association trouvée pour cette recherche.
                  </div>
                )}

                <AnimatedSection delay={0.5} className="mt-8">
                  <div className="rounded-2xl bg-forest-50 border border-forest-200 p-5">
                    <p className="font-body text-sm text-forest-700">
                      <strong>Votre association n'est pas listée ?</strong> Contactez la mairie pour ajouter ou mettre à jour les informations de votre association.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}

          {/* ══ PROFESSIONNELS ══ */}
          {active === 'professionnels' && (
            <section className="page-section bg-cream">
              <div className="container-main">
                <AnimatedSection className="mb-6">
                  <div className="section-label">Annuaire local</div>
                  <h2 className="section-title">Artisans & Professionnels</h2>
                  <p className="section-subtitle">Artisans, commerces, prestataires de services et hébergements de Meillac.</p>
                </AnimatedSection>

                <AnimatedSection delay={0.1} className="mb-6">
                  <input
                    type="text"
                    placeholder="Rechercher un professionnel ou un secteur…"
                    value={searchPro}
                    onChange={e => setSearchPro(e.target.value)}
                    className="w-full max-w-sm px-4 py-2.5 rounded-xl border border-forest-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-forest-400 bg-white"
                  />
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPro.map((pro, i) => (
                    <AnimatedSection key={pro.name} delay={i * 0.05}>
                      <div className="card p-5 flex items-start gap-4 hover:-translate-y-0.5">
                        <div className="w-11 h-11 rounded-xl bg-forest-100 flex items-center justify-center text-xl shrink-0">
                          {pro.type === 'Artisan' ? '🔨' : pro.type === 'Gîte' ? '🏡' : pro.type === 'Producteur' ? '🌾' : '🏪'}
                        </div>
                        <div>
                          <h4 className="font-body font-semibold text-forest-900 text-sm">{pro.name}</h4>
                          <p className="font-body text-xs text-gray-500 mt-0.5">{pro.secteur}</p>
                          <span className={`inline-block mt-2 text-[10px] font-body font-bold px-2 py-0.5 rounded-full ${typeColors[pro.type] || 'bg-gray-100 text-gray-600'}`}>
                            {pro.type}
                          </span>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                {filteredPro.length === 0 && (
                  <div className="text-center py-12 text-gray-400 font-body">
                    Aucun professionnel trouvé pour cette recherche.
                  </div>
                )}

                <AnimatedSection delay={0.5} className="mt-8">
                  <div className="rounded-2xl bg-forest-50 border border-forest-200 p-5">
                    <p className="font-body text-sm text-forest-700">
                      <strong>Vous souhaitez figurer dans cet annuaire ?</strong> Contactez la mairie pour soumettre votre fiche professionnelle gratuitement.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  )
}
