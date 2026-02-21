"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UpcomingEvent() {
  // --- TWÓJ LINK DO BILETÓW ---
  const linkDoBiletow = "https://new.vybe.social/pl/e/ZpB5qUJueRiB"; 

  return (
    <section className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 gap-12 md:gap-24">
      
      {/* LEWA STRONA: PLAKAT (ZOPTYMALIZOWANY I KLIKALNY) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} // Zmniejszono y z 40 na 20 dla szybkości
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} // Skrócono czas z 1s na 0.5s
        viewport={{ once: true, amount: 0.2 }} // Odpala szybciej po wejściu w widok
        className="w-full md:w-1/2 max-w-[500px] relative group"
      >
        {/* LINK NA BANERZE */}
        <a href={linkDoBiletow} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <Image 
              src="/plakat.png" 
              alt="2016 PARTY - Bilety dostępne online"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover transition-transform duration-[1.5s] ease-in-out scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </a>

        {/* Numer w tle */}
        <div className="absolute -bottom-10 -left-10 text-white/5 text-[120px] font-black -z-10 pointer-events-none select-none">
          2016
        </div>
      </motion.div>

      {/* PRAWA STRONA: OPIS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} // Zmieniono z x:20 na y:20 dla spójności na mobile
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} // Usunięto delay 0.2s, żeby wskakiwało od razu
        viewport={{ once: true, amount: 0.2 }}
        className="w-full md:w-1/3 flex flex-col items-start"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-white/30" />
          <span className="text-zinc-400 text-[10px] tracking-[0.5em] uppercase font-medium">
            Next Experience
          </span>
        </div>

        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
          2016 <br /> 
          <span className="text-zinc-600 font-light italic">PARTY</span>
        </h2>

        <p className="text-zinc-300 text-sm leading-relaxed mb-12 font-light tracking-wide max-w-sm">
          Przygotuj się na noc, która przejdzie do historii. Przenosimy niezapomnianą 
          energię z przeszłości! Klimat, muzyka i stylówki - jak w 2016!
        </p>
        
        <div className="space-y-6 w-full mb-8 border-t border-white/5 pt-6">
          <div className="flex justify-between border-b border-white/10 pb-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold italic">Data</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">20.03.2026 21:00</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold italic">Lokalizacja</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">WARSZAWA</span>
          </div>
        </div>

        {/* NOWY DOPISZEK INFORMACYJNY Z PULSUJĄCĄ KROPKĄ */}
        <div className="mb-10 flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          <p className="text-zinc-400 text-[9px] uppercase tracking-[0.25em] leading-relaxed">
            Informacje organizacyjne dostępne są po kliknięciu <span className="text-white font-bold">KUP BILET</span>
          </p>
        </div>

        {/* PRZYCISK KUP BILET */}
        <a 
          href={linkDoBiletow}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full md:w-auto overflow-hidden px-16 py-5 border border-white text-white uppercase text-center text-[10px] tracking-[0.5em] transition-all duration-500 inline-block"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            Kup Bilet
          </span>
          <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </a>
      </motion.div>

    </section>
  );
}
