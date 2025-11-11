"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="container flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 md:gap-3">
            <Image
              src="/logo-mindsmiratus.png"
              alt="Mindsmiratus Technologies Pvt. Ltd. Logo"
              width={200}
              height={60}
              className="object-contain w-auto h-12 md:h-14"
              priority
            />
          
         <div className="leading-[1.15] flex flex-col">
              <span className="text-[1.35rem] md:text-[1.55rem] font-semibold text-[#0b2c67]">
                Mindsmiratus
              </span>

              <span className="text-[0.92rem] md:text-[1.05rem] font-medium text-[#0b2c67]">
                Technologies Pvt. Ltd.
              </span>

              <span className="text-[0.72rem] md:text-[0.82rem] text-gray-600">
                Your Partner in Digital Transformation
              </span>
            </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/about" className="text-sm text-slate-700 hover:text-slate-900">About</Link>
          <Link href="/website-designing-and-development" className="text-sm text-slate-700 hover:text-slate-900">Web & Apps</Link>
          <Link href="/digital-marketing-services" className="text-sm text-slate-700 hover:text-slate-900">Digital Marketing</Link>
          <Link href="/customer-communication-services" className="text-sm text-slate-700 hover:text-slate-900">Communication</Link>
          <Link
            href="/contact-mindsmiratus-technologies"
            className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/about" className="text-sm text-slate-700 hover:text-slate-900">About</Link>
            </li>
            <li>
              <Link href="/website-designing-and-development" className="text-sm text-slate-700 hover:text-slate-900">Web & Apps</Link>
            </li>
            <li>
              <Link href="/digital-marketing-services" className="text-sm text-slate-700 hover:text-slate-900">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/customer-communication-services" className="text-sm text-slate-700 hover:text-slate-900">Communication</Link>
            </li>
            <li>
              <Link
                href="/contact-mindsmiratus-technologies"
                className="mt-2 inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
