import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScrollStory from '@/components/ScrollStory';
import ArtworkGrid from '@/components/ArtworkGrid';
import NewsletterBanner from '@/components/NewsletterBanner';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="relative z-10 space-y-32">
        <HeroSection />
        <ScrollStory />
        <ArtworkGrid />
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
