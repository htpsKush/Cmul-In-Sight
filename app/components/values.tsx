const ValuesGrid = () => {
  const values = [
    { 
      title: "Independence", 
      desc: "Editorial freedom that ensures the truth is never compromised. We remain uninfluenced by political factions or administrative pressure.", 
      span: "md:col-span-2" 
    },
    { 
      title: "Neutrality", 
      desc: "We do not take sides—we take principles. Accuracy outweighs speed in every report.", 
      span: "md:col-span-1" 
    },
    { 
      title: "Credibility", 
      desc: "Every word is cross-referenced for precision. Discipline outweighs hype.", 
      span: "md:col-span-1" 
    },
    { 
      title: "Structured Engagement", 
      desc: "Fostering professional academic and social dialogue. We believe reform is achieved through informed conversation.", 
      span: "md:col-span-2" 
    },
  ];

  return (
    <section id="values" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-12">
        What We Stand For
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v) => (
          <div 
            key={v.title} 
            className={`${v.span} p-10 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-accent/50 hover:bg-zinc-900/80 transition-all duration-500 group shadow-lg`}
          >
           
            <h3 className="text-white text-xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors">
              {v.title}
            </h3>
            
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesGrid;