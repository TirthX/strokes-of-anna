import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { artworks } from '@/components/ArtworkGrid';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 
            className="font-display text-hero font-light tracking-wide text-center mb-16"
            style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}
          >
            Art Gallery
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artworks.map((artwork, index) => (
              <Link 
                key={artwork.id}
                to={`/artwork/${artwork.id}`}
                className="group block"
                style={{ 
                  animation: `fadeIn 0.6s ease-out ${0.4 + index * 0.1}s both` 
                }}
              >
                <div className="art-frame">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="font-display text-xl font-light tracking-wide mb-2 group-hover:text-accent transition-colors duration-normal">
                    {artwork.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Oil on Canvas, 2024
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;