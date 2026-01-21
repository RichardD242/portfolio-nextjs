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

interface Notification {
  id: number;
  sender: string;
  message: string;
  avatar: string;
}

const spanishMessages = [
  "⚠️ WARNING: Pay your taxes immediately!",
  "🚨 URGENT: You owe 50,000 Kč!",
  "💰 Your bank account will be frozen!",
  "🏦 Czech Tax Authority needs you!",
  "⚠️ Final warning before prosecution!",
  "📝 Sign these documents NOW!",
  "🚔 Police is on the way!",
  "💸 Transfer 10,000 Kč to avoid jail!",
  "🏛️ Report to Prague Castle immediately!",
  "🚨 Your passport has been revoked!",
  "⚠️ Agrofert needs your support!",
  "📊 Your taxes are wrong. Again.",
  "🏠 We're taking your house!",
  "👮‍♂️ Come to the police station!",
  "💳 Your card is blocked!",
];

export default function CzechTroll() {
  const [trail, setTrail] = useState<TrailFlag[]>([]);
  const [beers, setBeers] = useState<Beer[]>([]);
  const [trailId, setTrailId] = useState(0);
  const [beerId, setBeerId] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notifId, setNotifId] = useState(0);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Random notifications from Petr Pavel and Andrej Babiš
  useEffect(() => {
    const sendNotification = () => {
      const senders = [
        { name: "Petr Pavel 🇨🇿", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcPQqxp8PvMoTFsYJ6hE2fz5ZPAtYwiKIpl8MuT3IDXKf__dlusKbhVMjvgSNXhGPS4nFyP-Kiokl0CwLHsGNsbikgJkRBDqFS0Et4A" },
        { name: "Andrej Babiš 💼", avatar: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT5HfEQUCpXp8WGqtESi-zlEggQI5boVXNCuNKqmQtc_v3N92QOF2TxoWi0agirMaIERkX6zo4JrwYBmCI" },
      ];
      const sender = senders[Math.floor(Math.random() * senders.length)];
      const message = spanishMessages[Math.floor(Math.random() * spanishMessages.length)];
      
      const newNotif: Notification = {
        id: notifId,
        sender: sender.name,
        message: message,
        avatar: sender.avatar,
      };
      
      setNotifId(prev => prev + 1);
      setNotifications(prev => [newNotif, ...prev].slice(0, 5));

      // Remove after 8 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotif.id));
      }, 8000);
    };

    // First notification after 2 seconds
    const firstTimer = setTimeout(sendNotification, 2000);
    // Then every 3-5 seconds
    const interval = setInterval(sendNotification, 3000 + Math.random() * 2000);
    
    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [notifId]);

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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-blue-500 selection:text-white">
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

      {/* Content - Left Side */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center p-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Coat of Arms */}
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Coat_of_arms_of_the_Czech_Republic.svg/500px-Coat_of_arms_of_the_Czech_Republic.svg.png"
            alt="Czech Coat of Arms"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
          />

          {/* Motto */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-3xl md:text-5xl lg:text-6xl font-black text-white text-center"
            style={{ 
              textShadow: "4px 4px 0 #11457E, -2px -2px 0 #D7141A, 2px -2px 0 #11457E, -2px 2px 0 #D7141A",
            }}
          >
            PRAVDA VÍTĚZÍ
          </motion.h1>
        </div>

        {/* iPhone - Right Side */}
        <motion.div 
          className="flex-1 flex items-center justify-center mt-8 lg:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", damping: 20 }}
        >
          {/* iPhone Frame */}
          <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] lg:w-[380px] lg:h-[780px]">
            {/* Phone Body - Liquid Glass Effect */}
            <div 
              className="absolute inset-0 rounded-[50px] md:rounded-[55px] lg:rounded-[60px] overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.3),
                  0 25px 50px -12px rgba(0,0,0,0.5),
                  inset 0 1px 1px rgba(255,255,255,0.4),
                  inset 0 -1px 1px rgba(0,0,0,0.1)
                `,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* Inner Bezel */}
              <div className="absolute inset-[8px] md:inset-[10px] lg:inset-[12px] rounded-[42px] md:rounded-[45px] lg:rounded-[48px] overflow-hidden bg-black">
                {/* Czech Flag Wallpaper */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('https://t3.ftcdn.net/jpg/00/57/76/46/360_F_57764640_A8JUBsgeSl5p5n10UD43vkOgw02mu7Wu.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 md:w-32 lg:w-36 h-8 md:h-9 lg:h-10 bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-800 mr-2" />
                  <div className="w-3 h-3 rounded-full bg-gray-900 border border-gray-700" />
                </div>

                {/* Time & Date */}
                <div className="absolute top-20 md:top-24 lg:top-28 left-0 right-0 text-center">
                  <motion.p 
                    className="text-6xl md:text-7xl lg:text-8xl font-thin text-white"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                  >
                    {formatTime(currentTime)}
                  </motion.p>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/80 mt-2 capitalize">
                    {formatDate(currentTime)}
                  </p>
                </div>

                {/* Notifications */}
                <div className="absolute top-48 md:top-56 lg:top-64 left-3 right-3 space-y-2 md:space-y-3">
                  <AnimatePresence>
                    {notifications.map((notif) => (
                      <motion.div
                        key={notif.id}
                        initial={{ x: 300, opacity: 0, scale: 0.8 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: -300, opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", damping: 20, stiffness: 200 }}
                        className="p-3 md:p-4 rounded-2xl md:rounded-3xl"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.8)",
                        }}
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <img 
                            src={notif.avatar} 
                            alt={notif.sender}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white shadow-md"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm md:text-base truncate">
                              {notif.sender}
                            </p>
                            <p className="text-gray-700 text-xs md:text-sm leading-tight">
                              {notif.message}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 md:w-36 lg:w-40 h-1 bg-white/50 rounded-full" />
              </div>
            </div>

            {/* Side Buttons */}
            <div className="absolute left-0 top-32 w-1 h-8 bg-gray-400 rounded-l-full" />
            <div className="absolute left-0 top-44 w-1 h-12 bg-gray-400 rounded-l-full" />
            <div className="absolute left-0 top-60 w-1 h-12 bg-gray-400 rounded-l-full" />
            <div className="absolute right-0 top-40 w-1 h-16 bg-gray-400 rounded-r-full" />
          </div>
        </motion.div>
      </div>

      {/* Cursor Trail - Czech Flags */}
      {trail.map((flag) => (
        <motion.img
          key={flag.id}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/250px-Flag_of_the_Czech_Republic.svg.png"
          alt="Czech Flag"
          initial={{ scale: 1, opacity: 0.9, rotate: 0 }}
          animate={{ scale: 0.3, opacity: 0, rotate: 15 }}
          transition={{ duration: 1 }}
          className="fixed pointer-events-none z-50"
          style={{
            left: flag.x - 20,
            top: flag.y - 12,
            width: '40px',
            height: '26px',
          }}
        />
      ))}

      {/* Main cursor flag that follows mouse */}
      {trail.length > 0 && (
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/250px-Flag_of_the_Czech_Republic.svg.png"
          alt="Cursor Flag"
          className="fixed pointer-events-none z-[100]"
          style={{
            left: trail[trail.length - 1]?.x - 25 || -100,
            top: trail[trail.length - 1]?.y - 15 || -100,
            width: '50px',
            height: '32px',
          }}
        />
      )}

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