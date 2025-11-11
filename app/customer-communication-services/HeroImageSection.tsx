/* HeroImageSection.tsx */
 
"use client";

import Image from "next/image";
import { FaSms, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function HeroImageSection() {
  return (
    <div className="flex-1 relative hidden md:flex justify-center items-center">
      {/* Container for image and floating icons */}
      <div className="relative">
        <Image
          src="/hero-customer-communication.svg"
          alt="Customer Communication Services"
          width={550}
          height={400}
          className=" max-w-full h-auto object-contain"
          priority
        />

        {/* Floating service icons */}
        <div className="absolute -top-6 -left-6 animate-float1 bg-cyan-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform">
          <FaSms className="text-2xl" title="SMS & RCS" />
        </div>

        <div className="absolute bottom-10 -right-8 animate-float2 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform">
          <FaWhatsapp className="text-2xl" title="WhatsApp Business" />
        </div>

        <div className="absolute top-1/3 right-0 animate-float3 bg-blue-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform">
          <FaPhoneAlt className="text-2xl" title="IVR & Voice" />
        </div>
      </div>

      {/* Inline keyframes (can be moved to global.css if preferred) */}
      <style jsx>{`
        @keyframes float1 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes float2 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes float3 {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 5s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
