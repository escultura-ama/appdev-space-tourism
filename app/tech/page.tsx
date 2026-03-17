"use client";
import { Button } from "@/components/ui/button"
import React from "react";
import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";
import { useState, useRef, useCallback } from "react";
import { Divide } from "lucide-react";

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
    className="hidden  z-10 right-0 h-screen backdrop-blur[24px] bg-black/80 fixed text-white px-8 py-8 top-0">

    </div>

{/* Background Image  */}
  <div
    className="bg-tech bg-cover flex flex-col h-screen md:justify-around pt-20 md:pt-28 pb-12 lg:pl-28">

    <div


// Set page contents here
       className="flex text-white tracking-wider barlow-condensed mb-6 md:mb-10 justify-center md:justify-start md:ml-5 md:text-xl lg:pt-12 lg:text-2xl"> 
       <span className="opacity-25 mr-4 font-bold">03</span>
       <p> SPACE LAUNCH 101 </p>
       </div>

      <div className="lg:flex-row lg:flex lg:justify-evenly">
        <div className="my-14 w-full lg:hidden ">
        
        </div>
        <div className="flex flex-col lg:flex-row text-center md:pb-28 lg:pb-0 items-center w-full"> 

        </div>
        <div className="w-full hidden lg:inline-flex justify-end">


        </div>
      </div>



    </div>

   

 
    </>

 
  )
}
