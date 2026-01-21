"use client";

import React, { useState, useEffect } from 'react';
import { FaDumbbell, FaCode, FaHiking, FaGamepad, FaBookReader } from 'react-icons/fa';

interface Option {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const options: Option[] = [
    {
      title: "Gym & Fitness",
      description: "Körperliche Stärke aufbauen",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      icon: <FaDumbbell size={24} className="text-white" />
    },
    {
      title: "Coding",
      description: "Software & Webentwicklung",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      icon: <FaCode size={24} className="text-white" />
    },
    {
      title: "Hiking",
      description: "Natur erkunden & Abenteuer",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      icon: <FaHiking size={24} className="text-white" />
    },
    {
      title: "Gaming",
      description: "Strategisches Denken & Spaß",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      icon: <FaGamepad size={24} className="text-white" />
    },
    {
      title: "Lernen",
      description: "Neues Wissen entdecken",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
      icon: <FaBookReader size={24} className="text-white" />
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[700px] font-sans text-white py-8"> 
      {/* Header Section */}
      <div className="w-full max-w-3xl px-6 mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Meine Interessen</h2>
        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl mx-auto">Was mich antreibt und begeistert</p>
      </div>

      {/* Options Container */}
      <div className="flex w-full max-w-[1100px] h-[450px] mx-auto items-stretch overflow-hidden relative px-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out cursor-pointer"
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderRadius: '12px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#06b6d4' : '#292929',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(6, 182, 212, 0.3)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              marginRight: index < options.length - 1 ? '8px' : '0',
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className="absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            />
            
            {/* Label with icon and info */}
            <div className="absolute left-0 right-0 bottom-4 flex items-center justify-start h-12 z-10 pointer-events-none px-4 gap-3 w-full">
              <div className="min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="text-white whitespace-pre relative">
                <div 
                  className="font-bold text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="text-sm text-gray-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
