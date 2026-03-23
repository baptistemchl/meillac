import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Clock, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-200">
      {/* Main footer */}
      <div className="container-main py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://meillac.fr/wp-content/uploads/2017/07/logo-meillac1.png"
                alt="Meillac"
                className="h-10 w-auto object-contain brightness-0 invert opacity-80"
                onError={e => { e.target.style.display = 'none' }}
              />
              <div>
                <div className="font-display font-bold text-xl text-white">Meillac</div>
                <div className="font-body text-xs text-forest-400 tracking-wide">Commune · Bretagne</div>
              </div>
            </div>
            <p className="font-body text-sm text-forest-400 leading-relaxed mt-4">
              Commune rurale d'Ille-et-Vilaine, au cœur de la Bretagne Romantique, à quelques kilomètres du Mont-Saint-Michel.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/communedemeillac/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-forest-800 text-forest-300 hover:bg-forest-700 hover:text-white transition-colors"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-body font-semibold text-white text-sm tracking-wider uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'La Commune', href: '/la-commune' },
                { label: 'Les Élus', href: '/vie-municipale/elus' },
                { label: 'Les Commissions', href: '/vie-municipale/commissions' },
                { label: 'Conseil Municipal', href: '/vie-municipale/conseil' },
                { label: 'Agenda & Actualités', href: '/agenda' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-body text-sm text-forest-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body font-semibold text-white text-sm tracking-wider uppercase mb-5">
              Vie Pratique
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Démarches Administratives', href: '/vie-pratique/demarches' },
                { label: 'Agence Postale', href: '/vie-pratique/agence-postale' },
                { label: 'École & Restaurant', href: '/vie-pratique/ecole' },
                { label: 'Médiathèque', href: '/vie-pratique/mediatheque' },
                { label: 'Associations', href: '/vie-pratique/associations' },
                { label: 'Professionnels', href: '/vie-pratique/professionnels' },
                { label: 'Déchets — Smictom', href: 'https://www.smictom-ille-rance.fr/', external: true },
              ].map(l => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank" rel="noopener noreferrer"
                      className="font-body text-sm text-forest-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {l.label} <ExternalLink size={10} />
                    </a>
                  ) : (
                    <Link to={l.href} className="font-body text-sm text-forest-400 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body font-semibold text-white text-sm tracking-wider uppercase mb-5">
              Nous Trouver
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-gold-400 shrink-0" />
                <span className="font-body text-sm text-forest-400">
                  1 place de la Mairie<br />35270 Meillac
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <a href="tel:0299730225" className="font-body text-sm text-forest-400 hover:text-white transition-colors">
                  02 99 73 02 25
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-400 shrink-0" />
                <a href="mailto:mairie.meillac@orange.fr" className="font-body text-sm text-forest-400 hover:text-white transition-colors break-all">
                  mairie.meillac@orange.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="mt-0.5 text-gold-400 shrink-0" />
                <div className="font-body text-xs text-forest-400 leading-relaxed">
                  Lun : 14h15 – 17h15<br />
                  Mar–Ven : 9h–12h30 & 14h–17h15<br />
                  Sam : 9h45–12h (semaines paires)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-800">
        <div className="container-main py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-forest-600">
            © {new Date().getFullYear()} Mairie de Meillac — Tous droits réservés
          </p>
          <div className="flex items-center gap-4 text-xs font-body text-forest-600">
            <a href="#" className="hover:text-forest-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-forest-400 transition-colors">Accessibilité</a>
            <a href="#" className="hover:text-forest-400 transition-colors">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
