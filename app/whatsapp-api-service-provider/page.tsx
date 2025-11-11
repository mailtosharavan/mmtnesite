import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaRobot,
  FaPlug,
  FaShieldAlt,
  FaChartLine,
  FaIndustry,
  FaStore,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "WhatsApp API Service Provider | Official Business Messaging & Automation",
  description:
    "Enterprise-grade WhatsApp Business API messaging for notifications, customer support, chatbots, and automated workflows. Secure, scalable and compliant with verified sender setup.",
  keywords:
    "whatsapp api service provider, whatsapp business api integration, whatsapp chatbot automation, whatsapp messaging gateway, conversational marketing",
  alternates: {
    canonical: "https://www.mindsmiratus.com/whatsapp-api-service-provider",
  },
};

export default function WhatsAppApiServiceProviderPage() {
  const features = [
    {
      icon: <FaWhatsapp className="text-green-600 text-3xl" />,
      title: "Official WhatsApp Business API",
      desc: "Verified templates, branded sender name, secure & compliant setup.",
    },
    {
      icon: <FaRobot className="text-green-600 text-3xl" />,
      title: "Chatbots & Automated Replies",
      desc: "Enable guided conversations to resolve routine queries instantly.",
    },
    {
      icon: <FaPlug className="text-green-600 text-3xl" />,
      title: "CRM & Application Integration",
      desc: "Connect WhatsApp with internal applications via REST APIs & webhooks.",
    },
    {
      icon: <FaChartLine className="text-green-600 text-3xl" />,
      title: "Analytics & Delivery Reporting",
      desc: "Track reads, responses, satisfaction and engagement performance.",
    },
    {
      icon: <FaShieldAlt className="text-green-600 text-3xl" />,
      title: "Secure & Compliant",
      desc: "Data encryption, audit controls and business verification assistance.",
    },
    {
      icon: <FaHeadset className="text-green-600 text-3xl" />,
      title: "Support & Onboarding",
      desc: "End-to-end setup assistance including template approvals.",
    },
  ];

  const useCases = [
    { icon: <FaStore className="text-blue-600 text-3xl" />, label: "Order & Delivery Notifications" },
    { icon: <FaIndustry className="text-blue-600 text-3xl" />, label: "Customer Support & Query Resolution" },
    { icon: <FaRobot className="text-blue-600 text-3xl" />, label: "Lead Qualification & Campaign Follow-ups" },
    { icon: <FaHeadset className="text-blue-600 text-3xl" />, label: "Post-Sale Assistance & Feedback Requests" },
  ];

  const plans = [
    {
      name: "Starter",
      volume: "Up to 5,000 Conversations / Month",
      details: [
        "Verified Sender Setup",
        "Template Approval Guidance",
        "Email Support",
      ],
    },
    {
      name: "Business",
      volume: "20,000+ Conversations / Month",
      details: [
        "Chatbot & Routing Workflows",
        "Advanced Reporting",
        "Account Manager Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      volume: "Custom Scale & SLAs",
      details: [
        "High-volume Session Handling",
        "Integration Engineering Support",
        "Dedicated Success Manager",
      ],
    },
  ];

  const faqs = [
    {
      q: "Is this the official WhatsApp Business API?",
      a: "Yes. We assist in verified onboarding with WhatsApp-approved providers.",
    },
    {
      q: "Can my business use custom chatbots?",
      a: "Yes. You can configure logic-driven flows, FAQs, routing and handover to live agents.",
    },
    {
      q: "Is template approval required?",
      a: "Yes. Marketing and notification templates require approval. We assist with submission.",
    },
    {
      q: "Can I integrate this into my CRM or custom software?",
      a: "Yes. REST APIs and callback events are provided for seamless platform integration.",
    },
    {
      q: "How is pricing determined?",
      a: "WhatsApp follows conversation-based pricing by category. We provide optimized routing plans.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              WhatsApp API Service Provider
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Branded, compliant and automated WhatsApp communication for customer engagement, support and lead interaction.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact-mindsmiratus-technologies" className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700">
                Request Consultation
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <Image src="/whatsapp-api-hero.svg" alt="WhatsApp Business API" width={540} height={410} priority />
          </div>
        </div>
      </section>
{/* Service Overview - Improved Layout */}
<section className="bg-white">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
 {/* Image */}
    <div className="flex justify-center">
      <Image
        src="/whatsapp-message-api-service.svg"   
        alt="WhatsApp Business API Workflow"
        width={420}
        height={320}
        className="w-full max-w-[420px] h-auto object-contain"
        priority
      />
    </div>
    {/* Text */}
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        WhatsApp Business API for Professional Communication
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        The WhatsApp Business API enables organizations to manage customer engagement at scale. 
        It is optimized for secure, verified business communication, automated workflows, 
        and integration with internal systems and CRMs.
      </p>

      <ul className="space-y-3 text-slate-700 text-base">
        <li className="flex gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          Official business verification & template approval support
        </li>
        <li className="flex gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          Multi-agent dashboards and chatbot automation workflows
        </li>
        <li className="flex gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          Secure delivery infrastructure with audit & compliance policies
        </li>
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
                  plan.highlight ? "border-green-600 bg-green-50" : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 mt-1">{plan.volume}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-700 text-left">
                  {plan.details.map((d, idx) => (
                    <li key={idx} className="flex gap-2">
                      <FaCheckCircle className="text-green-600 mt-1" /> {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-mindsmiratus-technologies"
                  className="mt-6 inline-block w-full px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700"
                >
                  Request Pricing
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA Split Section */}
<section className="py-20 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* FAQ Left */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
            >
              <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 flex justify-between items-center">
                {f.q}
                <span className="text-green-600 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="px-6 pb-4 text-slate-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA Right */}
       <div className="bg-gradient-to-r from-yellow-600 to-orange-500 text-white rounded-3xl p-10 shadow-xl text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10">

      {/* Text */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Boost Your Brand Visibility & Lead Growth?
        </h2>
        <p className="text-lg mb-6">
          Let’s build a growth-focused digital marketing strategy customized for your business goals.
        </p>

        <Link
          href="/contact-mindsmiratus-technologies"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-yellow-700 rounded-full font-semibold hover:bg-yellow-50 transition"
        >
          Get Free Strategy Consultation
        </Link>
      </div>

      {/* Icons Group */}
      <div className="flex gap-6">
        <span className="text-white text-5xl animate-bounce delay-75">📈</span>
        <span className="text-white text-5xl animate-bounce delay-150">🚀</span>
        <span className="text-white text-5xl animate-bounce delay-300">🎯</span>
      </div>

    </div>

    </div>
  </div>
</section>

    </>
  );
}
