import Display from "./Categoryrender";
import ALL from "./EventIcons/ALL.png";
import ART from "./EventIcons/ART.png";
import CINEMA from "./EventIcons/CINEMA.png";
import COMEDY from "./EventIcons/COMEDY.png";
import DANCE from "./EventIcons/DANCE.png";
import DRAMA from "./EventIcons/DRAMA.png";
import FASHION from "./EventIcons/FASHION.png";
import LITERACY from "./EventIcons/LITERACY.png";
import MUSIC from "./EventIcons/MUSIC.png";
import { useState } from "react";
import Bg from "./Images/EventPageBg.jpg";
import Navbar from "../../components/Navbar/Navbar";

import { motion } from "framer-motion";

const categories = [
  { icon: ALL, categoryname: "ALL" },
  { icon: DANCE, categoryname: "DANCE" },
  { icon: ART, categoryname: "ART" },
  { icon: MUSIC, categoryname: "MUSIC" },
  { icon: LITERACY, categoryname: "LITERACY" },
  { icon: DRAMA, categoryname: "DRAMA" },
  { icon: CINEMA, categoryname: "CINEMA" },
  { icon: FASHION, categoryname: "FASHION" },
  { icon: COMEDY, categoryname: "COMEDY" },
];

const orbs = [
  { size: 200, x: "10%", y: "20%", duration: 8, delay: 0 },
  { size: 150, x: "80%", y: "15%", duration: 10, delay: 2 },
  { size: 180, x: "15%", y: "70%", duration: 9, delay: 1 },
  { size: 120, x: "85%", y: "75%", duration: 7, delay: 3 },
  { size: 160, x: "50%", y: "50%", duration: 11, delay: 1.5 },
];

export default function EventPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="w-full min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <img src={Bg} className="w-full h-full object-cover" alt="Background" />
      </div>
      <div className="fixed inset-0 z-1 pointer-events-none overflow-hidden">
        {orbs.map((orb, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, rgba(254, 208, 0, 0.6) 0%, rgba(254, 208, 0, 0.5) 40%, transparent 70%)`,
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <nav className="w-full py-4 pt-15">
          <div className="max-w-screen-2xl mx-auto flex justify-center gap-10 flex-wrap">

            {categories.map((cat, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveCategory(cat.categoryname)}
                className={`flex font-['Cinzel_Decorative'] flex-col items-center cursor-pointer ${activeCategory === cat.categoryname ? "text-[#FED001]" : "text-[#FED000]"
                  }`}

                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}

                whileTap={{ scale: 0.9 }}
              >

                <motion.img
                  src={cat.icon}
                  alt={cat.categoryname}
                  className="w-18 h-18 rounded-full border border-[rgb(254,208,0)] mb-1"

                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 200 }}

                  animate={{
                    scale: activeCategory === cat.categoryname ? 1.15 : 1,
                    boxShadow:
                      activeCategory === cat.categoryname
                        ? "0px 0px 10px #FED000"
                        : "0px 0px 0px #00000000",
                  }}
                />

                <motion.p
                  className="text-sm font-semibold tracking-wide"
                  animate={{
                    scale: activeCategory === cat.categoryname ? 1.1 : 1,
                    color: activeCategory === cat.categoryname ? "#FED000" : "#FED000"
                  }}
                >
                  {cat.categoryname}
                </motion.p>

                {activeCategory === cat.categoryname && (
                  <motion.div
                    className="w-8 h-1 bg-[#FED000] mt-1 rounded-full"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </nav>

        <div className="px-4 mt-6">
          <Display category={activeCategory} />
        </div>
      </div>
    </div>
  );
}