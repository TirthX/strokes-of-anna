const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-transparent border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center font-script text-4xl text-foreground/40">
          Reflections By Anna
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-hand text-xl text-muted-foreground opacity-60">
          <span>+1 (248) 872-6354</span>
          <span className="hidden md:block opacity-30">•</span>
          <a href="mailto:anna.pattabhi@gmail.com" className="hover:text-accent transition-colors">anna.pattabhi@gmail.com</a>
        </div>
        
        <div className="mt-8 text-sm font-serif italic text-muted-foreground opacity-40">
          © 2024. All thoughts and strokes are proprietary.
        </div>
      </div>
    </footer>
  );
};

export default Footer;