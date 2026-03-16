"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="top-0 absolute flex justify-between bg-transparent text-white items-center w-full mt-5 md:mt-0 lg:mt-12 z-30">
      <Link href="/" className="mx-5 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 lg:mx-12 cursor-pointer">
        <Image src="/logo.svg" width={56} height={56} alt="Logo" />
      </Link>

      <button
        type="button"
        className="opacity-100 md:hidden mr-5"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <Image
          src={open ? "/icon-close.svg" : "/icon-hamburger.svg"}
          width={32}
          height={32}
          alt={open ? "Close menu" : "Menu"}
          className="cursor-pointer w-8 h-8"
        />
      </button>

      <hr className="w-1/2 h-1 absolute right-[40%] hidden lg:block xl:right-1/4 opacity-25" />

      <div className="md:flex hidden backdrop-blur-[40px] bg-black/60">
        <ul className="text-white tracking-widest flex gap-12 barlow-condensed items-center justify-center py-6 px-8 lg:pr-32 lg:pl-24">
          <li>
            <Link href="/" className="uppercase light hover:text-primaryText hover:underline underline-offset-[26px] transition duration-150 ease-in-out">
              <span className="hidden lg:inline bold">00</span> Home
            </Link>
          </li>
          <li>
            <Link href="/destination" className="uppercase light hover:text-primaryText hover:underline underline-offset-[26px] transition duration-150 ease-in-out">
              <span className="hidden lg:inline bold">01</span> Destination
            </Link>
          </li>
          <li>
            <Link href="/crew" className="uppercase light hover:text-primaryText hover:underline underline-offset-[26px] transition duration-150 ease-in-out">
              <span className="hidden lg:inline bold">02</span> Crew
            </Link>
          </li>
          <li>
            <Link href="/tech" className="uppercase light hover:text-primaryText hover:underline underline-offset-[26px] transition duration-150 ease-in-out">
              <span className="hidden lg:inline bold">03</span> Technology
            </Link>
          </li>
          <li>
            <Link href="/discover" className="uppercase light hover:text-primaryText hover:underline underline-offset-[26px] transition duration-150 ease-in-out">
              <span className="hidden lg:inline bold">04</span> Discover
            </Link>
          </li>
        </ul>
      </div>

      {open ? (
        <div className="absolute right-6 top-full mt-2 w-40 rounded-xl bg-black/70 p-4 backdrop-blur-md md:hidden">
          <Link href="/" className="block py-2 hover:underline" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/destination" className="block py-2 hover:underline" onClick={() => setOpen(false)}>
            Destination
          </Link>
          <Link href="/crew" className="block py-2 hover:underline" onClick={() => setOpen(false)}>
            Crew
          </Link>
          <Link href="/tech" className="block py-2 hover:underline" onClick={() => setOpen(false)}>
            Technology
          </Link>
          <Link href="/discover" className="block py-2 hover:underline" onClick={() => setOpen(false)}>
            Discover
          </Link>
        </div>
      ) : null}
    </nav>
  )
}
