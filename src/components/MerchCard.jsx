import { useState } from "react";
import { motion } from "framer-motion";

export default function MerchCard({ event, index, onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    // setShowComingSoon(true);
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdzJ1C8hVw3URn4dhN2D1KZOX8XoME8usclRFyIaMI90dTXwA/viewform?usp=sharing&ouid=112626484357776465857', '_blank')
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="h-[500px] perspective-1000"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          onClick={handleFlip}
        >
          <motion.div
            className="relative w-full h-full cursor-pointer"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-[#301258] via-[#4A1B7F] to-[#5C2A9A] border-2 border-[#FED000]/20"
              style={{ backfaceVisibility: "hidden" }}
              whileHover={{
                boxShadow: "0px 8px 30px rgba(254, 208, 0, 0.4)",
                borderColor: "rgba(254, 208, 0, 0.4)",
              }}
            >
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#FED000]/30 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#FED000]/30 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#FED000]/30 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#FED000]/30 rounded-br-2xl" />

              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#FED000] rounded-full" />
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-[#FED000] rounded-full" />
              </div>

              <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-[#FED000] rounded-full blur-3xl opacity-25" />
                </div>
                <div className="relative z-10 flex items-center justify-center w-full">
                  <img
                    src={event.frontImage}
                    alt={`${event.name} front`}
                    className="max-w-full max-h-[500px] scale-125 object-contain drop-shadow-[0_0_40px_rgba(254,208,0,0.6)]"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-[#301258] via-[#4A1B7F] to-[#5C2A9A] border-2 border-[#FED000]/20"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#FED000]/30 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#FED000]/30 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#FED000]/30 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#FED000]/30 rounded-br-2xl" />
              
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#FED000] rounded-full" />
                <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-[#FED000] rounded-full" />
              </div>

              <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-[#FED000] rounded-full blur-3xl opacity-25" />
                </div>

                <div className="relative z-10 flex items-center justify-center w-full">
                  <img
                    src={event.backImage}
                    alt={`${event.name} back`}
                    className="max-w-full max-h-[500px] scale-125 object-contain drop-shadow-[0_0_40px_rgba(254,208,0,0.6)]"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(254, 208, 0, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full bg-linear-to-r from-[#FED000] via-[#FFE55C] to-[#FED000] text-[#08061E] py-4 rounded-xl font-['Cinzel_Decorative'] font-bold text-xl transition-all shadow-[0_0_20px_rgba(254,208,0,0.5)] hover:shadow-[0_0_40px_rgba(254,208,0,0.8)] overflow-hidden group"
          onClick={handleBuyNow}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Buy Now
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </motion.button>
      </div>

      {showComingSoon && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-200"
          onClick={() => setShowComingSoon(false)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-linear-to-br from-[#301258] to-[#5C2A9A] text-[#FED000] rounded-2xl p-8 shadow-2xl border-2 border-[#FED000] w-[90%] max-w-[450px] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#FED000]/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#FED000]/50 rounded-br-2xl" />

            <div className="relative z-10">
              <h2 className="text-center text-3xl font-['Cinzel_Decorative'] font-bold pb-4 drop-shadow-[0_0_10px_rgba(254,208,0,0.5)]">
                Merch Coming Soon...
              </h2>
              <p className="text-center text-[#E3CDEC] font-['Cinzel_Decorative'] text-lg mb-6">
                Stay tuned for our exclusive merchandise!
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(254, 208, 0, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowComingSoon(false)}
                className="w-full bg-linear-to-r from-[#FED000] via-[#FFE55C] to-[#FED000] text-[#08061E] py-3 rounded-lg font-['Cinzel_Decorative'] font-bold text-lg shadow-[0_0_20px_rgba(254,208,0,0.5)]"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}