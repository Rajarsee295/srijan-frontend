// src/components/Navbar/Navbar.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {




  return (
    <>
      <div className="w-full flex justify-between items-center px-6 py-3 font-[Cinzel_Decorative] text-[#FED000] text-xl relative z-50">

        {/* ✅ Navigation Links */}
        {/* CHANGED: pt-8 has been increased to pt-10 for more upward padding */}
        <div className="flex gap-8 pl-8 pt-10"> 

          <NavLink 
            to="/" 
            className="text-2xl font-bold"
          >HOME</NavLink>
          {/* ... (rest of the NavLinks) ... */}
          <NavLink 
            to="/gallery"
            className="text-2xl font-bold"
          >GALLERY</NavLink>

          <NavLink 
            to="/events"
            className="text-2xl font-bold"
          >EVENTS</NavLink>
          
          <NavLink 
            to="/sponsors"
            className="text-2xl font-bold"
          >SPONSORS</NavLink>

          <NavLink 
            to="/merchandise"
            className="text-2xl font-bold"
          >MERCHANDISE</NavLink>

          <NavLink 
            to="/team"
            className="text-2xl font-bold"
          >TEAM</NavLink>

        </div>

        {/* ✅ Right Side Register Button/Link */}
        {/* CHANGED: The pt-8 here also needs to be changed to pt-10 for vertical alignment */}
        <NavLink
          to="/register"
          className="text-3xl font-bold pt-10 pr-8"
        >
          REGISTER
        </NavLink>

      </div>
    </>
  );
}