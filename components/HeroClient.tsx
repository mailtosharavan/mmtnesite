// HeroClient.ts

"use client";
import dynamic from "next/dynamic";
import React from "react";

// dynamic import must live in a client component when using ssr: false
const Hero = dynamic(() => import("./Hero"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] bg-slate-50 rounded-lg flex items-center justify-center">
      <span className="text-slate-500">Loading illustration…</span>
    </div>
  )
});

export default function HeroClient() {
  return <Hero />;
}
