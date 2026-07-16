"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Moss & Associates
          </h1>
          <p className="text-sm text-slate-600">Attorneys</p>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <li><a href="#home" className="hover:text-yellow-600">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-600">About</a></li>
          <li><a href="#practice" className="hover:text-yellow-600">Practice Areas</a></li>
          <li><a href="#why" className="hover:text-yellow-600">Why Us</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-yellow-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-yellow-700 md:block"
        >
          Book Consultation
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#practice">Practice Areas</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}