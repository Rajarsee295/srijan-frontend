import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Footer from "./components/footer";
import CurtainTransition from "./components/Curtain.jsx";
import Passes from "./pages/Passes.jsx";  // ya jo bhi file name hai (Passes.jsx?)

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/Gallery";
import EventPage from "./pages/EventPage/EventPage";
import SponsorPage from "./pages/SponsorPage";
import MerchPage from "./pages/MerchPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import RegisterPage from "./pages/RegisterPage";
import { Profile } from "./pages/Profilepage";
import AddEventPage from "./pages/EventPage/AddEventPage";

import { ToastContainer } from "react-toastify";
import textBackdropSrc from "./assets/text-backdrop.png";

function App() {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);

  const isHomePage = location.pathname === "/";

  /* ================= HOME INTRO ================= */
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

  /* ================= ROUTE CHANGE → OPEN CURTAIN ================= */
  useEffect(() => {
    setShowCurtain(true);

    const timer = setTimeout(() => {
      setShowCurtain(false);
    }, 1200); // match curtain animation duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  /* ================= BACKGROUND ================= */
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
  <Route path="/passes" element={<Passes/>} />  {/* ← YE NEW */}
  <Route path="/sponsors" element={<SponsorPage />} />
  <Route path="/merchandise" element={<MerchPage />} />
  <Route path="/team" element={<TeamPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/add-event" element={<AddEventPage />} />
</Routes>


        {!isHomePage && <Footer />}
      </div>
    </div>
  );
}

export default App;
