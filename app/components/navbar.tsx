import Image from "next/image";

const Navbar = () => {
  const links = [
    { name: "What We Are", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Questions?", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="w-full bg-black py-6 px-6 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto flex items-center gap-12">
        {/* Logo */}
        <div className="shrink-0">
          <Image src="/logo.png" alt="Logo" width={120} height={40} priority />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-zinc-400 text-[15px] font-medium hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;