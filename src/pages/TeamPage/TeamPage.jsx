import "./TeamPage.css";
import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import img1 from "./ProfileImage/image_2.png"


const teamSections = [
  {
    title: "Organizers",
    members: [
      {
        name: "SHAUMYA",
        surname: "KUMAR",
        role: "Coordinator",
        img: img1,
        linkedin: "https://linkedin.com",      
        instagram: "https://instagram.com",    
      },
      {
        name: "ATHARV",
        surname: "PATLE",
        role: "Co-Coordinator ",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "LOKESH",
        surname: "GUBBALA",
        role: "Co-Coordinator",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },

  {
    title: "PUBLIC RELATIONS TEAM",
    members: [
      {
        name: "ATHARV",
        surname: "DHARI",
        role: "Head",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "SAMIKSHA",
        surname: "AGARWAL",
        role: "Co-Head",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "JATIN",
        surname: "_",
        role: "Co-Head",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      }
    ],
  },

  {
    title: "OPERATION & LOGISTICS TEAM ",
    members: [
      {
        name: "SUSHANT",
        surname: "RATHORE",
        role: "Head",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "VIDHAN",
        surname: "VAISH",
        role: "Co-Head ",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "BUKHYA",
        surname: "HEMANTH",
        role: "Co-Head ",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "SAYON",
        surname: "DAS",
        role: "Co-Head ",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "PRIOMA",
        surname: "CHAKRABORTY ",
        role: "Co-Head",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },

  {
    title: "EVENT TEAM",
    members: [
      {
        name: "SAKSHAM",
        surname: "KUMAR",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "UDBHAV",
        surname: "SAI",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "SHASHWAT",
        surname: "MANDAL",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "DAKSH",
        surname: "DIXIT",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "ADISHREE",
        surname: "KUNDU",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
  {
    title: "DESIGN TEAM",
    members: [
      {
        name: "DAKSH",
        surname: "_",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "YUG",
        surname: "KALIRAMAN",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "PRIYANSH",
        surname: "SHEKHAR",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "DIKSHA",
        surname: "RANI",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
  {
    title: "SPONSORSHIP TEAM",
    members: [
      {
        name: "ADHAYAYAN ",
        surname: "KUSHAGRA SHANDILYA ",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "SURENDRA",
        surname: "SINGH",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "MUSKAN",
        surname: "PRIYA",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "BHANOTHU",
        surname: "SAI PRASAD ",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "PALAK",
        surname: "_",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "AKANSH",
        surname: "SINHA",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "MOHAMMAD",
        surname: "NAVEED",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "TANISHQ",
        surname: "UNHALE",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "SWAGAT",
        surname: "JENA",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
  {
    title: "HOSPITALITY TEAM",
    members: [
      {
        name: "BAKSHI",
        surname: "ARYAN SRIVASTAVA",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "Keerti",
        surname: "Gupta",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "AZMEERA",
        surname: "JENTHULAL",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "LAKHAN",
        surname: "RAJPUROHIT",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "DEBAYAN",
        surname: "CHOWDHURY",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "KOLLI",
        surname: "PRANEET",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
  {
    title: "FINANCE TEAM",
    members: [
      {
        name: "KESHAV",
        surname: "JHA",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "JAGANA",
        surname: "VENKATESH KUMAR",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
  {
    title: "CONTENT & DOCUMENTATION TEAM",
    members: [
      {
        name: "OJAS",
        surname: "RAJ",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "YAMALI",
        surname: "SAI TEJASWI",
        role: "Co-Head ",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "ASHMITA",
        surname: "CHOUDHURY",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "PRAGATI",
        surname: "KUMARI",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
  {
    title: "PROMOTION TEAM",
    members: [
      {
        name: "NITIN",
        surname: "_",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "ANUJ",
        surname: "KUMAR AGARWAL",
        role: "Co-Head ",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "ADITYA",
        surname: "SHAH ",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "GAJULA",
        surname: "HEENA KOUSAR",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
  {
    title: "MARKETING TEAM",
    members: [
      {
        name: "ANEESH",
        surname: "VERMA",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "SANATAN",
        surname: "BAGARAIA",
        role: "Head ",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "SHAURYA",
        surname: "BOTHRA",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "RAJEEV",
        surname: "LOCHAN",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
  {
    title: "WEB DEVELOPMENT TEAM",
    members: [
      {
        name: "SOHAN",
        surname: "ROY CHOUDHURY",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "ROHIT",
        surname: "GULERIA",
        role: "Co-Head ",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "BUDDARAJU SAI",
        surname: "ABHIRAMA VARMA",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
  {
    title: "SECURITY TEAM",
    members: [
      {
        name: "SHREYANSH",
        surname: "BHUSHAN",
        role: "Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "GUGULOTH",
        surname: "KUMAR",
        role: "Head ",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "PARNEET",
        surname: "NAIN",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "DHARMPAL",
        surname: "GURJAL",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "ADARI",
        surname: "ABHISHEK",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "TAROON",
        surname: "SHARMA",
        role: "Co-Head",        
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    ],
  },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from transparen-[#08061E] via-[#301258] to-[#48286f]  pb-24">
      <PageHeader
        title="TEAM"
        subtitle="Explore the vibrant spectrum of cultural celebrations"
        showBackButton={true}
        backPath="/"
        titleDelay={0.2}
        showStars={true}
      />


      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-20">
        {teamSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-[2.6rem] text-[#FFD85A] drop-shadow-[0_0_10px_rgba(255,215,100,0.7)] mb-10 tracking-wider"
              style={{ fontFamily: "'Cinzel Decorative', cursive" }}
            >
              {section.title}
            </motion.h2>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {section.members.map((member, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ scale: 1.07 }}
                    className="group relative rounded-2xl p-[2px] pb-8
                              bg-gradient-to-br from-yellow-400 to-yellow-600
                              shadow-[0_0_20px_rgba(255,200,0,0.5)]
                              hover:shadow-[0_0_20px_rgba(255,200,0,0.7)]"
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden flex flex-col justify-end
                                h-[350px] bg-center bg-cover"
                      style={{ backgroundImage: `url(${member.img})` }}
                    >

                    
                    <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full border border-[#FED000]
                                     flex items-center justify-center
                                     text-[#FED000] bg-[#08061E]/40 backdrop-blur-sm
                                     hover:bg-[#FED000] hover:text-black
                                     transition duration-300 shadow-md"
                        >
                          <FaLinkedinIn size={16} />
                        </a>
                      )}

                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full border border-[#FED000]
                                     flex items-center justify-center
                                     text-[#FED000] bg-[#08061E]/40 backdrop-blur-sm
                                     hover:bg-[#FED000] hover:text-black
                                     transition duration-300 shadow-md"
                        >
                          <FaInstagram size={16} />
                        </a>
                      )}
                    </div>

                   
                    <div
                      className="absolute inset-0 bg-gradient-to-t 
                                 from-[#08061E]/95 via-[#08061E]/60 to-transparent
                                 z-10"
                    ></div>

                    
                    <div className="relative z-20 p-6 text-center">
                      
                      <h3
                        className="text-[1.3rem] font-bold tracking-wider text-[#FFD85A] mb-0
                                  drop-shadow-[0_0_8px_rgba(255,215,100,0.7)]
                                  transform translate-y-2 group-hover:-translate-y-3.5 transition duration-300
                                  uppercase"
                        style={{ fontFamily: "'Cinzel Decorative', cursive" }}
                      >
                        {member.name}
                      </h3>

                      
                      <p
                        className="text-[#FFD85A] text-[1rem] -mt-4 font-bold
                                  opacity-0 translate-y-1
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  transition-all duration-300"
                        style={{ fontFamily: "'Cinzel Decorative', cursive" }}          
                      >
                        {member.surname}
                      </p>

                      <p className="text-[#fad250] text-sm mt-1.5 mb-1">
                        {member.role}
                      </p>

                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
