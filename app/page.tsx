"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [challenge, setChallenge] = useState<any>(null);

  async function generateChallenge() {
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
    });

    const data = await res.json();

    setChallenge(data);

    const existing = JSON.parse(localStorage.getItem("campaigns") || "[]");
    localStorage.setItem("campaigns", JSON.stringify([data, ...existing]));

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div className="flex flex-1 items-stretch">

        {/* REWORKED LEFT COMIC SIDEBAR */}
        <div className="w-80 xl:w-96 hidden lg:flex flex-col justify-center items-center border-r border-red-500/20 p-6 bg-zinc-950/50 h-screen sticky top-0">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src="/flyOrDieComic.png"
            className="rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.15)] border border-zinc-800 max-h-[85vh] w-full object-contain"
            alt="Fly or Die Comic"
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex items-center justify-center px-6 relative py-12">
          
          {/* Cyberpunk Radial Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),rgba(30,58,138,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-zinc-900/40 to-black pointer-events-none" />

          <div className="relative z-10 max-w-4xl w-full text-center">

            {/* RED BULL LOGO AT THE TOP */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center gap-3 mb-6"
            >
              <img 
                src="/redbull.jpg" 
                alt="Red Bull Logo" 
                className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-[10px] font-black tracking-widest text-yellow-400 uppercase shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Official Event Partner
              </div>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-7xl md:text-8xl font-black tracking-tighter uppercase selection:bg-red-600"
            >
              FLY OR DIE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">CHALLENGE</span>
            </motion.h1>

            <p className="mt-6 text-xl md:text-2xl text-zinc-400 font-medium max-w-xl mx-auto">
              AI-generated chaotic but safe social challenges.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateChallenge}
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-2xl font-black text-xl tracking-wide shadow-[0_4px_20px_rgba(220,38,38,0.3)] transition-all disabled:opacity-50"
              >
                {loading ? "GENERATING CHAOS..." : "⚡ GET CHALLENGE"}
              </motion.button>

              <Link
                href="/analytics"
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-2xl font-bold text-xl transition-all text-center"
              >
                Analytics
              </Link>
            </div>

            {/* RESULT */}
            {challenge && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 bg-zinc-950/80 backdrop-blur-md border-2 border-red-500/30 rounded-3xl p-8 text-left shadow-[0_0_40px_rgba(239,68,68,0.15)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                
                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-6 uppercase tracking-tight">
                  🔥 {challenge.title}
                </h2>

                <div className="space-y-4 text-zinc-300">
                  <p className="text-lg leading-relaxed">
                    <span className="text-red-400 font-extrabold uppercase text-sm tracking-wider block mb-1">The Mission</span>{" "}
                    {challenge.challenge}
                  </p>

                  <p className="text-lg">
                    <span className="text-red-400 font-extrabold uppercase text-sm tracking-wider block mb-1">Predicted Views (optimistic)</span>{" "}
                    <span className="text-yellow-400 font-mono font-bold text-xl">{challenge.views}</span>
                  </p>

                  <p className="text-lg italic border-l-2 border-zinc-700 pl-4 bg-zinc-900/40 py-2 rounded-r-xl">
                    <span className="text-zinc-500 font-extrabold uppercase text-xs tracking-wider block not-italic mb-1">Fake News Headline</span>{" "}
                    "{challenge.headline}"
                  </p>
                </div>

                {/* METRICS GRID */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-red-950/40 to-black border border-red-500/20 p-4 rounded-xl">
                    <p className="text-xs uppercase font-bold tracking-wider text-zinc-500">Virality</p>
                    <p className="text-3xl font-black text-red-500 animate-pulse">∞%</p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-950/40 to-black border border-orange-500/20 p-4 rounded-xl">
                    <p className="text-xs uppercase font-bold tracking-wider text-zinc-500">Chaos</p>
                    <p className="text-3xl font-black text-orange-400">HIGH</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-950/40 to-black border border-blue-500/20 p-4 rounded-xl">
                    <p className="text-xs uppercase font-bold tracking-wider text-zinc-500">Safety</p>
                    <p className="text-3xl font-black text-blue-400">OK</p>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-900 bg-zinc-950/60 backdrop-blur-sm py-6 px-6 text-center z-20">
        <div className="flex items-center justify-center gap-3 text-xs md:text-sm tracking-widest font-black uppercase text-zinc-500">
          <span>POWERED BY AI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
          <span className="text-zinc-400">
            SPONSORED BY <span className="text-red-500">RED BULL</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
          <span>GIVES YOU WINGS</span>
        </div>
      </footer>
    </main>
  );
}
