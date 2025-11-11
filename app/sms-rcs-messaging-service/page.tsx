import Link from "next/link";
import Image from "next/image";
import {
  FaSms,
  FaBullseye,
  FaChartLine,
  FaClipboardCheck,
  FaHospital,
  FaTruck,
  FaUniversity,
  FaStore,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "SMS & RCS Messaging Service Provider | Transactional OTP & Marketing Messaging",
  description:
    "Enterprise-grade SMS & RCS messaging service for secure OTP delivery, transactional alerts, and promotional campaigns. High deliverability, compliance ready, and scalable API integration.",
  keywords:
    "sms rcs messaging service provider, transactional sms gateway, otp messaging api, promotional sms service, rcs messaging company",
  alternates: {
    canonical: "https://www.mindsmiratus.com/sms-rcs-messaging-service",
  },
};

export default function SmsRcsMessagingServicePage() {
  const features = [
    {
      icon: <FaSms className="text-cyan-600 text-3xl" />,
      title: "Transactional / OTP SMS",
      desc: "Time-sensitive OTP and notification messaging routes with high delivery prioritization.",
    },
    {
      icon: <FaBullseye className="text-cyan-600 text-3xl" />,
      title: "Promotional / Marketing SMS",
      desc: "Targeted promotional outreach with sender ID, segmentation and scheduling controls.",
    },
    {
      icon: <FaClipboardCheck className="text-cyan-600 text-3xl" />,
      title: "RCS Messaging",
      desc: "Enhanced messaging with branding, buttons, rich cards, and interaction responses.",
    },
    {
      icon: <FaChartLine className="text-cyan-600 text-3xl" />,
      title: "Delivery Reporting & Analytics",
      desc: "Track delivery confirmations, message interactions, and performance metrics.",
    },
  ];

  const useCases = [
    { icon: <FaHospital className="text-blue-600 text-3xl" />, label: "Healthcare — Appointment and Reminders" },
    { icon: <FaTruck className="text-blue-600 text-3xl" />, label: "Logistics — Delivery OTP and Status Updates" },
    { icon: <FaUniversity className="text-blue-600 text-3xl" />, label: "Education — Notices and Attendance Alerts" },
    { icon: <FaStore className="text-blue-600 text-3xl" />, label: "Retail — Promotional Offers and Customer Engagement" },
  ];

  const plans = [
    {
      name: "Starter",
      volume: "10,000 Messages / Month",
      details: ["Transactional & Marketing SMS", "Standard Delivery Routes", "Support via Email"],
    },
    {
      name: "Business",
      volume: "100,000 Messages / Month",
      details: ["Priority Delivery Routes", "Advanced Reporting", "Account Management Assistance"],
      highlight: true,
    },
    {
      name: "Enterprise",
      volume: "Custom Volume",
      details: ["Custom Routing Policies", "SLA-backed Uptime", "Dedicated Technical Support"],
    },
  ];

  const faqs = [
    {
      q: "What is the difference between Transactional and Promotional SMS?",
      a: "Transactional SMS is used for essential alerts and OTPs, while Promotional SMS is used for marketing and awareness campaigns.",
    },
    {
      q: "Does RCS require the recipient to have a compatible device?",
      a: "Yes. RCS is supported on Android with compatible network support. If unavailable, messages automatically fall back to standard SMS.",
    },
    {
      q: "Can this service be integrated with applications?",
      a: "Yes. We provide REST APIs, DLT compliance guidance, and delivery report webhooks.",
    },
    {
      q: "Is sender ID support available?",
      a: "Yes. Sender ID registration and template configuration assistance is included.",
    },
    {
      q: "Do you provide delivery tracking?",
      a: "Yes. Delivery status, failure reasons, and performance reports are available.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              SMS & RCS Messaging Service Provider
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Reliable messaging infrastructure for OTP delivery, transactional alerts, and promotional engagement at scale.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact-mindsmiratus-technologies" className="px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700">
                Request Consultation
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <Image   src="/sms-rcs-messaging-service.svg" alt="SMS & RCS Messaging Service"
  width={540}
  height={410}
  className="w-full max-w-[540px] h-auto object-contain"
  priority
/>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Capabilities</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  plan.highlight ? "border-cyan-600 bg-cyan-50" : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 mt-1">{plan.volume}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-700 text-left">
                  {plan.details.map((d, idx) => (
                    <li key={idx} className="flex gap-2">
                      <FaCheckCircle className="text-cyan-600 mt-1" /> {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-mindsmiratus-technologies"
                  className="mt-6 inline-block w-full px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700"
                >
                  Request Pricing
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="border border-slate-200 rounded-2xl bg-white shadow-sm">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 flex justify-between">
                  {f.q}
                  <span className="text-cyan-600">+</span>
                </summary>
                <div className="px-6 pb-4 text-slate-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Implement Secure Messaging?</h2>
        <p className="mb-6 text-lg opacity-90">Speak with our communication solution specialist.</p>
        <Link
          href="/contact-mindsmiratus-technologies"
          className="px-8 py-3 bg-white text-cyan-700 rounded-full font-semibold hover:bg-cyan-50"
        >
          Schedule Discussion
        </Link>
      </section>
    </>
  );
}
