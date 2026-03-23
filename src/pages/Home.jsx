import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight, MapPin, Phone, Clock, ChevronDown,
  Newspaper, Calendar, Users, Building2, BookOpen,
  TreePine, FileText, ExternalLink, Bell
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { COMMUNE_STATS, ACTUALITES, AGENDA_EVENTS, BULLETINS } from '../data/content'

/* ── Animated counter ── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(target / 60)
        const id = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(id) }
          else setCount(start)
        }, 24)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count.toLocaleString('fr-FR')}{suffix}</span>
}

/* ── Category badge colors ── */
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

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY   = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOp  = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero">
        {/* Background image with parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://meillac.fr/wp-content/uploads/2018/01/IMG_5577.jpg"
            alt="Meillac"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-forest-900/40 to-forest-950/80" />
        </motion.div>

        {/* Celtic knot decorative pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0L80 12v2L54 40h-2zm4 0L80 16v2L58 40h-2zm4 0L80 20v2L62 40h-2zm4 0L80 24v2L66 40h-2zm4 0L80 28v2L70 40h-2zm4 0L80 32v2L74 40h-2zm4 0L80 36v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Animated blobs */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-forest-500/20 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"
        />

        {/* Hero content */}
        <motion.div style={{ opacity: heroOp }} className="relative z-10 container-main">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <MapPin size={12} className="text-gold-300" />
                <span className="font-body text-xs text-white/80 tracking-widest uppercase">
                  Ille-et-Vilaine · Bretagne
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[0.95] mb-6"
            >
              Bienvenue à<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-gold-300">
                Meillac
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-body text-forest-200 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            >
              Site officiel de la commune de Meillac — retrouvez ici toutes les informations municipales, démarches, agenda et actualités.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/la-commune" className="btn-gold">
                Découvrir la commune <ArrowRight size={16} />
              </Link>
              <Link to="/vie-pratique" className="glass-card px-6 py-3 text-white font-body font-medium text-sm hover:bg-white/20 transition-colors flex items-center gap-2">
                Démarches pratiques <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs text-white/40 tracking-widest uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={18} className="text-white/40" />
          </motion.div>
        </motion.div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0 60 C360 20 1080 20 1440 60 L1440 60 L0 60Z" fill="#FAFAF7"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════ QUICK ACCESS ═══════════════════ */}
      <section className="bg-cream py-10 md:py-14">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: Building2, label: 'Mairie',         href: '/contact',                    color: 'forest' },
              { icon: Users,     label: 'Les Élus',        href: '/vie-municipale/elus',         color: 'forest' },
              { icon: FileText,  label: 'Démarches',       href: '/vie-pratique/demarches',      color: 'gold' },
              { icon: BookOpen,  label: 'Médiathèque',     href: '/vie-pratique/mediatheque',    color: 'forest' },
              { icon: Calendar,  label: 'Agenda',          href: '/agenda',                      color: 'gold' },
              { icon: Newspaper, label: 'Bulletins',       href: '#bulletins',                   color: 'forest' },
            ].map(({ icon: Icon, label, href, color }, i) => (
              <AnimatedSection key={label} delay={i * 0.07}>
                <Link
                  to={href}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white hover:bg-forest-50 border border-forest-100 hover:border-forest-200 transition-all duration-200 group hover:-translate-y-1 hover:shadow-md"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color === 'gold' ? 'bg-gold-100 group-hover:bg-gold-200' : 'bg-forest-100 group-hover:bg-forest-200'} transition-colors`}>
                    <Icon size={20} className={color === 'gold' ? 'text-gold-600' : 'text-forest-700'} />
                  </div>
                  <span className="font-body text-xs font-medium text-center text-forest-700">{label}</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="bg-forest-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.06]" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {COMMUNE_STATS.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-forest-400 text-sm tracking-wide">{stat.label}</div>
                <div className="w-8 h-0.5 bg-gold-500 mx-auto mt-3 rounded-full" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ACTUALITES + AGENDA ═══════════════════ */}
      <section className="page-section bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Actualités — 2/3 */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="section-label"><Bell size={12} /> Actualités</div>
                    <h2 className="section-title">Dernières nouvelles</h2>
                  </div>
                  <Link to="/agenda" className="btn-outline !py-2 !px-4 !text-xs hidden sm:flex">
                    Toutes les actus <ArrowRight size={13} />
                  </Link>
                </div>
              </AnimatedSection>

              <div className="space-y-5">
                {ACTUALITES.map((actu, i) => (
                  <AnimatedSection key={actu.id} delay={i * 0.1}>
                    <article className="card flex gap-5 p-5 group hover:-translate-y-1">
                      {actu.image && (
                        <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                          <img src={actu.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-body font-semibold px-2 py-0.5 rounded-full ${catColor[actu.category] || 'bg-gray-100 text-gray-600'}`}>
                            {actu.category}
                          </span>
                          <span className="text-xs text-gray-400 font-body">{actu.date}</span>
                        </div>
                        <h3 className="font-body font-semibold text-forest-900 mb-1 line-clamp-1 group-hover:text-forest-600 transition-colors">
                          {actu.title}
                        </h3>
                        <p className="font-body text-sm text-gray-500 line-clamp-2 leading-relaxed">
                          {actu.excerpt}
                        </p>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Agenda — 1/3 */}
            <div>
              <AnimatedSection delay={0.1}>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="section-label"><Calendar size={12} /> Agenda</div>
                    <h2 className="font-display text-2xl text-forest-900">Événements</h2>
                  </div>
                </div>
              </AnimatedSection>

              <div className="space-y-3">
                {AGENDA_EVENTS.slice(0, 5).map((evt, i) => (
                  <AnimatedSection key={evt.id} delay={i * 0.08}>
                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-forest-100 hover:border-forest-300 hover:shadow-sm transition-all group">
                      <div className="shrink-0 w-12 flex flex-col items-center justify-center bg-forest-50 rounded-xl py-2 group-hover:bg-forest-100 transition-colors">
                        <span className="font-display text-xl font-bold text-forest-800 leading-none">
                          {evt.date.split(' ')[0]}
                        </span>
                        <span className="font-body text-[9px] uppercase tracking-wider text-forest-500 mt-0.5">
                          {evt.date.split(' ')[1]?.slice(0, 3)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full font-body ${catColor[evt.category] || 'bg-gray-100 text-gray-600'}`}>
                          {evt.category}
                        </span>
                        <p className="font-body font-medium text-sm text-forest-800 mt-1 line-clamp-1">{evt.title}</p>
                        <p className="font-body text-xs text-gray-400 mt-0.5">{evt.time} · {evt.lieu}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.4}>
                <Link to="/agenda" className="btn-outline w-full justify-center mt-5 !text-xs">
                  Voir tout l'agenda <ArrowRight size={13} />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ COMMUNE HIGHLIGHT ═══════════════════ */}
      <section className="page-section bg-white overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                {/* Main image */}
                <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <img
                    src="https://meillac.fr/wp-content/uploads/2018/01/IMG_5591.jpg"
                    alt="Meillac patrimoine"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-forest-100 max-w-[180px]">
                  <TreePine size={22} className="text-forest-600 mb-2" />
                  <p className="font-body font-semibold text-forest-900 text-sm">Bretagne Romantique</p>
                  <p className="font-body text-xs text-gray-500 mt-1">Communauté de communes</p>
                </div>
                {/* Dot decoration */}
                <div className="absolute -top-6 -left-6 w-28 h-28 dot-grid opacity-30 rounded-full" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              <div className="section-label"><MapPin size={12} /> La commune</div>
              <h2 className="section-title mb-4">
                Une commune bretonne au riche patrimoine
              </h2>
              <div className="accent-bar mb-6" />
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                Meillac, dont le nom dérive de <em>Aemiliacum fundus</em>, est une commune d'Ille-et-Vilaine dont l'histoire remonte au 12ème siècle. Elle englobait autrefois les territoires de La Chapelle-aux-Filtzméens et de Lanhélin.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-8">
                Au lieu-dit la Bataille, Bertrand Du Guesclin livra combat à Robert Felton, commandant anglais. Aujourd'hui, la commune offre randonnées, patrimoine religieux et paysages bocagers préservés.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/la-commune" className="btn-primary">
                  Histoire & Patrimoine <ArrowRight size={16} />
                </Link>
                <a
                  href="https://meillac.fr/wp-content/uploads/2018/03/circuit-des-rochers.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Randonnées <ExternalLink size={14} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES GRID ═══════════════════ */}
      <section className="page-section bg-forest-50">
        <div className="container-main">
          <AnimatedSection className="text-center mb-12">
            <div className="section-label justify-center">Services</div>
            <h2 className="section-title">Vie pratique</h2>
            <p className="section-subtitle mx-auto text-center">Accédez directement aux services municipaux</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: FileText,
                title: 'Démarches Administratives',
                desc: 'Urbanisme, assainissement, CNI, passeport et liens vers les services de l\'État.',
                href: '/vie-pratique/demarches',
                color: 'forest',
              },
              {
                icon: BookOpen,
                title: 'Médiathèque',
                desc: 'Livres, DVD, presse, accès internet, ateliers numériques et animations culturelles.',
                href: '/vie-pratique/mediatheque',
                color: 'gold',
              },
              {
                icon: Building2,
                title: 'École & Restaurant Scolaire',
                desc: 'Informations pratiques sur l\'école primaire, les menus et l\'accueil périscolaire.',
                href: '/vie-pratique/ecole',
                color: 'forest',
              },
              {
                icon: Users,
                title: 'Associations',
                desc: 'Annuaire de toutes les associations locales : sport, culture, social, jeunesse…',
                href: '/vie-pratique/associations',
                color: 'gold',
              },
              {
                icon: MapPin,
                title: 'Agence Postale',
                desc: 'Services postaux de proximité accessibles directement à la mairie.',
                href: '/vie-pratique/agence-postale',
                color: 'forest',
              },
              {
                icon: Building2,
                title: 'Professionnels & Gîtes',
                desc: 'Artisans, commerces et hébergements de la commune à votre service.',
                href: '/vie-pratique/professionnels',
                color: 'gold',
              },
            ].map(({ icon: Icon, title, desc, href, color }, i) => (
              <AnimatedSection key={title} delay={i * 0.08}>
                <Link
                  to={href}
                  className="card p-6 h-full flex flex-col gap-4 group hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${color === 'gold' ? 'bg-gold-100 group-hover:bg-gold-200' : 'bg-forest-100 group-hover:bg-forest-200'}`}>
                    <Icon size={22} className={color === 'gold' ? 'text-gold-600' : 'text-forest-700'} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-forest-900 mb-2 group-hover:text-forest-600 transition-colors">
                      {title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1.5 text-xs font-body font-medium text-forest-600 group-hover:gap-2.5 transition-all">
                    Accéder <ArrowRight size={12} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BULLETINS ═══════════════════ */}
      <section id="bulletins" className="page-section bg-white">
        <div className="container-main">
          <AnimatedSection className="flex items-center justify-between mb-10">
            <div>
              <div className="section-label"><Newspaper size={12} /> Publications</div>
              <h2 className="section-title">100% Meillac</h2>
              <p className="font-body text-gray-500 text-sm mt-1">Le bulletin communal — édité deux fois par an</p>
            </div>
          </AnimatedSection>

          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-thin snap-x snap-mandatory">
            {BULLETINS.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.06} className="shrink-0 snap-start">
                <a
                  href={b.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-36 group"
                >
                  <div className="rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                    <img src={b.cover} alt={`Bulletin ${b.month} ${b.year}`} className="w-full aspect-[3/4] object-cover" />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="font-body font-semibold text-forest-800 text-xs">{b.month} {b.year}</p>
                    <p className="font-body text-[10px] text-forest-500 mt-0.5 flex items-center justify-center gap-1">
                      <ExternalLink size={9} /> PDF
                    </p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ALERTE POPULATION ═══════════════════ */}
      <section className="py-14 bg-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="container-main relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center shrink-0">
                <Bell size={24} className="text-gold-300" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Système d'alerte population</h3>
                <p className="font-body text-forest-300 text-sm mt-1">
                  Restez informé en cas d'urgence — inscrivez-vous gratuitement aux SMS d'alerte de la commune.
                </p>
              </div>
            </div>
            <a
              href="https://www.cli.inscription-volontaire.com/meillac/index.php?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold shrink-0"
            >
              S'inscrire maintenant <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT RAPIDE ═══════════════════ */}
      <section className="page-section bg-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Téléphone',
                value: '02 99 73 02 25',
                href: 'tel:0299730225',
                desc: 'Du lundi au vendredi',
              },
              {
                icon: MapPin,
                title: 'Adresse',
                value: '1 place de la Mairie, 35270 Meillac',
                href: 'https://maps.google.fr/?q=Mairie+Meillac',
                desc: 'Ille-et-Vilaine',
              },
              {
                icon: Clock,
                title: 'Horaires',
                value: 'Voir les horaires complets',
                href: '/contact',
                desc: 'Lun–Ven & Sam matin',
              },
            ].map(({ icon: Icon, title, value, href, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card p-6 flex items-start gap-4 group hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-forest-100 group-hover:bg-forest-200 transition-colors flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-forest-700" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold text-forest-500 uppercase tracking-wider mb-1">{title}</p>
                    <p className="font-body font-medium text-forest-900 text-sm">{value}</p>
                    <p className="font-body text-xs text-gray-400 mt-0.5">{desc}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
