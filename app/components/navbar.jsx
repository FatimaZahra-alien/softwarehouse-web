"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          SoftwareHouse
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-900">
          <Link href="#home" className="hover:text-accent transition">
            Home
          </Link>
          <Link href="#industries" className="hover:text-accent transition">
            Industries
          </Link>
          <Link href="/training" className="hover:text-accent transition">
            Training
          </Link>
           <Link href="/careers" className="hover:text-accent transition">
           Careers</Link> 
          <Link href="#contact" className="hover:text-accent transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4">
          <Link href="#home" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#industries" onClick={() => setOpen(false)}>Industries</Link>
          <Link href="/training" onClick={() => setOpen(false)}>Training</Link>
           <Link href="/careers" onClick={() => setOpen(false)}>Careers</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
