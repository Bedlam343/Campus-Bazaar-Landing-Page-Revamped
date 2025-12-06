import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  AnimationPlaybackControlsWithThen,
  motion,
  useInView,
} from 'motion/react';
import { Search, Sparkles } from 'lucide-react';

import Button from './ui/Button';
import { animate } from 'motion';

const inputs = [
  'Find a used MacBook under $800',
  'Find calculus book required for Math 101',
  "Who's selling dorm furniture on campus?",
  'Find affordable bikes near UCLA',
  'Looking for a used iPhone 12 or 13',
];

const SmartSearch = () => {
  const [text, setText] = useState('');
  const [inputIndex, setInputIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let controls: AnimationPlaybackControlsWithThen;
    let isMounted = true;
    const currentInput = inputs[inputIndex];

    const typeText = async () => {
      controls = animate(0, currentInput.length, {
        duration: 2,
        ease: 'linear',
        onUpdate: (latest) => {
          if (!isMounted) return;

          setText(currentInput.slice(0, Math.floor(latest)));
        },
      });

      await controls.finished;
      if (!isMounted) return;

      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (!isMounted) return;

      // delete the text
      controls = animate(currentInput.length, 0, {
        duration: 1,
        ease: 'linear',
        onUpdate: (latest) => {
          if (!isMounted) return;
          setText(currentInput.slice(0, Math.round(latest)));
        },
      });

      await controls.finished;
      if (!isMounted) return;

      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!isMounted) return;

      // move to next input
      setInputIndex((prevIndex) => (prevIndex + 1) % inputs.length);
    };

    typeText();

    return () => {
      isMounted = false;
      controls?.stop();
    };
  }, [inputIndex, isInView]);

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
          <div ref={containerRef} className="max-w-3xl mx-auto">
            <div className="relative group">
              <div
                className="absolute -inset-1 bg-linear-to-r 
                from-indigo-500 to-amber-400 rounded-xl opacity-25 
                group-hover:opacity-50 blur transition duration-500"
              />
              <div
                className="relative bg-slate-900 rounded-xl border
               border-slate-700 p-1 sm:p-2 flex items-center shadow-2xl"
              >
                <Search className="text-slate-500 m-2 sm:ml-4" size={24} />
                <div className="h-full w-full flex justify-start px-1 sm:px-4">
                  <span
                    className="bg-transparent inline-block w-min-[2px]
                  focus:ring-0 text-white font-mono cursor-default
                  animate-border-blink border-r-2 border-amber-300 select-none
                  text-xs sm:text-sm md:text-base lg:text-lg"
                  >
                    {text}
                  </span>
                </div>
                <Button className="ml-2 text-sm md:text-base">Search</Button>
              </div>
            </div>

            <div
              className="mt-8 flex flex-col items-center gap-2 
              text-xs text-slate-500 uppercase tracking-widest 
              font-semibold"
            >
              <p className="select-none">Powered by OpenAI API</p>
              <Image
                src="/images/icons/openai.png"
                width={40}
                height={40}
                alt="OpenAI Logo"
                className="animate-slow-rotate"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartSearch;
