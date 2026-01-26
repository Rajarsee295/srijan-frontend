import React from "react";
import LinkedIn from '/logo/linkedin.png'
import Instagram from '/logo/image.png'
import Image from '/image.png'
import "./Footer.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-section footer-left">
        <img src={Image} alt="Srijan Logo" className="footer-logo" />
        <p className="footer-text large">
          Largest Socio-Cultural Fest
          <br />
          Of IIT(ISM) Dhanbad
        </p>
        <p className="footer-text small">Feb 6th - 8th</p>
      </div>

      {/* Quick Links  */}
      <div className="footer-section footer-links">
        <h3 className="footer-heading">Quick Links</h3>
        <ul className="footer-list">
          <li className="footer-list-item"><Link to="/">Home</Link></li>
          <li className="footer-list-item"><Link to="/events">Events</Link></li>
          <li className="footer-list-item"><Link to="/sponsors">Sponsors</Link></li>
          <li className="footer-list-item"><Link to="/team">Teams</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="footer-section footer-contact">
        <h3 className="footer-heading">Contact</h3>
        <p className="footer-text large">
          IIT(ISM) DHANBAD
          <br />
          Jharkhand, India - 826004
          <br />
          Srijan@iitism.Ac.In
        </p>
      </div>

      {/* Follow Us */}
      <div className="footer-section footer-social">
        <h3 className="footer-heading">Follow Us</h3>
        <div className="footer-social-icons">
          <a
            href="https://in.linkedin.com/company/srijaniitismdhn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              width={45}
              height={45}
              style={{ objectFit: "contain" }}
            />
          </a>
          <a
            href="https://www.instagram.com/srijaniitism?igsh=OWYzd3NyaDA0a3U1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={Instagram}
              alt="Instagram"
              width={45}
              height={45}
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
