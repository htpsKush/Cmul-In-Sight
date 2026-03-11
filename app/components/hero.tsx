import Image from "next/image";

const Hero = () => {
  return (

    <section className="w-full max-w-full bg-black pt-13 pb-32 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Side: Content */}

        <div className="flex-[1.4] space-y-8 w-full break-words">
          <div className="space-y-4">
        
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              <span className="text-accent italic">CMUL-IN-SIGHT</span> <br />
              Intelligence That Fits <br /> 
              The Campus.
            </h1>
            
            <p className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-[10px]">
              Focus • Credibility • Transparency • Visibility with Purpose
            </p>
          </div>

          <p className="max-w-lg text-zinc-400 text-base md:text-lg leading-relaxed">
            An independent campus media platform focused on responsible reporting 
            and institutional visibility within the College of Medicine, University of Lagos.
          </p>

     
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-accent text-black px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer whitespace-nowrap">
              See Our Work
            </button>
            <button className="bg-zinc-900 text-white border border-zinc-800 px-6 py-3 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all cursor-pointer whitespace-nowrap">
              Learn About Us
            </button>
          </div>
        </div>

        {/* Right Side: Responsive Image Container */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          {/* Constrained width on mobile (max-w-[300px]) to prevent overflow */}
          <div className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md aspect-square">
            <Image 
              src="/heroIllustration.svg" 
              alt="Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;