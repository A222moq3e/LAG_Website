"use client"

import Image from "next/image";
import { ChevronDown, ArrowDown, Target, Eye } from 'lucide-react';
import { t } from '../lib/i18n';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const params = useParams();
  const locale = params?.locale;
  const currentLocale = locale || 'en';
  
  // Animation states
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  // Ensure client-side only animations
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            setIsVisible(true);
          } else if (entry.target === titleRef.current) {
            setTimeout(() => setTitleVisible(true), 200);
          } else if (entry.target === missionRef.current) {
            setTimeout(() => setMissionVisible(true), 400);
          } else if (entry.target === visionRef.current) {
            setTimeout(() => setVisionVisible(true), 600);
          }
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="flex flex-col justify-center items-center gap-6 md:gap-8 min-h-screen px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: 'url(/controllerImage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark blur overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        
        <div className="flex flex-col justify-center items-center gap-2 md:gap-6 relative z-10 max-w-4xl mx-auto text-center w-full">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center font-orbitron drop-shadow-lg leading-relaxed p-2 w-full ${
            mounted ? 'main-gradient-text-animated' : 'main-gradient-text'
          }`}>
            {t(currentLocale, 'pages.home.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-100 max-w-3xl drop-shadow-md p-4 w-full">
            {t(currentLocale, 'pages.home.description')}
          </p>
          <button 
            className="main-bg-gradient text-white font-bold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-sm sm:text-base md:text-lg rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 md:gap-3"
            onClick={() => {
              document.getElementById('who-we-are-section')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            {t(currentLocale, 'pages.home.cta_button')}
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div 
            className="flex flex-col items-center gap-1 cursor-pointer group"
            onClick={() => {
              document.getElementById('who-we-are-section')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            <span className="text-white/80 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">
              {t(currentLocale, 'pages.home.scroll_down')}
            </span>
            <div className="flex flex-col items-center -space-y-2">
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-colors duration-300 animate-bounce" />
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/60 group-hover:text-white/80 transition-colors duration-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section 
        ref={sectionRef}
        id="who-we-are-section" 
        className="py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black min-h-screen flex items-center w-full"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col justify-center items-center gap-16 md:gap-20 lg:gap-24">   
                         <div 
               ref={titleRef}
               className={`transition-all duration-1000 ease-out transform ${
                 mounted && titleVisible 
                   ? 'opacity-100 translate-y-0' 
                   : mounted ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0'
               }`}
             >
                             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center main-gradient-text drop-shadow-lg leading-relaxed py-2">
                 {t(currentLocale, 'pages.home.who_we_are.title')}
               </h1>
            </div>
            
            {/* Mission and Vision Cards */}
            <div className="flex flex-col xl:flex-row gap-12 lg:gap-16 xl:gap-20 w-full max-w-6xl">
              {/* Mission Card */}
                             <div 
                 ref={missionRef}
                 className={`flex flex-col gap-6 md:gap-8 flex-1 p-8 md:p-10 lg:p-12 bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700/50 hover:border-purple-500/50 hover:scale-105 transform ${
                   mounted && missionVisible 
                     ? 'opacity-100 translate-x-0' 
                     : mounted ? 'opacity-0 -translate-x-12' : 'opacity-100 translate-x-0'
                 }`}
               >
                                 <div className="flex flex-row items-center gap-6">
                   <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                     <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
                   </div>
                   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                     {t(currentLocale, 'pages.home.who_we_are.mission.title')}
                   </h2>
                 </div>
                 <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  {t(currentLocale, 'pages.home.who_we_are.mission.description')}
                </p>
              </div>

              {/* Vision Card */}
                             <div 
                 ref={visionRef}
                 className={`flex flex-col gap-6 md:gap-8 flex-1 p-8 md:p-10 lg:p-12 bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-700/50 hover:border-teal-500/50 hover:scale-105 transform ${
                   mounted && visionVisible 
                     ? 'opacity-100 translate-x-0' 
                     : mounted ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'
                 }`}
               >
                                 <div className="flex flex-row items-center gap-6">
                   <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                     <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
                   </div>
                   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                     {t(currentLocale, 'pages.home.who_we_are.vision.title')}
                   </h2>
                 </div>
                 <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  {t(currentLocale, 'pages.home.who_we_are.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 