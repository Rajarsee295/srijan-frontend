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
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./EventPage.css";

const categories = [
  { icon: ALL, categoryname: "ALL" },
  { icon: DANCE, categoryname: "DANCE" },
  { icon: ART, categoryname: "ART" },
  { icon: MUSIC, categoryname: "MUSIC" },
  { icon: LITERACY, categoryname: "LITERARY" },
  { icon: DRAMA, categoryname: "THEATRE" },
  { icon: CINEMA, categoryname: "FILM" },
  { icon: FASHION, categoryname: "FASHION" },
  { icon: COMEDY, categoryname: "COMEDY" },
];

export default function EventPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      const userString = localStorage.getItem("user_1");
      if (!userString) return false;
      if (userString === "undefined" || userString === "null") return false;
      const user = JSON.parse(userString);
      return Boolean(user?.is_admin);
    } catch (error) {
      console.error("Error parsing user data:", error);
      return false;
    }
  });

  const navigate = useNavigate();




  return (
    <div className="event-page-container">
      <div className="event-page-content">
        <PageHeader
          title="EVENTS"
          // subtitle="Explore the vibrant spectrum of cultural celebrations"
          subtitle="If you have purchased pass for 1 DAY in that case you can only register for DAY 1 events i.e. 6th Feb on the website , If you have purchased pass for 2 DAYS in that case you can only register for DAY 1 & 2 events i.e. 6th and 7th Feb on the website, 

          If you have purchased pass for 3 DAYS in that case you can register for DAY 1,2 & 3 events i.e. 6th, 7th and 8th Feb on the website,
          "
          showBackButton={true}
          backPath="/"
          titleDelay={0.2}
          showStars={true}
        />

        {isAdmin && (
          <motion.button
            className="add-event-btn"
            onClick={() => navigate("/add-event")}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(254, 208, 0, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span>ADD EVENT</span>
          </motion.button>
        )}

        <motion.nav
          className="event-categories-nav"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveCategory(cat.categoryname)}
              className={`event-category-item ${activeCategory === cat.categoryname ? "active" : ""
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="event-category-icon-wrapper"
                animate={{
                  scale: activeCategory === cat.categoryname ? 1.15 : 1,
                  boxShadow:
                    activeCategory === cat.categoryname
                      ? "0 0 20px rgba(254, 208, 0, 0.6)"
                      : "0 0 0 rgba(254, 208, 0, 0)",
                }}
              >
                <img
                  src={cat.icon}
                  alt={cat.categoryname}
                  className="event-category-icon"
                />
              </motion.div>

              <motion.p
                className="event-category-name"
                animate={{
                  scale: activeCategory === cat.categoryname ? 1.1 : 1,
                }}
              >
                {cat.categoryname}
              </motion.p>

              {activeCategory === cat.categoryname && (
                <motion.div
                  className="event-category-underline"
                  layoutId="underline"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          className="event-display-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Display category={activeCategory} />
        </motion.div>
      </div>
    </div>
  );
}