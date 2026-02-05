import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaBroadcastTower, FaUserFriends, FaRobot, FaClock, FaChartLine, FaCheckCircle, FaHeadset, FaBullhorn, FaShieldAlt } from "react-icons/fa";
import { getServiceSchema } from "../lib/schema/serviceSchema";
import Script from "next/script";
import VoiceLeadForm from "./VoiceLeadForm";
import AudioProof from "./AudioProof";
import { Suspense } from "react";

export const metadata = {
  title: "Premium Voice Call Services | Bulk Voice & Auto Dialer",
  description: "Scale your customer outreach with crystal-clear voice broadcasting and smart auto-dialer solutions by Mindsmiratus. Reach thousands instantly.",
  keywords: "voice call services, bulk voice calls, auto dialer, cloud telephony, voice broadcasting, ivr solutions, sales dialer",
};

export default async function VoiceCallServicesPage() {
  const serviceSchema = await getServiceSchema({
    name: "Voice Call Services",
    description: "Enterprise-grade voice broadcasting and auto-dialer solutions for high-volume customer engagement.",
    slug: "/voice-call-services",
    serviceType: "Voice Broadcasting, Auto Dialer, Cloud Telephony",
    isPartOf: { "@type": "Service", name: "Communication Suite", url: "https://www.mindsmiratus.com/services" },
  });

  const broadcastFeatures = [
    { icon: <FaBroadcastTower className="text-3xl" />, title: "Instant Mass Reach", desc: "Blast pre-recorded voice messages to 100,000+ contacts in minutes. Perfect for alerts, promos, and political campaigns." },
    { icon: <FaRobot className="text-3xl" />, title: "Smart Automation", desc: "Set it and forget it. Schedule campaigns to run automatically at optimal times for maximum pick-up rates." },
    { icon: <FaChartLine className="text-3xl" />, title: "Real-Time Analytics", desc: "Track every call. See who answered, who listened, and who pressed a key—live on your dashboard." },
    { icon: <FaShieldAlt className="text-3xl" />, title: "TRAI & DND Compliant", desc: "We automatically filter DND numbers and ensure all broadcasts adhere to TRAI regulations for strictly legal outreach." },
  ];

  const dialerFeatures = [
    { icon: <FaHeadset className="text-3xl" />, title: "Predictive Dialing", desc: "Maximize agent talk time. Our AI dials ahead and only connects live humans, filtering out answering machines." },
    { icon: <FaUserFriends className="text-3xl" />, title: "Agent Monitoring", desc: "Whisper, barge, or record calls for quality assurance. Train your team in real-time." },
    { icon: <FaPhoneAlt className="text-3xl" />, title: "Click-to-Call", desc: " empower your team with single-click dialing from your CRM. No more manual errors." },
    { icon: <FaClock className="text-3xl" />, title: "Smart Queuing", desc: "Intelligent call routing ensures high-priority leads are connected to your best agents first." },
  ];

  const plans = [
    {
      name: "Starter",
      volume: "10k Calls / Month",
      price: "₹0.25 / call",
      features: ["Basic Reporting", "Web Panel Access", "Email Support", "Standard Routing"],
      highlight: false,
      volValue: "10k"
    },
    {
      name: "Growth",
      volume: "100k+ Calls / Month",
      price: "₹0.22 / call",
      features: ["Advanced Analytics", "API Access", "Priority Support", "IVR Integration", "High Quality CLI"],
      highlight: true,
      volValue: "100k"
    },
    {
      name: "Enterprise",
      volume: "1M+ Calls / Month",
      price: "Custom",
      features: ["Dedicated Server", "White Labeling", "24/7 Account Manager", "SLA Guarantee", "Premium Voice Routes"],
      highlight: false,
      volValue: "1M+"
    },
  ];

  const faqs = [
    { q: "What is the difference between Broadcasting and Auto Dialer?", a: "Broadcasting sends a recorded message to many people at once (one-to-many). An Auto Dialer connects individual calls to live agents for 1-on-1 conversations." },
    { q: "Do you provide DND filtering?", a: "Yes, our system automatically filters DND (Do Not Disturb) numbers to ensure compliance with TRAI regulations." },
    { q: "Can I integrate this with my CRM?", a: "Absolutely. We offer robust APIs and webhooks to integrate seamlessly with Salesforce, Zoho, HubSpot, and custom CRMs." },
    { q: "How fast can I start a campaign?", a: "Instantly. Upload your list, record your message, and hit send. Approval takes less than 15 minutes." },
  ];

  return (
    <>
      <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

        {/* HERO SECTION */}
        <section className="relative py-12 lg:py-20 overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>

          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>

          <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
                  🚀 #1 Choice for High-Volume Calling
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-[1.1] mb-6 tracking-tight">
                  Connect with <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Thousands. Instantly.</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Supercharge your customer engagement with our crystal-clear <strong>Voice Broadcasting</strong> and smart <strong>Auto Dialer</strong>.
                  Reach the right people at the right time.
                </p>

                {/* Trust Badges - Boxed Design */}
                <div className="grid grid-cols-3 gap-4 mb-8 lg:mb-0 max-w-lg mx-auto lg:mx-0">
                  <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/60 border border-white/60 shadow-sm backdrop-blur-sm text-center group hover:bg-white/80 hover:-translate-y-1 transition-all duration-300">
                    <div className="mb-2 text-emerald-600 bg-emerald-100 p-2.5 rounded-full group-hover:scale-110 transition-transform">
                      <FaShieldAlt size={18} />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">TRAI <br className="hidden sm:block" />Compliant</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/60 border border-white/60 shadow-sm backdrop-blur-sm text-center group hover:bg-white/80 hover:-translate-y-1 transition-all duration-300">
                    <div className="mb-2 text-blue-600 bg-blue-100 p-2.5 rounded-full group-hover:scale-110 transition-transform">
                      <FaCheckCircle size={18} />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">99.9% <br className="hidden sm:block" />Uptime</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/60 border border-white/60 shadow-sm backdrop-blur-sm text-center group hover:bg-white/80 hover:-translate-y-1 transition-all duration-300">
                    <div className="mb-2 text-cyan-600 bg-cyan-100 p-2.5 rounded-full group-hover:scale-110 transition-transform">
                      <FaHeadset size={18} />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">24/7 <br className="hidden sm:block" />Support</span>
                  </div>
                </div>
              </div>

              <div id="hero-form" className="relative animate-fade-in lg:mt-0 mt-8">
                {/* Floating Lead Form */}
                <Suspense fallback={<div className="h-[400px] bg-white/50 rounded-3xl animate-pulse"></div>}>
                  <VoiceLeadForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES - GLASS GRID */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Powerful Voice Solutions</h2>
              <p className="text-slate-600">Choose the perfect tool for your campaign. Whether it's mass notifications or personalized sales calls, we have you covered.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Voice Broadcasting */}
              <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/60 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <FaBullhorn size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Voice Broadcasting</h3>
                </div>

                {/* Audio Proof Integration */}
                <div className="mb-8">
                  <AudioProof />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {broadcastFeatures.map((f, i) => (
                    <div key={i} className="space-y-2">
                      <div className={`text - blue - 500 transition - colors ${i === 3 ? 'text-green-500' : ''} `}>{f.icon}</div>
                      <h4 className="font-bold text-slate-800">{f.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Auto Dialer */}
              <div className="p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/60 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    <FaHeadset size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Smart Auto Dialer</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {dialerFeatures.map((f, i) => (
                    <div key={i} className="space-y-2">
                      <div className="text-cyan-500">{f.icon}</div>
                      <h4 className="font-bold text-slate-800">{f.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING - TRANSPARENT CARDS */}
        <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
          {/* Subtle Pricing Background */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>

          <div className="container mx-auto px-6 lg:px-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-4">Detailed & Transparent Pricing</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">No hidden fees. Scale up or down as you need.</p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {plans.map((p, i) => (
                <div key={i} className={`relative p-8 rounded-3xl backdrop-blur-md border transition-all duration-500 flex flex-col group
                  ${p.highlight
                    ? 'bg-gradient-to-b from-white/95 to-blue-50/90 border-blue-300 shadow-blue-200/50 shadow-2xl scale-105 z-10 ring-1 ring-blue-200'
                    : 'bg-white/40 border-white/60 shadow-lg hover:shadow-xl hover:bg-white/60 hover:-translate-y-1'
                  }`}>

                  {p.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/30">
                      Most Popular
                    </div>
                  )}

                  <h3 className={`text-xl font-bold mb-2 ${p.highlight ? 'text-blue-900' : 'text-slate-600'}`}>{p.name}</h3>
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className={`text-4xl font-extrabold ${p.highlight ? 'text-slate-900' : 'text-slate-700'}`}>{p.volume}</span>
                  </div>

                  <div className="space-y-4 flex-grow mb-8">
                    {p.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                        <div className={`p-1 rounded-full ${p.highlight ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-500'}`}>
                          <FaCheckCircle size={10} />
                        </div>
                        {feat}
                      </div>
                    ))}
                  </div>

                  <Link href={`?volume=${p.volValue}#hero-form`} className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 shadow-md hover:shadow-lg
                    ${p.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:scale-[1.02]'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}>
                    Get Price
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - GLASS ACCORDION */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <h2 className="text-4xl font-bold text-slate-800 mb-6">Got Questions? <br /> We have Answers.</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Everything you need to know about setting up your voice campaigns. Can't find the answer?
                </p>
                <Link href="/contact-mindsmiratus-technologies" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                  Chat with our Support team ➔
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-all open:bg-white/90">
                  <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-slate-800 list-none">
                    <span>{f.q}</span>
                    <span className="transform transition-transform group-open:rotate-45 text-blue-500 text-xl">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100/50 pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-12 lg:p-20 text-center overflow-hidden shadow-2xl">
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Scale Your Outreach?</h2>
                <p className="text-lg text-slate-300 mb-10">
                  Join 100+ businesses using Mindsmiratus for their voice campaigns. Setup takes less than 15 minutes.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="#hero-form" className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform shadow-glow">
                    Start Your Campaign
                  </a>
                  <Link href="/contact-mindsmiratus-technologies" className="px-10 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition">
                    Talk to Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Script
        id="structured-data-voice-call-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
