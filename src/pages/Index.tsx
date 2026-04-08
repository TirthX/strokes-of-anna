import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ScrollStory from '@/components/ScrollStory';
import ArtworkGrid from '@/components/ArtworkGrid';
import NewsletterBanner from '@/components/NewsletterBanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="relative z-10">
        <HeroSection />
        
        
     
      </main>
      <Footer />
    </div>
  );
};

export default Index;
