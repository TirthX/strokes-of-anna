import { Search, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-normal"
              style={{ animation: 'slideInFromLeft 0.6s ease-out' }}
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-normal"
              style={{ animation: 'slideInFromLeft 0.6s ease-out 0.1s both' }}
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:anna@example.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-normal"
              style={{ animation: 'slideInFromLeft 0.6s ease-out 0.2s both' }}
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Artist Name */}
          <Link 
            to="/"
            className="font-display text-2xl font-light tracking-wide text-foreground hover:text-accent transition-colors duration-normal"
            style={{ animation: 'fadeIn 0.8s ease-out 0.3s both' }}
          >
            Anna Pattabhi
          </Link>

          {/* Search Icon */}
          <button 
            className="text-muted-foreground hover:text-accent transition-colors duration-normal"
            style={{ animation: 'slideInFromRight 0.6s ease-out 0.4s both' }}
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;