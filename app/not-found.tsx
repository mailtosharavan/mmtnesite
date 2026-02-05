import Link from "next/link";
import { FaHome, FaSearch, FaBriefcase, FaEnvelope, FaExclamationTriangle } from "react-icons/fa";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-slate-50 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center p-4 bg-red-50 text-red-500 rounded-full mb-6 shadow-sm">
          <FaExclamationTriangle size={32} />
        </div>

        <h1 className="text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Page Not Found</h2>

        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            <FaHome /> Back to Home
          </Link>
          <Link
            href="/contact-mindsmiratus-technologies"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
          >
            <FaEnvelope /> Contact Support
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/60">
          <p className="text-slate-500 text-sm mb-4 font-medium uppercase tracking-wider">Helpful Links</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link href="/voice-call-services" className="text-blue-600 hover:text-blue-800 hover:underline">Voice Services</Link>
            <span className="text-slate-300">•</span>
            <Link href="/ivr-service-provider" className="text-blue-600 hover:text-blue-800 hover:underline">IVR Solutions</Link>
            <span className="text-slate-300">•</span>
            <Link href="/whatsapp-api-service-provider" className="text-blue-600 hover:text-blue-800 hover:underline">WhatsApp API</Link>
          </div>
        </div>
      </div>
    </div>
  );
}