"use client";
import { useState } from "react";

export default function RoiCalculator() {
  const [callsPerDay, setCallsPerDay] = useState<number>(200);
  const [avgHandleTime, setAvgHandleTime] = useState<number>(6); // minutes
  const [automationPercent, setAutomationPercent] = useState<number>(0.4);
  const costPerHour = 250; // INR per hour placeholder

  const monthlyCalls = Math.max(0, callsPerDay) * 22; // business days
  const savedMinutes = monthlyCalls * avgHandleTime * automationPercent;
  const savedHours = savedMinutes / 60;
  const estimatedSavings = Math.round(savedHours * costPerHour);

  return (
    <div className="p-6 rounded-2xl border border-navy-700 bg-navy-800/80 backdrop-blur-sm text-white shadow-xl hover:shadow-cyan-glow/5 transition-all duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Calculate Your Savings</h3>
        <span className="text-xs text-cyan-glow bg-cyan-glow/10 px-2 py-1 rounded">ROI Tool</span>
      </div>

      <div className="space-y-6">
        {/* Sliders */}
        <div>
          <div className="flex justify-between text-sm mb-2 text-slate-300">
            <label>Daily Calls</label>
            <span className="font-mono text-white">{callsPerDay}</span>
          </div>
          <input
            type="range" min="10" max="1000" step="10"
            className="w-full h-2 bg-navy-900 rounded-lg appearance-none cursor-pointer accent-cyan-glow"
            value={callsPerDay} onChange={(e) => setCallsPerDay(Number(e.target.value))}
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2 text-slate-300">
            <label>Handle Time (mins)</label>
            <span className="font-mono text-white">{avgHandleTime}m</span>
          </div>
          <input
            type="range" min="1" max="30" step="1"
            className="w-full h-2 bg-navy-900 rounded-lg appearance-none cursor-pointer accent-cyan-glow"
            value={avgHandleTime} onChange={(e) => setAvgHandleTime(Number(e.target.value))}
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2 text-slate-300">
            <label>Automation Potential</label>
            <span className="font-mono text-white">{(automationPercent * 100).toFixed(0)}%</span>
          </div>
          <input
            type="range" min="0.1" max="0.9" step="0.1"
            className="w-full h-2 bg-navy-900 rounded-lg appearance-none cursor-pointer accent-cyan-glow"
            value={automationPercent} onChange={(e) => setAutomationPercent(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-navy-900 to-navy-800 rounded-xl border border-navy-700 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-glow/10 blur-[40px] rounded-full group-hover:bg-cyan-glow/20 transition duration-500"></div>
        <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Estimated Monthly Savings</p>
        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
          ₹{estimatedSavings.toLocaleString()}
        </p>
        <p className="text-xs text-slate-500 mt-2">Based on avg agent cost of ₹{costPerHour}/hr</p>
      </div>
    </div>
  );
}
