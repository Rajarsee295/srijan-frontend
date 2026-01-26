import { motion } from "framer-motion";
import leftImg from "../assets/left.svg";
import rightImg from "../assets/right.svg";

export default function CurtainTransition({ isActive, onComplete }) {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-9999 flex pointer-events-none">
      
      {/* LEFT */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          width: "50%",
          backgroundImage: `url(${leftImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* RIGHT */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        onAnimationComplete={onComplete}
        style={{
          width: "50%",
          backgroundImage: `url(${rightImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
        }}
      />
    </div>
  );
}
