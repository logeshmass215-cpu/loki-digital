import React from 'react';
import { Button } from '../components/Button';
import { ShieldCheck, Zap, Gem, Users, Layers } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h1 className="text-4xl md:text-6xl font-bold text-heading mb-6">Why Loki Digital?</h1>
           <p className="text-lg text-body">
             In a sea of average content, we provide the calm, confident consistency that premium brands require.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
           <FeatureCard 
             icon={<Gem className="w-10 h-10 text-gold-500" />}
             title="Premium Aesthetics"
             desc="We avoid cheap trends and emojis. Our style is timeless, clean, and designed to position you as an authority."
           />
           <FeatureCard 
             icon={<Zap className="w-10 h-10 text-gold-500" />}
             title="Quality Over Quantity"
             desc="We don't churn out garbage. Every piece of content is reviewed by a creative director before it reaches you."
           />
           <FeatureCard 
             icon={<Layers className="w-10 h-10 text-gold-500" />}
             title="Unwavering Consistency"
             desc="Your brand needs to look the same today, tomorrow, and next year. We build systems to ensure visual uniformity."
           />
           <FeatureCard 
             icon={<Users className="w-10 h-10 text-gold-500" />}
             title="Brand-First Mindset"
             desc="We aren't just editors; we are brand custodians. We make decisions based on your long-term business goals."
           />
           <FeatureCard 
             icon={<ShieldCheck className="w-10 h-10 text-gold-500" />}
             title="Reliable Process"
             desc="No ghosting. No missed deadlines. We operate with professional workflows and clear communication channels."
           />
        </div>

        <div className="glass-panel p-10 md:p-16 rounded-sm text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-gold-500/5 blur-[100px] pointer-events-none" />
          <h2 className="text-3xl font-bold text-heading mb-6 relative z-10">Experience the Difference</h2>
          <p className="text-body max-w-2xl mx-auto mb-8 relative z-10">
            Words are cheap. Let us show you what we can do with your footage. 
            Send us raw files, and we'll send back a masterpiece.
          </p>
          <div className="relative z-10">
            <Button href="https://wa.me/1234567890" external>Start with a Free Sample</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="glass-panel p-8 hover:bg-white/5 transition-colors duration-300">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-heading mb-3">{title}</h3>
    <p className="text-body leading-relaxed text-sm">{desc}</p>
  </div>
);