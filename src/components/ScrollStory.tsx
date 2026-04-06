import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import portraitImage from '@/assets/The Quiet Crossing.png';

const ScrollStory = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0.95, 1, 1, 0.95]);
  const yTranslate = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative min-h-0 md:min-h-[200vh] py-10 md:py-20 px-6 bg-transparent">
      {/* Refined Parallax Backdrop - Hidden on mobile for simplicity */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:flex items-center justify-center">
         <motion.div 
           style={{ y: yTranslate }}
           className="w-full max-w-7xl font-serif italic text-[20vw] opacity-[0.02] whitespace-nowrap select-none"
         >
            The Perspective • Atmosphere • Light
         </motion.div>
      </div>

      <div className="relative md:sticky md:top-0 md:h-screen flex items-center justify-center overflow-hidden z-10">
        <motion.div 
          style={{ opacity: isMobile ? 1 : opacity, scale: isMobile ? 1 : scale }}
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div 
              className="bg-white p-3 md:p-4 shadow-xl border border-black/5"
            >
              <img 
                src={portraitImage} 
                alt="Contemporary Art Perspective" 
                className="w-full h-auto grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>

          <div className="space-y-6 md:space-y-10">
            <h2 className="font-script text-5xl md:text-8xl text-foreground leading-tight">
              A Study in <span className="text-accent underline decoration-1 underline-offset-8 decoration-accent/20">Light</span>
            </h2>
            <p className="font-serif text-lg md:text-3xl italic text-muted-foreground leading-relaxed">
              "My work translates the transient emotions of natural landscapes into a contemporary visual language, preserving the essence of the moment."
            </p>
            <div className="pt-4 md:pt-8 flex items-center space-x-4">
               <div className="h-[1px] w-12 bg-foreground/10" />
               <span className="font-serif italic text-sm md:text-lg text-foreground/40">Artist's Statement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollStory;
