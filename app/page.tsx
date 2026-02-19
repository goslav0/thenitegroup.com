"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import HeroVisual from "./components/HeroVisual";
import UpcomingEvent from "./components/UpcomingEvent";

export default function Home() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      
      {/* SEKCJA 1: HERO */}
      <div ref={targetRef} className="relative h-[150vh] z-10">
        <motion.section 
          style={{ opacity, scale, filter: `blur(${blur}px)` }}
          className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Wizualizacja 3D NITE */}
          <div className="w-full h-[300px] flex items-center justify-center z-10">
            <HeroVisual />
          </div>

          {/* Tekst główny */}
          <div className="text-center z-20 -mt-8 px-4">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-[0.1em] text-white leading-tight">
              EVENT'S<br /> THAT MATTER.
            </h1>
            
            <p className="text-zinc-500 tracking-[0.6em] uppercase text-[10px] md:text-xs mt-6 mb-12">
              Premium Event Experience
            </p>
            
            <div className="flex flex-col items-center">
              <Link href="/events">
                <button className="px-12 py-4 bg-white text-black font-bold rounded-full hover:scale-105 hover:bg-zinc-200 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  Wejdź do świata nite
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-500">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          </motion.div>
        </motion.section>
      </div>

      {/* SEKCJA 2: PREVIEW WYDARZENIA */}
      <div className="relative z-20 bg-black border-t border-white/5">
        <UpcomingEvent />
      </div>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 flex flex-col items-center justify-center bg-black relative z-30">
        <p className="text-zinc-600 text-[9px] uppercase tracking-[0.8em]">
          &copy; 2026 THE NITE GROUP
        </p>
      </footer>
      
    </main>
  );
}