import { motion } from 'framer-motion';
import heroImage from '@/assets/hero.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 lg:pt-48 pb-32 bg-background">
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

      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-script text-foreground mb-8 leading-[1.2] pb-6 px-4">
              Reflections By Anna
            </h1>
          </motion.div> 

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[1px] bg-foreground/20 mb-10"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl md:text-3xl font-serif italic text-muted-foreground/80 max-w-3xl mx-auto mb-20 tracking-wide"
          >
            "A collection of contemporary landscapes exploring the intersection of memory and nature."
          </motion.p>
        </div>

        {/* Featured Image - Clean Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-6xl group"
        >
          <div className="absolute -inset-10 bg-accent/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 bg-white p-4 shadow-[0_30px_100px_rgba(0,0,0,0.1)] overflow-hidden">
            <img 
              src={heroImage} 
              alt="Anna Pattabhi Main Showcase" 
              className="w-full h-auto grayscale-[0.1] hover:grayscale-0 transition-all duration-[3000ms] ease-out-expo transform scale-100 hover:scale-[1.02]"
            />
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