import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Leaf, ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/9jzqfM3yQhX0k9Jt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for cinematic depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">Fresh. Global. Sustainable.</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
              Premium Fresh Produce for the World’s Finest Brands
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-600">
              From orchards to oceans, we orchestrate a transparent and efficient supply chain that keeps fruit at peak freshness—delivered with precision, traceability, and care.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#products" className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-white transition hover:bg-gray-800">
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 transition hover:ring-gray-300">
                Become a Partner
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
