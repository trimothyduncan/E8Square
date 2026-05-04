import Navbar    from '@/components/sections/Navbar';
import Hero      from '@/components/sections/Hero';
import About     from '@/components/sections/About';
import Services  from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import CTA       from '@/components/sections/CTA';
import Footer    from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
