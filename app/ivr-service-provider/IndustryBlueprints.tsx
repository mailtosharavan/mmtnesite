"use client";
import { useState } from "react";

export default function IndustryBlueprints() {
  const [industry, setIndustry] = useState("ecommerce");

  const blueprints: Record<string, { title: string, icon: string, steps: string[] }> = {
    ecommerce: {
      title: "E-Commerce Flow",
      icon: "shopping_cart",
      steps: ["Welcome & Language Selection", "Order Status Check (Order ID)", "Returns & Refund Process", "Route to Support / Sales"]
    },
    hospital: {
      title: "Healthcare Routing",
      icon: "local_hospital",
      steps: ["Emergency Direct Connect", "Book / Reschedule Appointment", "Lab Reports (Patient ID)", "Billing & Insurance Dept"]
    },
    startup: {
      title: "Startup & SaaS",
      icon: "rocket_launch",
      steps: ["Office Hours & Location", "Sales (Route to Founder)", "Support Ticket Creation", "Partnership Inquiries"]
    },
    enterprise: {
      title: "Enterprise Grid",
      icon: "business",
      steps: ["VIP & Priority Routing", "Multi-Dept Menu (HR/IT/Admin)", "CRM Screen Pop Integration", "After-Hours Voicemail Logic"]
    }
  };

  const bp = blueprints[industry];

  return (
    <div className="p-6 rounded-2xl bg-navy-900 border border-navy-700 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <span className="material-icons text-9xl text-cyan-glow">{bp.icon}</span>
      </div>

      <div className="relative z-10">
        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Choose Industry Template</h4>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(blueprints).map((k) => (
            <button
              key={k}
              onClick={() => setIndustry(k)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${industry === k ? 'bg-cyan-glow text-navy-900 shadow-glow' : 'bg-navy-800 text-slate-400 hover:bg-navy-700 hover:text-white'}`}
            >
              {k}
            </button>
          ))}
        </div>

        {/* Diagram Visualization */}
        <div className="relative border-l-2 border-dashed border-navy-600 ml-4 pl-8 py-2 space-y-8">
          {bp.steps.map((s, i) => (
            <div key={i} className="relative animate-fade-in-left" style={{ animationDelay: `${i * 100}ms` }}>
              {/* Node Dot */}
              <div className="absolute -left-[39px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-navy-900 bg-cyan-glow shadow-glow z-10"></div>

              {/* Line Connector (except last) */}
              {i !== bp.steps.length - 1 && (
                <div className="absolute left-[8px] top-8 bottom-0 w-[2px] h-8 bg-cyan-glow"></div>
              )}

              <div className="p-4 bg-navy-800 rounded-lg border border-navy-700 flex items-center justify-between group hover:border-cyan-glow/50 transition duration-300">
                <span className="text-white font-medium text-sm">{s}</span>
                <span className="text-cyan-glow opacity-0 group-hover:opacity-100 transition">➔</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="text-xs text-slate-400 hover:text-cyan-glow flex items-center justify-center gap-1 mx-auto transition">
            <span>View Full Architecture</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
