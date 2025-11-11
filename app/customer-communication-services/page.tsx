import Link from "next/link";
import WhyChooseBenefits from "./WhyChooseBenefits";
import ServiceBenefits from "./ServiceBenefits";
import HeroImageSection from "./HeroImageSection";
import { FaSms, FaWhatsapp, FaPhoneAlt,FaQuestionCircle,FaRocket,FaChartLine, FaShieldAlt, FaDatabase, FaHeadset } from "react-icons/fa";



export const metadata = {
  title: "Customer Communication Services | Mindsmiratus Technologies Pvt. Ltd.",
  description:
    "Mindsmiratus Technologies provides professional SMS, RCS messaging, WhatsApp API, IVR, and voice broadcasting services to improve customer communication.",
  keywords:
    "SMS, RCS, WhatsApp API, IVR, Voice Broadcasting, Customer Communication, Mindsmiratus Technologies",
  alternates: {
    canonical: "https://www.mindsmiratus.com/customer-communication-services",
  },
};
 const features = [
    { icon: <FaSms className="text-2xl" />, title: "Bulk SMS (OTP & Marketing)", desc: "High‑throughput SMS with DND handling, templates, and sender IDs." },
    { icon: <FaRocket className="text-2xl" />, title: "RCS Messaging", desc: "Rich cards, images, buttons, and read receipts for interactive campaigns." },
    { icon: <FaWhatsapp className="text-2xl" />, title: "WhatsApp Compatible", desc: "Plan omnichannel flows bridging SMS/RCS with WhatsApp journeys." },
    { icon: <FaPhoneAlt className="text-2xl" />, title: "IVR & Voice Ready", desc: "Trigger voice call follow‑ups and IVR menus from message events." },
    { icon: <FaChartLine className="text-2xl" />, title: "Analytics & DLR", desc: "Track deliveries, clicks, and conversions with exportable reports." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Secure & Compliant", desc: "Robust access control, audit logs, and regional compliance support." },
    { icon: <FaDatabase className="text-2xl" />, title: "Easy APIs", desc: "REST APIs, webhooks, and SDK samples for quick integration." },
    { icon: <FaHeadset className="text-2xl" />, title: "Priority Support", desc: "Solution architects and onboarding assistance when you need it." },
  ];
export default function CustomerCommunicationServicesPage() {
  const faqs = [
    {
      question: "What is RCS messaging?",
      answer:
        "RCS (Rich Communication Services) is an advanced messaging platform that allows sending media, read receipts, and interactive messages.",
    },
    {
      question: "How can WhatsApp API help my business?",
      answer:
        "WhatsApp Business API enables automated customer notifications, chatbots, and personalized campaigns to improve engagement.",
    },
    {
      question: "What is IVR and voice broadcasting?",
      answer:
        "IVR automates phone interactions while voice broadcasting sends pre-recorded messages to multiple recipients efficiently.",
    },
    {
      question: "Do you provide integration support?",
      answer:
        "Yes, our experts help integrate SMS, WhatsApp, and IVR systems with your CRM or existing platforms for smooth operations.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Reliable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                Customer Communication
              </span>{" "}
              Services
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Enhance engagement with SMS, RCS messaging, WhatsApp Business API, IVR, and voice broadcasting solutions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/contact-mindsmiratus-technologies"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow hover:shadow-lg transition-all"
              >
                Get Free Consultation
              </Link>
              <a
                href="#services"
                className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-600 hover:bg-cyan-50 transition"
              >
                Explore Services
              </a>
            </div>
          </div>
<HeroImageSection />          
        </div>
      </section>

      {/* SERVICES */}
     <section id="services" className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16 text-center">
    <h2 className="text-3xl font-bold text-slate-900 mb-4">
      Our Communication Solutions
    </h2>
    <p className="text-slate-600 max-w-2xl mx-auto mb-12">
      Streamline your customer interactions with our SMS, WhatsApp, and IVR services.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
  {
    title: "SMS & RCS Messaging Service",
    link: "/sms-rcs-messaging-service",
    desc: "Send instant, secure and high-engagement messages through SMS and RCS for customer alerts, OTP delivery, and marketing campaigns.",
    icon: <FaSms className="text-6xl text-cyan-500 mb-4 mx-auto" />,
    points: [
      "Transactional SMS (OTP & Alerts)",
      "Promotional / Marketing SMS",
      "Multi-language Support",
      "RCS Rich Media Messaging"
    ],
  },
  {
    title: "WhatsApp Business API",
    link: "/whatsapp-api-service-provider",
    desc: "Automate conversations, notifications, support, and promotions using official WhatsApp Business API.",
    icon: <FaWhatsapp className="text-6xl text-green-500 mb-4 mx-auto" />,
    points: [
      "Automated Notifications",
      "Chatbots & Quick Replies",
      "Rich Media Conversations",
      "CRM & Platform Integration"
    ],
  },
  {
    title: "IVR Call Automation",
    link: "/ivr-service-provider",
    desc: "Automate customer calls using personalized voice menus and call routing systems.",
    icon: <FaPhoneAlt className="text-6xl text-blue-500 mb-4 mx-auto" />,
    points: [
      "Multi-Level IVR Menu",
      "Call Routing & Forwarding",
      "Lead Capture & Call Logs",
      "24/7 Support Automation"
    ],
  },
  {
    title: "Voice Call Broadcasting",
    link: "/voice-call-services",
    desc: "Deliver pre-recorded voice messages to thousands of users simultaneously.",
    icon: <FaPhoneAlt className="text-6xl text-indigo-500 mb-4 mx-auto" />,
    points: [
      "Bulk Voice Calls",
      "Surveys & Poll Campaigns",
      "Auto Dialer Campaigns",
      "Reminder & Alert Calls"
    ],
  }
]
.map((s, i) => (
        <Link
  href={s.link}
  key={i}
  className="group block bg-gradient-to-tr from-white/90 via-white/80 to-white/90 
             rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-500 
             hover:scale-105 border border-slate-100 hover:border-cyan-400"
>
  {s.icon}
  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
    {s.title}
  </h3>
  <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.desc}</p>

  <ul className="text-slate-700 text-sm space-y-2 text-left">
    {s.points.map((point, idx) => (
      <li key={idx} className="relative pl-5">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400"></span>
        {point}
      </li>
    ))}
  </ul>
</Link>
      ))}
    </div>
  </div>
</section>
      {/* FEATURES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Key Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition bg-white">
                <div className="mb-3 inline-flex p-3 rounded-full bg-cyan-50 text-cyan-700">{f.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{f.title}</h3>
                <p className="text-slate-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* WHY CHOOSE & BENEFITS SECTION */}
<WhyChooseBenefits />
  {/* Benefits of Services */}
      <ServiceBenefits />
     {/* FAQ + CTA */}
<section className="py-20 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="flex flex-col lg:flex-row gap-10 items-start">

      {/* FAQ */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <FaQuestionCircle className="text-blue-600" /> Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-slate-800 font-semibold text-lg">
                <span className="flex items-center gap-2">
                  <FaQuestionCircle className="text-blue-400" /> {faq.question}
                </span>
                <span className="text-blue-600 transition group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-4 text-slate-600 leading-relaxed">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-3xl p-10 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center lg:text-left flex items-center gap-3">
          <FaSms className="text-white" /> Ready to Enhance Your Customer Communication?
        </h2>
        <p className="mb-8 max-w-md text-center lg:text-left text-lg">
          Partner with Mindsmiratus Technologies for SMS, WhatsApp, and IVR solutions that engage your customers effectively.
        </p>

        <div className="flex gap-4 mb-6">
          <FaSms className="text-white text-3xl animate-bounce" />
          <FaWhatsapp className="text-white text-3xl animate-bounce delay-150" />
          <FaPhoneAlt className="text-white text-3xl animate-bounce delay-300" />
        </div>

        <Link
          href="/contact-mindsmiratus-technologies"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-cyan-600 rounded-full font-semibold hover:bg-cyan-50 transition"
        >
          Request a Free Quote
        </Link>
      </div>

    </div>
  </div>
</section>
    </>
  );
}
