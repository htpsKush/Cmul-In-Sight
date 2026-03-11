const Clarity = () => {
  return (
    <section id="noise" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid md:grid-cols-2 gap-px bg-zinc-800 overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
        
        {/* The Noise */}
        <div className="p-12 bg-zinc-950 flex flex-col justify-between">
          <div>
            <span className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">The Noise</span>
            <ul className="mt-12 space-y-6">
              {['Campus Gossip', 'Political Propaganda', 'Unverified Noise'].map((item) => (
                <li key={item} className="text-zinc-600 text-xl font-medium line-through decoration-zinc-700">
                  {item}
                </li>
              ))}
            </ul>   
          </div>
          <p className="text-zinc-600 text-sm mt-8 italic font-medium">We don't amplify this.</p>
        </div>

        {/* The Signal */}
        <div className="p-12 bg-zinc-900 flex flex-col justify-between">
          <div>
            <span className="text-accent text-xs font-black uppercase tracking-[0.3em]">The Signal</span>
            <ul className="mt-12 space-y-6">
              {['Verified Reporting', 'Institutional Growth', 'Transparent Discourse'].map((item) => (
                <li key={item} className="text-white text-xl font-bold flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#cbfd00]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-zinc-300 text-sm mt-8 font-semibold tracking-wide">We prioritize this.</p>
        </div>
      </div>
    </section>
  );
};

export default Clarity;