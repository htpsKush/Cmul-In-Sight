const Triad = () => {
  const boxes = [
    { title: "Mission", desc: "To provide an unbiased lens into institutional life through verified, responsible reporting." },
    { title: "Vision", desc: "A campus environment anchored in transparency, where clarity replaces the noise of gossip." },
    { title: "About Us", desc: "An independent media collective dedicated to the medical community at the University of Lagos." }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What We Are</h2>
        <div className="h-1 w-12 bg-accent mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {boxes.map((box) => (
          <div 
            key={box.title} 
          
            className="p-10 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-accent/50 hover:bg-zinc-900/80 transition-all duration-300 group shadow-2xl"
          >
         
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
              {box.title}
            </h3>
         
            <p className="text-zinc-400 leading-relaxed font-normal text-sm md:text-base">
              {box.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Triad;