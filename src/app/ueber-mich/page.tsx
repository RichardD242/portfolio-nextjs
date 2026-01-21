"use client";

import { Navbar } from "@/components/ui/navbar";

export default function UeberMich() {
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
      
      <div className="pt-32 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Beschreibung links */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Über mich
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Ich bin <span className="text-white font-semibold">15 Jahre alt</span> und 
              habe eine unternehmerische Denkweise. Mein Ziel ist es, später{" "}
              <span className="text-white font-semibold">Unternehmensführer</span> zu werden.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Ich bin offen für neue Möglichkeiten, Kooperationen und spannende Projekte. 
              Wenn du eine Idee hast oder zusammenarbeiten möchtest – melde dich gerne!
            </p>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-white mb-4">Meine Interessen</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full text-gray-300 border border-white/20">
                  💰 Finanzen
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-gray-300 border border-white/20">
                  💻 Computer
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-gray-300 border border-white/20">
                  🤖 Künstliche Intelligenz
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-gray-300 border border-white/20">
                  💪 Gym
                </span>
              </div>
            </div>
          </div>

          {/* Bild rechts */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-white/10">
                <img
                  src="https://avatars.githubusercontent.com/u/209126641?v=4"
                  alt="Richard Daubner"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl border-2 border-white/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
