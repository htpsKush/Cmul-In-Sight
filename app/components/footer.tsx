const Footer = () => {
    return (
        <footer className="pt-24 pb-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="relative group overflow-hidden bg-zinc-50 border border-zinc-200 rounded-3xl p-12 md:p-24 text-center mb-20 shadow-sm transition-all duration-700 hover:border-accent/30 hover:shadow-xl">

                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px] group-hover:bg-accent/10 transition-all duration-700" />

                    <div className="relative z-10 space-y-6">
                        <p className="text-zinc-600 text-lg md:text-2xl font-medium tracking-wide">
                            CMUL-IN-SIGHT does not amplify noise.
                        </p>
                        <h2 className="text-5xl md:text-8xl font-black text-black tracking-tighter leading-none">
                            It amplifies <span className="text-accent underline decoration-accent/20 underline-offset-8">clarity.</span>
                        </h2>
                    </div>

                    <div className="absolute bottom-4 right-6 text-[8px] font-black uppercase tracking-[0.8em] text-zinc-300 vertical-text hidden md:block">
                        EST. 2026
                    </div>
                </div>

                <div className="w-full pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-10">

                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#cbfd00]" />
                        <span className="text-xs font-black text-black uppercase tracking-[0.3em]">
                            Visibility With Purpose
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                        <a href="https://x.com/CMUL_in_sight" className="hover:text-accent transition-colors duration-300">Twitter</a>
                        <a href="https://www.instagram.com/cmul_in_sight?igsh=MWw3aWM1NTdodzZ2MQ==" className="hover:text-accent transition-colors duration-300">Instagram</a>
                        <a href="https://www.linkedin.com/in/cmul-in-sight-22b2783a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-accent transition-colors duration-300">LinkedIn</a>
                        <a href="mailto:contact@cmulinsight.com" className="hover:text-accent transition-colors duration-300">Email Us</a>
                    </div>
                </div>

                <div className="mt-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 opacity-60">
                    <div className="text-[9px] text-zinc-500 font-medium uppercase tracking-widest">
                        © 2026 CMUL-IN-SIGHT • College of Medicine, University of Lagos
                    </div>
                    <div className="text-[9px] text-zinc-500 font-medium uppercase tracking-widest">
                        Independent Institutional Media
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;