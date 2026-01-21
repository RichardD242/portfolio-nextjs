"use client";

import { Navbar } from "@/components/ui/navbar";
import { LogoCloud } from "@/components/ui/logo-cloud";

export default function Zertifikate() {
  const menuItems = [
    { text: "Startseite", to: "/" },
    { text: "Über mich", to: "/ueber-mich" },
    { text: "Projekte", to: "/projekte" },
    { text: "Zertifikate", to: "/zertifikate" },
    { text: "Kontakt", to: "/kontakt" },
  ];

  return (
    <main className="relative min-h-screen bg-black flex flex-col">
      <Navbar
        logo={<span className="text-xl font-bold text-white">RD</span>}
        menuItems={menuItems}
      />

      {/* Main Content */}
      <div className="flex-1 pt-24 px-8 text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tighter">Zertifikate</h1>
        <p className="text-gray-400 mt-6 text-xl">Noch keine erfolgreich abgeschlossen.</p>
      </div>

      {/* Footer with Logo Cloud */}
      <footer className="border-t border-gray-800 py-8">
        <p className="text-center text-sm text-gray-500 mb-6">Zertifikate von Großkonzernen</p>
        <LogoCloud />
      </footer>
    </main>
  );
}
