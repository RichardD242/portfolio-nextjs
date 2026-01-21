"use client";

import { Navbar } from "@/components/ui/navbar";
import { Github } from "lucide-react";

export default function Kontakt() {
  const menuItems = [
    { text: "Startseite", to: "/" },
    { text: "Über mich", to: "/ueber-mich" },
    { text: "Projekte", to: "/projekte" },
    { text: "Zertifikate", to: "/zertifikate" },
    { text: "Kontakt", to: "/kontakt" },
  ];

  return (
    <main className="relative min-h-screen bg-black">
      <Navbar
        logo={<span className="text-xl font-bold text-white">RD</span>}
        menuItems={menuItems}
      />
      
      <div className="pt-32 px-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white tracking-tighter">
            Kontakt
          </h1>
        </div>

        {/* Email - Groß und zentral */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">E-Mail</h2>
          <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
            richard.daubner@icloud.com
          </p>
        </div>

        {/* GitHub */}
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-300 mb-6">Github</p>
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
