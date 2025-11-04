import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Package, Route as RouteIcon, Globe2 } from 'lucide-react';
import Hero3D from './components/Hero3D';
import ProductsShowcase from './components/ProductsShowcase';
import SupplyChain from './components/SupplyChain';
import GlobalImpact from './components/GlobalImpact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-wide">AMIR MALAGA INTERNATIONAL</span>
          </a>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#products" className="hover:text-gray-900">Products</a>
            <a href="#supply" className="hover:text-gray-900">Supply Chain</a>
            <a href="#clients" className="hover:text-gray-900">Clients</a>
            <a href="#contact" className="rounded-full bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero with 3D scene */}
      <Hero3D />

      {/* About strip */}
      <section id="about" className="relative border-y border-gray-100 bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          <Feature icon={<Package className="h-5 w-5" />} title="Premium Sourcing" desc="Direct partnerships with audited growers across hemispheres." />
          <Feature icon={<RouteIcon className="h-5 w-5" />} title="Seamless Logistics" desc="Cold chain optimized routes and real-time tracking." />
          <Feature icon={<Globe2 className="h-5 w-5" />} title="Sustainable Impact" desc="Science-based targets and transparent ESG reporting." />
        </div>
      </section>

      {/* Products */}
      <ProductsShowcase />

      {/* Supply Chain */}
      <SupplyChain />

      {/* Global impact, clients, contact */}
      <GlobalImpact />

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Amir Malaga International. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-900">Privacy</a>
            <a href="#terms" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-4"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
      </div>
    </motion.div>
  );
}
