"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="fixed w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase text-white z-[110]">
            The Nite Group
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-12 items-center text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">
            <Link href="/events" className="hover:text-white transition">Events</Link>
          </div>

          {/* HAMBURGER BUTTON (MOBILE) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[110] flex flex-col gap-1.5 items-center justify-center"
          >
            <span className={`w-6 h-[1px] bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-[1px] bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[1px] bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              <Link 
                href="/events" 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black uppercase tracking-widest text-white hover:text-zinc-500 transition"
              >
                Events
              </Link>
              {/* Tutaj możesz dodać kolejne linki w przyszłości */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}