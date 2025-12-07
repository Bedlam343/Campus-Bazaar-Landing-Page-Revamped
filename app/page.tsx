import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import TrustSignals from '@/components/TrustSignals';
import SmartSearch from '@/components/SmartSearch';
import Categories from '@/components/Categories/Categories';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import SafetySection from '@/components/SafetyZones';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      {/* <TrustSignals /> */}
      <HowItWorks />
      <SafetySection />
      <SmartSearch />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
