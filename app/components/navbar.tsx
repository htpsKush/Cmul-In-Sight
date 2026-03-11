"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const desktopLinks = [
    { name: "What We Are", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Questions?", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const mobileLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "The Noise", href: "#noise" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="w-full bg-black py-2 px-6 border-b border-zinc-900 sticky top-0 z-[100] backdrop-blur-md bg-black/90">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="shrink-0 py-1">
          <Link href="/" onClick={closeMenu}>
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={140} 
              height={35} 
              priority 
              className="object-contain" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {desktopLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white p-2 relative z-[120]" 
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Small Dropdown */}
      {isOpen && (
        <>
          {/* Overlay to close when clicking outside */}
          <div className="fixed inset-0 z-[110] md:hidden" onClick={closeMenu} />
          
          <div className="absolute top-[60px] right-6 w-56 bg-zinc-900/95 border border-zinc-800 backdrop-blur-xl rounded-2xl shadow-2xl z-[115] overflow-hidden md:hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
            <div className="flex flex-col py-3">
              {mobileLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu} 
                  className="px-6 py-4 text-zinc-300 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-800 hover:text-accent transition-all border-b border-zinc-800/50 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;