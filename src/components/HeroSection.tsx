import heroImage from '@/assets/hero-landscape.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img 
        src={heroImage} 
        alt="Featured Landscape Painting by Anna Pattabhi" 
        className="hero-image"
      />
      <div className="hero-overlay" />
      <div className="relative z-10 text-center text-white">
        <h1 
          className="font-display text-hero font-light tracking-wide mb-4"
          style={{ animation: 'fadeIn 1s ease-out 0.8s both' }}
        >
          Capturing Nature's Poetry
        </h1>
        <p 
          className="font-body text-subtitle font-light max-w-2xl mx-auto"
          style={{ animation: 'fadeIn 1s ease-out 1s both' }}
        >
          Where landscapes meet emotion, and every brushstroke tells a story of the natural world
        </p>
      </div>
    </section>
  );
};

export default HeroSection;