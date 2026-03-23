import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import LaCommune from './pages/LaCommune'
import VieMunicipale from './pages/VieMunicipale'
import ViePratique from './pages/ViePratique'
import Agenda from './pages/Agenda'
import Contact from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  in:      { opacity: 1, y: 0 },
  out:     { opacity: 0, y: -10 },
}
const pageTransition = { duration: 0.35, ease: 'easeInOut' }

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/"                       element={<Home />} />
          <Route path="/la-commune"             element={<LaCommune />} />
          <Route path="/vie-municipale"         element={<VieMunicipale />} />
          <Route path="/vie-municipale/:tab"    element={<VieMunicipale />} />
          <Route path="/vie-pratique"           element={<ViePratique />} />
          <Route path="/vie-pratique/:tab"      element={<ViePratique />} />
          <Route path="/agenda"                 element={<Agenda />} />
          <Route path="/contact"                element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
