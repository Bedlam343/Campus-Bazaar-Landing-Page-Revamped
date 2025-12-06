import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import Button from './ui/Button';

const SmartSearch = () => {
  const [text, setText] = useState('');
  const fullText = "Who's selling a mini-fridge in freshman dorms?";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(
          () => {
            setText(fullText.slice(0, text.length + 1));
          },
          50 + Math.random() * 50,
        ); // Random typing speed
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 30);
      } else {
        timeout = setTimeout(() => setIsTyping(true), 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-300 text-sm mb-6">
            <Sparkles size={14} /> AI-Powered Semantics
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Campus SmartSearch™
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Stop scrolling through endless lists. Just ask for what you need
            like you&apos;re texting a friend. Our AI finds the best matches on
            campus.
          </p>

          {/* Search Interface */}
          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-amber-400 rounded-xl opacity-25 group-hover:opacity-50 blur transition duration-500" />
              <div className="relative bg-slate-900 rounded-xl border border-slate-700 p-2 flex items-center shadow-2xl">
                <Search className="text-slate-500 ml-4" size={24} />
                <input
                  disabled
                  value={text}
                  className="w-full bg-transparent border-none focus:ring-0 text-white text-lg px-4 py-3 font-mono"
                  placeholder=""
                />
                <div className="w-2 h-6 bg-amber-400 animate-pulse" />{' '}
                {/* Cursor */}
                <Button className="ml-2">Search</Button>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2 text-xs text-slate-500 uppercase tracking-widest font-semibold">
              Powered by OpenAI API
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartSearch;
