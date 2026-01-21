"use client";
import { useEffect, useRef } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import GlobeFeatureSection from "@/components/ui/globe-feature-section";
import SkillsSection from "@/components/ui/skills-section";
import { Navbar } from "@/components/ui/navbar";
import { useLanguage } from "@/context/language-context";
import { Github, Linkedin, MessageSquare } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const shaderOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.3, 0.1, 0]);

  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const menuItems = [
    { text: "Startseite", to: "/" },
    { text: "Über mich", to: "/ueber-mich" },
    { text: "Projekte", to: "/projekte" },
    { text: "Zertifikate", to: "/zertifikate" },
    { text: "Kontakt", to: "/kontakt" },
  ];

  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden bg-black">
        {/* WebGL Background - fades out on scroll */}
        <motion.div 
          className="fixed inset-0 z-0"
          style={{ opacity: shaderOpacity }}
        >
          <WebGLShader />
        </motion.div>

        {/* Navbar */}
        <Navbar
          logo={<span className="text-xl font-bold text-white">RD</span>}
          menuItems={menuItems}
        />
        
        {/* Content layer */}
        <div className="relative z-10" ref={heroRef}>
          {/* Hero Section with Container Scroll Animation */}
          <ContainerScroll
            titleComponent={
              <div className="text-center px-4">
                <p className="text-white/80 text-lg md:text-xl mb-2 font-light tracking-wide">{t.welcome}</p>
                <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold text-white tracking-tight">
                  {t.name}
                </h1>
              </div>
            }
          >
            {/* Content inside the tablet */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black h-full w-full p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                  {t.title}
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
                  {t.description}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4 justify-center flex-wrap">
                  <a 
                    href="https://github.com/RichardD242" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    {t.github}
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    {t.linkedin}
                  </a>
                  <a 
                    href="https://hackclub.slack.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-700 text-gray-300 rounded-full font-medium hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    {t.slack}
                  </a>
                </div>
              </div>
            </div>
          </ContainerScroll>

          {/* Globe Feature Section - Explore My Work */}
          <section className="relative px-4 md:px-8 py-20" id="work">
            <GlobeFeatureSection
              title={t.exploreTitle}
              subtitle={t.exploreSubtitle}
              buttonText={t.exploreButton}
              buttonHref="/projekte"
            />
          </section>

          {/* Skills Section - Certificates */}
          <section className="relative px-4 md:px-8 py-20" id="certificates">
            <SkillsSection
              title={t.skillsTitle}
              buttonText={t.skillsButton}
              buttonHref="/zertifikate"
            />
          </section>

          {/* Footer */}
          <footer className="py-12 text-center bg-black border-t border-gray-800">
            <p className="text-gray-500 text-sm">{t.footer}</p>
          </footer>
        </div>
      </main>
    </>
  );
}
