'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import TrustSignals from '@/components/TrustSignals';
import SmartSearch from '@/components/SmartSearch';
import Categories from '@/components/Categories';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <TrustSignals />
      <SmartSearch />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
