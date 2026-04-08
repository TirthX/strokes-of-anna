import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, Youtube, ShieldCheck } from 'lucide-react';
import artworkCosmicStorm from '@/assets/TheCosmicStorm48x36.jpeg';

const Impact = () => {
  const organizations = [
    {
      name: "Srotoshwini Trust",
      description: "Supporting education, healthcare, and empowerment initiatives for the underprivileged.",
      link: "https://share.google/AMUa8bpsrw5mwFX4g",
      type: "Primary Partner",
      icon: <ShieldCheck className="text-accent" size={32} />
    },
    {
      name: "Community Support Initiative",
      description: "Watch the documentary on our collaborative efforts in ground-level transformation.",
      link: "https://youtu.be/LWyo5LaIcBU?si=2oaOJFADNUVSXOaz",
      type: "Featured Video",
      icon: <Youtube className="text-accent" size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      <main className="pt-24 md:pt-32 lg:pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center mb-24"
          >
            <h1 className="font-display text-xl md:text-3xl text-foreground tracking-[0.3em] uppercase mb-6">
              Proceeds Donated to
            </h1>
            <p className="font-serif text-xl tracking-[0.3em] text-accent uppercase italic">
              Art with Purpose
            </p>
          </motion.div>

          {/* Featured Artwork: The Cosmic Storm */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="mb-24 relative"
          >
            <div className="bg-white p-4 shadow-2xl border border-black/5 relative z-10">
              <img 
                src={artworkCosmicStorm} 
                alt="The Cosmic Storm" 
                className="w-full h-auto block"
              />
              <div className="p-8 text-center bg-background/50 backdrop-blur-sm">
                <h3 className="font-display text-xl tracking-[0.3em] uppercase text-foreground mb-2">The Cosmic Storm</h3>
                <p className="font-serif italic text-muted-foreground">Original artwork contributing to social impact initiatives.</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -inset-4 border border-accent/10 -z-10 translate-x-2 translate-y-2" />
          </motion.div>
          
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-foreground py-20 px-8 md:px-16 text-center text-background mb-20 relative overflow-hidden"
            >
              <p className="font-serif text-2xl md:text-3xl italic leading-relaxed max-w-2xl mx-auto z-10 relative">
                "Every brushstroke contributes to a larger narrative of collective growth and social transformation."
              </p>
            </motion.div>

            <div className="grid gap-8">
              {organizations.map((org, index) => (
                <motion.a
                  key={org.name}
                  href={org.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative bg-white p-8 md:p-12 shadow-sm border border-black/5 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-6 bg-accent/5 rounded-full group-hover:scale-110 transition-transform">
                    {org.icon}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-accent/40 text-xs tracking-[0.3em] uppercase block mb-2 font-serif">{org.type}</span>
                    <h3 className="font-script text-4xl mb-4 text-foreground">{org.name}</h3>
                    <p className="font-serif text-lg text-muted-foreground italic leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-accent font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Visit</span>
                    <ExternalLink size={18} />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="mt-32 p-12 border border-black/5 bg-accent/5 text-center italic font-serif text-xl text-muted-foreground/80"
            >
              <p>
                100% of the proceeds from selected pieces are directed toward these initiatives. 
                For specific details on how your acquisition makes an impact, please inquire.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impact;
