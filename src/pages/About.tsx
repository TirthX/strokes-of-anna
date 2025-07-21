import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="font-display text-hero font-light tracking-wide text-center mb-16"
            style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}
          >
            About Anna
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div 
              className="space-y-6"
              style={{ animation: 'slideInFromLeft 0.8s ease-out 0.4s both' }}
            >
              <h2 className="font-display text-title font-light tracking-wide">
                Artistic Journey
              </h2>
              <div className="space-y-4 font-body leading-relaxed text-muted-foreground">
                <p>
                  Anna Pattabhi is a contemporary artist whose work explores the delicate relationship between nature and human emotion. Born and raised in the countryside, her artistic vision was shaped by the ever-changing landscapes that surrounded her childhood.
                </p>
                <p>
                  With over a decade of experience in various mediums, Anna specializes in landscape paintings that capture not just the visual beauty of nature, but its emotional resonance. Her minimalist approach strips away unnecessary details to reveal the essence of each scene.
                </p>
                <p>
                  Her work has been featured in numerous galleries and private collections, with each piece serving as a meditation on the quiet moments that often go unnoticed in our busy lives.
                </p>
              </div>
            </div>
            
            <div 
              className="space-y-6"
              style={{ animation: 'slideInFromRight 0.8s ease-out 0.6s both' }}
            >
              <h2 className="font-display text-title font-light tracking-wide">
                Philosophy
              </h2>
              <div className="space-y-4 font-body leading-relaxed text-muted-foreground">
                <p>
                  "Art should be a window into moments of stillness and beauty that exist all around us, if only we take the time to notice."
                </p>
                <p>
                  Anna believes that painting is not about reproduction but interpretation—finding the emotional core of a landscape and translating it into something that speaks to the viewer's own experiences and memories.
                </p>
              </div>
              
              <div className="pt-8">
                <h3 className="font-display text-xl font-light tracking-wide mb-4">
                  Education & Recognition
                </h3>
                <ul className="space-y-2 font-body text-muted-foreground">
                  <li>• MFA in Fine Arts, Art Institute of Chicago</li>
                  <li>• Featured in Contemporary Art Review, 2023</li>
                  <li>• Solo Exhibition at Minimalist Gallery, 2022</li>
                  <li>• Winner, Landscape Artist Award, 2021</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;