import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { artworks as fallbackArtworks, parseDimensions } from '@/components/ArtworkGrid';
import { useQuery } from '@tanstack/react-query';
import { fetchArtworks } from '@/services/api';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState<number | string>(1);
  
  const { data: fetchedArtworks, isLoading } = useQuery({
    queryKey: ['artworks'],
    queryFn: fetchArtworks,
    retry: 1,
  });

  const displayArtworks = fetchedArtworks || fallbackArtworks;
  const filteredArtworks = displayArtworks.filter(artwork => {
    return String(artwork.page) === String(currentPage);
  });

  if (isLoading && !fetchedArtworks) {
    return (
      <div className="min-h-screen bg-transparent">
        <Header />
        <main className="pt-48 flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      <main className="pt-24 md:pt-32 lg:pt-40 pb-32 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="mb-12 md:mb-24 text-center relative"
          >
            <h1 className="font-display text-xl md:text-3xl text-foreground tracking-[0.3em] uppercase">
              The Collection
            </h1>
            <p className="font-serif text-lg text-muted-foreground mt-6 italic opacity-60">
              "Ordered by mood, rather than year."
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16 font-display">
              <button 
                onClick={() => setCurrentPage(1)}
                className={`text-sm tracking-[0.2em] transition-all duration-300 relative group uppercase ${currentPage === 1 ? 'text-accent' : 'text-muted-foreground/60 hover:text-foreground'}`}
              >
                Page 1
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-accent transition-all duration-300 ${currentPage === 1 ? 'w-full' : 'w-0'}`} />
              </button>
              <button 
                onClick={() => setCurrentPage(2)}
                className={`text-sm tracking-[0.2em] transition-all duration-300 relative group uppercase ${currentPage === 2 ? 'text-accent' : 'text-muted-foreground/60 hover:text-foreground'}`}
              >
                Page 2
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-accent transition-all duration-300 ${currentPage === 2 ? 'w-full' : 'w-0'}`} />
              </button>
              <button 
                onClick={() => setCurrentPage('GOD')}
                className={`text-sm tracking-[0.2em] font-bold transition-all duration-300 relative group uppercase ${currentPage === 'GOD' ? 'text-accent' : 'text-muted-foreground/60 hover:text-foreground'}`}
              >
                GOD
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-accent transition-all duration-300 ${currentPage === 'GOD' ? 'w-full' : 'w-0'}`} />
              </button>
            </div>
          </motion.div>
          
          <div className="min-h-[400px]">
             <AnimatePresence mode="wait">
               {filteredArtworks.length > 0 ? (
                 <motion.div 
                   key={`grid-page-${currentPage}`}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 md:gap-y-64 lg:gap-y-80 gap-x-12 items-center justify-items-center"
                 >
                   {filteredArtworks.map((artwork: any, index) => {
                     const dims = parseDimensions(artwork.dimensions);
                     const isSold = artwork.is_sold !== undefined ? artwork.is_sold : (artwork as any).isSold;
                     
                     // Direct Scale: 1 inch = 24px for massive presence
                     const visualWidth = dims.width * 24;

                     return (
                       <motion.div
                          key={artwork.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          // Force landscape paintings to occupy their own full width row
                          className={`flex flex-col items-center w-full ${dims.ratio > 1.2 ? 'lg:col-span-3' : ''}`}
                       >
                         <Link 
                           to={`/artwork/${artwork.id}`}
                           className="group block relative flex flex-col items-center w-full"
                         >
                           <div 
                             className="relative mx-auto overflow-hidden transition-all duration-700" 
                             style={{
                               width: `calc(${dims.width} * var(--art-scale, 24px))`,
                               maxWidth: '100%',
                             }}
                            >
                             <img 
                               src={artwork.image} 
                               alt={artwork.title}
                               className="w-full h-auto block transition-all duration-[2000ms] ease-out-expo"
                             />
                             {isSold && (
                               <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                                 <span className="font-display text-xl tracking-[0.4em] text-red-500/90 drop-shadow-md border-b border-red-500/20 pb-2">
                                    SOLD
                                 </span>
                               </div>
                             )}
                           </div>
                         
                           <div className="mt-12 px-4 text-center">
                             <h3 className="font-display text-2xl lg:text-4xl text-foreground group-hover:text-accent transition-colors tracking-[0.1em] uppercase">
                               {artwork.title}
                             </h3>
                           </div>
                         </Link>
                       </motion.div>
                    );
                   })}
                 </motion.div>
               ) : (
                 <motion.div 
                   key="grid-empty"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="flex flex-col items-center justify-center py-32 space-y-8"
                 >
                    <p className="font-display text-xl text-muted-foreground/30 uppercase tracking-[0.3em]">Opening the Sanctuary...</p>
                    <p className="font-serif text-lg text-muted-foreground/40 tracking-widest uppercase">The divine section is being prepared.</p>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;