"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Github, Linkedin, MessageSquare, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      {/* WebGL Background - fixed behind everything */}
      <div className="fixed inset-0 z-0 opacity-30">
        <WebGLShader />
      </div>
      
      {/* Content layer */}
      <div className="relative z-10">
        {/* Hero Section with Container Scroll Animation */}
        <ContainerScroll
          titleComponent={
            <div className="text-center mb-8">
              <p className="text-cyan-400 text-lg mb-2 font-medium">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight">
                Richard Daubner
              </h1>
            </div>
          }
        >
          {/* Content inside the tablet */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black h-full w-full p-8 md:p-12 flex flex-col items-center justify-center text-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-cyan-400">
                Student & Tech Enthusiast
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                Exceptional experiences are built through structure, empathy, and vision. 
                As a Student, I picked up on my tech hobby about 6-7 years ago.
              </p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                I&apos;m a digital wizard who builds user-friendly, modern experiences. 
                Crafting intuitive designs that solve real problems and make technology 
                feel effortless.
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
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a 
                  href="https://hackclub.slack.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-700 text-gray-300 rounded-full font-medium hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Slack
                </a>
              </div>
            </div>
          </div>
        </ContainerScroll>

        {/* Navigation Section */}
        <section className="py-24 px-8 bg-gray-950/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white tracking-tight">
            Explore
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Discover my work, projects, and journey in technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-8 rounded-3xl bg-gray-900/80 border border-gray-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-cyan-500 transition-colors">
                <span className="text-2xl group-hover:scale-110 transition-transform">👤</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">About</h3>
              <p className="text-gray-500 text-sm mb-4">Learn more about me</p>
              <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="group p-8 rounded-3xl bg-gray-900/80 border border-gray-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-cyan-500 transition-colors">
                <span className="text-2xl group-hover:scale-110 transition-transform">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Projects</h3>
              <p className="text-gray-500 text-sm mb-4">My design work</p>
              <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                View work <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="group p-8 rounded-3xl bg-gray-900/80 border border-gray-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-cyan-500 transition-colors">
                <span className="text-2xl group-hover:scale-110 transition-transform">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Apps</h3>
              <p className="text-gray-500 text-sm mb-4">Tools I&apos;ve built</p>
              <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                Explore apps <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
            <div className="group p-8 rounded-3xl bg-gray-900/80 border border-gray-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-cyan-500 transition-colors">
                <span className="text-2xl group-hover:scale-110 transition-transform">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Stats</h3>
              <p className="text-gray-500 text-sm mb-4">Numbers & metrics</p>
              <span className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                See stats <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
          </div>
        </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center bg-black/80 backdrop-blur-sm border-t border-gray-800">
          <p className="text-gray-500 text-sm">© 2025 Richard Daubner. Czech Republic 🇨🇿</p>
        </footer>
      </div>
    </main>
  );
}