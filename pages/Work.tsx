import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Play } from 'lucide-react';

export const Work: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Video' | 'Design'>('All');

  const projects = [
    { id: 1, type: 'Video', title: 'Tech Startup Launch', img: 'https://picsum.photos/800/600?random=1' },
    { id: 2, type: 'Design', title: 'Fitness Brand Identity', img: 'https://picsum.photos/800/600?random=2' },
    { id: 3, type: 'Video', title: 'Travel Vlog Series', img: 'https://picsum.photos/800/600?random=3' },
    { id: 4, type: 'Video', title: 'Corporate Documentary', img: 'https://picsum.photos/800/600?random=4' },
    { id: 5, type: 'Design', title: 'Podcast Cover Art', img: 'https://picsum.photos/800/600?random=5' },
    { id: 6, type: 'Design', title: 'Social Media Kit', img: 'https://picsum.photos/800/600?random=6' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h1 className="text-4xl md:text-6xl font-bold text-heading mb-6">Our Work</h1>
           <p className="text-lg text-body mb-8">
             A curated selection of projects that drove real results.
             Quality, consistency, and attention to detail in every frame.
           </p>

           <div className="flex justify-center gap-4">
             {['All', 'Video', 'Design'].map((f) => (
               <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  filter === f 
                  ? 'bg-heading text-site border-heading' 
                  : 'bg-transparent text-body border-card hover:border-heading hover:text-heading'
                }`}
               >
                 {f}
               </button>
             ))}
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative aspect-video bg-card overflow-hidden cursor-pointer">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                 <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Play className="w-5 h-5 text-site ml-1" />
                 </div>
                 <h3 className="text-xl font-bold text-heading mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                 <span className="text-gold-500 text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.type}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center border-t border-white/5 pt-16">
          <h2 className="text-2xl text-heading font-bold mb-6">Like what you see?</h2>
          <Button href="https://wa.me/1234567890" external>Get a Free Edit</Button>
        </div>
      </div>
    </div>
  );
};