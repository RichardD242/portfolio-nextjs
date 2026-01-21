"use client"

import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  // Design & UX
  "figma",
  "sketch",
  "adobexd",
  "adobephotoshop",
  "adobeillustrator",
  "adobeaftereffects",
  "invision",
  "framer",
  // Development
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "tailwindcss",
  "nodejs",
  // Tools & Platforms
  "git",
  "github",
  "gitlab",
  "jira",
  "confluence",
  "notion",
  "slack",
  "miro",
  // Analytics & Research
  "googleanalytics",
  "hotjar",
  // Cloud & Hosting
  "vercel",
  "netlify",
  "amazonaws",
  // Databases
  "postgresql",
  "mongodb",
  "firebase",
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
          Skills & Tools
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Technologies and tools I work with
        </p>
        <div className="relative flex size-full items-center justify-center overflow-hidden">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </main>
  )
}
