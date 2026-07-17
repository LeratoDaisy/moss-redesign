"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Practice Areas", href: "#practice" },
    { name: "Why Us", href: "#why" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a href="#home" className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Moss & Associates
          </h1>

          <span className="mt-1 w-fit border-t-2 border-amber-500 pt-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">
            Attorneys
          </span>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-slate-700 transition duration-300 hover:text-blue-900 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}

        <a
          href="#contact"
          className="hidden rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-amber-600 md:block"
        >
          Book Consultation
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-900 md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col px-6 py-6">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-100 py-4 font-medium text-slate-700 transition hover:text-blue-900"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-6 rounded-xl bg-amber-500 py-3 text-center font-semibold text-white"
            >
              Book Consultation
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}