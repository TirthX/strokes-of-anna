import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ArtworkGrid from '@/components/ArtworkGrid';
import NewsletterBanner from '@/components/NewsletterBanner';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <HeroSection />
      <ArtworkGrid />
      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default Index;
