import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Video, PenTool, Layout, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { AppRoute } from '../types';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="container mx-auto text-center z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-heading mb-8 leading-tight">
            ELEVATE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-400">VISUAL LEGACY</span>
          </h1>
          <p className="text-lg md:text-xl text-body mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium video editing and graphic design for brands that refuse to blend in. 
            We turn your content into a consistent, high-converting asset.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="https://wa.me/1234567890" external>Get a Free Edit</Button>
            <Link to={AppRoute.WORK}>
               <Button variant="outline">View Our Work</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-heading">Crafted for Impact</h3>
            </div>
            <Link to={AppRoute.SERVICES} className="text-body hover:text-heading flex items-center gap-2 mt-4 md:mt-0 transition-colors text-sm uppercase tracking-wide font-medium">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Video className="w-8 h-8 text-gold-500" />}
              title="Video Editing"
              desc="Cinematic storytelling, perfect pacing, and retention-focused editing for reels and long-form."
            />
            <ServiceCard 
              icon={<PenTool className="w-8 h-8 text-gold-500" />}
              title="Graphic Design"
              desc="High-end thumbnails, social creatives, and marketing materials that command authority."
            />
            <ServiceCard 
              icon={<Layout className="w-8 h-8 text-gold-500" />}
              title="Brand Support"
              desc="Consistent visual language across all platforms. Monthly retainers for serious growth."
            />
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">Selected Works</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-heading">Recent Masterpieces</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[1, 2, 3].map((i) => (
               <div key={i} className="group relative aspect-video overflow-hidden rounded-sm bg-card cursor-pointer">
                 <img 
                   src={`https://picsum.photos/800/600?random=${i + 10}`} 
                   alt="Project preview" 
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="text-heading text-sm font-bold uppercase tracking-widest border-b border-gold-500 pb-1">View Project</span>
                 </div>
               </div>
             ))}
           </div>

           <div className="text-center mt-12">
             <Link to={AppRoute.WORK}>
               <Button variant="outline">Explore Portfolio</Button>
             </Link>
           </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">The Loki Standard</h2>
               <h3 className="text-3xl md:text-4xl font-bold text-heading mb-6">Why Top Brands Choose Us</h3>
               <p className="text-body mb-8 leading-relaxed">
                 We don't just "edit videos". We engineer visual assets designed to build trust and authority. 
                 No cartoons, no cheap effects—just premium, consistent quality.
               </p>
               
               <ul className="space-y-4">
                 {[
                   "Brand-first mindset",
                   "Clean visuals over cheap effects",
                   "Consistency-driven approach",
                   "Direct WhatsApp communication"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-body">
                     <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>

               <div className="mt-10">
                 <Button href="https://wa.me/7397577180" external>Start a Conversation</Button>
               </div>
             </div>
             
             <div className="glass-panel p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />
                <h4 className="text-xl font-bold text-heading mb-4">Our Promise</h4>
                <p className="text-body mb-6 text-sm leading-relaxed">
                  "At Loki Digital, we believe that your visual identity is your most valuable asset. 
                  We treat every frame and every pixel with the respect it deserves."
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gold-500 font-bold">L</div>
                  <div>
                    <div className="text-heading font-medium text-sm">Loki Digital Team</div>
                    <div className="text-xs text-body">Creative Directors</div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6 relative z-10">Ready to Upgrade Your Brand?</h2>
        <p className="text-body max-w-xl mx-auto mb-10 relative z-10">
          Stop settling for average. Get a free sample edit and experience the difference today.
        </p>
        <div className="relative z-10">
           <Button href="https://wa.me/7397577180" external>Get Your Free Edit Now</Button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="glass-panel p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300">
    <div className="mb-6">{icon}</div>
    <h4 className="text-xl font-bold text-heading mb-3">{title}</h4>
    <p className="text-body text-sm leading-relaxed">{desc}</p>
  </div>
);