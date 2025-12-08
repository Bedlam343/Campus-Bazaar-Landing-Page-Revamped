'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, MessageSquareLock, Users } from 'lucide-react';
import Badge from './ui/Badge';

const SafetySection = () => {
  const features = [
    {
      icon: <MapPin className="text-indigo-400" />,
      title: 'Designated Safe Zones',
      description:
        'Meet in officially recommended public spots on campus, like student unions or well-lit library plazas.',
    },
    {
      icon: <Users className="text-indigo-400" />,
      title: 'Verified Profiles Only',
      description:
        "You always know who you're meeting. Every user is verified via their official .edu campus email.",
    },
    {
      icon: <MessageSquareLock className="text-indigo-400" />,
      title: 'Private In-App Chat',
      description:
        'Coordinate details without ever sharing your personal phone number or social media profiles.',
    },
  ];

  return (
    <section
      id="safety-zones"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      {/* Background subtle glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <Badge>
              <ShieldCheck size={14} className="mr-1 inline" /> Campus Safety
              First
            </Badge> */}
            <h2
              className="text-4xl lg:text-5xl font-bold text-white 
                mt-6 mb-6 leading-tight select-none"
            >
              Meet Safely in <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-teal-300">
                Official Zones.
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              We&apos;ve removed the sketchiness of online marketplaces. Campus
              Bazaar is built entirely around student safety and verified
              on-campus interactions.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors"
                >
                  <div className="mt-1 bg-indigo-500/20 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image & Overlay UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000 lg:ml-10"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-800/50 shadow-2xl z-10 group">
              {/* Replace with an image of students meeting in a public campus area */}
              <img
                src="/images/students_handshake.png"
                alt="Students meeting in campus center"
                className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-indigo-950/25 mix-blend-multiply" />{' '}
              {/* Moody overlay */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
