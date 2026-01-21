"use client";

import { Navbar } from "@/components/ui/navbar";

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
      <div className="pt-32 px-8 text-center">
        <h1 className="text-4xl font-bold text-white">Kontakt</h1>
        <p className="text-gray-400 mt-4">Diese Seite wird bald verfügbar sein.</p>
      </div>
    </main>
  );
}
