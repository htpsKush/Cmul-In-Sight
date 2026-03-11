const Footer = () => {
  return (
    <footer className="pt-40 pb-12 px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* The Signature Quote */}
        <div className="text-center space-y-4 mb-32">
          <p className="text-zinc-500 text-lg md:text-2xl font-light">
            CMUL-IN-SIGHT does not amplify noise.
          </p>
          <h2 className="text-5xl md:text-8xl font-bold text-accent tracking-tighter">
            It amplifies clarity.
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              Visibility With Purpose
            </span>
          </div>

          {/* Social & Contact Links */}
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">TikTok</a>
            <a href="mailto:contact@cmulinsight.com" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-12 text-[10px] text-zinc-800 font-medium uppercase tracking-widest">
          © 2026 CMUL-IN-SIGHT • College of Medicine, University of Lagos
        </div>
      </div>
    </footer>
  );
};
export default Footer;