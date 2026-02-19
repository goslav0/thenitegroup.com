"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const pastEvents = [
  { id: 1, img: "/past1.png", title: "SUMMER VILLA" },
  { id: 2, img: "/past2.png", title: "VALENTINES" },
];

export default function EventsPage() {
  // --- TUTAJ WKLEJ LINK DO BILETÓW ---
  const linkDoBiletow = "https://new.vybe.social/pl/e/ZpB5qUJueRiB";

  // Powielamy tablicę wielokrotnie, aby slider był gęsty i nigdy się nie kończył
  const extendedEvents = [...pastEvents, ...pastEvents, ...pastEvents, ...pastEvents, ...pastEvents, ...pastEvents];

  return (
    <main className="min-h-screen bg-black text-white pt-32 md:pt-40 pb-20 overflow-x-hidden">
      
      {/* SEKCJA: NADCHODZĄCE WYDARZENIE */}
      <section className="px-6 md:px-20 mb-24 md:mb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full md:w-1/2 aspect-[4/5] relative border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)]"
          >
            <img 
              src="/plakat.png" 
              className="w-full h-full object-cover" 
              alt="2016 PARTY" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1080&h=1350&auto=format&fit=crop"; }} 
            />
          </motion.div>

          <div className="w-full md:w-1/2 flex flex-col items-start">
            <span className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">Featured Event</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.85] tracking-tighter">2016 <br/> PARTY</h1>
            <p className="text-zinc-400 font-light mb-12 max-w-sm text-base leading-relaxed">
              Cofamy się w czasie na jedną noc, - muzyka, stylówki i klimat jak w 2016! Nie może Cię zabraknąć.
            </p>
            
            {/* TUTAJ DODAŁEM LINK ZAMIAST BUTTONA */}
            <a 
              href={linkDoBiletow}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full md:w-auto overflow-hidden px-16 py-5 border border-white text-white uppercase text-[10px] tracking-[0.5em] transition-all duration-500 text-center inline-block"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 font-bold">
                Kup Bilet
              </span>
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
          </div>
        </div>
      </section>

      {/* SEKCJA: ZREALIZOWANE WYDARZENIA (Tylko Twoje 2 plakaty) */}
      <section className="relative">
        <div className="px-6 md:px-20 mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tighter">Past Experiences</h2>
          <div className="w-20 h-[1px] bg-white/30 mt-4" />
        </div>

        <div className="relative w-full overflow-hidden py-10" style={{ perspective: "1000px" }}>
          <motion.div 
            className="flex gap-6 md:gap-10"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
              ease: "linear", 
              duration: 25, 
              repeat: Infinity 
            }}
          >
            {extendedEvents.map((event, index) => (
              <motion.div 
                key={index} 
                whileHover={{ rotateY: -15, scale: 1.05 }}
                className="w-[70vw] md:w-[400px] flex-shrink-0 aspect-[4/5] relative border border-white/5 bg-zinc-900 group cursor-pointer transition-transform duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img 
                  src={event.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  alt={event.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                   <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white mb-2">{event.title}</p>
                   <div className="w-0 group-hover:w-full h-[1px] bg-white/50 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Powrót */}
      <div className="mt-32 pb-20 flex justify-center px-6">
        <Link href="/" className="group flex flex-col items-center gap-6">
          <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-800 to-white/20 group-hover:h-24 transition-all duration-700" />
          <span className="text-zinc-500 group-hover:text-white text-[9px] uppercase tracking-[0.8em] transition-all">
            Back to Home
          </span>
        </Link>
      </div>
    </main>
  );
}