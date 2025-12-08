'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  ArrowRight,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Send,
} from 'lucide-react';
import Button from './ui/Button';
import Image from 'next/image';

const Footer = () => {
  const links = {
    Marketplace: [
      'Electronics',
      'Textbooks',
      'Clothing',
      'Dorm Essentials',
      'Free Stuff',
    ],
    Company: ['About Us', 'Careers', 'Campus Ambassadors', 'Press Kit'],
    Support: [
      'Safety Guidelines',
      'Help Center',
      'Terms of Service',
      'Privacy Policy',
    ],
  };

  return (
    <footer className="relative bg-slate-950 pt-32 pb-10 overflow-hidden">
      {/* --- Background Atmosphere --- */}
      {/* Massive bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e505_1px,transparent_1px),linear-gradient(to_bottom,#4f46e505_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- 1. The Giant CTA Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-linear-to-br from-indigo-900/30 to-slate-900/30 border border-indigo-500/20 p-12 md:p-24 text-center mb-24 group"
        >
          {/* Internal Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-700" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2
              className="text-4xl md:text-6xl font-bold text-white 
              mb-6 tracking-tight select-none"
            >
              Ready to clear out <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 to-amber-300">
                your dorm room?
              </span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students turning clutter into cash. Safe,
              verified, and completely free to start.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="accent"
                className="h-14 px-10 text-lg rounded-full 
                shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)] 
                hover:shadow-[0_0_50px_-5px_rgba(251,191,36,0.6)] 
                transition-shadow cursor-pointer"
              >
                Create Free Account
              </Button>
              <Button
                variant="secondary"
                className="h-14 px-10 text-lg rounded-full 
                bg-slate-900/50 border-slate-700 hover:bg-slate-800
                cursor-pointer"
              >
                Browse Marketplace
              </Button>
            </div>
          </div>
        </motion.div>

        {/* --- 2. Main Footer Links --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-24 border-t border-white/5 pt-16">
          {/* Brand Column (2 cols wide) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-white mb-6">
              <Image
                src="/images/campus_bazaar_bag_w50.png"
                width={30}
                height={30}
                alt="Campus Bazaar Logo Bag"
              />
              Campus<span className="text-indigo-400">Bazaar</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-xs">
              The student-first marketplace. Built to make campus trading safe,
              easy, and fee-free for everyone.
            </p>

            {/* Newsletter Input */}
            <div className="w-full max-w-xs">
              <p className="text-white text-sm font-semibold mb-3">
                Stay in the loop
              </p>
              <div className="flex relative">
                <input
                  type="email"
                  placeholder="Enter your .edu email"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-4 pr-12 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-400 transition-colors">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="text-white font-bold mb-6">{title}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Column */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/20 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- 3. Bottom Bar & Giant Watermark --- */}
        <div className="relative pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2025 Campus Bazaar Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* GIANT WATERMARK */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center -mb-[5vw] opacity-[0.03]">
          <h1 className="text-[18vw] font-black text-white leading-none whitespace-nowrap">
            CAMPUS BAZAAR
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
