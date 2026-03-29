import { Twitter, Instagram, Globe, Linkedin } from "lucide-react";

const OurWorks = () => {
  const works = [
    { 
      id: 1, 
      title: "Mr & Mrs AMSUL", 
      category: "Pageantry • 2026", 
      video: "/work1.mp4" 
    },
    { 
      id: 2, 
      title: "Creative Vortex", 
      category: "Exhibition • 2026", 
      video: "/work2.mp4" 
    },
    { 
      id: 3, 
      title: "Kesington Adebukola", 
      category: "Documentation • 2025", 
      video: "/work3.mp4" 
    },
    { 
      id: 4, 
      title: "Research Center Launch", 
      category: "Provost & CMD Visit • 2025", 
      video: "/work4.mp4" 
    },
  ];

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto bg-white">
      <div className="flex justify-between items-end mb-16">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Recent Insights
          </h2>
          <p className="text-zinc-600 text-sm md:text-base font-medium">
            Documenting the pulse of the College with precision.
          </p>
        </div>
        <button className="text-accent text-xs font-bold uppercase tracking-[0.2em] border-b border-accent/30 pb-1 hover:border-accent transition-all cursor-pointer">
          View Archives
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {works.map((work) => (
          <div key={work.id} className="group flex flex-col">
            <div className="aspect-video bg-zinc-100 rounded-xl overflow-hidden border border-zinc-200 group-hover:border-accent/50 transition-all duration-500 relative shadow-md">
              
              <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src={work.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="mt-6 flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-black font-bold text-xl leading-tight tracking-tight group-hover:text-accent transition-colors">
                  {work.title}
                </h4>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                  {work.category}
                </p>
              </div>

              <div className="flex gap-4 pt-1">
                <a href="https://x.com/CMUL_in_sight" className="text-zinc-400 hover:text-accent transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/cmul_in_sight" className="text-zinc-400 hover:text-accent transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/cmul-in-sight" className="text-zinc-400 hover:text-accent transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-accent transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;