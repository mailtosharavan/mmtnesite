import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaNetworkWired,
  FaHeadset,
  FaRobot,
  FaChartLine,
  FaServer,
  FaCheckCircle,
  FaBuilding,
  FaUserTie,
} from "react-icons/fa";

export const metadata = {
  title: "IVR Service Provider | Call Automation, Routing & Customer Support Systems",
  description:
    "Professional IVR (Interactive Voice Response) solutions for customer support, call routing, automated menus, lead capture, surveys and inbound call handling. Secure, scalable and cloud-based.",
  keywords:
    "ivr service provider, call automation system, inbound call routing, ivr call flow, customer support ivr, cloud ivr solutions",
  alternates: {
    canonical: "https://www.mindsmiratus.com/ivr-service-provider",
  },
};

export default function IvrServiceProviderPage() {
  const features = [
    {
      icon: <FaNetworkWired className="text-blue-600 text-3xl" />,
      title: "Multi-Level Call Routing",
      desc: "Route callers to the right department or agent using structured menu trees.",
    },
    {
      icon: <FaRobot className="text-blue-600 text-3xl" />,
      title: "Automated Voice Menus",
      desc: "Handle repetitive queries automatically without requiring manual agents.",
    },
    {
      icon: <FaHeadset className="text-blue-600 text-3xl" />,
      title: "Agent & Queue Management",
      desc: "Distribute calls based on priority, skill sets or support schedules.",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      title: "Call Analytics & Reports",
      desc: "Monitor call flows, success rates, wait times and customer behavior.",
    },
    {
      icon: <FaServer className="text-blue-600 text-3xl" />,
      title: "CRM & Software Integration",
      desc: "Connect IVR to CRMs, ticketing systems and internal databases with APIs.",
    },
    {
      icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
      title: "Compliance & Reliability",
      desc: "High-availability telephony routing with data and security compliance.",
    },
  ];

  const useCases = [
    { icon: <FaUserTie className="text-cyan-600 text-3xl" />, label: "Customer Support & Call Assistance" },
    { icon: <FaBuilding className="text-cyan-600 text-3xl" />, label: "Corporate Call Reception & Extensions" },
    { icon: <FaRobot className="text-cyan-600 text-3xl" />, label: "Automated Surveys & Feedback Collection" },
    { icon: <FaPhoneAlt className="text-cyan-600 text-3xl" />, label: "Lead Capture & Call Tracking Flows" },
  ];

  const plans = [
    {
      name: "Starter",
      volume: "Up to 5,000 Calls / Month",
      details: [
        "Single-level IVR Menu",
        "Basic Routing & Call Transfer",
        "Email Support",
      ],
    },
    {
      name: "Business",
      volume: "50,000+ Calls / Month",
      details: [
        "Multi-level IVR Menu Trees",
        "Queue Management + Call Recording",
        "Account Manager Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      volume: "Custom Scale & SLA Uptime",
      details: [
        "Advanced Workflows & CRM Integrations",
        "High Availability Infrastructure",
        "Dedicated Telephony Support",
      ],
    },
  ];

  const faqs = [
    {
      q: "Can IVR handle multiple languages?",
      a: "Yes. We support multi-language voice menus and region-specific prompts.",
    },
    {
      q: "Can IVR integrate with my CRM or application?",
      a: "Yes. We support API, webhook and database integrations for workflows.",
    },
    {
      q: "Do I need special hardware?",
      a: "No. Our IVR system is fully cloud-based and works with any phone system.",
    },
    {
      q: "Can calls be recorded?",
      a: "Yes. Call recording and secure storage options are available.",
    },
    {
      q: "What about support and onboarding?",
      a: "We assist with IVR planning, script design, testing, and optimization.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              IVR Service Provider
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Automated call flows, routing and customer support systems designed to improve response efficiency and reduce manual effort.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact-mindsmiratus-technologies" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700">
                Request Consultation
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <Image src="/ivr-service-hero.svg" alt="IVR Service Workflow" width={540} height={410} priority />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/ivr-call-routing.svg"
              alt="IVR Workflow Routing"
              width={520}
              height={420}
              className="w-full max-w-[520px] h-auto object-contain"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Smart Call Routing and Customer Experience Automation
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our IVR platform helps businesses manage large-scale inbound call volumes while ensuring
              callers are directed to the right agent or department efficiently.
            </p>
            <ul className="space-y-3 text-slate-700 text-base">
              <li className="flex gap-2"><FaCheckCircle className="text-blue-600 mt-1" /> Automated query handling and menu prompts</li>
              <li className="flex gap-2"><FaCheckCircle className="text-blue-600 mt-1" /> Reduces wait times and improves support quality</li>
              <li className="flex gap-2"><FaCheckCircle className="text-blue-600 mt-1" /> Works with your current support and telephony systems</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Capabilities</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                {f.icon}
                <h3 className="mt-4 text-lg font-semibold text-slate-800">{f.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Business Use Cases</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {useCases.map((u, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                {u.icon}
                <p className="mt-3 text-slate-700 font-medium">{u.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white" id="pricing">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Pricing Structure</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border shadow-lg ${
                  plan.highlight ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 mt-1">{plan.volume}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-700 text-left">
                  {plan.details.map((d, idx) => (
                    <li key={idx} className="flex gap-2">
                      <FaCheckCircle className="text-blue-600 mt-1" /> {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-mindsmiratus-technologies"
                  className="mt-6 inline-block w-full px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
                >
                  Request Pricing
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <details key={i} className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
                    <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 flex justify-between items-center">
                      {f.q}
                      <span className="text-blue-600 group-open:rotate-45 transition">+</span>
                    </summary>
                    <div className="px-6 pb-4 text-slate-600">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-10 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Need Help Designing Your IVR Flow?</h2>
              <p className="mb-8 text-lg">
                Our team will help define routing logic, menu prompts, call paths and agent distribution.
              </p>
              <Link
                href="/contact-mindsmiratus-technologies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Schedule Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
