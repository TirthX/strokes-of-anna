import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="py-6 border-t border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center space-x-12">
          <Link 
            to="/about"
            className={`nav-link ${isActive('/about') ? 'text-accent' : 'text-foreground'}`}
            style={{ animation: 'fadeIn 0.6s ease-out 0.5s both' }}
          >
            About Me
          </Link>
          <Link 
            to="/gallery"
            className={`nav-link ${isActive('/gallery') ? 'text-accent' : 'text-foreground'}`}
            style={{ animation: 'fadeIn 0.6s ease-out 0.6s both' }}
          >
            Art Gallery
          </Link>
          <Link 
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'text-accent' : 'text-foreground'}`}
            style={{ animation: 'fadeIn 0.6s ease-out 0.7s both' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;