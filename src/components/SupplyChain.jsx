import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Package, Truck, Ship, Scan, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Regenerative Farming',
    desc: 'Soil-first cultivation, water stewardship, and biodiversity programs at origin.',
    icon: Sprout,
  },
  {
    title: 'Smart Packing',
    desc: 'Rapid pre-cooling, atmospheric control, and sensor-enabled packaging.',
    icon: Package,
  },
  {
    title: 'Cold Chain Logistics',
    desc: 'Optimized routes across road, sea, and air with continuous temperature assurance.',
    icon: Truck,
  },
  {
    title: 'Global Shipping',
    desc: 'Port-to-port visibility and contingency planning for on-time arrivals.',
    icon: Ship,
  },
  {
    title: 'End-to-End Traceability',
    desc: 'Lot and batch-level tracking with QR codes and digital certificates.',
    icon: Scan,
  },
  {
    title: 'Quality & Compliance',
    desc: 'International certifications, audits, and ESG reporting built in.',
    icon: ShieldCheck,
  },
];

export default function SupplyChain() {
  return (
    <section id="supply" className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/50 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-50%,rgba(16,185,129,0.08),transparent)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Supply Chain, Perfected</h2>
          <p className="mt-3 text-gray-600">
            A cinematic, scroll-led overview of how we move produce from field to fork—without losing freshness.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-200 to-transparent sm:block" />
          <div className="space-y-10">
            {steps.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative grid grid-cols-1 items-start gap-6 rounded-2xl bg-white/70 p-6 ring-1 ring-emerald-100/60 backdrop-blur-sm sm:grid-cols-12"
              >
                <div className="sm:col-span-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                    <s.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="sm:col-span-11">
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
