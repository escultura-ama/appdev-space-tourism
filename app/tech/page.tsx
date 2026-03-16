import { Button } from "@/components/ui/button"
import React from "react";

export default function Tech() {
  return (
    <>
 
    {/* Navigation Bar */}
    <nav
    className="top-0 absolute flex justify-between bg-transparent text-white items-center w-full mt-5 md:mt-0 lg:mt-12 z-30">
      <div
      className="mx-5 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 lg:mx-12 cursor-pointer>">
        
      </div>
    </nav>

    <div
    className="hidden  z-10 right-0 h-screen backdrop-blur-[24px] bg-black/80 fixed text-white px-8 py-8 top-0">

    </div>

{/* Background Image  */}
  <div
    className="bg-tech-mobile md:bg-tech-tablet lg:bg-tech-desktop bg-cover flex flex-col h-screen md:justify-around pt-20 md:pt-28 pb-12 lg:pl-28">

    <div
       className="flex text-white tracking-wider barlow-condensed mb-6 md:mb-10 justify-center md:justify-start md:ml-5 md:text-xl lg:pt-12 lg:text-2x1"> 
       <span className="opacity-25 mr-4 bold">03</span>
       <p> SPACE LAUNCH 101 </p>
       </div>

    </div>

   

 
    </>

 
  )
}
