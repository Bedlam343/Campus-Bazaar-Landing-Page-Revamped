import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';

const HeroOptionB_Composition = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-indigo-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-amber-500/5 blur-[150px] rounded-full translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-5 gap-16 items-center">
        {/* Left Content Side (span 2/5) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <Badge>The Student-Only Economy</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6 mb-6 leading-[1.1] tracking-tight">
            Buy & Sell <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-indigo-400">
              On Campus Grounds.
            </span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            The safest way to trade. Verified .edu emails only. Meet up between
            classes. No shipping, no fees, no sketchiness.
          </p>
          <div className="flex gap-4">
            <Button variant="accent" className="px-6 py-3">
              Join Now <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" className="px-6 py-3">
              How it Works
            </Button>
          </div>
        </motion.div>

        {/* Right Image Composition Side (span 3/5) */}
        <div className="lg:col-span-3 relative perspective-1000">
          {/* Main Anchor Image - Grounded, less tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-20 rounded-3xl overflow-hidden shadow-2xl border border-slate-800/50"
          >
            {/* Replace with your actual image path */}
            <img
              src="/images/campus_bazaar_background_w1920.png"
              alt="Students collaborating"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-indigo-950/20 mix-blend-multiply" />
          </motion.div>

          {/* --- Floating UI Elements --- */}

          {/* Element 1: Trust Badge (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="absolute -bottom-8 -left-8 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-indigo-500/20 shadow-xl z-30 flex items-center gap-3"
          >
            <div className="bg-indigo-600 p-2 rounded-full text-white">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Verified Zone</p>
              <p className="text-indigo-300 text-xs">.edu emails only</p>
            </div>
          </motion.div>

          {/* Element 2: Live Activity Notification (Top Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0, y: [0, -8, 0] }}
            transition={{
              delay: 0.6,
              y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
            }}
            className="absolute -top-10 -right-4 bg-slate-800/90 backdrop-blur-md p-3 pr-5 rounded-full border border-slate-700 shadow-xl z-30 flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-slate-900">
                <Zap size={20} fill="currentColor" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-slate-800 rounded-full"></div>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Just Sold!</p>
              <p className="text-slate-300 text-xs">
                Mini-Fridge @ NYU for $45
              </p>
            </div>
          </motion.div>

          {/* Element 3: Social Interaction Bubble (Mid Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, 5, 0] }}
            transition={{
              delay: 0.8,
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 },
            }}
            className="absolute top-1/2 -right-12 bg-white text-slate-900 p-3 rounded-xl rounded-bl-none shadow-lg z-40 flex items-center gap-2 max-w-[180px]"
          >
            <MessageCircle size={16} className="text-indigo-600 shrink-0" />
            <p className="text-xs font-medium leading-tight">
              "Hey, can I pick up the textbook before Chem 101?"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroOptionB_Composition;
