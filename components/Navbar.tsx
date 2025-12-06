import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 font-bold text-2xl tracking-tighter
           text-white"
        >
          <Image
            src="/images/campus_bazaar_bag_w50.png"
            width={30}
            height={30}
            alt="Campus Bazaar Logo Bag"
          />
          <p className="relative mt-1 select-none">
            Campus <span className="text-indigo-400">Bazaar</span>
          </p>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {['How it Works', 'Safety', 'Marketplace', 'Testimonials'].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ),
          )}
          <Button
            variant="primary"
            className="px-5 py-2 text-sm cursor-pointer"
          >
            Join Now
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['How it Works', 'Safety', 'Marketplace', 'Testimonials'].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-300 hover:text-white font-medium"
                  >
                    {item}
                  </a>
                ),
              )}
              <Button variant="primary" className="w-full justify-center">
                Join Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
