"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion"; 
import { Bellefair, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({ subsets: ["latin"], weight: ["400"] });
const barlowCondensed = Barlow_Condensed({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"] 
});

export default function CrewPage() {
  const [active, setActive] = useState(0);
  const member = crewData[active];

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setActive((prev) => (prev + 1) % crewData.length);
    } else if (info.offset.x > swipeThreshold) {
      setActive((prev) => (prev - 1 + crewData.length) % crewData.length);
    }
  };

  return (
    <main className="crew-page">
      <Navbar />

      <h5 className="page-header">
        <span className="page-number">02</span> MEET YOUR CREW
      </h5>
      
      <motion.div 
        className="content-wrapper"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.05}
        onDragEnd={handleDragEnd}
      >
        {/* IMAGE SECTION - Stays at bottom on Desktop, shifts to Top on Mobile */}
        <div className="image-section">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="motion-img-wrapper"
            >
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="crew-image-file" 
                priority 
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TEXT & DOTS SECTION */}
        <div className="text-section">
          {/* DOTS MOVE HERE IN MOBILE FLOW */}
          <div className="dots-container">
            {crewData.map((_, i) => (
              <button 
                key={i} 
                className={`dot ${i === active ? 'active' : ''}`} 
                onClick={(e) => {
                  e.stopPropagation(); 
                  setActive(i);
                }} 
              />
            ))}
          </div>

          <div className="animated-text-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className={`role ${bellefair.className}`}>{member.role}</h4>
                <h3 className={`name ${bellefair.className}`}>{member.name}</h3>
                <p className={`bio ${barlowCondensed.className}`}>{member.bio}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .crew-page { 
          background: #0B0D17 url('/assets/crew/background-crew-desktop.jpg') no-repeat center/cover; 
          min-height: 100vh; color: white; position: relative; overflow: hidden; display: flex; flex-direction: column; 
          -webkit-font-smoothing: antialiased;
        }

        .page-header { 
          position: absolute; top: 212px; left: 165px; 
          font-family: ${barlowCondensed.style.fontFamily}; 
          font-size: 28px; font-weight: 300; letter-spacing: 4.72px; 
          text-transform: uppercase; display: flex; gap: 24px; z-index: 20; 
        }
        .page-number { opacity: 0.25; font-weight: 700; }
        
        :global(.content-wrapper) { 
          padding: 0 165px; flex-grow: 1; display: flex; 
          justify-content: space-between; align-items: flex-end; 
          position: relative; cursor: grab; touch-action: pan-y; z-index: 10;
        }

        .text-section { width: 614px; padding-bottom: 94px; z-index: 10; pointer-events: none; display: flex; flex-direction: column; }
        .dots-container { display: flex; gap: 24px; margin-bottom: 40px; pointer-events: auto; order: 2; }
        .animated-text-box { min-height: 360px; order: 1; } 
        
        .role { font-size: 32px; opacity: 0.5; text-transform: uppercase; margin-bottom: 15px; font-weight: 300; }
        .name { font-size: 56px; text-transform: uppercase; margin-bottom: 27px; line-height: 1.1; font-weight: 400; }
        .bio { font-size: 18px; line-height: 32px; color: #D0D6F9; width: 444px; letter-spacing: 1px; font-weight: 300; }
        
        .dot { width: 15px; height: 15px; border-radius: 50%; background: white; border: none; cursor: pointer; transition: 0.3s; opacity: 0.17; }
        .dot.active { opacity: 1; }

        .image-section { 
          width: 568px; height: 712px; position: relative; 
          mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          pointer-events: none;
        }
        
        :global(.motion-img-wrapper) { height: 100%; width: 100%; position: relative; }
        .image-section :global(.crew-image-file) { object-fit: contain !important; object-position: bottom !important; }

        @media (max-width: 1100px) {
          .crew-page { background-image: url('/assets/crew/background-crew-mobile.jpg'); }
          .page-header { position: static; margin-top: 88px; margin-bottom: 32px; justify-content: center; font-size: 16px; letter-spacing: 2.7px; }
          
          :global(.content-wrapper) { 
            flex-direction: column; align-items: center; text-align: center; 
            padding: 0 24px; justify-content: flex-start;
          }

          /* IMAGE TOP */
          .image-section { 
            order: 1; width: 100%; height: 223px; border-bottom: 1px solid rgba(255,255,255,0.1); 
            mask-image: none; -webkit-mask-image: none; margin-bottom: 32px;
          }

          /* DOTS MIDDLE */
          .text-section { order: 2; width: 100%; padding-bottom: 40px; align-items: center; }
          .dots-container { order: 1; margin-bottom: 32px; justify-content: center; width: 100%; }

          /* TEXT BOTTOM */
          .animated-text-box { order: 2; min-height: auto; }
          .role { font-size: 16px; margin-bottom: 8px; }
          .name { font-size: 24px; margin-bottom: 16px; }
          .bio { font-size: 15px; line-height: 25px; width: 100%; }
        }

        /* Desktop specific order adjustment */
        @media (min-width: 1101px) {
          .text-section { order: 1; }
          .image-section { order: 2; }
          .dots-container { order: 2; margin-top: 40px; margin-bottom: 0; }
          .animated-text-box { order: 1; }
        }
      `}</style>
    </main>
  );
}

const crewData = [
  { id: 1, role: "COMMANDER", name: "DOUGLAS HURLEY", bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", image: "/assets/crew/image-douglas-hurley.png" },
  { id: 2, role: "MISSION SPECIALIST", name: "MARK SHUTTLEWORTH", bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system.", image: "/assets/crew/image-mark-shuttleworth.png" },
  { id: 3, role: "PILOT", name: "VICTOR GLOVER", bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station.", image: "/assets/crew/image-victor-glover.png" },
  { id: 4, role: "FLIGHT ENGINEER", name: "ANOUSHEH ANSARI", bio: "Anousheh Ansari is an Iranian-American engineer and co-founder of Prodea Systems.", image: "/assets/crew/image-anousheh-ansari.png" }
];