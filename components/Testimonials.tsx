'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Star } from 'lucide-react';

// --- Data ---
const testimonials = [
  {
    id: 1,
    name: 'Martha V.',
    role: 'Engineering @ USC',
    quote:
      'I felt safe buying here because everyone is verified. It sets it apart from other marketplaces.',
    rating: 5,
    image: '/images/profiles/martha.png',
  },
  {
    id: 2,
    name: 'Emily L.',
    role: 'Bio @ UCLA',
    quote:
      'Found lab equipment for cheap. The AI search is insane! It knew exactly what I needed.',
    rating: 5,
    image: '/images/profiles/emily.png',
  },
  {
    id: 3,
    name: 'Carlos M.',
    role: 'Business @ UCSD',
    quote:
      'Sold my old monitor in 2 hours. No fees is a game changer for a student budget.',
    rating: 5,
    image: '/images/profiles/carlos.png',
  },
  {
    id: 4,
    name: 'Derek G.',
    role: 'Design @ NYU',
    quote:
      'Scored an amazing vintage jacket for half the price of a thrift store. Love the fashion vibes here.',
    rating: 5,
    image: '/images/profiles/derek.png',
  },
  {
    id: 5,
    name: 'Dev K.',
    role: 'CS @ UT Austin',
    quote:
      'Furnished my entire dorm room in one weekend without leaving campus. So much easier than hauling stuff.',
    rating: 5,
    image: '/images/profiles/dev_kharod.png',
  },
  {
    id: 6,
    name: 'Donovan M.',
    role: 'Lit @ Berkeley',
    quote:
      "It's actually cool meeting the people you buy from. Feels more like a campus community transaction.",
    rating: 5,
    image: '/images/profiles/donovan.png',
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* --- Ambient Background --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 
              rounded-full border border-indigo-500/20 bg-indigo-500/5
               text-indigo-300 text-xs font-medium uppercase 
               tracking-widest mb-6 select-none"
            >
              <Star size={12} fill="currentColor" />
              Testimonials
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-white 
              tracking-tight mb-4 select-none"
            >
              Loved by <span className="text-amber-400">Students</span>
            </h2>
            <p className="text-slate-400 text-base font-normal">
              Join thousands of verified students trading safely on campus.
            </p>
          </motion.div>
        </div>

        {/* --- The Focus Grid --- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-6 group/grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group/card z-0 hover:z-10"
            >
              <div
                className="h-full bg-slate-800/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 
                           transition-all duration-300 ease-out
                           group-hover/grid:opacity-50 group-hover/grid:scale-95
                           hover:opacity-100! hover:scale-[1.03]!
                           hover:bg-slate-800/80 hover:border-indigo-500/50
                           hover:shadow-xl hover:shadow-indigo-500/20 cursor-default"
              >
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-indigo-500/50
                  transition-colors group-hover/card:text-indigo-500/75"
                />

                {/* Profile Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover/card:border-indigo-400/50 transition-colors">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">{t.name}</h4>
                    <p className="text-indigo-300/70 text-xs font-normal uppercase tracking-wide">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm font-normal leading-relaxed relative z-10">
                  "{t.quote}"
                </p>

                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
