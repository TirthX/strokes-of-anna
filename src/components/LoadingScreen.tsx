import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 800); // Title fade
    const timer2 = setTimeout(() => setPhase(2), 2200); // Ending
    const timer3 = setTimeout(() => onComplete(), 3200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-background flex items-center justify-center z-[9999]"
      >
        <div className="relative flex flex-col items-center">
          <div className="mb-4 px-10">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-script text-7xl md:text-9xl text-foreground text-center leading-[1.2] py-4"
            >
              Reflections By Anna
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[1px] bg-foreground/20"
          />

          <AnimatePresence>
            {phase >= 1 && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="font-serif italic text-xl md:text-2xl mt-6 tracking-widest text-muted-foreground uppercase"
              >
                 Art Showcase
              </motion.p>
            )}
          </AnimatePresence>

          {/* Minimalist Reveal Effect */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.03 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-foreground/10 pointer-events-none -z-10"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;