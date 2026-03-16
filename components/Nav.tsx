"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="site-nav px-6 md:px-10">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" width={56} height={56} alt="Logo" />
      
      </Link>

      <div className="hidden md:flex gap-6 text-sm">
        <Link href="#destinations" className="hover:underline">
          Destinations
        </Link>
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </div>

      <button
        type="button"
        className="md:hidden"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <Image
          src={open ? "/icon-close.svg" : "/icon-hamburger.svg"}
          width={24}
          height={24}
          alt={open ? "Close menu" : "Open menu"}
        />
      </button>

      {open ? (
        <div className="absolute right-6 top-full mt-2 w-40 rounded-xl bg-black/70 p-4 backdrop-blur-md md:hidden">
          <Link href="#destinations" className="block py-2 hover:underline" onClick={() => setOpen(false)}>
            Destinations
          </Link>
          <Link href="#about" className="block py-2 hover:underline" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="#contact" className="block py-2 hover:underline" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      ) : null}
    </nav>
  )
}
