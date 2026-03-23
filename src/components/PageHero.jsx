import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, breadcrumb = [] }) {
  return (
    <div className="relative bg-gradient-hero overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-700/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-600/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Celtic pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-main relative z-10">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1.5 text-forest-300 text-xs font-body mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {item.href ? (
                  <Link to={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="accent-bar mb-5" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-forest-200 font-body text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
