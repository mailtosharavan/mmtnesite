
import Link from "next/link";
import { FaPhoneAlt, FaNetworkWired, FaHeadset, FaRobot, FaChartLine, FaServer, FaCheckCircle, FaBuilding, FaUserTie, } from "react-icons/fa";
import { getServiceSchema } from "../lib/schema/serviceSchema";
import Script from "next/script";
import HeroSection from "./HeroSection";
import IVRFloatingConfig from "./IVRFloatingConfig";
import RoiCalculator from "./RoiCalculator";

export const metadata = {
  title: "IVR Service Provider for Call Automation | Mindsmiratus",
  description:
    "Get IVR (Interactive Voice Response) service for customer support, call routing, automated call handling, and interactive voice menus for higher satisfaction.",
  keywords:
    "ivr service provider, call automation system, inbound call routing, ivr call flow, customer support ivr, cloud ivr solutions",

};

export default async function IvrServiceProviderPage() {
  const features = [
    {
      icon: <FaNetworkWired className="text-cyan-glow text-4xl mb-4" />,
      title: "Multi-Level Call Routing",
      desc: "Route callers to the right department using intelligent logic trees.",
    },
    {
      icon: <FaRobot className="text-cyan-glow text-4xl mb-4" />,
      title: "AI & Automated Menus",
      desc: "Handle repetitive queries automatically with neural voice AI.",
    },
    {
      icon: <FaHeadset className="text-cyan-glow text-4xl mb-4" />,
      title: "Smart Queue Management",
      desc: "Distribute workload with skill-based routing and priority queues.",
    },
    {
      icon: <FaChartLine className="text-cyan-glow text-4xl mb-4" />,
      title: "Real-Time Analytics",
      desc: "Live dashboards for wait times, drop-offs, and agent performance.",
    },
    {
      icon: <FaServer className="text-cyan-glow text-4xl mb-4" />,
      title: "CRM & API Integration",
      desc: "Seamlessly connect with Salesforce, Zoho, HubSpot, and custom DBs.",
    },
    {
      icon: <FaCheckCircle className="text-cyan-glow text-4xl mb-4" />,
      title: "Compliance & Security",
      desc: "Enterprise-grade encryption, call recording storage, and GDPR compliance.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      volume: "Up to 5,000 Calls / Month",
      price: "Ideal for Startups",
      details: ["Single-level IVR Menu", "Basic Call Forwarding", "Email Support", "Standard Reporting"],
    },
    {
      name: "Business",
      volume: "50,000+ Calls / Month",
      price: "Best for Growing Teams",
      details: ["Multi-level Infinite Routing", "Queue Management + Recording", "Dedicated Account Manager", "CRM Integrations"],
      highlight: true,
    },
    {
      name: "Enterprise",
      volume: "Custom Scale",
      price: "Talk to Sales",
      details: ["Custom SLA & Uptime Guarantee", "Private Cloud Deployment", "24/7 Priority Phone Support", "AI Voice Bot Setup"],
    },
  ];

  const faqs = [
    { q: "What is cloud IVR?", a: "Cloud IVR (Interactive Voice Response) is an automated system hosted on the internet that interacts with callers, gathers information, and routes calls to the appropriate recipient." },
    { q: "Can I use my existing number?", a: "Yes! We can port your existing business number or provide new toll-free/local numbers." },
    { q: "Is hardware required?", a: "Zero hardware. Our solution is 100% cloud-based. You just need a computer/phone and internet." },
    { q: "Do you support Hindi/Regional languages?", a: "Absolutely. We support 10+ Indian languages and global major languages with premium text-to-speech." },
  ];

  const serviceSchema = await getServiceSchema({
    name: "IVR Service Provider",
    description: "Premium Cloud IVR and Voice Automation Services by Mindsmiratus Technologies.",
    slug: "/ivr-service-provider",
    serviceType: "IVR Services, Cloud Telephony, Contact Center Solution",
    isPartOf: { "@type": "Service", name: "Customer Communication Services", url: "https://www.mindsmiratus.com/customer-communication-services" },
  });

  return (
    <div className="bg-navy-900 min-h-screen text-slate-300 font-display">
      <HeroSection />

      {/* TRUST STRIP */}
      {/* <div className="border-y border-navy-800 bg-navy-900/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Trusted by Forward-Thinking Brands</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['salesforce', 'hubspot', 'zoho', 'freshworks', 'zendesk'].map(crm => (
              <img key={crm} src={`/crms/${crm}.svg`} alt={crm} className="h-8 w-auto hover:opacity-100 transition" />
            ))}
          </div>
        </div>
      </div> */}

      {/* CAPABILITIES GRID */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Built for <span className="text-cyan-glow">Scale & Speed</span></h2>
            <p className="text-lg text-slate-400">Everything you need to run a world-class contact center without the hardware headaches.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-navy-800 border border-navy-700 hover:border-cyan-glow/50 hover:bg-navy-800/80 transition-all duration-300 hover:-translate-y-2 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center mb-6 group-hover:scale-110 transition border border-navy-700 group-hover:border-cyan-glow/30">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-glow transition">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-navy-900 to-navy-800 border-t border-navy-800">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-slate-400">No hidden fees. Pay as you grow.</p>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((p, i) => (
              <div key={i} className={`relative p-8 rounded-3xl border flex flex-col ${p.highlight ? 'bg-navy-800 border-cyan-glow shadow-glow-lg scale-105 z-10' : 'bg-navy-900 border-navy-700 opacity-90 hover:opacity-100 hover:border-slate-500 transition'}`}>
                {p.highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-glow text-navy-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>}

                <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                <p className="text-cyan-glow font-medium mb-6">{p.volume}</p>
                <div className="text-3xl font-bold text-white mb-8">{p.price}</div>

                <ul className="space-y-4 mb-8 flex-1">
                  {p.details.map((d, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-300">
                      <FaCheckCircle className="text-cyan-glow flex-shrink-0 mt-0.5" /> {d}
                    </li>
                  ))}
                </ul>

                <Link href="/contact-mindsmiratus-technologies" className={`w-full py-4 rounded-xl font-bold text-center transition ${p.highlight ? 'bg-cyan-glow text-navy-900 hover:bg-cyan-400' : 'bg-navy-700 text-white hover:bg-navy-600'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* FAQ & ROI Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Calculate Savings & Learn More</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: ROI Calculator */}
            <div>
              <RoiCalculator />
            </div>

            {/* Right: FAQ */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              {faqs.map((f, i) => (
                <details key={i} className="group bg-navy-800 rounded-2xl border border-navy-700 overflow-hidden">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-white group-hover:text-cyan-glow transition">
                    {f.q}
                    <span className="text-cyan-glow group-open:rotate-45 transition transform text-xl">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-navy-700 pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Calls?</h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">Join hundreds of businesses using Mindsmiratus IVR to deliver exceptional customer experiences.</p>
          <Link href="/contact-mindsmiratus-technologies" className="inline-block px-10 py-4 bg-white text-blue-700 font-bold rounded-full shadow-xl hover:bg-cyan-50 transition transform hover:scale-105">
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <Script id="structured-data-ivr-service-provider" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <IVRFloatingConfig />
    </div>
  );
}
