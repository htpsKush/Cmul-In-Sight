import { Twitter, Instagram, Globe, Linkedin } from "lucide-react";

const OurWorks = () => {
  const works = [
    { id: 1, title: "Institutional Visibility Report", category: "Research • 2026" },
    { id: 2, title: "Campus Transparency Audit", category: "Documentation • 2026" },
    { id: 3, title: "Student Welfare Analysis", category: "Editorial • 2025" },
    { id: 4, title: "Healthcare Systems Review", category: "Case Study • 2025" },
  ];

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto bg-black">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-16">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Recent Insights
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium">
            Documenting the pulse of the College with precision.
          </p>
        </div>
        <button className="text-accent text-xs font-bold uppercase tracking-[0.2em] border-b border-accent/30 pb-1 hover:border-accent transition-all cursor-pointer">
          View Archives
        </button>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {works.map((work) => (
          <div key={work.id} className="group flex flex-col">
            {/* Image Placeholder - Visibility Fix */}
            <div className="aspect-video bg-zinc-900/40 rounded-xl overflow-hidden border border-zinc-800 group-hover:border-accent/50 transition-all duration-500 relative flex items-center justify-center shadow-lg">
               <div className="text-zinc-700 font-black uppercase tracking-[0.5em] text-[10px] select-none group-hover:text-zinc-500 transition-colors">
                 Project Slot {work.id}
               </div>
               
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Content & Socials Row */}
            <div className="mt-6 flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-white font-bold text-xl leading-tight tracking-tight group-hover:text-accent transition-colors">
                  {work.title}
                </h4>
                {/* Category: Brightened for visibility */}
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                  {work.category}
                </p>
              </div>
              
              {/* Social Icons - Swapped TikTok for LinkedIn */}
              <div className="flex gap-4 pt-1">
                <a href="https://x.com/CMUL_in_sight" className="text-zinc-500 hover:text-accent transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/cmul_in_sight?igsh=MWw3aWM1NTdodzZ2MQ==" className="text-zinc-600 hover:text-accent transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/cmul-in-sight-22b2783a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-zinc-600 hover:text-accent transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-zinc-600 hover:text-accent transition-colors">
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