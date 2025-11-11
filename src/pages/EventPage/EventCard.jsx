import { useState } from "react";
import { motion } from "framer-motion";

export default function EventCard({ event, index, onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-[450px] perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={onClick}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
          whileHover={{
            boxShadow: "0px 8px 30px rgba(254, 208, 0, 0.4)"
          }}
        >
          <div className="relative w-full h-full">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.div
                className="mb-2 inline-block px-3 py-1 bg-[#FED000] rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-bold text-[#802C00] font-['Cinzel_Decorative']">
                  {event.category}
                </span>
              </motion.div>
              
              <h3 className="text-2xl font-bold font-['Cinzel_Decorative'] text-white drop-shadow-lg">
                {event.name}
              </h3>
              
              <p className="text-sm text-gray-300 mt-2 font-['Cinzel_Decorative']">
                Hover to see details
              </p>
            </div>

            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[#FED000] rounded-full flex items-center justify-center backdrop-blur-sm bg-black/20">
              <span className="text-[#FED000] text-lg">✦</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="relative w-full h-full bg-linear-to-br from-[#802C00] via-[#9A3500] to-[#802C00] p-8 flex flex-col">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 border-4 border-[#FED000] rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-4 border-[#FED000] rounded-full -ml-12 -mb-12" />
            </div>

            <div className="relative z-10 text-center mb-6">
              <motion.div
                className="inline-block px-4 py-1 bg-[#FED000]/20 border border-[#FED000] rounded-full mb-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-xs font-bold text-[#FED000] font-['Cinzel_Decorative']">
                  {event.category}
                </span>
              </motion.div>
              
              <h3 className="text-2xl font-bold font-['Cinzel_Decorative'] text-[#FED000]">
                {event.name}
              </h3>
              
              <div className="w-16 h-1 bg-linear-to-r from-transparent via-[#FED000] to-transparent mx-auto mt-3" />
            </div>

            <div className="relative z-10 flex-1 space-y-4">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-[#FED000]/30">
                <p className="text-[#FED000] text-xs leading-relaxed font-['Cinzel_Decorative']">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-[#FED000]/20">
                  <p className="text-[#FED000]/70 text-[10px] font-['Cinzel_Decorative'] mb-1">DATE</p>
                  <p className="text-[#FED000] text-sm font-bold font-['Cinzel_Decorative']">TBA</p>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-[#FED000]/20">
                  <p className="text-[#FED000]/70 text-[10px] font-['Cinzel_Decorative'] mb-1">TIME</p>
                  <p className="text-[#FED000] text-sm font-bold font-['Cinzel_Decorative']">TBA</p>
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-[#FED000]/20">
                <p className="text-[#FED000]/70 text-[10px] font-['Cinzel_Decorative'] mb-1">VENUE</p>
                <p className="text-[#FED000] text-sm font-bold font-['Cinzel_Decorative']">TBA</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#FED000" }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 mt-4 w-full bg-transparent border-2 border-[#FED000] text-[#FED000] py-3 rounded-xl font-['Cinzel_Decorative'] font-bold text-sm transition-all shadow-lg hover:text-[#802C00] hover:shadow-[0_0_20px_rgba(254,208,0,0.5)]"
            >
              VIEW FULL DETAILS
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}