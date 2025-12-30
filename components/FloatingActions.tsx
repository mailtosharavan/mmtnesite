"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <>
      {/* ===== MOBILE (unchanged, visible) ===== */}
      <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href="https://wa.me/919625306474"
          className="w-14 h-14 flex items-center justify-center
          rounded-full bg-green-500 shadow-xl animate-pulse"
        >
          <MessageCircle className="text-white w-7 h-7" />
        </a>

        <a
          href="tel:+919625306474"
          className="w-14 h-14 flex items-center justify-center
          rounded-full bg-blue-600 shadow-xl"
        >
          <Phone className="text-white w-7 h-7" />
        </a>
      </div>

      {/* ===== DESKTOP / LAPTOP ===== */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-50">
        <div className="flex flex-col gap-3">

          {/* WhatsApp */}
          <a
            href="https://wa.me/919625306474"
            className="w-14 h-14 flex items-center justify-center
            rounded-full bg-green-500 shadow-xl attention-wave"
            aria-label="WhatsApp"
          >
            <MessageCircle className="text-white w-6 h-6" />
          </a>
          

          {/* Call */}
          <a
            href="tel:+919625306474"
            className="w-14 h-14 flex items-center justify-center
            rounded-full bg-blue-600 shadow-xl hover:scale-105 transition"
            aria-label="Call"
          >
            <Phone className="text-white w-6 h-6" />
          </a>

        </div>
      </div>
    </>
  );
}
