"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useFloatingActionsContext } from "../context/FloatingActionsContext";

export default function FloatingActions() {
  const { config } = useFloatingActionsContext();

  // DEFAULT VIEW (If no config provided, show original stack)
  if (!config || config.variant === 'default') {
    return (
      <>
        {/* ===== MOBILE (visible) ===== */}
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

  // PILL VARIANT (e.g. for IVR page)
  if (config.variant === 'pill') {
    const action = config.actions[0]; // Assume single action for pill for now
    if (!action) return null;

    return (
      <a href={action.href} target="_blank" rel="noreferrer" className="fixed right-4 bottom-4 z-50">
        <div className={`flex items-center gap-3 px-3 py-2 rounded-full shadow-lg min-h-[44px] ${action.color || 'bg-gradient-to-r from-green-400 to-green-600'}`}>
          {/* Use provided icon or default based on iconName */}
          {action.icon ? action.icon : (
            action.iconName === 'whatsapp' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 .01 5.36.01 12c0 2.12.56 4.16 1.62 5.95L0 24l6.3-1.65A11.95 11.95 0 0012 24c6.63 0 12-5.36 12-12 0-3.2-1.25-6.21-3.48-8.52z" /></svg>
            ) : <MessageCircle className="text-white w-5 h-5" />
          )}
          <span className="hidden md:inline text-white font-semibold">{action.label}</span>
        </div>
      </a>
    );
  }

  return null;
}
