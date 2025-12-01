import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import "./AddEventPage.css";

const AddEventPage = () => {
    const navigate = useNavigate();
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        event_name: "",
        event_category: "DANCE",
        venue: "",
        description: "",
        bg_image_url: "",
        rulebook: "",
        rules: [""],
        coordinator_names: [""],
        coordinator_phone: [""],
    });

    const categories = [
        "DANCE", "ART", "MUSIC", "LITERACY", "DRAMA",
        "CINEMA", "FASHION", "COMEDY", "TECH"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (field, index, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].map((item, i) => i === index ? value : item)
        }));
    };

    const addArrayField = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], ""]
        }));
    };

    const removeArrayField = (field, index) => {
        if (formData[field].length > 1) {
            setFormData(prev => ({
                ...prev,
                [field]: prev[field].filter((_, i) => i !== index)
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://srijan-2026.onrender.com/api/v1/events/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            navigate("/events");
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Failed to create event: " + error.message);
        }
    };

    const previewEvent = {
        name: formData.event_name || "Event Name",
        category: formData.event_category,
        image: formData.bg_image_url || "",
    };

    return (
        <div className="add-event-container">
            <div className="add-event-content">
                <PageHeader
                    title="ADD EVENT"
                    subtitle="Create a new event for Srijan"
                    showBackButton={true}
                    backPath="/events"
                    titleDelay={0.2}
                    showStars={true}
                />

                <div className="add-event-layout">
                    <motion.div
                        className="preview-section"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="preview-title">PREVIEW</h3>
                        <div className="preview-card-container">
                            <EventCard
                                event={previewEvent}
                                index={0}
                                onClick={() => setShowPreview(true)}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="form-section"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="event-form">
                            <div className="form-group">
                                <label>Event Name *</label>
                                <input
                                    type="text"
                                    name="event_name"
                                    value={formData.event_name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter event name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Category *</label>
                                <select
                                    name="event_category"
                                    value={formData.event_category}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Venue *</label>
                                <input
                                    type="text"
                                    name="venue"
                                    value={formData.venue}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter venue"
                                />
                            </div>

                            <div className="form-group">
                                <label>Description *</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    placeholder="Enter event description"
                                />
                            </div>

                            <div className="form-group">
                                <label>Background Image URL</label>
                                <input
                                    type="url"
                                    name="bg_image_url"
                                    value={formData.bg_image_url}
                                    onChange={handleInputChange}
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            <div className="form-group">
                                <label>Rulebook URL</label>
                                <input
                                    type="url"
                                    name="rulebook"
                                    value={formData.rulebook}
                                    onChange={handleInputChange}
                                    placeholder="https://example.com/rulebook.pdf"
                                />
                            </div>

                            <div className="form-group">
                                <label>Rules</label>
                                {formData.rules.map((rule, index) => (
                                    <div key={index} className="array-field">
                                        <input
                                            type="text"
                                            value={rule}
                                            onChange={(e) => handleArrayChange("rules", index, e.target.value)}
                                            placeholder={`Rule ${index + 1}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeArrayField("rules", index)}
                                            className="remove-btn"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayField("rules")}
                                    className="add-field-btn"
                                >
                                    + Add Rule
                                </button>
                            </div>

                            <div className="form-group">
                                <label>Coordinator Names *</label>
                                {formData.coordinator_names.map((name, index) => (
                                    <div key={index} className="array-field">
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => handleArrayChange("coordinator_names", index, e.target.value)}
                                            placeholder={`Coordinator ${index + 1}`}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeArrayField("coordinator_names", index)}
                                            className="remove-btn"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayField("coordinator_names")}
                                    className="add-field-btn"
                                >
                                    + Add Coordinator
                                </button>
                            </div>

                            <div className="form-group">
                                <label>Coordinator Phone *</label>
                                {formData.coordinator_phone.map((phone, index) => (
                                    <div key={index} className="array-field">
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => handleArrayChange("coordinator_phone", index, e.target.value)}
                                            placeholder="9876543210"
                                            pattern="[0-9]{10}"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeArrayField("coordinator_phone", index)}
                                            className="remove-btn"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayField("coordinator_phone")}
                                    className="add-field-btn"
                                >
                                    + Add Phone
                                </button>
                            </div>

                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                CREATE EVENT
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <EventModal
                isOpen={showPreview}
                onClose={() => setShowPreview(false)}
                eventData={formData}
            />
        </div>
    );
};

export default AddEventPage;