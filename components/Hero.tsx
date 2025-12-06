import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';
import Image from 'next/image';

const HeroOptionA_Background = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[95vh] flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax & Overlay */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {/* Replace with your actual image path */}
        <Image
          src="/images/graduating_students_w1920.png"
          alt="Students on campus"
          className="w-full h-full object-cover scale-105"
          fill
        />
        {/* Heavy gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-indigo-950/60" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Badge>
              <ShieldCheck size={14} className="mr-1 inline select-none" />{' '}
              <span className="select-none">Official Campus Marketplace</span>
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-bold text-white mt-6 mb-6 leading-[1] tracking-tight select-none">
              Your Campus. <br />
              <span className="text-transparent bg-clip-text whitespace-nowrap select-none">
                <span className="text-amber-300">Your</span>{' '}
                <span className="text-indigo-400">Marketplace.</span>
              </span>
            </h1>
            <p
              className="text-xl text-slate-200 mb-10 max-w-xl 
              leading-relaxed font-medium drop-shadow-sm select-none"
            >
              Buy, sell, and trade safely with verified students at your
              university. Turn dorm clutter into cash instantly.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button
                variant="accent"
                className="text-lg px-8 py-4 shadow-amber-500/20"
              >
                Start Selling <ArrowRight size={20} className="ml-1" />
              </Button>
              <p
                className="text-slate-300 text-sm pl-4 border-l 
                border-slate-700 select-none"
              >
                <strong className="text-white block text-lg">Zero Fees.</strong>
                For students, forever.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  );
};

export default HeroOptionA_Background;
