import React from 'react';
import { Button } from '../components/Button';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 flex-grow mb-20">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">Let's Create Something Iconic</h1>
            <p className="text-body text-lg mb-10 leading-relaxed">
              Ready to elevate your brand's visual identity? We are currently accepting new clients for this month. 
              Reach out via WhatsApp for the fastest response.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-gold-500">
                  <MessageCircle />
                </div>
                <div>
                  <h3 className="text-heading font-bold mb-1">WhatsApp (Priority)</h3>
                  <p className="text-body text-sm mb-2">Direct line to our Creative Director.</p>
                  <a href="https://wa.me/7397577180" className="text-gold-500 font-bold text-sm uppercase tracking-wider hover:text-heading transition-colors">Chat Now &rarr;</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-gold-500">
                  <Mail />
                </div>
                <div>
                  <h3 className="text-heading font-bold mb-1">Email</h3>
                  <p className="text-body text-sm mb-2">For detailed inquiries and RFPs.</p>
                  <a href="lokidigital25@gmail.com" className="text-gold-500 font-bold text-sm uppercase tracking-wider hover:text-heading transition-colors">hello@loki.digital &rarr;</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-gold-500">
                  <MapPin />
                </div>
                <div>
                  <h3 className="text-heading font-bold mb-1">Studio</h3>
                  <p className="text-body text-sm">Global Remote Agency<br/>Based in Creative Hub</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-sm">
            <h3 className="text-2xl font-bold text-heading mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-body mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-card border border-white/10 p-4 text-heading focus:border-gold-500 focus:outline-none transition-colors placeholder:text-neutral-700"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-body mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-card border border-white/10 p-4 text-heading focus:border-gold-500 focus:outline-none transition-colors placeholder:text-neutral-700"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-body mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-card border border-white/10 p-4 text-heading focus:border-gold-500 focus:outline-none transition-colors placeholder:text-neutral-700"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button fullWidth>Send Message</Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};