import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaBroadcastTower,
  FaUserFriends,
  FaRobot,
  FaClock,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "Voice Call Services | Voice Broadcasting & Auto Dialer Provider",
  description:
    "Reliable voice call services including large-scale voice broadcasting campaigns and auto dialer systems with live agent connect. Ideal for promotions, alerts, surveys, lead engagement, and ongoing support.",
  keywords:
    "voice call services, voice broadcasting provider, bulk voice calls, auto dialer system, predictive dialing, agent connect dialer, call automation",
  alternates: {
    canonical: "https://www.mindsmiratus.com/voice-call-services",
  },
};

export default function VoiceCallServicesPage() {
  const broadcastFeatures = [
    { icon: <FaBroadcastTower className="text-blue-600 text-3xl" />, title: "Large-Scale Delivery", desc: "Send pre-recorded calls to thousands or millions of recipients." },
    { icon: <FaRobot className="text-blue-600 text-3xl" />, title: "Automated Playback", desc: "Consistent message delivery without manual dialing or agents." },
    { icon: <FaClock className="text-blue-600 text-3xl" />, title: "Schedule Campaigns", desc: "Run campaigns instantly or schedule future broadcasts." },
    { icon: <FaChartLine className="text-blue-600 text-3xl" />, title: "Reports & Delivery Analytics", desc: "Track answered, declined, and callback requests." },
  ];

  const dialerFeatures = [
    { icon: <FaPhoneAlt className="text-cyan-600 text-3xl" />, title: "Auto Dialing", desc: "Automatically dial contact lists without manual calling effort." },
    { icon: <FaUserFriends className="text-cyan-600 text-3xl" />, title: "Agent Connect", desc: "Connect live calls to available agents when recipients answer." },
    { icon: <FaRobot className="text-cyan-600 text-3xl" />, title: "Voicemail Detection", desc: "Detect answering machines and retry or skip as configured." },
    { icon: <FaChartLine className="text-cyan-600 text-3xl" />, title: "Performance Dashboards", desc: "Monitor agent performance and call conversion metrics." },
  ];

  const plans = [
    { name: "Starter", volume: "10,000 Voice Calls / Month", highlight: false },
    { name: "Growth", volume: "100,000+ Voice Calls / Month", highlight: true },
    { name: "Enterprise", volume: "High Volume Custom Campaigns", highlight: false },
  ];

  const faqs = [
    { q: "Can we upload our own audio message?", a: "Yes, upload MP3/WAV or use our text-to-speech studio." },
    { q: "Can campaigns be scheduled?", a: "Yes, schedule campaigns for any date/time or run instantly." },
    { q: "Does the Auto Dialer support multiple agents?", a: "Yes, supports multi-agent call routing and queueing." },
    { q: "Can we target specific regions or customer groups?", a: "Yes, campaigns can be segmented by list or filters." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Voice Call Services
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Run mass voice broadcasting campaigns or automate dialing with live agent connect — all on a secure, cloud-based call infrastructure.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact-mindsmiratus-technologies" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700">
                Request Consultation
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <Image src="/voice-services-hero.svg" alt="Voice Call Services" width={420} height={310} priority />
          </div>
        </div>
      </section>

      {/* VOICE BROADCASTING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image src="/voice-broadcasting.svg" alt="Voice Broadcasting" width={420} height={320} className="w-full max-w-[420px] h-auto object-contain" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Voice Broadcasting Campaigns</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Send pre-recorded voice messages instantly and at scale to your audience — ideal for notifications, promotions, surveys and informational alerts.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {broadcastFeatures.map((f, i) => (
                <div key={i} className="flex gap-3 items-start">
                  {f.icon}
                  <p className="text-slate-700 text-sm">{f.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUTO DIALER */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Auto Dialer with Live Agent Connect</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Automatically dial contact lists and connect answered calls to your team — increasing call throughput and reducing agent idle time.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {dialerFeatures.map((f, i) => (
                <div key={i} className="flex gap-3 items-start">
                  {f.icon}
                  <p className="text-slate-700 text-sm">{f.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/auto-dialer.svg" alt="Auto Dialer Agent Connect" width={420} height={320} className="w-full max-w-[420px] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Pricing Structure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {plans.map((p, i) => (
              <div key={i} className={`p-8 rounded-2xl border shadow-lg ${p.highlight ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white"}`}>
                <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                <p className="text-slate-600 mt-1">{p.volume}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 flex justify-between">{f.q}<span className="text-blue-600">+</span></summary>
                  <div className="px-6 pb-4 text-slate-600">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Start Your Voice Campaign</h2>
            <p className="mb-8 text-lg">We assist with message scripting, targeting strategy and delivery optimization.</p>
            <Link href="/contact-mindsmiratus-technologies" className="px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50">
              Schedule Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
