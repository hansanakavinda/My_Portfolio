'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-pokemon">
      <div
        className="relative w-80 h-[112px] sm:w-96 sm:h-[134px] md:w-[320px] md:h-[448px] lg:w-[400px] lg:h-[560px]"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full flex items-center justify-center bg-blue-500 text-white text-xl font-bold backface-hidden rounded-xl shadow-2xl border-8 border-gray-300">
            <div className="bg-purple-900 rounded-xl shadow-2xl p-4 border-8 border-purple-300 relative w-full h-full flex flex-col justify-between">
              <div className="absolute left-2 px-3 py-1 font-bold uppercase tracking-wide bg-gradient-to-b from-gray-200 via-white to-gray-500 text-xs text-black rounded-lg">
                BASIC
              </div>
              <div className="flex justify-between items-center px-4">
                <h2 className="font-bold text-white text-lg">Hansana</h2>
                <span className="font-bold text-white text-lg flex items-center">
                  HP 60 <img src="space.png" alt="Electric Symbol" className="w-6 h-6 ml-1" />
                </span>
              </div>
              <div className="bg-white border-4 border-gray-400 rounded-lg shadow-md overflow-hidden mx-4">
                <img src="pf.png" alt="Pikachu" className="w-full h-60 object-cover" />
              </div>
              <div className="p-4 text-sm text-white">
                <h3 className="font-semibold">⚡ Energize</h3>
                <p>Attach a ⚡ Energy card from your discard pile to this Pokémon.</p>
              </div>
              <div className="p-4 text-sm text-white">
                <h3 className="font-semibold">⚡ Electro Ball</h3>
                <p>Deals 30 damage.</p>
              </div>
              <div className="text-sm text-white px-4 pb-4">
                Weakness: Fighting × 2 | Resistance: Steel -20 | Retreat Cost: 1
              </div>
            </div>
          </div>
          {/* Back Side */}
          <div className="absolute w-full h-full flex items-center justify-center bg-red-500 text-white text-xl font-bold rotate-y-180 backface-hidden rounded-xl shadow-2xl border-8 border-gray-300">
            Back
          </div>
        </motion.div>
      </div>
    </div>
  );
}
