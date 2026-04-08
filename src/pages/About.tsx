import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImage from '@/assets/about.png';

const About = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      <main className="pt-24 md:pt-32 lg:pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto relative mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center mb-12 md:mb-24"
          >
            <h1 className="font-display text-xl md:text-3xl text-foreground tracking-[0.3em] uppercase mb-6">
              About The Artist
            </h1>
            <div className="font-display text-base md:text-xl tracking-[0.5em] text-accent uppercase">
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
              <div className="absolute bottom-10 left-10 text-foreground font-display text-xs tracking-widest uppercase opacity-60">
                Studio Portrait, 2024
              </div>
            </div>
          </motion.div>
          
          <div className="max-w-3xl mx-auto pb-32">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="space-y-12"
            >
              <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 space-y-10">
                <p>
                  I have been painting since my teenage years, quietly inspired by watching my father bring his visions to life in oils. While his world was rooted in fine art, mine gradually found its voice in the freedom of abstract expression and the fluidity of acrylics.
                </p>
                
                <p>
                  For many years, painting remained a gentle presence in the background of my life—until, as my children grew more independent, I found my way back to it with deeper intention. What began as a return soon became a refuge.
                </p>

                <blockquote className="border-l-2 border-accent/30 pl-8 py-4 italic text-2xl md:text-3xl text-foreground font-serif leading-relaxed">
                  "Art transformed into my meditation, my therapy—a sacred space where time dissolved and I could simply be."
                </blockquote>

                <p>
                  There were moments when I would lose myself in a canvas for days, so immersed that the outside world seemed to fade away. Whenever life brought its inevitable waves—moments of uncertainty, challenge, or quiet heaviness—I turned to art. And in return, it offered me something intangible yet profound: a sense of healing, even if only for a while.
                </p>
                
                <div className="bg-accent/5 p-12 md:p-20 border border-accent/10 space-y-8 relative overflow-hidden group">
                  <p>
                    During the time of the COVID-19 pandemic, I was able to raise $10,000 to support those in need in India through my work. That experience deepened something within me—a quiet knowing that this journey is not just about creating, but about giving.
                  </p>
                  <p>
                    I feel that this desire to serve has only just begun. A portion of the proceeds from my paintings will continue to support the organizations listed on this website, allowing each piece to carry not only expression, but also intention, compassion, and hope.
                  </p>
                  
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technique Focus */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5 }}
             className="bg-accent/5 py-32 px-12 md:px-24 text-center relative overflow-hidden border border-accent/10"
          >
            <div className="font-serif text-2xl md:text-4xl italic text-foreground leading-relaxed max-w-2xl mx-auto z-10 relative">
              "Art is a way to grab the hem of a passing second and hold it just a little longer."
            </div>
            {/* Design Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
               <div className="absolute top-0 left-1/2 w-[1px] h-full bg-accent/20" />
               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/20" />
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;