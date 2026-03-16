"use client";
import Image from "next/image";
import { Barlow_Condensed, Bellefair } from "next/font/google";
import { useState, useRef, useCallback } from "react";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

const crew = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/assets/crew/image-douglas-hurley.webp",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/assets/crew/image-mark-shuttleworth.webp",
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational crew flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.",
    image: "/assets/crew/image-victor-glover.webp",
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "/assets/crew/image-anousheh-ansari.webp",
  },
];

const DRAG_THRESHOLD = 150;
const FADE_DISTANCE = 400;

export default function Page() {
  const [active, setActive] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const member = crew[active];

  const opacity = Math.max(0, 1 - Math.abs(dragOffset) / FADE_DISTANCE);
  const translateX = dragOffset * 0.15;

  const changeCrew = useCallback((nextIndex: number, direction: number) => {
    setIsAnimating(true);
    setDragOffset(direction * FADE_DISTANCE * 1.5);
    setTimeout(() => {
      setActive(nextIndex);
      setDragOffset(direction * -FADE_DISTANCE * 1.5);
      setTimeout(() => {
        setDragOffset(0);
        setTimeout(() => setIsAnimating(false), 700);
      }, 50);
    }, 500);
  }, []);

  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return;
    isDragging.current = true;
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  }, [isAnimating]);

  const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || startX.current === null || isAnimating) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(currentX - startX.current);
  }, [isAnimating]);

  const handleDragEnd = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || startX.current === null) return;
    isDragging.current = false;
    const endX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX.current;
    if (Math.abs(diff) > DRAG_THRESHOLD) {
      const direction = diff < 0 ? 1 : -1;
      const nextIndex = active + direction;
      if (nextIndex >= 0 && nextIndex < crew.length) {
        changeCrew(nextIndex, direction);
      } else {
        setDragOffset(0);
      }
    } else {
      setDragOffset(0);
    }
    startX.current = null;
  }, [active, changeCrew]);

  return (
    <>
      <style jsx>{`
        .crew-page {
          background-image: url('/assets/crew/background-crew-desktop.jpg');
          background-size: cover;
          background-position: center;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          position: relative;
          cursor: grab;
          user-select: none;
        }
        .page-header {
          position: absolute;
          top: 212px;
          left: 120px;
          font-size: 28px;
          letter-spacing: 4.72px;
          font-weight: 400;
          color: white;
          text-transform: uppercase;
          margin: 0;
          z-index: 10;
        }
        .crew-layout {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          height: 100%;
          padding: 0 120px;
        }
        .crew-text-block {
          display: flex;
          flex-direction: column;
          padding-bottom: 148px;
          text-align: left;
          align-items: flex-start;
          max-width: 50%;
          min-width: 0;
          flex-shrink: 1;
        }
        .crew-image-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
          flex-shrink: 0;
        }
        .crew-image-wrap {
          position: relative;
          width: min(514px, 40vw);
          height: min(700px, calc(100vh - 160px));
        }

        @media (max-width: 1199px) and (min-width: 769px) {
          .crew-page {
            background-image: url('/assets/crew/background-crew-tablet.jpg');
            height: auto;
            min-height: 100vh;
            overflow-y: auto;
          }
          .page-header {
            top: 40px;
            left: 38px;
            font-size: 20px;
            letter-spacing: 3.375px;
            white-space: nowrap;
            transform: none;
          }
          .crew-layout {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 130px 38px 40px;
            height: auto;
            min-height: 100vh;
          }
          .crew-text-block {
            text-align: center;
            align-items: center;
            padding-bottom: 40px;
            order: 1;
            width: 100%;
            max-width: 580px;
          }
          .crew-text-block h3 { font-size: 40px !important; }
          .crew-text-block h4 { font-size: 24px !important; }
          .crew-text-block p {
            max-width: 458px !important;
            width: 100% !important;
            font-size: 16px !important;
            line-height: 28px !important;
          }
          .crew-dots { justify-content: center; }
          .crew-image-block {
            order: 2;
            width: 100%;
            align-items: center;
            justify-content: center;
            height: auto;
            padding-top: 0;
          }
          .crew-image-wrap {
            width: min(456px, 55vw);
            height: min(532px, 50vw);
          }
        }

        @media (max-width: 768px) {
          .crew-page {
            background-image: url('/assets/crew/background-crew-mobile.jpg');
            height: auto;
            min-height: 100vh;
            overflow-y: auto;
          }
          .page-header {
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 16px;
            letter-spacing: 2.7px;
            white-space: nowrap;
          }
          .crew-layout {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 112px 24px 48px;
            height: auto;
            min-height: 100vh;
          }
          .crew-text-block {
            text-align: center;
            align-items: center;
            padding-bottom: 32px;
            order: 1;
            width: 100%;
            max-width: 100%;
          }
          .crew-text-block h3 {
            font-size: 24px !important;
            line-height: 1.1 !important;
          }
          .crew-text-block h4 {
            font-size: 16px !important;
            margin-bottom: 8px !important;
          }
          .crew-text-block p {
            width: 100% !important;
            font-size: 15px !important;
            line-height: 28px !important;
          }
          .crew-dots { justify-content: center; order: 2; }
          .crew-image-block {
            order: 3;
            width: 100%;
            align-items: center;
            justify-content: center;
            height: auto;
            padding-top: 0;
          }
          .crew-image-wrap {
            width: 60vw;
            height: 60vw;
          }
        }
      `}</style>

      <div
        className="crew-page"
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <p
          className="page-header"
          style={{ fontFamily: barlowCondensed.style.fontFamily }}
        >
          <span style={{ color: 'rgba(255,255,255,0.25)', marginRight: '28px' }}>02</span>
          MEET YOUR CREW
        </p>

        <div
          style={{
            opacity,
            transform: `translateX(${translateX}px)`,
            transition: isAnimating || !isDragging.current
              ? 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              : 'none',
            height: '100%',
            width: '100%',
          }}
        >
          <div className="crew-layout">
            <div className="crew-text-block">
              <h4
                style={{
                  fontFamily: bellefair.style.fontFamily,
                  fontSize: '32px',
                  fontWeight: 400,
                  color: 'white',
                  opacity: 0.5042,
                  textTransform: 'uppercase',
                  margin: 0,
                  marginBottom: '18px',
                  letterSpacing: '0px',
                }}
              >
                {member.role}
              </h4>
              <h3
                style={{
                  fontFamily: bellefair.style.fontFamily,
                  fontSize: '56px',
                  fontWeight: 400,
                  color: 'white',
                  textTransform: 'uppercase',
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: '0px',
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontFamily: barlowCondensed.style.fontFamily,
                  fontSize: '18px',
                  lineHeight: '32px',
                  letterSpacing: '1.3px',
                  color: '#d0d6f9',
                  maxWidth: '420px',
                  width: '100%',
                  margin: 0,
                  marginTop: '16px',
                }}
              >
                {member.bio}
              </p>
              <div
                className="crew-dots"
                style={{ display: 'flex', gap: '16px', marginTop: '40px' }}
              >
                {crew.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (isAnimating) return;
                      const direction = i > active ? 1 : -1;
                      changeCrew(i, direction);
                    }}
                    style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '9999px',
                      backgroundColor: i === active ? 'white' : 'rgba(255,255,255,0.17)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="crew-image-block">
              <div className="crew-image-wrap">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  draggable={false}
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}