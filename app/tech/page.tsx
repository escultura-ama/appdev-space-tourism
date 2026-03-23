"use client";
import React from "react";
import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";
import { useState } from "react";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
});

// Technology data
const technologies = [
  {
    id: 0,
    number: "1",
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imagePortrait: "/technology-assets/image-launch-vehicle-portrait.jpg",
    imageLandscape: "/technology-assets/image-launch-vehicle-landscape.jpg",
  },
  {
    id: 1,
    number: "2",
    name: "SPACE PORT",
    description:
      "A spaceport or cosmodrome is a facility for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    imagePortrait: "/technology-assets/image-spaceport-portrait.jpg",
    imageLandscape: "/technology-assets/image-spaceport-landscape.jpg",
  },
  {
    id: 2,
    number: "3",
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry shape and is much smaller than the spacecraft. The capsule shape also offers much better inverted stability when subject to heating and free convection. Our capsule is where your crew sits confortably after your mission is complete.",
    imagePortrait: "/technology-assets/image-space-capsule-portrait.jpg",
    imageLandscape: "/technology-assets/image-space-capsule-landscape.jpg",
  },
];

export default function Tech() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <style jsx>{`
        .tech-page {
          background-image: url('/technology-assets/background-technology-desktop.jpg');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        @media (max-width: 1199px) and (min-width: 769px) {
          .tech-page {
            background-image: url('/technology-assets/background-technology-tablet.jpg');
          }
        }

        @media (max-width: 768px) {
          .tech-page {
            background-image: url('/technology-assets/background-technology-mobile.jpg');
          }
        }

        .tech-number-button {
          width: 60px;
          height: 60px;
          border: 2px solid rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          background: transparent;
          color: white;
          font-size: 24px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-number-button:hover {
          border-color: white;
        }

        .tech-number-button.active {
          background-color: white;
          color: #0b0e17;
        }

        @media (max-width: 1199px) {
          .tech-number-button {
            width: 50px;
            height: 50px;
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .tech-number-button {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
        }
      `}</style>

      <div className="tech-page">
        {/* Navigation Bar */}
        <nav className="top-0 absolute flex justify-between bg-transparent text-white items-center w-full mt-5 md:mt-0 lg:mt-12 z-30">
          <div className="mx-5 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 lg:mx-12 cursor-pointer"></div>
        </nav>

        {/* Page Title Section */}
        <div className="flex pt-24 md:pt-32 lg:pt-24 px-5 md:px-10 lg:px-28">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest text-white"
            style={{ fontFamily: barlowCondensed.style.fontFamily }}
          >
            <span className="opacity-25 mr-4">03</span>
            SPACE LAUNCH 101
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center px-5 md:px-10 lg:px-28 pt-12 pb-12 gap-8 lg:gap-20">
          {/* Left: Technology Image */}
          <div className="w-full lg:w-2/5 flex justify-center order-2 lg:order-1">
            <picture>
              <source
                media="(max-width: 1199px)"
                srcSet={technologies[activeIndex].imageLandscape}
              />
              <img
                src={technologies[activeIndex].imagePortrait}
                alt={technologies[activeIndex].name}
                className="max-w-xs md:max-w-md lg:max-w-lg h-auto"
              />
            </picture>
          </div>

          {/* Center & Right: Controls and Content */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 flex flex-col gap-8">
            {/* Number Buttons */}
            <div className="flex gap-4 md:gap-6 justify-center lg:justify-start">
              {technologies.map((tech, index) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveIndex(index)}
                  className={`tech-number-button ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  {tech.number}
                </button>
              ))}
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left">
              <p
                className="text-sm md:text-base lg:text-base font-light tracking-widest text-gray-300 uppercase mb-4"
                style={{ fontFamily: barlowCondensed.style.fontFamily }}
              >
                THE TERMINOLOGY…
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 uppercase"
                style={{ fontFamily: bellefair.style.fontFamily }}
              >
                {technologies[activeIndex].name}
              </h2>
              <p
                className="text-base md:text-lg lg:text-lg text-gray-300 leading-relaxed max-w-lg"
                style={{ fontFamily: barlow.style.fontFamily }}
              >
                {technologies[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
