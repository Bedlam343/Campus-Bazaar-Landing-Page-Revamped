'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/utils/constants';

// --- 3D Tilt Card Component ---
const TiltCard = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation based on mouse position relative to center
    const xPct = x / width - 0.5;
    const yPct = y / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 150,
    damping: 20,
  });
  const scale = useSpring(useTransform(mouseX, [-0.5, 0.5], [1, 1]), {
    stiffness: 150,
    damping: 20,
  }); // Slight scale on interaction handled by hover

  // Dynamic glow gradient
  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  const glowBg = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(99, 102, 241, 0.15), transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      className={`relative group perspective-1000 ${className}`}
    >
      <div className="relative h-full rounded-3xl bg-slate-900 backdrop-blur-md border border-white/10 p-8 shadow-2xl transition-colors duration-500 group-hover:border-indigo-500/30 overflow-hidden">
        {/* Dynamic Follow Light */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: glowBg }}
        />

        {/* Content */}
        <div
          className="relative z-10"
          style={{ transform: 'translateZ(20px)' }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const Testimonials = () => {
  const col1 = TESTIMONIALS.slice(0, 3);
  const col2 = TESTIMONIALS.slice(3, 6);

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-15 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 
            rounded-full border border-indigo-500/30 bg-indigo-500/10
             text-indigo-300 text-xs font-bold uppercase tracking-widest 
             mb-6 select-none"
            >
              <Star size={12} fill="currentColor" />
              Testimonials
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white 
              tracking-tight mb-6 select-none"
            >
              Students{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-amber-300">
                Love It
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Verified reviews from real students on campuses across the
              country.
            </p>
          </motion.div>
        </div>

        {/* --- Parallax Masonry Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-start">
          {/* Column 1 - Moves Up */}
          <motion.div className="flex flex-col gap-8">
            {col1.map((t, i) => (
              <TiltCard key={t.id} className="w-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <Quote size={40} className="text-indigo-100/50 rotate-180" />
                </div>

                <p className="text-slate-200 text-lg leading-relaxed mb-6 font-medium">
                  &quot;{t.quote}&quot;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 p-[1px]">
                    <Image src={t.image} alt={t.name} height={40} width={40} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className="text-slate-500 text-xs uppercase tracking-wide font-semibold">
                      {t.role}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>

          {/* Column 2 - Moves Down (Offset start) */}
          <motion.div className="flex flex-col gap-8 mt-8 md:mt-16">
            {col2.map((t, i) => (
              <TiltCard key={t.id} className="w-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <Quote size={40} className="text-indigo-100/50 rotate-180" />
                </div>

                <p className="text-slate-200 text-lg leading-relaxed mb-6 font-medium">
                  &quot;{t.quote}&quot;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-500 to-orange-600 p-[1px]">
                    <Image src={t.image} alt={t.name} height={40} width={40} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className="text-slate-500 text-xs uppercase tracking-wide font-semibold">
                      {t.role}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
