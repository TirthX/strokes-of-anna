import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsAtTop(latest < 50);
  });

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "About the Artist", path: "/about" },
    { name: "Proceeds Donated to", path: "/impact" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate="visible"
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[100] px-6 md:px-10 py-3 md:py-4 bg-nav/95 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center relative">
          <div className="flex items-center justify-between w-full lg:justify-center">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-display font-semibold text-lg md:text-3xl tracking-[0.2em] md:tracking-[0.3em] text-nav-foreground hover:opacity-80 transition-all z-[120] uppercase"
            >
              Reflections By Anna
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-[120] text-nav-foreground p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
          </div>

          <nav className="hidden lg:flex items-center space-x-12 pt-4 mt-4 border-t border-white/5 w-full justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display font-medium text-xs md:text-sm transition-all relative group uppercase tracking-[0.2em] ${location.pathname === link.path ? 'text-nav-foreground' : 'text-nav-foreground/100 hover:text-nav-foreground'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-nav-foreground transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[110] lg:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-12">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-2xl md:text-4xl text-nav-foreground hover:opacity-80 transition-colors uppercase tracking-widest text-center block px-6"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-12 text-center"
            >

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;