import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Lemon, Grape, Leaf } from 'lucide-react';

const products = [
  {
    name: 'Citrus',
    icon: Lemon,
    color: 'from-amber-200 via-amber-100 to-white',
    notes: 'Peak-season oranges, lemons, and mandarins with full traceability.'
  },
  {
    name: 'Apples',
    icon: Apple,
    color: 'from-red-200 via-rose-100 to-white',
    notes: 'Hand-picked premium varieties with crisp texture and long shelf life.'
  },
  {
    name: 'Grapes',
    icon: Grape,
    color: 'from-violet-200 via-violet-100 to-white',
    notes: 'Seedless, firm, and transport-optimized for zero compromise freshness.'
  },
  {
    name: 'Organics',
    icon: Leaf,
    color: 'from-emerald-200 via-emerald-100 to-white',
    notes: 'Certified organic lines grown with regenerative practices.'
  }
];

export default function ProductsShowcase() {
  return (
    <section id="products" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Our Products</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Curated portfolio of fruit categories, sourced from trusted growers across hemispheres.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-full bg-gray-900 px-4 py-2 text-sm text-white ring-1 ring-gray-900/10 transition hover:bg-gray-800 md:block">
            Request Catalog
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b ${p.color} p-5 shadow-sm ring-1 ring-black/5`}
            >
              <div className="absolute right-[-20%] top-[-20%] h-40 w-40 rounded-full bg-white/40 blur-2xl" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-gray-900 shadow-sm">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.notes}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, idx) => (
                      <span key={idx} className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-medium text-gray-700 ring-1 ring-black/5">
                        {idx + 1}
                      </span>
                    ))}
                  </div>
                  <button className="rounded-full bg-gray-900 px-3 py-1.5 text-xs text-white transition hover:bg-gray-800">
                    View Specs
                  </button>
                </div>
              </div>
              <motion.div
                className="pointer-events-none absolute inset-0"
                initial={{ y: 30, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              >
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
