import "./TeamPage.css";
import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import atharv from "./ProfileImage/atharv.jpg"
import UDBHAV from "./ProfileImage/UDBHAV.jpg"
import Yamali from "./ProfileImage/Yamali.jpg"
import Guguloth from "./ProfileImage/Guguloth.jpg"
import Adityashah from "./ProfileImage/Adityashah.jpg"
import Jagana from "./ProfileImage/Jagana.jpg"
import Nitin from "./ProfileImage/Nitin.jpeg"
import Jatin from "./ProfileImage/Jatin.jpg"
import Sai_Prasad from "./ProfileImage/Sai_Prasad.webp"
import Diksha from "./ProfileImage/Diksha.jpg"
import Surendra_Mojawat from "./ProfileImage/Surendra_Mojawat.jpg"
import Adishree_Kundu from "./ProfileImage/Adishree_Kundu.jpg"
import Azmeera_jenthulal from "./ProfileImage/Azmeera_jenthulal.jpg"
import Shreyansh_Bhushan from "./ProfileImage/Shreyansh_Bhushan.jpeg"
import Lokesh from "./ProfileImage/Lokesh.jpg"
import Pragati_Kumari from "./ProfileImage/Pragati_Kumari.jpg"
import Kolli_Praneeth from "./ProfileImage/Kolli_Praneeth.jpg"
import Debayan_Chowdhury from "./ProfileImage/Debayan_Chowdhury.jpg"
import Lakhan_singh from "./ProfileImage/Lakhan_singh.jpg"
import Abhiram from "./ProfileImage/Abhiram.jpg"
import Ashmita from "./ProfileImage/Ashmita.jpeg"
import Kirti_Gupta from "./ProfileImage/Kirti_Gupta.jpg"
import Aneesh_Verma from "./ProfileImage/Aneesh_Verma.jpeg"
import Prioma_Chakraborty from "./ProfileImage/Prioma_Chakraborty.jpeg"
import Gajula_Kousar from "./ProfileImage/Gajula_Kousar.jpeg"
import SANATAN_BAGARIA from "./ProfileImage/SANATAN_BAGARIA.jpeg"
import img1 from "./ProfileImage/11.jpg"


const teamSections = [
  {
    title: "CORE TEAM",
    members: [
      {
        name: "MADHULIKA",
        surname: "GUPTA",
        role: "Convenor",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "SURESH",
        surname: "KUMAR",
        role: "Co-Convenor",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "PRIYANSH",
        surname: "KEDIA",
        role: "President, Students' Gymkhana",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "SIDDU",
        surname: "BHUKYA",
        role: "General Secretary Media and Culture",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      }
    ],
  },


  {
    title: "Co-ordinators",
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
        img: atharv,
        linkedin: "https://www.linkedin.com/in/atharw-patle-9912b8287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/atharwpatle10?igsh=MTBjanJ2ZHcwcGcxcQ==",
      },
      {
        name: "LOKESH",
        surname: "GUBBALA",
        role: "Co-Coordinator",
        img: Lokesh,
        linkedin: "https://www.linkedin.com/in/lokesh-gubbala-172761289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/lokesh_.25._?igsh=MTc5NWthN241NXA5Ng==",
      },
    ],
  },
  {
    title: "WEB DEVELOPMENT TEAM",
    members: [
      {
        name: "Arman",
        surname: "Bhattacharjee",
        role: "Head",
        img: img1,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "ABHIRAM",
        surname: "BUDDARAJU",
        role: "Co-Head",
        img: Abhiram,
        linkedin: "https://www.linkedin.com/in/saiabhiramavarmabuddaraju/",
        instagram: "https://www.instagram.com/abhiram_2765/",
      },
      {
        name: "SOHAN",
        surname: "ROY CHOUDHURY",
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
        name: "UDBHAV",
        surname: "SAI",
        role: "Head",
        img: UDBHAV,
        linkedin: "https://www.linkedin.com/in/udbhav-sai-kukkadapu-a36a93287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/saii30_?igsh=MThzbG8yMW81NzEzcw%3D%3D&utm_source=qr",
      },
      {
        name: "SAKSHAM",
        surname: "KUMAR",
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
        name: "ADISHREE",
        surname: "KUNDU",
        role: "Co-Head",
        img: Adishree_Kundu,
        linkedin: "https://www.linkedin.com/in/adishree-kundu-607764358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/adishr_eee?igsh=OWJ3aG5hbzQ4ZDZv",
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
        img: Jatin,
        linkedin: "https://www.linkedin.com/in/jatin-b-575947287",
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
        name: "HEMANTH",
        surname: "BUKHYA",
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
        img: Prioma_Chakraborty,
        linkedin: "http://www.linkedin.com/in/priomachakraborty98",
        instagram: "https://www.instagram.com/priomachakraborty?igsh=MW00cXA5NnpwNzF2Mg==",
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
        img: Diksha,
        linkedin: "https://www.linkedin.com/in/diksha-rani-474b15287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/_._dikshaaa._?igsh=MTF1dzY3eHZuZTE5eg==",
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
        img: Surendra_Mojawat,
        linkedin: "https://www.linkedin.com/in/surendra-singh-574432287",
        instagram: "https://www.instagram.com/surendra_singh819?igsh=YTdxajJtMGpsejlx",
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
        img: Kirti_Gupta,
        linkedin: "http://www.linkedin.com/in/kirti-gupta-4491642a1",
        instagram: "https://www.instagram.com/kirti4711?igsh=MXFidXo2aHV4aWo4aw==",
      },
      {
        name: "JENTHULAL",
        surname: "AZMEERA",
        role: "Co-Head",
        img: Azmeera_jenthulal,
        linkedin: "https://www.linkedin.com/in/azmeera-jenthulal-",
        instagram: "https://www.instagram.com/mr.john118?igsh=cXV2YmttemFtYTVw",
      },
      {
        name: "LAKHAN",
        surname: "RAJPUROHIT",
        role: "Co-Head",
        img: Lakhan_singh,
        linkedin: "https://www.linkedin.com/in/lakhan-rajpurohit-99a0b5287",
        instagram: "https://www.instagram.com/_lucky_0206?igsh=dWxiaXplbzFxb2Y2",
      },
      {
        name: "DEBAYAN",
        surname: "CHOWDHURY",
        role: "Co-Head",
        img: Debayan_Chowdhury,
        linkedin: "https://www.linkedin.com/in/debayan-roy-chowdhury-374208272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://instagram.com",
      },
      {
        name: "PRANEET",
        surname: "KOLLI",
        role: "Co-Head",
        img: Kolli_Praneeth,
        linkedin: "https://www.linkedin.com/in/hema-siva-naga-praneeth-kolli-74a864287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/mr_praneeth.07?igsh=MXJ3bXd3cjJ1MXBmMQ==",
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
        name: "VENKATESH KUMAR",
        surname: "JAGANA",
        role: "Co-Head",
        img: Jagana,
        linkedin: "https://www.linkedin.com/in/jagana-venkatesh-kumar-969365296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/venky_.31._?igsh=ZGF4aDBvb2lka2I1",
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
        name: "SAI TEJASWI",
        surname: "YAMALI",
        role: "Co-Head ",
        img: Yamali,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
      {
        name: "ASHMITA",
        surname: "CHOUDHURY",
        role: "Co-Head",
        img: Ashmita,
        linkedin: "https://www.linkedin.com/in/ashmita-choudhury-97063a287/",
        instagram: "https://www.instagram.com/ashmita__12/",
      },
      {
        name: "PRAGATI",
        surname: "KUMARI",
        role: "Co-Head",
        img: Pragati_Kumari,
        linkedin: "https://www.linkedin.com/in/pragati-kumari-10262b2b1/",
        instagram: "https://www.instagram.com/pragatikumari2328?igsh=MXYxdThmZ2E5NmVxcg==",
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
        img: Nitin,
        linkedin: "https://www.linkedin.com/in/nitin-kumar-b42b9029a",
        instagram: "https://www.instagram.com/_nitin.25?igsh=emVjc3A0OTcxNDlt",
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
        img: Adityashah,
        linkedin: "https://www.linkedin.com/in/aditya-shah-38a2a9287",
        instagram: "https://www.instagram.com/insane_.adi",
      },
      {
        name: "HEENA KOUSAR",
        surname: "GAJULA",
        role: "Co-Head",
        img: Gajula_Kousar,
        linkedin: "https://www.linkedin.com/in/gajula-heena-kousar-5b4571289/",
        instagram: "https://www.instagram.com/heena__176?igsh=N2Y2NGxjdWZ6d250&utm_source=qr",
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
        img: Aneesh_Verma,
        linkedin: "https://www.linkedin.com/in/aneesh-verma-68a395287",
        instagram: "https://www.instagram.com/mastermindverma2005/",
      },
      {
        name: "SANATAN",
        surname: "BAGARAIA",
        role: "Head ",
        img: SANATAN_BAGARIA,
        linkedin: "https://www.linkedin.com/in/sanatanbagaria/",
        instagram: "https://www.instagram.com/sanatan_bagaria/",
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
    title: "SECURITY TEAM",
    members: [
      {
        name: "SHREYANSH",
        surname: "BHUSHAN",
        role: "Head",
        img: Shreyansh_Bhushan,
        linkedin: "https://www.linkedin.com/in/shreyansh2005/",
        instagram: "https://www.instagram.com/shreyanshh_13/",
      },
      {
        name: "KUMAR",
        surname: "GUGULOTH",
        role: "Head ",
        img: Guguloth,
        linkedin: "https://linkedin.com",
        instagram: "https://www.instagram.com/kumar__official__7?igsh=MTNtNnRwY3ZudjZyYQ==",
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
        name: "ABHISHEK",
        surname: "ADARI",
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


            <div className="flex flex-wrap justify-center gap-10">
              {section.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.07 }}
                  className="group relative rounded-2xl p-[2px] pb-8
                        w-[260px] sm:w-[280px]
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
                        className="text-[#FFD85A] text-[1rem] font-bold
                            mt-1
                            sm:-mt-4
                            opacity-100 translate-y-0
                            sm:opacity-0 sm:translate-y-1
                            sm:group-hover:opacity-100 sm:group-hover:translate-y-0
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
