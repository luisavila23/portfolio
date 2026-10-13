"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight"
        >
          Luis<span className="text-blue-500">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>

          <a
            href="/cv-luis-avila.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-white transition hover:border-white/20 hover:bg-white/5"
          >
            <Download size={15} />
            CV
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:bg-white/5 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/5 bg-[#09090b]/95 px-6 py-5 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-zinc-400">
            <a
              href="#about"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="transition hover:text-white"
            >
              Contact
            </a>

            <a
              href="/cv-luis-avila.pdf"
              download
              onClick={closeMenu}
              className="flex w-fit items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-white transition hover:bg-white/5"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
