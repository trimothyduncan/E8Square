import Navbar    from '@/components/sections/Navbar';
import Hero      from '@/components/sections/Hero';
import About     from '@/components/sections/About';
import Services  from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import CTA       from '@/components/sections/CTA';
import Footer    from '@/components/sections/Footer';
import { getInstagramPosts } from '@/lib/instagram';

export default async function Home() {
  const posts = await getInstagramPosts(6);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio posts={posts} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
