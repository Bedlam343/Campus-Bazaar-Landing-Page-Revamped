import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const Testimonials = () => {
  // Generate random hearts for background
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
  }));

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Floating Hearts Animation */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-amber-500/20"
          initial={{ y: '110vh', x: h.left, opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, 1, 0] }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Heart fill="currentColor" size={20 + Math.random() * 30} />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Students <span className="text-amber-400">Love It</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Martha V.',
              role: 'Engineering @ USC',
              quote: 'I felt safe buying here because everyone is verified.',
            },
            {
              name: 'Emily L.',
              role: 'Bio @ UCLA',
              quote: 'Found lab equipment for cheap. The AI search is insane!',
            },
            {
              name: 'Carlos M.',
              role: 'Business @ UCSD',
              quote:
                'Sold my old monitor in 2 hours. No fees is a game changer.',
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-4xl leading-none font-serif text-white/50">
                &quot;
              </div>
              <p className="text-slate-300 mb-6 italic">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-indigo-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
