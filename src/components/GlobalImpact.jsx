import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Building2, Mail, Phone } from 'lucide-react';

const hubs = [
  { name: 'Spain', x: '46%', y: '38%' },
  { name: 'Morocco', x: '47%', y: '45%' },
  { name: 'South Africa', x: '54%', y: '69%' },
  { name: 'Chile', x: '23%', y: '66%' },
  { name: 'USA', x: '18%', y: '40%' },
  { name: 'UAE', x: '63%', y: '44%' },
];

const clients = ['Five-Star Hotels', 'Premium Retail', 'Airlines', 'Cruise Lines', 'Michelin Kitchens'];

export default function GlobalImpact() {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
              <Globe2 className="h-4 w-4" />
              <span className="text-sm font-medium">Global Reach</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Sustainability at Scale</h2>
            <p className="mt-3 text-gray-600">
              We partner with growers and buyers on every continent to ensure responsible sourcing, low-carbon logistics, and complete transparency.
            </p>
          </div>
          <p className="text-gray-600 md:pl-8">
            Our farms and distribution hubs are strategically positioned to balance seasonality across hemispheres, reduce waste, and maximize freshness.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="relative mx-auto mb-12 h-[420px] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-50 to-white ring-1 ring-emerald-100">
          <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_120%,rgba(16,185,129,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(16,185,129,0.06)_25px),linear-gradient(90deg,transparent_24px,rgba(16,185,129,0.06)_25px)] bg-[size:25px_25px]" />

          {/* Simplified markers */}
          {hubs.map((h, i) => (
            <motion.div
              key={h.name}
              className="group absolute"
              style={{ left: h.x, top: h.y }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="relative">
                <span className="absolute -left-3 -top-3 h-10 w-10 animate-ping rounded-full bg-emerald-400/30" />
                <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-600 ring-2 ring-white" />
                <span className="ml-2 rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 opacity-0 transition group-hover:opacity-100">
                  {h.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <div id="clients" className="mb-16 overflow-hidden">
          <div className="mb-6 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-gray-900">Trusted by leaders in hospitality and retail</h3>
          </div>
          <div className="relative">
            <div className="animate-[marquee_24s_linear_infinite] whitespace-nowrap [--gap:3rem]">
              {clients.concat(clients).map((c, idx) => (
                <span key={idx} className="mx-6 inline-flex items-center rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700 ring-1 ring-gray-200">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          `}</style>
        </div>

        {/* Contact */}
        <div id="contact" className="rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200">
          <div className="mb-6 flex items-center gap-2">
            <Mail className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <form className="md:col-span-2">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-emerald-300" placeholder="Name" />
                <input type="email" className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-emerald-300" placeholder="Email" />
              </div>
              <textarea rows={4} className="mt-4 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-emerald-300" placeholder="How can we help?" />
              <button type="button" className="mt-4 inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-white transition hover:bg-gray-800">
                Send Inquiry
              </button>
            </form>
            <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200">
              <p className="text-sm text-gray-600">Prefer to talk?</p>
              <a href="tel:+0000000000" className="mt-2 flex items-center gap-2 text-gray-900">
                <Phone className="h-4 w-4 text-emerald-600" />
                +00 000 000 000
              </a>
              <p className="mt-4 text-sm text-gray-600">Corporate HQ</p>
              <p className="text-gray-900">Amir Malaga International</p>
              <p className="text-gray-600">Global Logistics Park, Suite 300</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
