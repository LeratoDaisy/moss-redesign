"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Practice Areas", href: "#practice" },
    { name: "About", href: "#about" },
    { name: "Why Choose Us", href: "#why" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}

        <a href="#home" className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            Moss & Associates
          </h1>

          <span className="mt-1 w-fit border-t-2 border-amber-500 pt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600 sm:text-xs">
            Attorneys
          </span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-slate-700 transition hover:text-blue-900 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}

        <a
          href="#contact"
          className="hidden rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-amber-600 lg:block"
        >
          Book Consultation
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-900 transition hover:bg-slate-100 lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-slate-200 bg-white shadow-xl lg:hidden">
          <nav className="flex flex-col px-6 py-6">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-100 py-5 text-lg font-medium text-slate-700 transition hover:text-blue-900"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-xl bg-amber-500 py-4 text-center font-semibold text-white transition hover:bg-amber-600"
            >
              Book Consultation
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}