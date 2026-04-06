import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NewsletterBanner = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Sketchy Circle Background */}
        <div className="absolute inset-x-0 -top-10 -bottom-10 pointer-events-none opacity-5">
           <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-45">
             <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
           </svg>
        </div>

        <motion.div
           initial={{ opacity: 0, rotate: -3 }}
           whileInView={{ opacity: 1, rotate: -1 }}
           transition={{ duration: 1 }}
           className="bg-white/50 backdrop-blur-sm p-12 shadow-sm relative overflow-hidden border border-black/5"
           style={{
             clipPath: 'polygon(1% 1%, 98% 3%, 100% 98%, 2% 99%)',
           }}
        >
          <h2 className="font-script text-5xl md:text-6xl text-foreground mb-6">
            P.S. <span className="text-accent">Keep In Touch</span>
          </h2>
          <p className="font-hand text-2xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            I periodically share news about new works, the inspiration behind the paint, and upcoming showcase dates.
          </p>
          
          <Link to="/contact">
            <button className="font-hand text-3xl text-accent border-b-2 border-accent/20 hover:border-accent transition-all pb-1 hover:rotate-2">
              Connect with me
            </button>
          </Link>

          {/* Decorative Corner Ink Splat */}
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-foreground rounded-full opacity-5 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterBanner;