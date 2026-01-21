"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface TrailFlag {
  id: number;
  x: number;
  y: number;
}

interface Beer {
  id: number;
  x: number;
  y: number;
}

export default function CzechTroll() {
  const [trail, setTrail] = useState<TrailFlag[]>([]);
  const [beers, setBeers] = useState<Beer[]>([]);
  const [trailId, setTrailId] = useState(0);
  const [beerId, setBeerId] = useState(0);

  // Cursor trail effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newFlag: TrailFlag = {
      id: trailId,
      x: e.clientX,
      y: e.clientY,
    };
    setTrailId(prev => prev + 1);
    setTrail(prev => [...prev.slice(-20), newFlag]);
  }, [trailId]);

  // Click to spawn beer
  const handleClick = useCallback((e: MouseEvent) => {
    const newBeer: Beer = {
      id: beerId,
      x: e.clientX,
      y: e.clientY,
    };
    setBeerId(prev => prev + 1);
    setBeers(prev => [...prev, newBeer]);

    // Remove beer after animation
    setTimeout(() => {
      setBeers(prev => prev.filter(b => b.id !== newBeer.id));
    }, 2000);
  }, [beerId]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [handleMouseMove, handleClick]);

  // Clean up old trail flags
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(-15));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden cursor-none">
      {/* Czech Flag Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/330px-Flag_of_the_Czech_Republic.svg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Coat of Arms */}
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Coat_of_arms_of_the_Czech_Republic.svg/500px-Coat_of_arms_of_the_Czech_Republic.svg.png"
          alt="Czech Coat of Arms"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 100 }}
          className="w-64 h-64 md:w-96 md:h-96 drop-shadow-2xl"
        />

        {/* Motto */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-4xl md:text-6xl font-black text-white text-center"
          style={{ 
            textShadow: "4px 4px 0 #11457E, -2px -2px 0 #D7141A, 2px -2px 0 #11457E, -2px 2px 0 #D7141A",
          }}
        >
          PRAVDA VÍTĚZÍ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-xl md:text-2xl text-white/90 font-medium"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
        >
          Truth Prevails
        </motion.p>
      </div>

      {/* Cursor Trail - Czech Flags */}
      {trail.map((flag, index) => (
        <motion.div
          key={flag.id}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed pointer-events-none z-50 text-2xl md:text-3xl"
          style={{
            left: flag.x - 15,
            top: flag.y - 15,
          }}
        >
          🇨🇿
        </motion.div>
      ))}

      {/* Custom Cursor - Czech Flag */}
      <motion.div
        className="fixed pointer-events-none z-[100] text-4xl"
        animate={{
          x: trail[trail.length - 1]?.x ? trail[trail.length - 1].x - 20 : -100,
          y: trail[trail.length - 1]?.y ? trail[trail.length - 1].y - 20 : -100,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        🇨🇿
      </motion.div>

      {/* Beer Pop-ups on Click */}
      <AnimatePresence>
        {beers.map((beer) => (
          <motion.img
            key={beer.id}
            src="https://www.gmoakeller.at/wp-content/uploads/2021/01/Velkopopovicky%CC%81-Kozel_Gmoakeller_Wien.jpg"
            alt="Czech Beer"
            initial={{ scale: 0, rotate: -20, opacity: 1 }}
            animate={{ 
              scale: [0, 1.2, 1],
              rotate: [0, 10, -5, 0],
              y: [0, -50, -100],
              opacity: [1, 1, 0]
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="fixed pointer-events-none z-40 w-24 h-32 md:w-32 md:h-40 object-contain rounded-lg shadow-xl"
            style={{
              left: beer.x - 48,
              top: beer.y - 64,
            }}
          />
        ))}
      </AnimatePresence>
    </main>
  );
}
