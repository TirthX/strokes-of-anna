import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubtitle(true), 2500);
    const timer2 = setTimeout(() => onComplete(), 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <h1 className="loading-text text-foreground mb-4">
          Paintings By Anna
        </h1>
        {showSubtitle && (
          <p className="loading-fade-in font-body text-muted-foreground tracking-wide">
            Minimalist Art Collection
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;