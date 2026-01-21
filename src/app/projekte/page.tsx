"use client";

import { Navbar } from "@/components/ui/navbar";
import { CelestialSphere } from "@/components/ui/celestial-sphere";
import { Features } from "@/components/ui/features-section";
import { Github } from "lucide-react";

export default function Projekte() {
  const menuItems = [
    { text: "Startseite", to: "/" },
    { text: "Über mich", to: "/ueber-mich" },
    { text: "Projekte", to: "/projekte" },
    { text: "Zertifikate", to: "/zertifikate" },
    { text: "Kontakt", to: "/kontakt" },
  ];

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Slowed down celestial shader background with blur */}
      <div className="absolute inset-0 w-full h-full blur-sm opacity-60">
        <CelestialSphere
          hue={210.0}
          speed={0.1}
          zoom={1.2}
          particleSize={3.0}
          className="w-full h-full"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navbar
          logo={<span className="text-xl font-bold text-white">RD</span>}
          menuItems={menuItems}
        />
        <div className="pt-32 px-8 text-center">
          <h1 className="text-6xl font-bold text-white tracking-tighter">Projekte</h1>
          <p className="text-gray-300 mt-4 text-lg">Meine Arbeitsweise und Fähigkeiten</p>
        </div>
        
        {/* Features Section */}
        <Features />

        {/* GitHub Link Section */}
        <div className="py-16 px-8 text-center">
          <p className="text-xl text-gray-300 mb-6">Finde meine Projekte hier:</p>
          <a
            href="https://github.com/RichardD242"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-lg font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
            github.com/RichardD242
          </a>
        </div>
      </div>
    </main>
  );
}
