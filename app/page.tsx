import About from '@/components/About';
import Contact from '@/components/Contact';
import Delivery from '@/components/Delivery';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Locations from '@/components/Locations';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f3f1ed]">
      {/* Replace with real routing */}
      <Header />
      <Hero />
      <About />
      <Menu />
      <Locations />
      <Delivery />
      <Contact />
      <Footer />
    </main>
  );
}
