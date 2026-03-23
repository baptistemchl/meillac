import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, Facebook, ExternalLink } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Accueil',        href: '/' },
  { label: 'La Commune',     href: '/la-commune' },
  {
    label: 'Vie Municipale',
    href: '/vie-municipale',
    children: [
      { label: 'Les Élus',                href: '/vie-municipale/elus' },
      { label: 'Les Commissions',         href: '/vie-municipale/commissions' },
      { label: 'Conseil Municipal',       href: '/vie-municipale/conseil' },
      { label: 'Bretagne Romantique',     href: 'https://bretagneromantique.fr', external: true },
    ],
  },
  {
    label: 'Vie Pratique',
    href: '/vie-pratique',
    children: [
      { label: 'Démarches Administratives',   href: '/vie-pratique/demarches' },
      { label: 'Agence Postale',              href: '/vie-pratique/agence-postale' },
      { label: 'École & Restaurant Scolaire', href: '/vie-pratique/ecole' },
      { label: 'Médiathèque',                href: '/vie-pratique/mediatheque' },
      { label: 'Associations',               href: '/vie-pratique/associations' },
      { label: 'Professionnels',             href: '/vie-pratique/professionnels' },
    ],
  },
  { label: 'Agenda',  href: '/agenda' },
  { label: 'Contact', href: '/contact' },
]

// Hauteur totale du header selon l'état
const TOP_BAR_H = 32   // px — hauteur de la barre supérieure desktop
const NAV_H     = 64   // px — hauteur de la nav principale

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location   = useLocation()
  const timeoutRef = useRef(null)
  const isHome     = location.pathname === '/'

  // Scroll listener
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Fermer tout sur changement de route
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  // Bloquer le scroll quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current)
    setOpenDropdown(label)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  // États visuels selon scroll / page
  const isCompact = scrolled || !isHome   // top bar cachée, nav seule
  const isDark    = !isCompact            // sur le hero = fond sombre

  return (
    <>
      {/*
       * ─────────────────────────────────────────────────────
       * HEADER FIXE UNIFIÉ — top bar + nav dans un seul bloc
       * ─────────────────────────────────────────────────────
       */}
      <header
        className={[
          'fixed left-0 right-0 z-50 transition-all duration-300',
          isCompact
            ? 'top-0 bg-white/80 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.08)] border-b border-white/60'
            : 'top-0 bg-transparent',
        ].join(' ')}
      >
        {/* ── Top info bar — visible uniquement quand non-compact ── */}
        <AnimatePresence initial={false}>
          {!isCompact && (
            <motion.div
              key="topbar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: TOP_BAR_H, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="bg-forest-950/70 backdrop-blur-md border-b border-white/10">
                <div className="container-main flex items-center justify-between h-8">

                  {/* Gauche : tel + mail */}
                  <div className="flex items-center gap-5">
                    <a
                      href="tel:0299730225"
                      className="flex items-center gap-1.5 text-forest-300 hover:text-white text-[11px] font-body tracking-wide transition-colors group"
                    >
                      <span className="w-5 h-5 rounded-md bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                        <Phone size={10} />
                      </span>
                      02 99 73 02 25
                    </a>
                    <a
                      href="mailto:mairie.meillac@orange.fr"
                      className="hidden sm:flex items-center gap-1.5 text-forest-300 hover:text-white text-[11px] font-body tracking-wide transition-colors group"
                    >
                      <span className="w-5 h-5 rounded-md bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                        <Mail size={10} />
                      </span>
                      mairie.meillac@orange.fr
                    </a>
                  </div>

                  {/* Droite : Facebook + horaires rapides */}
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-forest-500 text-[11px] font-body">
                      Mar–Ven : 9h–12h30 & 14h–17h15
                    </span>
                    <a
                      href="https://www.facebook.com/communedemeillac/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-forest-300 hover:text-white text-[11px] font-body transition-colors group"
                    >
                      <span className="w-5 h-5 rounded-md bg-white/10 group-hover:bg-[#1877F2]/40 flex items-center justify-center transition-colors">
                        <Facebook size={10} />
                      </span>
                      <span className="hidden sm:inline">Facebook</span>
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Barre de navigation principale ── */}
        <nav
          className={[
            'container-main flex items-center justify-between transition-all duration-300',
            isCompact ? 'h-16' : 'h-[60px]',
          ].join(' ')}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className={[
              'w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center transition-all',
              isCompact ? 'bg-forest-100' : 'bg-white/15 backdrop-blur-sm',
            ].join(' ')}>
              <img
                src="https://meillac.fr/wp-content/uploads/2017/07/logo-meillac1.png"
                alt="Meillac"
                className="h-7 w-auto object-contain"
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            <div>
              <div className={`font-display font-bold text-[17px] leading-none transition-colors ${isCompact ? 'text-forest-900' : 'text-white'}`}>
                Meillac
              </div>
              <div className={`font-body text-[9px] tracking-[0.18em] uppercase leading-none mt-0.5 transition-colors ${isCompact ? 'text-forest-500' : 'text-white/55'}`}>
                Commune · Ille-et-Vilaine
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={[
                      'nav-link flex items-center gap-1 px-3 py-2 rounded-lg transition-all text-sm',
                      isCompact
                        ? `text-forest-800 hover:text-forest-600 hover:bg-forest-50 ${openDropdown === item.label ? 'bg-forest-50 text-forest-600' : ''}`
                        : `text-white/90 hover:text-white hover:bg-white/10 ${openDropdown === item.label ? 'bg-white/10 text-white' : ''}`,
                    ].join(' ')}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 opacity-60 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.97 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-2xl overflow-hidden
                                   bg-white/90 backdrop-blur-xl border border-white/80
                                   shadow-[0_8px_40px_rgba(0,0,0,0.14)]"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Thin green accent line at top */}
                        <div className="h-0.5 bg-gradient-to-r from-forest-500 to-forest-300" />
                        <div className="py-1.5">
                          {item.children.map((child) =>
                            child.external ? (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-2.5 text-forest-700
                                           hover:bg-forest-50/80 hover:text-forest-900 font-body text-sm
                                           transition-colors group/item"
                              >
                                {child.label}
                                <ExternalLink size={11} className="opacity-0 group-hover/item:opacity-60 transition-opacity" />
                              </a>
                            ) : (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="flex items-center px-4 py-2.5 text-forest-700
                                           hover:bg-forest-50/80 hover:text-forest-900 font-body text-sm
                                           transition-colors"
                              >
                                {child.label}
                              </Link>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    [
                      'nav-link px-3 py-2 rounded-lg transition-all text-sm',
                      isCompact
                        ? `text-forest-800 hover:text-forest-600 hover:bg-forest-50 ${isActive ? 'bg-forest-50 text-forest-900 font-semibold' : ''}`
                        : `text-white/90 hover:text-white hover:bg-white/10 ${isActive ? 'bg-white/15 text-white font-semibold' : ''}`,
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}

            {/* CTA button */}
            <Link
              to="/contact"
              className={[
                'ml-3 inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-body font-semibold tracking-wide transition-all active:scale-95',
                isCompact
                  ? 'bg-forest-800 text-white hover:bg-forest-700 shadow-sm hover:shadow-md'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm',
              ].join(' ')}
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className={[
              'lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all',
              isCompact
                ? 'bg-forest-100 text-forest-800 hover:bg-forest-200'
                : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm',
            ].join(' ')}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>

        {/* ── Glassmorphism subtle bottom separator (compact mode only) ── */}
        {isCompact && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-200/60 to-transparent" />
        )}
      </header>

      {/*
       * ─────────────────────────────────────────────────────
       * MENU MOBILE
       * ─────────────────────────────────────────────────────
       */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-forest-950/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw]
                         bg-forest-950/95 backdrop-blur-2xl
                         border-l border-white/10 flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <img
                      src="https://meillac.fr/wp-content/uploads/2017/07/logo-meillac1.png"
                      alt="Meillac"
                      className="h-6 w-auto object-contain"
                      onError={e => { e.target.style.display = 'none' }}
                    />
                  </div>
                  <span className="font-display font-bold text-white text-base">Meillac</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {item.children ? (
                      <div className="mb-1">
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl
                                     text-white/90 hover:text-white hover:bg-white/10
                                     font-body font-medium text-sm transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            size={15}
                            className={`text-white/50 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                          />
                        </button>

                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 border-l border-white/10 pl-3 mb-1"
                            >
                              {item.children.map(child =>
                                child.external ? (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-3 py-2.5 rounded-lg
                                               text-forest-300 hover:text-white hover:bg-white/10
                                               font-body text-sm transition-colors"
                                  >
                                    {child.label}
                                    <ExternalLink size={11} className="opacity-50" />
                                  </a>
                                ) : (
                                  <Link
                                    key={child.label}
                                    to={child.href}
                                    className="block px-3 py-2.5 rounded-lg
                                               text-forest-300 hover:text-white hover:bg-white/10
                                               font-body text-sm transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-4 py-3 rounded-xl mb-1
                                   text-white/90 hover:text-white hover:bg-white/10
                                   font-body font-medium text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer — contact info */}
              <div className="px-6 py-5 border-t border-white/10 space-y-3">
                <a
                  href="tel:0299730225"
                  className="flex items-center gap-3 text-forest-300 hover:text-white font-body text-sm transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-forest-800 group-hover:bg-forest-700 flex items-center justify-center transition-colors">
                    <Phone size={14} className="text-forest-300" />
                  </span>
                  02 99 73 02 25
                </a>
                <a
                  href="mailto:mairie.meillac@orange.fr"
                  className="flex items-center gap-3 text-forest-300 hover:text-white font-body text-sm transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-forest-800 group-hover:bg-forest-700 flex items-center justify-center transition-colors">
                    <Mail size={14} className="text-forest-300" />
                  </span>
                  mairie.meillac@orange.fr
                </a>
                <a
                  href="https://www.facebook.com/communedemeillac/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-forest-300 hover:text-white font-body text-sm transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-forest-800 group-hover:bg-[#1877F2]/60 flex items-center justify-center transition-colors">
                    <Facebook size={14} className="text-forest-300" />
                  </span>
                  Commune de Meillac
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/*
       * Spacer pour compenser le header fixe sur les pages intérieures.
       * Sur la home, le hero pleine hauteur compense lui-même.
       */}
      {!isHome && (
        <div style={{ height: NAV_H }} />
      )}
    </>
  )
}
