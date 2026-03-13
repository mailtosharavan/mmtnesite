import Link from "next/link";
import Image from "next/image";
import MultiStepForm from "./MultiStepForm";
import IVRInteractive from "./IVRInteractive";
import RoiCalculator from "./RoiCalculator";
import IndustryBlueprints from "./IndustryBlueprints";

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-cyan-glow/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Headline + Value Prop */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-glow/30 bg-navy-800 text-cyan-glow text-sm font-medium shadow-glow">
              🚀 #1 Cloud IVR for High-Growth Teams
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
              Turn Every Caller Into A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-lg">Happy Customer</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Don't let manual routing slow you down. Automate support, reduce wait times, and sound like a Fortune 500 company instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="#pricing" className="px-8 py-4 rounded-full bg-cyan-glow text-navy-900 font-bold text-lg shadow-glow hover:bg-cyan-400 transition transform hover:-translate-y-1">
                Build My IVR Flow Now
              </Link>
              <Link href="https://wa.me/919625306474" className="px-8 py-4 rounded-full border border-slate-600 text-white font-semibold text-lg hover:border-cyan-glow hover:text-cyan-glow transition flex items-center justify-center gap-2 group">
                <span className="group-hover:animate-pulse">💬</span> Instant Quote via WhatsApp
              </Link>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-6 pt-12 border-t border-navy-700/50 mt-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-navy-800 rounded-lg text-cyan-glow text-2xl">⚡</div>
                <div>
                  <div className="font-bold text-white">99.99% Uptime</div>
                  <div className="text-slate-400 text-sm">Enterprise SLA Guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-navy-800 rounded-lg text-cyan-glow text-2xl">🎧</div>
                <div>
                  <div className="font-bold text-white">HD Voice Clarity</div>
                  <div className="text-slate-400 text-sm">Crystal Clear Calls</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sticky lead capture stack */}
          <aside className="lg:col-span-5 relative">
            <div className="relative z-10 space-y-6">
              <MultiStepForm />
              <div className="block lg:hidden"><IndustryBlueprints /></div>
              <IVRInteractive />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
