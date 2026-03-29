"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const [currentBg, setCurrentBg] = useState(0);
    const backgrounds = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg", "/bg4.jpg"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <section className="relative w-full max-w-full bg-white pt-20 pb-32 px-6 overflow-hidden min-h-[80vh] flex items-center">
            
            <div className="absolute inset-0 z-0">
                {backgrounds.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentBg ? "opacity-30" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`Background ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none" />
            <div className="absolute inset-0 z-[1] backdrop-blur-[1px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left">
                <div className="max-w-4xl space-y-8 break-words">
                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-black leading-[1.05]">
                            <span className="text-accent italic">CMUL-IN-SIGHT</span> <br />
                            Intelligence That Fits <br />
                            The Campus.
                        </h1>

                        <p className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-[10px]">
                            Focus • Credibility • Transparency • Visibility with Purpose
                        </p>
                    </div>
                    
                    <p className="max-w-xl text-zinc-800 text-base md:text-xl leading-relaxed font-medium">
                        An independent campus media platform focused on responsible reporting
                        and institutional visibility within the College of Medicine, University of Lagos.
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                        <Link
                            href="#work"
                            className="bg-accent text-black px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
                        >
                            See Our Work
                        </Link>

                        <Link
                            href="#about"
                            className="bg-white/80 backdrop-blur-md text-black border border-zinc-200 px-8 py-4 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-zinc-100 transition-all cursor-pointer whitespace-nowrap"
                        >
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;