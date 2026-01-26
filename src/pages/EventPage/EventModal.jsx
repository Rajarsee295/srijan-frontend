import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./EventModal.css";

const EventModal = ({ isOpen, onClose, eventData }) => {


  // const [formData, setFormData] = useState({
  //   event_name: "",
  //   event_category: "DANCE",
  //   venue: "",
  //   description: "",
  //   bg_image_url: "",
  //   rulebook: "",
  //   rules: [""],
  // });

  // const handleSubmit = async (e) => {
  //       e.preventDefault();
  //       onclose;
  //       try{
  //           const response = await fetch(
  //               `https://srijan-2026.onrender.com/api/v1/events/${eventData.id}/register`,
  //               {
  //                 method: "POST",
  //                 headers: {
  //                   "Content-Type": "application/json",
  //                 },
  //                 body: JSON.stringify(formData),
  //               }
  //           );
  //           if(!response.ok){
  //             throw new Error(`HTTP error! status: ${response.status}`);
  //           }else{
  //             alert("Registered Successfully!");
  //           }
  //       }catch(error){
  //         alert("Failed to Register " + error.message);
  //       }
  //   };

  // above code for registration form



  if (!eventData) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="event-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="event-modal-content"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="event-modal-close-btn" onClick={onClose}>
              ✕
            </button>

            <div className="event-modal-header">
              <motion.span
                className="event-modal-category"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {eventData.event_category || eventData.category || "N/A"}
              </motion.span>
              <h2 className="event-modal-title">
                {eventData.event_name || eventData.name || "Event Name"}
              </h2>
              <div className="event-modal-divider" />
            </div>

            <div className="event-modal-body">
              <motion.div
                className="event-modal-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="event-modal-section-title">
                  <span className="section-icon">📝</span>
                  Description
                </h4>
                <p className="event-modal-text">
                  {eventData.description || "N/A"}
                </p>
              </motion.div>

              <motion.div
                className="event-modal-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="event-modal-section-title">
                  <span className="section-icon">📍</span>
                  Venue
                </h4>
                <p className="event-modal-text">
                  {eventData.venue || "N/A"}
                </p>
              </motion.div>

              <motion.div
                className="event-modal-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <h4 className="event-modal-section-title">
                  <span className="section-icon">📅</span>
                  Date
                </h4>
                <p className="event-modal-text">
                  {eventData.date || "N/A"}
                </p>
              </motion.div>

              <motion.div
                className="event-modal-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="event-modal-section-title">
                  <span className="section-icon">🏆</span>
                  Prize
                </h4>
                <p className="event-modal-text">
                  {eventData.prize || "N/A"}
                </p>
              </motion.div>

              {/* {eventData.rules && eventData.rules.filter(r => r).length > 0 ? (
                <motion.div
                  className="event-modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="event-modal-section-title">
                    <span className="section-icon">📋</span>
                    Rules
                  </h4>
                  <ul className="event-modal-list">
                    {eventData.rules.filter(r => r).map((rule, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {rule}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  className="event-modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="event-modal-section-title">
                    <span className="section-icon">📋</span>
                    Rules
                  </h4>
                  <p className="event-modal-text">N/A</p>
                </motion.div>
              )} */}

              {eventData.coordinator_names &&
               eventData.coordinator_names.filter(n => n).length > 0 ? (
                <motion.div
                  className="event-modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="event-modal-section-title">
                    <span className="section-icon">👥</span>
                    Coordinators
                  </h4>
                  <div className="event-modal-coordinators">
                    {eventData.coordinator_names.filter(n => n).map((name, index) => (
                      <motion.div
                        key={index}
                        className="coordinator-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="coordinator-info">
                          <span className="coordinator-name">{name}</span>
                          {eventData.coordinator_phone &&
                           eventData.coordinator_phone[index] ? (
                            <a
                              href={`tel:${eventData.coordinator_phone[index]}`}
                              className="coordinator-phone"
                            >
                              📞 {eventData.coordinator_phone[index]}
                            </a>
                          ) : (
                            <span className="coordinator-phone-na">N/A</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="event-modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="event-modal-section-title">
                    <span className="section-icon">👥</span>
                    Coordinators
                  </h4>
                  <p className="event-modal-text">N/A</p>
                </motion.div>
              )}

              {eventData.rulebook ? (
                <motion.div
                  className="event-modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <a
                    href={eventData.rulebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-modal-rulebook-btn"
                  >
                    <span>📄</span>
                    View Complete Rulebook
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  className="event-modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="event-modal-section-title">
                    <span className="section-icon">📄</span>
                    Rulebook
                  </h4>
                  <p className="event-modal-text">N/A</p>
                </motion.div>
              )}
            </div>

            <motion.div
              className="event-modal-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button className="event-modal-register-btn" onClick={() => window.open(eventData.registration_link)}>
                Register Now
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;