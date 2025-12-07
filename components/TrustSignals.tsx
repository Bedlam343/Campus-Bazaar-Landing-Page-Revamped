'use client';

import { motion } from 'motion/react';
import { GraduationCap, ShieldCheck, Zap } from 'lucide-react';

const TrustSignals = () => {
  const features = [
    { icon: <GraduationCap />, text: '.edu Verified Only' },
    { icon: <ShieldCheck />, text: 'Safe Meetup Zones' },
    { icon: <Zap />, text: 'Zero Platform Fees' },
  ];

  return (
    <div className="bg-slate-950  py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-slate-300 font-medium"
            >
              <div className="text-amber-400 scale-110">{f.icon}</div>
              <span className="text-lg select-none">{f.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
