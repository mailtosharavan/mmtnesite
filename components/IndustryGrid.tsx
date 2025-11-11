import React from "react";

const industries = [
  { name: "Retail", blurb: "Unified commerce and inventory management." },
  { name: "Hospitality", blurb: "Booking, POS and guest engagement." },
  { name: "Finance", blurb: "Secure workflows and compliance-ready systems." },
  { name: "Healthcare", blurb: "Patient portals and secure records." },
  { name: "Education", blurb: "LMS, admin portals and student apps." },
  { name: "Logistics", blurb: "Real-time tracking and route optimization." }
];

export default function IndustryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {industries.map((i) => (
        <div key={i.name} className="p-6 bg-white border rounded-lg shadow-sm">
          <div className="text-xl font-semibold">{i.name}</div>
          <div className="mt-2 text-slate-600">{i.blurb}</div>
          <div className="mt-4">
            <a className="text-primary text-sm" href={`/industries#${i.name.toLowerCase()}`}>Explore solutions →</a>
          </div>
        </div>
      ))}
    </div>
  );
}