'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MailCheck, Search, Handshake, ArrowDown } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      title: 'Verified Sign Up',
      description:
        'Connect using your campus .edu email. We verify every user to ensure a safe, student-only community.',
      icon: <MailCheck size={28} />,
      colorTheme: 'indigo',
      gradientFrom: '#6366f1',
      gradientTo: '#3b82f6',
    },
    {
      id: '02',
      title: 'Smart Browsing',
      description:
        'Find exactly what you need instantly using our AI-powered semantic search tools.',
      icon: <Search size={28} />,
      colorTheme: 'violet',
      gradientFrom: '#8b5cf6',
      gradientTo: '#d946ef',
    },
    {
      id: '03',
      title: 'Safe Exchange',
      description:
        'Chat securely and meet up in designated campus safety zones. Zero fees, 100% peace of mind.',
      icon: <Handshake size={28} />,
      colorTheme: 'amber',
      gradientFrom: '#f59e0b',
      gradientTo: '#ef4444',
    },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 70, damping: 20 },
    },
  };

  // Path 1 draws first (Delay: 1s, Duration: 1.2s)
  const path1Variants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeIn',
      },
    },
  };
  // Path 2 draws immediately after Path 1 finishes (Delay: 1s + 1.2s = 2.2s)
  const path2Variants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 1.2, // Starts exactly when Path 1 ends
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="pt-8 pb-32 bg-slate-950 relative overflow-hidden"
    >
      {/* --- Ambient Background Noise & Light --- */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-900/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* <Badge>
              <span className="flex items-center gap-2">
                <Sparkles size={12} className="text-amber-400" />
                Streamlined Process
              </span>
            </Badge> */}
            <h2
              className="text-3xl md:text-5xl font-bold text-white
                mt-6 mb-4 tracking-tight leading-tight select-none"
            >
              How{' '}
              <span
                className="text-transparent bg-clip-text 
                bg-linear-to-r from-white to-slate-800"
              >
                It Works
              </span>
            </h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
              Campus Bazaar makes buying and selling on campus simple, secure,
              and student-focused. Here&apos;s our seamless 3-step process:
            </p>
          </motion.div>
        </div>

        {/* --- The Flow Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative grid md:grid-cols-3 gap-x-8 gap-y-16 
          items-center"
        >
          {/* === Desktop Abstract Connectors (SVGs) === */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 400"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    stopColor={steps[0].gradientFrom}
                    stopOpacity="0.4"
                  />
                  <stop
                    offset="100%"
                    stopColor={steps[1].gradientFrom}
                    stopOpacity="0.4"
                  />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    stopColor={steps[1].gradientFrom}
                    stopOpacity="0.4"
                  />
                  <stop
                    offset="100%"
                    stopColor={steps[2].gradientFrom}
                    stopOpacity="0.4"
                  />
                </linearGradient>
              </defs>

              {/* Path 1: Arcing down from Step 1 to Step 2 */}
              <motion.path
                variants={path1Variants} // Applied specific variant
                d="M 300,150 C 450,150 450,250 600,250"
                stroke="url(#grad1)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="10 10"
              />

              {/* Path 2: Arcing up from Step 2 to Step 3 */}
              <motion.path
                variants={path2Variants} // Applied specific variant
                d="M 600,250 C 750,250 750,150 900,150"
                stroke="url(#grad2)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="10 10"
              />
            </svg>
          </div>

          {/* === The Steps Loop === */}
          {steps.map((step, index) => {
            const desktopPositionClass =
              index === 1 ? 'md:translate-y-12' : 'md:-translate-y-6';

            return (
              <React.Fragment key={step.id}>
                <motion.div
                  variants={cardVariants}
                  className={`relative z-10 group ${desktopPositionClass}`}
                >
                  {/* 1. Deep colored blur blob behind the card */}
                  <div
                    className="absolute -inset-4 rounded-[3rem] blur-3xl 
                    opacity-20 group-hover:opacity-40 transition-opacity 
                    duration-500 -z-10"
                    style={{
                      background: `linear-gradient(to bottom right, ${step.gradientFrom}, ${step.gradientTo})`,
                    }}
                  />

                  {/* 2. The Main Glass Card */}
                  <div
                    className="relative h-full bg-slate-900/75 
                    border border-white/10 
                    rounded-[2.5rem] p-8 overflow-hidden transition-all 
                    duration-500 group-hover:border-white/20
                    group-hover:-translate-y-2 group-hover:shadow-2xl 
                    group-hover:shadow-black/50"
                  >
                    <div
                      className="absolute inset-0 bg-linear-to-b
                     from-white/5 to-transparent opacity-0 
                     group-hover:opacity-100 transition-opacity 
                     duration-700 pointer-events-none"
                    />

                    {/* 3. Watermark Number */}
                    <span
                      className="absolute -bottom-10 -right-4 text-[10rem] font-extrabold leading-none tracking-tighter select-none pointer-events-none font-sans"
                      style={{
                        background: `linear-gradient(to bottom, white, transparent)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        opacity: 0.03,
                      }}
                    >
                      {step.id}
                    </span>

                    {/* Card Content */}
                    <div className="relative z-20 flex flex-col items-center text-center">
                      <div
                        className="w-20 h-20 rounded-2xl p-[2px] mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          backgroundImage: `linear-gradient(to bottom right, ${step.gradientFrom}, ${step.gradientTo})`,
                        }}
                      >
                        <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center relative overflow-hidden">
                          <div
                            className="absolute inset-0 opacity-30"
                            style={{
                              backgroundImage: `linear-gradient(to bottom right, ${step.gradientFrom}, ${step.gradientTo})`,
                            }}
                          />
                          <div className="relative text-white z-10 filter drop-shadow-glow">
                            {step.icon}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-100 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="md:hidden flex justify-center text-slate-700 py-4"
                  >
                    <ArrowDown className="animate-bounce" size={24} />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
