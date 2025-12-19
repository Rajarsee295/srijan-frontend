import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import GalleryPage from "./pages/Gallery";
import EventPage from "./pages/EventPage/EventPage";
import HomePage from "./pages/HomePage";
import { Route, Routes, useLocation } from "react-router";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import SponsorPage from "./pages/SponsorPage";
import MerchPage from "./pages/MerchPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import { Profile } from "./pages/Profilepage";
import AddEventPage from "./pages/EventPage/AddEventPage";
import { motion } from "framer-motion";
import textBackdropSrc from "./assets/text-backdrop.png";

// Import the Footer component
import Footer from "./components/footer";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const animationPlayed = sessionStorage.getItem("animationPlayed");
    if (animationPlayed === "true") {
      setHasPlayedAnimation(true);
      setShowNavbar(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    setShowNavbar(true);
    setHasPlayedAnimation(true);
    sessionStorage.setItem("animationPlayed", "true");
  };

  const noBackgroundRoutes = ["/"];

  const shouldShowBackground = !noBackgroundRoutes.includes(location.pathname);

  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <CustomCursor />

      {shouldShowBackground && (
        <>
          <div className="shared-background" />
          <div
            className="shared-text-backdrop"
            style={{ backgroundImage: `url(${textBackdropSrc})` }}
          />
        </>
      )}
      <div className="content-root">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage 
              onAnimationComplete={handleAnimationComplete}
              skipAnimation={hasPlayedAnimation}
            />
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/sponsors" element={<SponsorPage />} />
          <Route path="/merchandise" element={<MerchPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-event" element={<AddEventPage />} />
        </Routes>

        {/* Add Footer here */}
        {!isHomePage && <Footer />}
      </div>
    </div>
  );
}

export default App;
