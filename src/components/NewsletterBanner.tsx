import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NewsletterBanner = () => {
  return (
    <section className="newsletter-banner">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-title font-light mb-4 tracking-wide">
          Stay Inspired
        </h2>
        <p className="font-body text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
          Join our community to receive updates on new artworks, exhibitions, and artistic insights directly to your inbox.
        </p>
        <Link to="/contact">
          <Button 
            variant="outline" 
            size="lg"
            className="font-body tracking-wide border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-normal"
          >
            Subscribe to Newsletter
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NewsletterBanner;