import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

import ART from "./Images/ART.jpg";
import CINEMA from "./Images/CINEMA.jpg";
import COMEDY from "./Images/COMEDY.jpg";
import DANCE from "./Images/DANCE.jpg";
import DRAMA from "./Images/DRAMA.jpg";
import LITERACY from "./Images/LITERACY.jpg";
import MUSIC from "./Images/MUSIC.jpg";

export default function Display({ category }) {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const url = category === "ALL"
          ? "https://srijan-2026.onrender.com/api/v1/event/all"
          : `https://srijan-2026.onrender.com/api/v1/events/category/${category}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch events");
        const data = await response.json();
        setEvents(data);// events will be set in events,use it in frontend as needed
      } catch(err){
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, [category]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 px-32">
        {events.length === 0 && (
          <motion.p
            key="no-data"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[#FED000] font-['Cinzel_Decorative'] text-center col-span-full font-semibold"
          >
            NO EVENTS FOUND FOR {category}
          </motion.p>
        )}

        {events.map((event, index) => (
          <EventCard
            key={event.name}
            event={event}
            index={index}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </div>

      <EventModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        eventData={selectedEvent}
      />
    </>
  );
}