import React from 'react';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h1 className="text-4xl md:text-6xl font-bold text-heading mb-6">Premium Services</h1>
           <p className="text-lg text-body">
             Comprehensive visual solutions tailored for high-growth brands. 
             We handle the aesthetics so you can focus on the business.
           </p>
        </div>

        <div className="space-y-24">
          {/* Video Editing */}
          <ServiceSection 
            title="Video Editing"
            subtitle="Cinematic & Retention Focused"
            description="From fast-paced social media content to long-form documentaries, we ensure every second counts. Our editing style prioritizes clarity, pacing, and brand alignment."
            features={[
              "Reels, Shorts & TikToks",
              "Long-form YouTube Content",
              "Advanced Color Grading",
              "Motion Graphics & Subtitles",
              "Sound Design & Mixing"
            ]}
            image="https://picsum.photos/800/600?random=100"
            reverse={false}
          />

          {/* Graphic Design */}
          <ServiceSection 
            title="Graphic Design"
            subtitle="Authority Building Visuals"
            description="Stand out in crowded feeds with high-contrast, premium static visuals. We design with a focus on click-through rate and brand prestige."
            features={[
              "High-CTR YouTube Thumbnails",
              "Social Media Carousels",
              "Marketing Banners & Posters",
              "Brand Identity Assets",
              "Presentation Decks"
            ]}
            image="https://picsum.photos/800/600?random=101"
            reverse={true}
          />

          {/* Brand Support */}
          <ServiceSection 
            title="Brand Partnership"
            subtitle="Long-term Growth Partner"
            description="For businesses needing consistent output. We become your internal media team, delivering a steady stream of assets on a monthly retainer."
            features={[
              "Monthly Content Strategy",
              "Dedicated Creative Director",
              "Priority Turnaround Times",
              "Consistent Visual Language",
              "Unlimited Revisions"
            ]}
            image="https://picsum.photos/800/600?random=102"
            reverse={false}
          />
        </div>

        {/* How We Work */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-heading mb-12">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <Step number="01" title="Brief" desc="Share your raw files and vision via our streamlined dashboard." />
             <Step number="02" title="Craft" desc="Our team edits and designs with precision and creativity." />
             <Step number="03" title="Refine" desc="Review the draft. We polish it until it's perfect." />
          </div>
          <div className="mt-16 bg-gold-500/10 border border-gold-500/20 p-8 rounded-lg">
             <h3 className="text-xl font-bold text-heading mb-2">Not sure yet?</h3>
             <p className="text-body mb-6">Test our quality with a free sample edit. No strings attached.</p>
             <Button href="https://wa.me/7397577180" external>Claim Free Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceSection: React.FC<{ title: string, subtitle: string, description: string, features: string[], image: string, reverse: boolean }> = ({ 
  title, subtitle, description, features, image, reverse 
}) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
    <div className="flex-1 w-full">
      <div className="aspect-[4/3] rounded-sm overflow-hidden relative group">
        <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="flex-1 space-y-6">
      <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">{subtitle}</span>
      <h2 className="text-4xl font-bold text-heading">{title}</h2>
      <p className="text-body leading-relaxed text-lg">{description}</p>
      <ul className="space-y-3 pt-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-heading/90">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-gold-500">
              <Check className="w-3 h-3" />
            </div>
            {f}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Step: React.FC<{ number: string, title: string, desc: string }> = ({ number, title, desc }) => (
  <div className="glass-panel p-6 rounded-sm text-left">
    <div className="text-4xl font-bold text-heading/10 mb-4">{number}</div>
    <h3 className="text-xl font-bold text-heading mb-2">{title}</h3>
    <p className="text-body text-sm">{desc}</p>
  </div>
);