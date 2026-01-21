"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CzechTroll() {
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    // Play Czech anthem or sound effect (optional)
    const timer = setTimeout(() => setShowSecret(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const czechFacts = [
    "🍺 Czechs drink the most beer per capita in the world!",
    "🏰 Prague Castle is the largest ancient castle in the world!",
    "🤖 The word 'Robot' was invented by a Czech!",
    "🍖 Svíčková is the best food ever created!",
    "🎭 Czechs invented contact lenses!",
    "⚽ Czech Republic = Football legends!",
    "🎪 Pilsner beer was invented in Plzeň!",
    "🦆 Czechs love their Kachna (duck)!",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Czech Flag Background */}
      <div className="fixed inset-0 z-0">
        {/* White top */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-white" />
        {/* Red bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#D7141A]" />
        {/* Blue triangle */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/2"
          style={{
            background: "linear-gradient(to right bottom, #11457E 50%, transparent 50%), linear-gradient(to right top, #11457E 50%, transparent 50%)",
          }}
        />
        <svg className="absolute left-0 top-0 h-full" viewBox="0 0 50 100" preserveAspectRatio="none">
          <polygon points="0,0 50,50 0,100" fill="#11457E" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Giant Flag Emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
          className="text-[150px] md:text-[250px] mb-8"
        >
          🇨🇿
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-7xl font-black text-center mb-4"
          style={{ 
            textShadow: "3px 3px 0 #11457E, -3px -3px 0 #D7141A",
            color: "white"
          }}
        >
          ČESKÁ REPUBLIKA!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-[#11457E] bg-white/90 px-6 py-2 rounded-full mb-12"
        >
          🍺 Na zdraví! 🍺
        </motion.p>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl"
        >
          {czechFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-2 border-[#11457E]"
            >
              <p className="text-lg font-medium text-gray-800">{fact}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Secret Message */}
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-xl md:text-2xl font-bold text-white bg-[#D7141A] px-8 py-4 rounded-full shadow-xl">
              🎉 You found the secret page! 🎉
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-6 py-3 bg-[#11457E] text-white font-semibold rounded-full hover:bg-[#0d3a6b] transition-colors"
            >
              ← Back to Portfolio
            </motion.a>
          </motion.div>
        )}

        {/* Floating Beer Emojis */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed text-4xl md:text-6xl pointer-events-none"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: -100,
              rotate: 0 
            }}
            animate={{ 
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              rotate: 360 
            }}
            transition={{ 
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            🍺
          </motion.div>
        ))}
      </div>
    </main>
  );
}
