import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-light tracking-wide mb-2">
              Anna Pattabhi
            </h3>
            <p className="font-body text-muted-foreground text-sm">
              Contemporary Artist & Landscape Painter
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-normal"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-normal"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="mailto:anna@example.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-normal"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-body text-muted-foreground text-sm">
              © 2024 Anna Pattabhi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;