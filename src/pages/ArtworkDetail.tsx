import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { artworks } from '@/components/ArtworkGrid';

const ArtworkDetail = () => {
  const { id } = useParams();
  const artwork = artworks.find(work => work.id === parseInt(id || '0'));

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-light mb-4">Artwork Not Found</h1>
          <Link 
            to="/" 
            className="font-body text-accent hover:underline"
          >
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/gallery"
            className="inline-flex items-center space-x-2 font-body text-muted-foreground hover:text-accent transition-colors duration-normal mb-12"
            style={{ animation: 'slideInFromLeft 0.6s ease-out 0.2s both' }}
          >
            <ArrowLeft size={16} />
            <span>Back to Gallery</span>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Artwork Image */}
            <div 
              className="art-frame"
              style={{ animation: 'slideInFromLeft 0.8s ease-out 0.4s both' }}
            >
              <img 
                src={artwork.image} 
                alt={artwork.title}
                className="w-full h-auto"
              />
            </div>
            
            {/* Artwork Details */}
            <div 
              className="space-y-8"
              style={{ animation: 'slideInFromRight 0.8s ease-out 0.6s both' }}
            >
              <div>
                <h1 className="font-display text-hero font-light tracking-wide mb-4">
                  {artwork.title}
                </h1>
                <p className="font-body text-muted-foreground text-lg">
                  by Anna Pattabhi
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-xl font-light tracking-wide mb-3">
                    Description
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-display font-light tracking-wide mb-2">Medium</h3>
                    <p className="font-body text-muted-foreground">Oil on Canvas</p>
                  </div>
                  <div>
                    <h3 className="font-display font-light tracking-wide mb-2">Year</h3>
                    <p className="font-body text-muted-foreground">2024</p>
                  </div>
                  <div>
                    <h3 className="font-display font-light tracking-wide mb-2">Dimensions</h3>
                    <p className="font-body text-muted-foreground">24" × 18"</p>
                  </div>
                  <div>
                    <h3 className="font-display font-light tracking-wide mb-2">Status</h3>
                    <p className="font-body text-accent">Available</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Link 
                    to="/contact"
                    className="inline-block bg-foreground text-background px-8 py-3 font-body tracking-wide hover:bg-foreground/90 transition-colors duration-normal"
                  >
                    Inquire About This Piece
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtworkDetail;