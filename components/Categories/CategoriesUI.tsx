'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { BookOpen, Laptop, Shirt, ShoppingBag, Sparkles } from 'lucide-react';

type Props = {
  clothingImages: string[];
  electronicsImages: string[];
  suppliesImages: string[];
};

const CategoriesUI = ({
  clothingImages,
  electronicsImages,
  suppliesImages,
}: Props) => {
  // Configuration for each shelf to keep code clean and maintainable
  const shelves = [
    {
      title: 'Clothing & Fits',
      subtitle: 'Thrifted Gems & Merch',
      icon: <Shirt size={20} />,
      gradient: 'from-pink-500/20 to-rose-500/20',
      borderGlow: 'group-hover:border-pink-500/50',
      shadowGlow: 'group-hover:shadow-pink-500/20',
      images: clothingImages,
      direction: 'left' as const,
    },
    {
      title: 'Tech & Electronics',
      subtitle: 'Devices, Chargers & Audio',
      icon: <Laptop size={20} />,
      gradient: 'from-purple-500/20 to-indigo-500/20',
      borderGlow: 'group-hover:border-purple-500/50',
      shadowGlow: 'group-hover:shadow-purple-500/20',
      images: electronicsImages,
      direction: 'right' as const,
    },
    {
      title: 'Dorm & Supplies',
      subtitle: 'Textbooks, Stationery & Decor',
      icon: <ShoppingBag size={20} />,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      borderGlow: 'group-hover:border-emerald-500/50',
      shadowGlow: 'group-hover:shadow-emerald-500/20',
      images: suppliesImages,
      direction: 'left' as const,
    },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Main Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles size={12} />
            Marketplace Inventory
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white 
            tracking-tight select-none"
          >
            Everything You Need, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">
              All In One Place
            </span>
          </motion.h2>
        </div>

        {/* Categories Loop */}
        <div className="w-full max-w-7xl flex flex-col gap-20">
          {shelves.map((shelf, idx) => (
            <div key={idx} className="relative">
              {/* Shelf Header */}
              <div className="flex items-end gap-4 mb-8 px-4 md:px-0">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${shelf.gradient} border border-white/5 text-white shadow-lg`}
                >
                  {shelf.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {shelf.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{shelf.subtitle}</p>
                </div>
                {/* Decorative Line */}
                <div className="flex-grow h-px bg-gradient-to-r from-slate-800 to-transparent mb-2 ml-4" />
              </div>

              {/* Marquee Container */}
              <div
                className="relative w-full -mx-4 md:mx-0 mask-linear-fade"
                style={{
                  // Custom mask to fade edges smoothly transparent
                  maskImage:
                    'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
              >
                <Marquee
                  speed={35}
                  gradient={false} // We use CSS mask for smoother gradient
                  direction={shelf.direction}
                  pauseOnHover={true}
                  autoFill={true}
                >
                  {shelf.images.map((src, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="group relative mx-3 my-4" // Margin for spacing between cards
                    >
                      {/* Product Card */}
                      <div
                        className={`
                          w-[160px] h-[160px] md:w-[200px] md:h-[200px]
                          bg-slate-900/40 backdrop-blur-md 
                          border border-slate-800 
                          rounded-2xl p-6 
                          flex items-center justify-center 
                          transition-all duration-500 ease-out
                          hover:-translate-y-2 hover:bg-slate-800/60
                          ${shelf.borderGlow}
                          shadow-lg shadow-black/20 ${shelf.shadowGlow}
                        `}
                      >
                        {/* Image Container - Using object-contain to handle small/awkward sizes */}
                        <div className="relative w-full h-full flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-500">
                          <img
                            src={src}
                            alt="Campus Item"
                            className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>

                        {/* Hover Overlay Shine */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesUI;
