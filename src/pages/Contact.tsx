import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. Anna will get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 
            className="font-display text-hero font-light tracking-wide text-center mb-16"
            style={{ animation: 'fadeIn 0.8s ease-out 0.2s both' }}
          >
            Get In Touch
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div 
              className="space-y-8"
              style={{ animation: 'slideInFromLeft 0.8s ease-out 0.4s both' }}
            >
              <div>
                <h2 className="font-display text-title font-light tracking-wide mb-4">
                  Send a Message
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Whether you're interested in commissioning a piece, have questions about existing works, or simply want to subscribe to our newsletter, I'd love to hear from you.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-accent"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-accent"
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-border/50 focus:border-accent"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-border/50 focus:border-accent resize-none"
                />
                <Button 
                  type="submit"
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-body tracking-wide"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div 
              className="space-y-8"
              style={{ animation: 'slideInFromRight 0.8s ease-out 0.6s both' }}
            >
              <div>
                <h2 className="font-display text-title font-light tracking-wide mb-8">
                  Newsletter Subscription
                </h2>
                <div className="bg-muted/30 p-8 rounded-sm">
                  <h3 className="font-display text-xl font-light tracking-wide mb-4">
                    Stay Connected
                  </h3>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    Join our community to receive monthly updates featuring new artworks, exhibition announcements, and behind-the-scenes insights into my creative process.
                  </p>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="border-border/50 focus:border-accent"
                    />
                    <Button 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body tracking-wide"
                    >
                      Subscribe to Newsletter
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="font-display text-xl font-light tracking-wide">
                  Other Ways to Connect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-accent" size={20} />
                    <span className="font-body text-muted-foreground">anna.pattabhi@example.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-accent" size={20} />
                    <span className="font-body text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-accent" size={20} />
                    <span className="font-body text-muted-foreground">Art District, Creative City</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;