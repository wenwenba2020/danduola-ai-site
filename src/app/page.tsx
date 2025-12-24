import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation bar */}
      <Navbar />

      {/* Main content area */}
      <main>
        {/* Hero section */}
        <Hero />

        {/* Features section */}
        <Features />

        {/* Stats and social proof section */}
        <Stats />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
