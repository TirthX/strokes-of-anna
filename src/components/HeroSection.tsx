import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import heroImage1 from '@/assets/hero.png';
import heroImage2 from '@/assets/hero2.png';
import heroImage3 from '@/assets/hero3.png';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];
  const titles = [
    "Stillness Beneath the Rush",
    "A Quite Journey",
    "The Edge of Becoming"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-48 lg:pt-56 bg-background">
      {/* Refined Ambient Glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            
          </motion.div> 

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[1px] bg-foreground/20 mb-10"
          />
        </div>

        {/* Featured Image - Clean Frame Slideshow */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-6xl group"
        >
          <div className="absolute -inset-10 bg-accent/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 bg-white p-4 shadow-[0_30px_100px_rgba(0,0,0,0.1)] overflow-hidden aspect-[4/3] md:aspect-video flex items-center justify-center">
            <AnimatePresence mode='wait'>
              <motion.img 
                key={currentIndex}
                src={images[currentIndex]} 
                alt={`Anna Pattabhi Showcase ${currentIndex + 1}`} 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full object-contain grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              />
            </AnimatePresence>
          </div>
          
          <div className="text-center mt-12 overflow-hidden h-12 md:h-16 flex items-center justify-center">
             <AnimatePresence mode="wait">
               <motion.h3 
                 key={currentIndex}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="font-display font-semibold text-lg md:text-2xl text-nav tracking-[0.2em] md:tracking-[0.4em] uppercase"
               >
                 {titles[currentIndex]}
               </motion.h3>
             </AnimatePresence>
          </div>
        </motion.div>
        {/* Quote Section - Aligned with Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-20 w-full bg-nav py-16 px-6 md:px-10 flex flex-col items-center justify-center z-10"
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="font-serif italic text-2xl md:text-5xl leading-[1.3] text-nav-foreground tracking-tight">
              "Art is where I return to myself—where colors become light, gently healing unseen wounds."
            </p>
            <p className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-nav-foreground/100 pt-4">
             By Anna Pattabhi
            </p>
            
            <div className="flex flex-col items-center">
              
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative - Professional Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
         <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;