import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

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
      title: "Message Received",
      description: "We will get back to you shortly regarding your inquiry.",
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
    <div className="min-h-screen bg-transparent">
      <Header />
      
      <main className="pt-24 md:pt-32 lg:pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto mt-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center mb-12"
          >
            <h1 className="font-display text-xl md:text-3xl text-foreground tracking-[0.3em] uppercase mb-6">
              Contact
            </h1>
            <p className="font-display text-base md:text-lg tracking-[0.4em] text-accent uppercase">
              Inquiries & Dialogue
            </p>
          </motion.div>
          
          <div className="relative">
            <form 
              onSubmit={handleSubmit} 
              className="relative z-10 bg-white p-8 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.05)] space-y-12 border border-black/5"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4 border-b border-black/10 pb-4">
                  <label className="font-display text-xs tracking-widest text-foreground/100 uppercase block">Full Name</label>
                  <input
                    name="name"
                    placeholder="Signature"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent font-serif text-xl md:text-2xl text-foreground outline-none placeholder:text-foreground/10"
                  />
                </div>
                <div className="space-y-4 border-b border-black/10 pb-4">
                  <label className="font-display text-xs tracking-widest text-foreground/100 uppercase block">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent font-serif text-xl md:text-2xl text-foreground outline-none placeholder:text-foreground/10"
                  />
                </div>
              </div>

              <div className="space-y-4 border-b border-black/10 pb-4">
                <label className="font-display text-xs tracking-widest text-foreground/100 uppercase block">Subject</label>
                <input
                  name="subject"
                  placeholder="The Nature of Enquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent font-serif text-xl md:text-2xl text-foreground outline-none placeholder:text-foreground/10"
                />
              </div>

              <div className="space-y-4 border-b border-black/10 pb-4">
                <label className="font-display text-xs tracking-widest text-foreground/100 uppercase block">Message</label>
                <textarea
                  name="message"
                  placeholder="Share your thoughts..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent font-serif text-xl md:text-2xl text-foreground outline-none resize-none placeholder:text-foreground/10 leading-relaxed"
                />
              </div>

              <div className="flex justify-center pt-8">
                <button 
                  type="submit"
                  className="font-display text-xl text-accent hover:scale-[1.02] transition-all py-6 px-16 border border-accent/20 bg-accent/5 uppercase tracking-[0.2em]"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

         
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;