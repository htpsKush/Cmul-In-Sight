const ValuesGrid = () => {
  const values = [
    { title: "Independence", desc: "Editorial freedom that ensures the truth is never compromised.", span: "md:col-span-2" },
    { title: "Neutrality", desc: "We report, you decide.", span: "md:col-span-1" },
    { title: "Credibility", desc: "Every word is cross-referenced for precision.", span: "md:col-span-1" },
    { title: "Structured Engagement", desc: "Fostering professional academic and social dialogue.", span: "md:col-span-2" },
  ];

  return (
    <section id="values" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-12">What We Stand For</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {values.map((v) => (
          <div key={v.title} className={`${v.span} p-10 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-accent/40 transition-all duration-500`}>
            <h3 className="text-white text-xl font-bold mb-4 italic tracking-tight">{v.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesGrid;