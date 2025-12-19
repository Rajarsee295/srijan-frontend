import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero2 from "../components/Hero/Hero2";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";

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
    <>
      {/* HOME CONTENT — ALWAYS VISIBLE */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero2 />
        <div className="gallery-section">
          <GalleryGrid />
        </div>
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
    backgroundSize:"cover",
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1b1035", // optional
  }}
/>

        </div>
      )}
    </>
  );
}

export default HomePage;
