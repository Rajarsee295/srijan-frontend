import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Hero2.css";
import "./HeroCosmic.css";
import logo from "../../assets/logo.png.png";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import Mandala from "../../assets/mandala.png";
import Tree from "../../assets/TreeBg.png";
import textBackdropSrc from "../../assets/text-backdrop.png";
import darkCloudBottom from "../../assets/Dark Cloud Bottom.png";
import lightCloudBottom from "../../assets/Light Cloud Bottom.png";
import darkCloudBottomFull from "../../assets/Dark Cloud Bottom Full.png"
import GradientInterval from "./GradientInterval";

const navItems = [
  { path: "/", label: "HOME", hindi: "गृह" },
  { path: "/events", label: "EVENTS", hindi: "कार्यक्रम" },
  { path: "/passes", label: "PASSES", hindi: "प्रवेश-पत्र" },
  { path: "/sponsors", label: "SPONSORS", hindi: "प्रायोजक" },
  { path: "/merchandise", label: "MERCHANDISE", hindi: "वस्तुएँ" },
  { path: "/team", label: "TEAM", hindi: "टीम" },
];

// skip animation logic
const resolveInitialSkipState = (forcedSkip) => {
  if (typeof forcedSkip === "boolean") return forcedSkip;
  if (typeof window === "undefined") return true;

  const hasPlayed = sessionStorage.getItem("__HERO_ANIMATION_PLAYED__");

  if (hasPlayed === "true") return true;

  sessionStorage.setItem("__HERO_ANIMATION_PLAYED__", "true");
  return false;
};

const Hero2 = ({ onAnimationComplete, skipAnimation: skipAnimationProp }) => {
  const [skipAnimation, setSkipAnimation] = useState(() =>
    resolveInitialSkipState(skipAnimationProp)
  );

  // USER DATA
  const [user, setUser] = useState("");

  async function getUser() {
    try {
      const res = await axios.get(
        "https://srijan-2026.onrender.com/api/v1/user/current-user",
        { withCredentials: true }
      );
      setUser(res.data.data.fullname);
    } catch (error) {
      setUser("");
    }
  }

  async function logout() {
    try {
      await axios.get(
        "https://srijan-2026.onrender.com/api/v1/user/logout",
        { withCredentials: true }
      );
      setUser("");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (typeof skipAnimationProp === "boolean") {
      setSkipAnimation(skipAnimationProp);
      if (!skipAnimationProp && typeof window !== "undefined") {
        window.__HERO_ANIMATION_HAS_PLAYED__ = true;
      }
    }
  }, [skipAnimationProp]);

  const [animationStage, setAnimationStage] = useState(
    skipAnimation ? "main" : "circle"
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const targetDate = new Date("2026-02-06T00:00:00");

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // const backgroundY = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const foregroundY = useTransform(scrollYProgress, [0, 2], ["0%", "200%"])

  useEffect(() => {
    if (skipAnimation) {
      setAnimationStage("main");
      onAnimationComplete?.();
      return;
    }

    const circleTimer = setTimeout(() => setAnimationStage("logo"), 1500);
    const logoTimer = setTimeout(() => setAnimationStage("move"), 3000);
    const moveTimer = setTimeout(() => {
      setAnimationStage("main");
      onAnimationComplete?.();
    }, 4500);

    return () => {
      clearTimeout(circleTimer);
      clearTimeout(logoTimer);
      clearTimeout(moveTimer);
    };
  }, [skipAnimation, onAnimationComplete]);

  const showContent = animationStage === "main";

  return (
    <div>
      <div ref={containerRef} className="hero2-wrapper">
        <motion.div className="hero2-container">
          <div
            className="text-backdrop"
            style={{ backgroundImage: `url(${textBackdropSrc})` }}
          />

          <div className="hero2-background" />

          {/* BG SECTION */}
          <motion.div
            className="hero2-right-bg"
            initial={{ opacity: skipAnimation ? 1 : 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: skipAnimation ? 0 : 0.8 }}

          >
            <div className="orange-glow" />
            <img src={Tree} alt="Tree Background" className="tree-bg" />
          </motion.div>

          {/* ------------ DESKTOP NAV --------------- */}
          {showContent && (
            <>
              <motion.nav
                initial={{ opacity: skipAnimation ? 1 : 0, y: skipAnimation ? 0 : -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: skipAnimation ? 0 : 0.8,
                  delay: skipAnimation ? 0 : 0.3,
                }}
                className="hero2-nav desktop-nav"
                style={{
                  scale: heroScale,
                }}
              >
                <div className="nav-links">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      className="nav-item"
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      initial={{
                        opacity: skipAnimation ? 1 : 0,
                        y: skipAnimation ? 0 : -10,
                      }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: skipAnimation ? 0 : 0.5 + index * 0.1,
                      }}
                    >
                      {item.path === "/" ? (
                        <button
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                          className="nav-link"
                        >
                          <motion.span
                            animate={{
                              y: hoveredIndex === index ? -8 : 0,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                            className="inline-block"
                          >
                            {item.label}
                          </motion.span>
                        </button>
                      ) : (
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                          }
                        >
                          <motion.span
                            animate={{
                              y: hoveredIndex === index ? -8 : 0,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                            className="inline-block"
                          >
                            {item.label}
                          </motion.span>
                        </NavLink>
                      )}

                      <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : -5,
                        }}
                        transition={{ duration: 0.3 }}
                        className="nav-hindi"
                      >
                        {item.hindi}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* -------- RIGHT SIDE REGISTER / USER -------- */}
                <motion.div
                  className="nav-register flex items-center gap-6"
                  onHoverStart={() => setHoveredIndex(navItems.length)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  initial={{
                    opacity: skipAnimation ? 1 : 0,
                    y: skipAnimation ? 0 : -10,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: skipAnimation ? 0 : 1.2 }}
                >
                  {user ? (
                    <>
                      <span className="nav-link text-2xl font-bold">{user}</span>

                      <button
                        onClick={logout}
                        className="nav-link text-red-400 font-bold"
                      >
                        LOGOUT
                      </button>
                    </>
                  ) : (
                    <NavLink to="/register" className="nav-link">
                      <motion.span
                        animate={{
                          y: hoveredIndex === navItems.length ? -8 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="inline-block"
                      >
                        REGISTER
                      </motion.span>
                    </NavLink>
                  )}
                </motion.div>
              </motion.nav>

              {/* -------------------- MOBILE HAMBURGER ----------------------- */}
              <motion.div
                className="mobile-menu-container"
                initial={{ opacity: skipAnimation ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: skipAnimation ? 0 : 0.8,
                  delay: skipAnimation ? 0 : 0.3,
                }}
              >
                <button
                  className="hamburger-btn"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <motion.div
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="hamburger-line"
                  />
                  <motion.div
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="hamburger-line"
                  />
                  <motion.div
                    animate={
                      isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                    }
                    className="hamburger-line"
                  />
                </button>
              </motion.div>

              {/* ---------------- MOBILE MENU ---------------- */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    className="mobile-menu-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.div
                      className="mobile-menu-card"
                      initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                      exit={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="mobile-menu-header">
                        <h3 className="mobile-menu-title">MENU</h3>
                        <div className="mobile-menu-divider" />
                      </div>

                      <div className="mobile-menu-items">
                        {navItems.map((item, index) => (
                          <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <NavLink
                              to={item.path}
                              className="mobile-menu-item"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="mobile-menu-label">
                                {item.label}
                              </span>
                              <span className="mobile-menu-hindi">
                                {item.hindi}
                              </span>
                            </NavLink>
                          </motion.div>
                        ))}
                      </div>

                      {/* MOBILE USER / REGISTER */}
                      <div className="mt-6">
                        {user ? (
                          <button
                            onClick={() => {
                              logout();
                              setIsMenuOpen(false);
                            }}
                            className="mobile-register-btn"
                          >
                            <span>LOGOUT</span>
                          </button>
                        ) : (
                          <NavLink
                            to="/register"
                            className="mobile-register-btn"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span>REGISTER</span>
                            <span className="mobile-register-hindi">
                              पंजीकरण
                            </span>
                          </NavLink>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          {/* ---------- CENTERED LOGO ----------- */}
          <motion.div
            className="logo-container"
            initial={{ x: 0 }}
            animate={{
              x:
                animationStage === "move" || animationStage === "main"
                  ? "calc(-25vw)"
                  : 0,
            }}
            transition={{
              duration: skipAnimation ? 0 : 1,
              ease: "easeInOut",
            }}
            style={{
              scale: heroScale,
            }}
          >
            <motion.img
              src={Mandala}
              alt="Mandala Background"
              className="hero2-mandala"
              initial={{
                opacity: skipAnimation ? 0.4 : 0,
                rotate: 0,
              }}
              animate={{
                opacity: animationStage === "circle" ? 0 : 0.8,
                rotate: 360,
              }}
              transition={{
                opacity: { duration: skipAnimation ? 0 : 1 },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            <motion.img
              src={logo}
              alt="Srijan Logo"
              className="hero2-logo"
              initial={{ opacity: skipAnimation ? 1 : 0 }}
              animate={{
                opacity:
                  animationStage === "logo" ||
                    animationStage === "move" ||
                    animationStage === "main"
                    ? 1
                    : 0,
              }}
              transition={{ duration: skipAnimation ? 0 : 1 }}
            />
          </motion.div>

          {/* COUNTDOWN */}
          {showContent && (
            <motion.div
              className="countdown-static"
              initial={{ opacity: skipAnimation ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: skipAnimation ? 0 : 0.8,
                delay: skipAnimation ? 0 : 0.5,
              }}

            >
              <CountdownTimer targetDate={targetDate} />
            </motion.div>
          )}

          {/* HERO MAIN TEXT */}
          {showContent && (
            <motion.div
              className="hero2-content"
              initial={{
                opacity: skipAnimation ? 1 : 0,
                y: skipAnimation ? 0 : 20,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: skipAnimation ? 0 : 0.8,
                delay: skipAnimation ? 0 : 0.2,
              }}
              style={{
                scale: heroScale,
              }}
            >
              <h1 className="hero2-title">ANANT KALPAVARIKSHAM</h1>
              <p className="hero2-subtitle">
                -from Centuries Past to Creations Beyond-
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* PARALLAX CLOUDS */}
      {showContent && (
        <motion.div className="cloud-container pointer-events-none"
          style={{
            opacity: heroOpacity,
          }}
        >
          <img src={lightCloudBottom} alt="Light Cloud Bottom" className="cloud-bottom-light" />
          <img src={darkCloudBottom} alt="Dark Cloud Bottom" className="cloud-bottom-dark" />
          <GradientInterval />
        </motion.div>
      )}
    </div>
  );
};

export default Hero2;