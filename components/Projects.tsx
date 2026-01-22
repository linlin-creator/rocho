
import React from 'react';

const projects = [
  {
    title: 'Lighthouse Cafe',
    location: 'Nanjing Jiangxinzhou',
    description: 'A perfect fusion of architectural aesthetics, landscape, and space.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200',
    tags: ['Aesthetic Design', 'Top 1 Rank']
  },
  {
    title: 'Coffee Tram',
    location: 'Moving Urban Scenery',
    description: 'National first mobile coffee experience integrated into public transport.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=1200',
    tags: ['Innovation', 'City Culture']
  },
  {
    title: 'Yuzui Park Concept Store',
    location: 'Yuzui Wetland Park',
    description: 'Combining social attributes with park leisure values for urban retreat.',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=1200',
    tags: ['Nature', 'Micro-vacation']
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-8 md:px-16 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.4em] uppercase text-gray-400 font-semibold">Aesthetic Spaces</h3>
            <h2 className="text-4xl md:text-5xl font-serif">Aesthetic Space Design</h2>
          </div>
          <p className="text-gray-500 max-w-md font-light">
            We use space as a carrier to integrate aesthetic concepts into function, form, and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-gray-200 mb-8 rounded-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] tracking-widest uppercase py-1 px-2 border border-gray-200 text-gray-400">{tag}</span>
                  ))}
                </div>
                <h4 className="text-2xl font-serif group-hover:underline underline-offset-8 transition-all">{project.title}</h4>
                <p className="text-xs tracking-[0.2em] text-gray-400 uppercase font-medium">{project.location}</p>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
