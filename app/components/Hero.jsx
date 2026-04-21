"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[url('/images/c.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>






      {/* TOP BAR */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        {/* Brand */}
        <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          SoftwaresHouse
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link href="#industries" className="hover:text-accent transition">
            Industries
          </Link>
          <Link href="/training" className="hover:text-accent transition">
            Training
          </Link>
          <Link href="/careers" className="hover:text-accent transition">
            Careers
          </Link>
          <Link href="#contact" className="hover:text-accent transition">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:contact@softwareshouse.com"
          className="hidden md:inline-flex bg-accent text-white px-5 py-2 rounded-lg font-medium hover:scale-105 transition"
        >
          Request a Proposal
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center
                     rounded-lg border border-white/20 text-white"
          aria-label="Open menu"
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </div>
        </button>
      </header>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-black
                    text-white p-6 transform transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="mb-8 text-white text-2xl"
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="flex flex-col space-y-6 text-lg font-medium">
          <Link href="#industries" onClick={() => setOpen(false)}>
            Industries
          </Link>
          <Link href="/training" onClick={() => setOpen(false)}>
            Training
          </Link>
          <Link href="/careers" onClick={() => setOpen(false)}>
            Careers
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>

        <button className="mt-10 w-full bg-accent text-black py-3 rounded-lg font-medium">
          Get a Quote
        </button>
      </aside>

      {/* HERO CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6
                   grid grid-cols-1 md:grid-cols-2 gap-12 items-center
                   min-h-screen pt-24 md:pt-0"
      >
        {/* LEFT */}
        <div className="text-white space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Software That Scales With Your Business
          </h1>
          <p className="text-lg text-white/90">
            High-performance software, consulting, and training for growing businesses.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/ss.svg"
            alt="Tech illustration"
            width={500}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}
