const Clarity = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid md:grid-cols-2 gap-px bg-zinc-900 overflow-hidden rounded-2xl border border-zinc-900">
        {/* The Noise */}
        <div className="p-12 bg-black flex flex-col justify-between">
          <div>
            <span className="text-zinc-600 text-xs font-bold uppercase tracking-[0.3em]">The Noise</span>
            <ul className="mt-12 space-y-6">
              {['Campus Gossip', 'Political Propaganda', 'Unverified Noise'].map((item) => (
                <li key={item} className="text-zinc-700 text-xl font-medium line-through decoration-zinc-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-zinc-700 text-sm mt-8 italic">We don't amplify this.</p>
        </div>

        {/* The Signal */}
        <div className="p-12 bg-zinc-950 flex flex-col justify-between">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">The Signal</span>
            <ul className="mt-12 space-y-6">
              {['Verified Reporting', 'Institutional Growth', 'Transparent Discourse'].map((item) => (
                <li key={item} className="text-white text-xl font-bold flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-zinc-400 text-sm mt-8">We prioritize this.</p>
        </div>
      </div>
    </section>
  );
};

export default Clarity;