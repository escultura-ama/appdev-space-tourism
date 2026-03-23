"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Bellefair, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({ subsets: ["latin"], weight: ["400"] });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "700"] });

const crewData = [
  { 
    id: 1, 
    role: "COMMANDER", 
    name: "DOUGLAS HURLEY", 
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", 
    image: "/assets/crew/image-douglas-hurley.webp" 
  },
  {
    id: 2,
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/assets/crew/image-mark-shuttleworth.webp"
  },
  {
    id: 3,
    role: "PILOT",
    name: "VICTOR GLOVER",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.",
    image: "/assets/crew/image-victor-glover.webp"
  },
  {
    id: 4,
    role: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    bio: "Anousheh Ansari is an Iranian-American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "/assets/crew/image-anousheh-ansari.webp"
  }
];

export default function CrewPage() {
  const [active, setActive] = useState(0);
  const member = crewData[active];

  return (
    <main className="crew-page">
      <style jsx>{`
        .crew-page { 
          background-image: url('/assets/crew/background-crew-desktop.jpg'); 
          background-size: cover; 
          background-position: center;
          min-height: 100vh; 
          color: white; 
          overflow: hidden; 
          position: relative;
        }

        .content-wrapper { 
          display: flex; 
          justify-content: space-between; 
          align-items: flex-end; 
          padding: 0 165px; 
          height: calc(100vh - 136px); 
        }

        .page-header { 
          position: absolute; 
          top: 120px; 
          left: 165px; 
          font-family: ${barlowCondensed.style.fontFamily};
          font-size: 28px; 
          letter-spacing: 4.72px; 
          text-transform: uppercase; 
          display: flex;
          align-items: center;
          gap: 24px; /* Keeps '02' and text near each other */
        }
        .page-header span { 
          opacity: 0.25; 
          font-weight: 400; /* No bold */
        }
        
        .text-section { 
          width: 614px; 
          padding-bottom: 94px; 
          text-align: left; 
        }
        
        .role { 
          font-family: ${bellefair.style.fontFamily}; 
          font-size: 32px; 
          opacity: 0.5; 
          text-transform: uppercase; 
          margin-bottom: 15px;
        }
        .name { 
          font-family: ${bellefair.style.fontFamily}; 
          font-size: 56px; 
          text-transform: uppercase; 
          margin-bottom: 27px; 
          line-height: 1.1;
        }

        /* ADDED LETTER SPACING HERE */
        .bio { 
          font-family: ${barlowCondensed.style.fontFamily}; 
          font-size: 18px; 
          line-height: 32px; 
          color: #D0D6F9; 
          width: 444px; 
          letter-spacing: 1px; /* Adjust this value as needed for the look */
          margin-bottom: 120px; 
        }
        
        .dots-container { 
          display: flex; 
          gap: 24px; 
        }
        .dot { 
          width: 15px; 
          height: 15px; 
          border-radius: 50%; 
          background: white; 
          border: none; 
          cursor: pointer; 
          transition: 0.3s; 
          opacity: 0.1744; /* Exact inactive state */
        }
        .dot.active { opacity: 1; }
        .dot:hover:not(.active) { opacity: 0.5; }

        .image-section { 
          width: 568px; 
          height: 712px; 
          position: relative; 
        }

        @media (max-width: 1100px) {
          .content-wrapper { 
            flex-direction: column; 
            align-items: center; 
            text-align: center; 
            padding: 40px 24px; 
            height: auto; 
          }
          .page-header { position: static; margin-bottom: 60px; font-size: 20px; justify-content: center; }
          .image-section { 
            order: 1; 
            width: 327px; 
            height: 223px; 
            border-bottom: 1px solid rgba(255,255,255,0.1); 
          }
          .text-section { 
            order: 2; 
            width: 100%; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            padding-bottom: 0;
            margin-top: 32px;
          }
          .dots-container { order: 1; margin-bottom: 32px; }
          .bio { width: 100%; max-width: 458px; margin-bottom: 0; }
        }
      `}</style>

      <Navbar />
      
      <div className="content-wrapper">
        <h5 className="page-header"><span>02</span>MEET YOUR CREW</h5>

        <div className="text-section">
          <h4 className="role">{member.role}</h4>
          <h3 className="name">{member.name}</h3>
          <p className="bio">{member.bio}</p>
          
          <div className="dots-container">
            {crewData.map((_, i) => (
              <button 
                key={i} 
                className={`dot ${i === active ? 'active' : ''}`} 
                onClick={() => setActive(i)} 
                aria-label={`Select crew member ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="image-section">
          <Image 
            src={member.image} 
            alt={member.name} 
            fill 
            style={{ objectFit: "contain", objectPosition: "bottom" }} 
            priority 
          />
        </div>
      </div>
    </main>
  );
}