import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { artworks } from '@/components/ArtworkGrid';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArtworks = artworks.filter(artwork => artwork.page === currentPage);

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      <main className="pt-32 lg:pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="mb-12 md:mb-24 text-center relative"
          >
            <h1 className="font-script text-6xl md:text-8xl text-foreground">
              The Collection
            </h1>
            <p className="font-hand text-2xl text-muted-foreground mt-4 italic">
              "Ordered by mood, rather than year."
            </p>

            {/* Page Filter Buttons */}
            <div className="flex justify-center items-center space-x-12 mt-16 font-serif">
              <button 
                onClick={() => setCurrentPage(1)}
                className={`text-xl italic tracking-widest transition-all duration-300 relative group ${currentPage === 1 ? 'text-accent' : 'text-muted-foreground/60 hover:text-foreground'}`}
              >
                Page 1
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-accent transition-all duration-300 ${currentPage === 1 ? 'w-full' : 'w-0'}`} />
              </button>
              <button 
                onClick={() => setCurrentPage(2)}
                className={`text-xl italic tracking-widest transition-all duration-300 relative group ${currentPage === 2 ? 'text-accent' : 'text-muted-foreground/60 hover:text-foreground'}`}
              >
                Page 2
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-accent transition-all duration-300 ${currentPage === 2 ? 'w-full' : 'w-0'}`} />
              </button>
            </div>
          </motion.div>
          
          <div className="min-h-[400px]">
             <AnimatePresence mode="wait">
               {filteredArtworks.length > 0 ? (
                 <motion.div 
                   key="grid-p1"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12"
                 >
                   {filteredArtworks.map((artwork: any, index) => (
                     <motion.div
                        key={artwork.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={artwork.isLandscape ? "md:col-span-2 lg:col-span-2" : ""}
                     >
                       <Link 
                         to={`/artwork/${artwork.id}`}
                         className="group block relative"
                       >
                         <div className="absolute inset-4 bg-black/5 blur-xl group-hover:bg-black/10 transition-colors" />
                         
                         <div className="relative bg-white p-3 shadow-sm border border-black/5 hover:rotate-1 transition-transform duration-500">
                           <div className="overflow-hidden bg-muted">
                             <img 
                               src={artwork.image} 
                               alt={artwork.title}
                               className="w-full h-auto grayscale-[0.2] transition-all duration-[2000ms] ease-out-expo group-hover:grayscale-0 group-hover:scale-105 object-contain"
                               style={{
                                 clipPath: 'polygon(0.5% 1%, 99.5% 0.5%, 100% 99%, 0.5% 99.5%)',
                               }}
                             />
                             {artwork.isSold && (
                               <motion.div 
                                 initial={{ opacity: 0, x: 20 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 className="absolute bottom-6 right-6 z-20"
                               >
                                 <span className="font-serif text-2xl tracking-[0.2em] text-red-600 drop-shadow-md border-b border-red-600/30 pb-1">
                                    SOLD
                                 </span>
                               </motion.div>
                             )}
                           </div>
                         </div>
                         
                         <div className="mt-8 px-4 flex justify-between items-start">
                           <div>
                             <h3 className="font-script text-3xl text-foreground group-hover:text-accent transition-colors">
                               {artwork.title}
                             </h3>
                             {/* <p className="font-hand text-xl text-muted-foreground italic mt-2">
                               {index % 3 === 0 ? "Oil on Canvas" : index % 3 === 1 ? "Watercolor" : "Sketchbook Fragment"}
                             </p> */}
                           </div>
                           {/* <span className="font-serif italic text-sm text-foreground/30 mt-2">
                              #{String(artwork.id).padStart(2, '0')}
                           </span> */}
                         </div>
                       </Link>
                     </motion.div>
                   ))}
                 </motion.div>
               ) : (
                 <motion.div 
                   key="grid-empty"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="flex flex-col items-center justify-center py-32 space-y-8"
                 >
                    <p className="font-script text-5xl text-muted-foreground/30 italic">Coming Soon...</p>
                    <p className="font-serif text-xl text-muted-foreground/40 tracking-widest uppercase">The second chapter is being drawn.</p>
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