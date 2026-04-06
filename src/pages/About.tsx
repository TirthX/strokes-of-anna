import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImage from '@/assets/about.png';

const About = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      <main className="pt-32 lg:pt-48 pb-32 px-6">
        <div className="max-w-4xl mx-auto relative mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center mb-12 md:mb-24"
          >
            <h1 className="font-script text-7xl md:text-9xl text-foreground mb-6">
              About The Artist
            </h1>
            <div className="font-serif italic text-xl tracking-[0.5em] text-accent uppercase">
               Anna Pattabhi
            </div>
          </motion.div>

          {/* Artist Portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mb-32 relative group"
          >
            <div className="absolute inset-8 bg-black/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="bg-white p-4 shadow-xl border border-black/5 relative z-10">
              <img 
                src={aboutImage} 
                alt="Anna Pattabhi Portrait" 
                className="w-full h-auto grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 text-white mix-blend-difference font-serif italic text-sm tracking-widest uppercase">
                Studio Portrait, 2024
              </div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-24 items-start pb-32">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="space-y-12"
            >
              <div className="font-serif text-2xl italic leading-relaxed text-foreground/80 space-y-8 border-l border-accent/20 pl-8 py-4">
                <p>
                  Specializing in contemporary landscapes, my practice explores the emotional resonance of the natural world. Through a minimalist lens, I aim to distill the essence of atmosphere and light into timeless visual experiences.
                </p>
                <p>
                  My work is a bridge between the physical reality of the environment and the subjective fluidity of memory. Every piece serves as a dialogue between the observer and the observed.
                </p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="space-y-12"
            >
              <div className="space-y-8">
                <h3 className="font-serif italic text-2xl tracking-widest text-accent uppercase">
                  Selected Gallery
                </h3>
                <ul className="space-y-8 font-serif text-xl text-muted-foreground/80">
                  <li className="flex flex-col gap-1">
                    <span className="text-foreground/20 text-sm tracking-widest uppercase mb-1">2024</span>
                    Contemporary Landscapes Solo Showcase, New York
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-foreground/20 text-sm tracking-widest uppercase mb-1">2023</span>
                    Minimalist Gallery Group Exhibition, Jaipur
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-foreground/20 text-sm tracking-widest uppercase mb-1">2022</span>
                    The Nature of Memories Solo, Virtual Gallery
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-foreground/20 text-sm tracking-widest uppercase mb-1">2021</span>
                    Atmosphere & Space Series, London
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Technique Focus */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             className="bg-foreground py-32 px-12 md:px-24 text-center relative overflow-hidden"
          >
            <div className="font-serif text-3xl md:text-5xl italic text-background/80 leading-relaxed max-w-2xl mx-auto z-10 relative">
              "Art is a way to grab the hem of a passing second and hold it just a little longer."
            </div>
            {/* Design Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
               <div className="absolute top-0 left-1/2 w-[1px] h-full bg-background" />
               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-background" />
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;