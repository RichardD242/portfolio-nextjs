"use client";

import React, { createContext, useContext } from "react";

interface Translations {
  welcome: string;
  name: string;
  title: string;
  description: string;
  github: string;
  linkedin: string;
  slack: string;
  exploreTitle: string;
  exploreSubtitle: string;
  exploreButton: string;
  skillsTitle: string;
  skillsButton: string;
  stats: string;
  certificates: string;
  work: string;
  socials: string;
  gallery: string;
  contact: string;
  home: string;
  about: string;
  footer: string;
}

const translations: Translations = {
  welcome: "Hey, mein Name ist",
  name: "Richard Daubner",
  title: "Student & Tech-Enthusiast",
  description: "Ich programmiere oder erstelle gerne Projekte in meiner Freizeit.",
  github: "GitHub",
  linkedin: "LinkedIn",
  slack: "Slack",
  exploreTitle: "Entdecke meine Arbeit",
  exploreSubtitle: "Entdecke meine Projekte, Zertifikate und meinen kreativen Weg aus aller Welt.",
  exploreButton: "Projekte ansehen",
  skillsTitle: "Entdecken Sie meine Stärken",
  skillsButton: "Zertifikate ansehen",
  stats: "Statistiken",
  certificates: "Zertifikate",
  work: "Projekte",
  socials: "Soziale Medien",
  gallery: "Galerie",
  contact: "Kontakt",
  home: "Startseite",
  about: "Über mich",
  footer: "© 2025 Richard Daubner. Tschechien 🇨🇿",
};

interface LanguageContextType {
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return (
    <LanguageContext.Provider
      value={{
        t: translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
