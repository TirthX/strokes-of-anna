import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const springConfig = { damping: 30, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    if (isMobile) return;
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Main Gallery Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 64 : 20,
            height: isHovering ? 64 : 20,
            border: isHovering ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(0,0,0,0.4)',
            backgroundColor: isHovering ? 'rgba(0,0,0,0.02)' : 'transparent',
          }}
          className="rounded-full flex items-center justify-center transition-colors duration-300"
        >
           {!isHovering && (
             <div className="w-1 h-1 bg-foreground rounded-full" />
           )}
           {isHovering && (
             <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="font-serif italic text-xs tracking-widest text-foreground uppercase"
             >
                View
             </motion.span>
           )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
