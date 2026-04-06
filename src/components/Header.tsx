import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsAtTop(latest < 50);

    // Don't hide if menu is open
    if (isMenuOpen) return;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
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
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-10 transition-all duration-300 ${isAtTop && !isMenuOpen
            ? "py-8 md:py-10 bg-transparent"
            : "py-5 md:py-6 bg-background/90 backdrop-blur-md border-b border-black/5"
          }`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="font-script text-3xl md:text-5xl text-foreground hover:text-accent transition-colors z-50"
          >
            Home
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12 pt-2">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-serif italic text-xl md:text-2xl transition-all relative group uppercase tracking-widest ${location.pathname === link.path ? 'text-accent' : 'text-foreground/80 hover:text-accent'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50 text-foreground p-2"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
          </button>
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
            className="fixed inset-0 bg-background z-[90] lg:hidden flex flex-col items-center justify-center space-y-12"
          >
            <div className="flex flex-col items-center space-y-10">
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
                    className="font-script text-5xl md:text-6xl text-foreground hover:text-accent transition-colors"
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