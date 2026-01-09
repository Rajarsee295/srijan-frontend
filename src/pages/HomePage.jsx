// import React from 'react'
// import gallery from '../data/galleryData'

// const GalleryPage = () => {
//   // duplicate the list so the marquee can scroll seamlessly
//   const items = [...gallery, ...gallery]

//   return (
//     <section className="py-8">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Gallery</h2>

//       <div className="relative overflow-hidden">
//         {/* marquee track */}
//         <div className="flex items-center animate-marquee">
//           {items.map((item, idx) => (
//             <div key={`${item.id}-${idx}`} className="min-w-[260px] mx-3">
//               <img
//                 src={item.src}
//                 alt={item.title}
//                 className={`${item.style} w-full h-48 object-cover rounded-md`}
//               />
//               <p className="text-sm mt-2 text-center">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default GalleryPage

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero2 from "../components/Hero/Hero2";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import Footer from '../components/footer'

import leftImg from "../assets/left.svg";
import rightImg from "../assets/right.svg";


function HomePage({ onAnimationComplete, skipAnimation }) {
  const [animationDone, setAnimationDone] = useState(skipAnimation);

  useEffect(() => {
    if (skipAnimation) {
      onAnimationComplete?.();
    }
  }, [skipAnimation, onAnimationComplete]);

  return (
    <div className='relative w-full'>
      {/* Hero Section */}
      <div className='sticky top-0 h-screen w-full z-10'>
        <Hero2
          onAnimationComplete={onAnimationComplete}
          skipAnimation={skipAnimation}
        />
      </div>

      {/* Gallery Section */}
      <div className="relative z-20 mt-[100vh]">
        <GalleryGrid />
        <Footer />
      </div>

      {/* CURTAIN ANIMATION */}
      {!animationDone && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        >
          {/* LEFT */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setAnimationDone(true);
              onAnimationComplete?.();
            }}
            style={{
              width: "50%",
              backgroundImage: `url(${leftImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#1b1035", // optional: match image bg
            }}
          />


          {/* RIGHT */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              width: "50%",

              backgroundImage: `url(${rightImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center left",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#1b1035", // optional
            }}
          />

        </div>
      )}
    </div>
  );
}

export default HomePage;
