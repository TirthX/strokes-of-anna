import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useQuery } from '@tanstack/react-query';
import { fetchArtworks, Artwork } from '@/services/api';
import { artworks as fallbackArtworks } from '@/components/ArtworkGrid';

const ArtworkDetail = () => {
  const { id } = useParams();
  
  const { data: fetchedArtworks, isLoading } = useQuery({
    queryKey: ['artworks'],
    queryFn: fetchArtworks,
    retry: 1,
  });

  const displayArtworks = fetchedArtworks || fallbackArtworks;
  const artwork = displayArtworks.find(work => work.id === parseInt(id || '0'));

  if (isLoading && !fetchedArtworks) {
    return (
      <div className="min-h-screen bg-transparent">
        <Header />
        <main className="pt-48 flex justify-center items-center">
          <div className="w-10 h-10 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!artwork) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center font-hand text-4xl">
        <div className="text-center">
          <h1 className="mb-8 opacity-40 italic">This page is yet to be drawn...</h1>
          <Link 
            to="/" 
            className="text-accent underline hover:rotate-3 transition-transform inline-block"
          >
            Return to the Showcase
          </Link>
        </div>
      </div>
    );
  }

  const isLandscape = artwork.is_landscape !== undefined ? artwork.is_landscape : (artwork as any).isLandscape;
  const isSold = artwork.is_sold !== undefined ? artwork.is_sold : (artwork as any).isSold;

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      <main className="pt-32 md:pt-48 lg:pt-64 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/gallery"
            className="inline-flex items-center space-x-2 font-hand text-2xl text-muted-foreground hover:text-accent transition-colors mb-16 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span>Back to Gallery</span>
          </Link>
          
          <div className={`${isLandscape ? 'max-w-5xl mx-auto' : 'grid md:grid-cols-2 gap-12 lg:gap-24 items-start'}`}>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className={`relative ${isLandscape ? 'mb-24 flex justify-center' : ''}`}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-auto block transition-all duration-[1500ms] ease-out-expo"
                />
                {isSold && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute bottom-10 right-10 z-20"
                  >
                    <span className="font-serif text-3xl tracking-[0.3em] text-red-500 drop-shadow-xl border-b border-red-500/20 pb-1">
                       SOLD
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className={`flex flex-col space-y-12 ${isLandscape ? 'max-w-3xl mx-auto text-center' : 'pt-8'}`}
            >
               <div className="space-y-4">
                  <h1 className="font-display font-semibold text-xl md:text-2xl tracking-[0.3em] uppercase leading-tight text-foreground truncate whitespace-nowrap">
                    {artwork.title}
                  </h1>
               </div>

                <div className={`grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 ${isLandscape ? 'justify-items-center' : ''}`}>
                  <div className="space-y-2">
                    <span className="font-hand text-xl text-foreground/40 block">Medium</span>
                    <p className="font-hand text-2xl text-foreground/80">{artwork.medium || 'Acrylic Painting'}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-hand text-xl text-foreground/40 block">Dimensions</span>
                    <p className="font-hand text-2xl text-foreground/80">{artwork.dimensions}</p>
                  </div>
                  {!isSold && (
                    <div className="space-y-2">
                      <span className="font-hand text-xl text-foreground/40 block">Price</span>
                      <p className="font-script text-4xl text-accent">
                        {artwork.notForSale ? 'NOT FOR SALE' : artwork.price}
                      </p>
                    </div>
                  )}
                </div>
                
                {!isSold && !artwork.notForSale && (
                  <div className={`pt-12 border-t border-black/5 ${isLandscape ? 'text-center' : ''}`}>
                    <p className="font-serif italic text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      For purchase details please email <span className="font-script text-3xl text-foreground ml-1">Anna Pattabhi</span> at 
                      <a 
                        href="mailto:anna.pattabhi@gmail.com" 
                        className="text-accent hover:underline decoration-1 underline-offset-4 ml-2"
                      >
                        anna.pattabhi@gmail.com
                      </a>
                    </p>
                  </div>
                )}
            </motion.div>
          </div>

          <div className="mt-48 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12">
            {(() => {
              const currentIndex = displayArtworks.findIndex(w => w.id === artwork.id);
              const prev = displayArtworks[currentIndex - 1];
              const next = displayArtworks[currentIndex + 1];

              return (
                <>
                  <div className="w-full md:w-1/3">
                    {prev && (
                      <Link 
                        to={`/artwork/${prev.id}`}
                        className="group flex flex-col items-center md:items-start space-y-4"
                      >
                        <span className="font-serif text-xs tracking-widest uppercase text-muted-foreground/40">Previous Piece</span>
                        <span className="font-display text-xl md:text-2xl tracking-[0.2em] uppercase text-foreground group-hover:text-accent transition-colors">{prev.title}</span>
                      </Link>
                    )}
                  </div>

                  <Link 
                    to="/gallery"
                    className="font-serif italic text-lg text-accent/40 hover:text-accent transition-colors"
                  >
                    Back to Collection
                  </Link>

                  <div className="w-full md:w-1/3 text-center md:text-right">
                    {next && (
                      <Link 
                        to={`/artwork/${next.id}`}
                        className="group flex flex-col items-center md:items-end space-y-4"
                      >
                        <span className="font-serif text-xs tracking-widest uppercase text-muted-foreground/40">Next Piece</span>
                        <span className="font-display text-xl md:text-2xl tracking-[0.2em] uppercase text-foreground group-hover:text-accent transition-colors">{next.title}</span>
                      </Link>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtworkDetail;