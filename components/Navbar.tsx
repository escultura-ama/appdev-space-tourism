"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "700"] });

const navLinks = [
  { id: "00", name: "HOME", path: "/" },
  { id: "01", name: "DESTINATION", path: "/destination" },
  { id: "02", name: "CREW", path: "/crew" },
  { id: "03", name: "TECHNOLOGY", path: "/technology" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={`navbar-container ${barlowCondensed.className}`}>
      {/* LOGO */}
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path fill="#0B0D17" d="M24 0c0 13.255-10.745 24-24 24 13.255 0 24 10.745 24 24 0-13.255 10.745-24 24-24-13.255 0-24-10.745-24-24z" />
          </g>
        </svg>
      </div>

      <div className="nav-line"></div>

      {/* DESKTOP NAV */}
      <ul className="desktop-menu">
        {navLinks.map((link) => (
          <li key={link.id} className={pathname === link.path ? "active" : ""}>
            <Link href={link.path}>
              <span>{link.id}</span> {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* HAMBURGER ICON */}
      {!isOpen && (
        <button className="hamburger" onClick={() => setIsOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </button>
      )}

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div 
              className="fixed right-0 top-0 z-50 bg-black/70 backdrop-blur-2xl text-white w-[60%] h-screen p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <button className="absolute top-8 right-8" onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                  <g fill="#D0D6F9" fillRule="evenodd">
                    <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                    <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                  </g>
                </svg>
              </button>

<ul className="flex flex-col gap-10 mt-24 uppercase tracking-[2.7px] items-start pl-8">
  {navLinks.map((link) => {
    const isActive = pathname === link.path;
    return (
      <li key={link.id}>
        <Link 
          href={link.path} 
          onClick={() => setIsOpen(false)} 
          className={`inline-flex gap-4 pb-2 border-b-2 transition-all duration-300 ${
            isActive 
              ? "border-white" 
              : "border-transparent hover:border-white/50"
          }`}
        >
          <span className="font-bold">{link.id}</span> {link.name}
        </Link>
      </li>
    );
  })}
</ul>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 40px;
          padding-left: 55px;
          position: relative;
          z-index: 100;
        }

        .nav-line {
          height: 1px;
          background: white;
          opacity: 0.25;
          flex-grow: 1;
          margin-left: 64px;
          margin-right: -35px;
          z-index: 110;
        }

        .desktop-menu {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(40px);
          display: flex;
          gap: 48px;
          padding: 0 120px 0 165px;
          list-style: none;
        }

        .desktop-menu li {
          height: 96px;
          display: flex;
          align-items: center;
          border-bottom: 3px solid transparent;
          transition: 0.3s;
        }

        .desktop-menu li:hover { border-bottom: 3px solid rgba(255, 255, 255, 0.5); }
        .desktop-menu li.active { border-bottom: 3px solid white; }

        .desktop-menu a {
          text-decoration: none;
          color: white; /* Fixed from black to white */
          letter-spacing: 2.7px;
          font-size: 16px;
        }

        .desktop-menu span { font-weight: 700; margin-right: 11px; }

        .hamburger { 
          display: none; 
          background: none; 
          border: none; 
          cursor: pointer; 
          padding: 0 24px;
          position: fixed;
          top: 32px;
          right: 24px;
          z-index: 50;
        }

        @media (max-width: 1100px) {
          .nav-line { display: none; }
          .desktop-menu { padding: 0 48px; gap: 37px; }
        }

        @media (max-width: 768px) {
          .navbar-container { padding: 24px; }
          .desktop-menu { display: none; }
          .hamburger { display: block; }
        }
      `}</style>
    </nav>
  );
}