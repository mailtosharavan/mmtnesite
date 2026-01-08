import Link from "next/link";
import Image from "next/image";
import {
  FaShieldAlt, FaBolt, FaCogs, FaChartLine, FaUserShield, FaProjectDiagram, FaCheckCircle,
  FaIndustry, FaRegLightbulb, FaHandsHelping, FaCheckDouble, FaClock,
} from "react-icons/fa";
import { getServiceSchema } from "../lib/schema/serviceSchema";
import Script from "next/script";
export const metadata = {
  title:
    "Business Application Development | ERP, CRM, & Workflow Systems",
  description:
    "We provide Next-Gen Business Applications Development, ERP, CRM, HRMS, and workflow systems that automate tasks, connect data, and provide cloud-ready solutions",
  keywords:
    "business application development, ERP development, CRM development, HRMS development, workflow automation, SaaS development, portals, dashboards",

};


export default async function BusinessApplicationDevelopmentPage() {
  const valueProps = [
    {
      icon: <FaBolt className="text-cyan-600 text-2xl" />,
      title: "Operational Speed",
      desc: "Automate manual workflows and reduce cycle times across teams.",
    },
    {
      icon: <FaChartLine className="text-cyan-600 text-2xl" />,
      title: "Measurable ROI",
      desc: "Track KPIs, adoption, and impact with real-time analytics.",
    },
    {
      icon: <FaUserShield className="text-cyan-600 text-2xl" />,
      title: "Enterprise Security",
      desc: "Role-based access, audit trails, compliance-first architecture.",
    },
    {
      icon: <FaCogs className="text-cyan-600 text-2xl" />,
      title: "Scalable Design",
      desc: "Modular systems ready to grow with your business.",
    },
  ];

  const whatweoffer = [
    { title: "Custom Enterprise Software", desc: "Tailor-made software solutions designed specifically around your company’s processes, requirements, and growth plans." },
    { title: "Internal Tools & Dashboards", desc: "Manage teams, projects, inventory, clients — everything from one central dashboard that gives you complete control." },
    { title: "CRM & ERP Systems", desc: "From customer relationships to resource planning and business analytics — integrated systems to streamline your operations." },
    { title: "Automation & Workflow Management", desc: "Automate repetitive tasks, approvals, notifications, and reports — save time and reduce errors for better efficiency." },
    { title: "Reporting & Data Analytics Modules", desc: "Track performance, generate insights, and make data-driven decisions with real-time dashboards and reports." },
    { title: "Integration with 3rd-Party APIs & Services", desc: "Sync with payment gateways, email platforms, cloud services, payment providers, and other tools you already use." },
  ];

  const benefits = [
    { title: "Single Source of Truth", desc: "Unify data across ERP/CRM/HR to eliminate silos." },
    { title: "Fewer Clicks, More Flow", desc: "Task-driven UI that speeds up daily operations." },
    { title: "Granular Permissions", desc: "Secure access by role, team, geography, or client." },
    { title: "API-First", desc: "Integrate with SAP, Salesforce, Tally, WhatsApp, and more." },
    { title: "Audit & Compliance", desc: "Logs, approvals, e-sign, and retention policies." },
    { title: "Cloud Native", desc: "Autoscaling, backups, and global availability." },
  ];

  const process = [
    { step: "01", title: "Discovery & Mapping", desc: "Workflows, roles, KPIs, and integration inventory." },
    { step: "02", title: "Solution Blueprint", desc: "Data model, permission matrix, and module breakdown." },
    { step: "03", title: "Agile Build", desc: "Iterative sprints with stakeholder demos and UAT." },
    { step: "04", title: "Secure Launch", desc: "Hardening, observability, training, and go-live support." },
    { step: "05", title: "Scale & Evolve", desc: "Roadmap, performance tuning, and new modules." },
  ];

  const capabilities = [
    {
      icon: "🏢",
      title: "ERP Modules",
      points: ["Inventory & Procurement", "Finance & Billing", "Production & QA", "Approvals & Audit"],
    },
    {
      icon: "👥",
      title: "CRM & Sales",
      points: ["Leads & Opportunities", "Pipelines & Quotes", "CPQ & Contracts", "After-Sales Service"],
    },
    {
      icon: "🧑‍💼",
      title: "HRMS",
      points: ["Recruitment & Onboarding", "Attendance & Payroll", "Performance & OKRs", "Self-Service Portals"],
    },
    {
      icon: "🗂️",
      title: "Workflow & Portals",
      points: ["Vendor/Client Portals", "Ticketing & SLA", "Document Management", "e-Sign & E-invoice"],
    },
    {
      icon: "🧩",
      title: "Integrations",
      points: ["SAP / Salesforce / Tally", "Payment / GST / E-Way Bill", "WhatsApp / Email", "SSO & IAM"],
    },
    {
      icon: "🛡️",
      title: "Security & Compliance",
      points: ["RBAC & ABAC", "Audit Trails", "Encryption at Rest/In Transit", "Backups & DR"],
    },
  ];

  const industries = [
    { icon: "🏭", title: "Manufacturing", desc: "Plan, produce, and track with real-time visibility." },
    { icon: "📦", title: "Logistics", desc: "Fleet, routes, and SLA monitoring made simple." },
    { icon: "🧪", title: "Pharma/Healthcare", desc: "Compliance-first workflows and quality control." },
    { icon: "🏗️", title: "Construction", desc: "BOQ, site progress, and contractor management." },
    { icon: "🛍️", title: "Retail & D2C", desc: "Omnichannel orders, inventory, and loyalty." },
    { icon: "💼", title: "Professional Services", desc: "Projects, timesheets, and billing automation." },
  ];

  const caseStudies = [
    {
      tag: "ERP + Production",
      title: "Multi-Plant ERP with Real-Time QA",
      bullets: [
        "Unified inventory across 3 plants; 21% reduction in material holding",
        "Digital QA checklists & NCR workflows; 0 paper trails",
        "Power BI dashboards for OEE, scrap, and downtime",
      ],
      result: "Cycle time down 18% in 4 months",
    },
    {
      tag: "CRM + Portals",
      title: "B2B CRM with Vendor & Client Portals",
      bullets: [
        "Lead-to-cash pipeline with CPQ and contract library",
        "Vendor onboarding, compliance docs, and SLA tracking",
        "Customer portal with tickets, RMAs, and knowledge base",
      ],
      result: "Sales velocity up 27%, churn down 9%",
    },
  ];

  const faqs = [
    {
      q: "What exactly is a business application?",
      a: "A business application is software designed to manage, automate, and streamline company operations — from HR and sales to inventory, reporting, and customer interactions.",
    },
    {
      q: "Can you integrate the application with existing tools, payment gateways or APIs?",
      a: "Yes — we specialize in integrating third-party APIs, payment gateways, email systems, cloud tools, and other services to make your application fully functional and connected.",
    },
    {
      q: "How do you handle security and compliance?",
      a: "RBAC/ABAC, encryption, audit logs, secret management, VPC isolation, backups/DR, and compliance-aligned SDLC are standard.",
    },
    {
      q: "Do you support on-prem as well as cloud?",
      a: "Absolutely. We deploy to AWS/Azure/GCP or on-prem with containerized builds and CI/CD.",
    },
    {
      q: "Why should I invest in a custom application instead of using off-the-shelf software?",
      a: "Off-the-shelf tools often force you to fit your processes around them. A custom application adapts to your existing workflows and scales as your business grows."
    },
  ];
  const serviceSchema = await getServiceSchema({
    name: "Business Application Development Company",
    description:
      "Custom business application development services by Mindsmiratus to build scalable, secure, and high-performance enterprise applications that streamline operations and support business growth.",
    slug: "/business-application-development",
    serviceType:
      "Business Application Development, Custom Business Software, Enterprise Application Development, Web Application Development, SaaS Solutions",

    // 🔗 Parent service relationship
    isPartOf: {
      "@type": "Service",
      name: "Website Designing & Development Services",
      url: "https://www.mindsmiratus.com/website-designing-and-development",
    },
  });


  return (
    <>
      {/* HERO (Visual Right) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight web-h1">
              Transform Your Operations with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                Powerful Business Applications
              </span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Build ERP, CRM, HRMS, portals and workflow systems that streamline
              operations, strengthen security, and deliver measurable ROI. <br></br> From internal tools to full-scale enterprise systems — we build business applications that automate workflows, boost productivity, and help you scale confidently.
            </p>

            {/* Trust metrics with icons */}
            <div className="mt-7 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white/70 border border-slate-200 p-4">
                <FaProjectDiagram className="mx-auto text-cyan-600 text-2xl" />
                <p className="mt-1 text-xl font-bold text-slate-900">320+</p>
                <p className="text-xs text-slate-600">Projects</p>
              </div>
              <div className="rounded-2xl bg-white/70 border border-slate-200 p-4">
                <FaClock className="mx-auto text-cyan-600 text-2xl" />
                <p className="mt-1 text-xl font-bold text-slate-900">11+ yrs</p>
                <p className="text-xs text-slate-600">Experience</p>
              </div>
              <div className="rounded-2xl bg-white/70 border border-slate-200 p-4">
                <FaShieldAlt className="mx-auto text-cyan-600 text-2xl" />
                <p className="mt-1 text-xl font-bold text-slate-900">98%</p>
                <p className="text-xs text-slate-600">Client Success</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/contact-mindsmiratus-technologies"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow hover:shadow-lg transition-all"
              >
                Discuss Your Requirements
              </Link>
              <a
                href="#value"
                className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-600 hover:bg-cyan-50 transition"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 relative hidden md:flex justify-center lg:justify-end">
            <Image src="/powerful-business.png" alt="Professional website designing and web application development" width={560} height={420} className="drop-shadow-xl max-w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section id="value" className="py-18 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl mt-9">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Built for Business Outcomes
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
            In today’s fast-paced business world, efficiency is key to reduce operational drag, and harden security—without compromising usability.
            We design custom business applications that simplify everyday workflows, centralize operations, and give you tools to manage
            your business more smartly. No compromises — just powerful, reliable software tailored to your unique needs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition"
              >
                <div>{v.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-800">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-sm mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Heading with content added */}

      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-white via-slate-50 to-cyan-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            What We Offer – Business Application Solutions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatweoffer.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition"
              >
                <div className="flex items-center gap-2 text-cyan-700 font-semibold">
                  <FaCheckDouble />
                  {b.title}
                </div>
                <p className="text-slate-600 text-sm mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS (Glass Cards) */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-white via-slate-50 to-cyan-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Benefits that Teams Feel Every Day
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition"
              >
                <div className="flex items-center gap-2 text-cyan-700 font-semibold">
                  <FaCheckCircle />
                  {b.title}
                </div>
                <p className="text-slate-600 text-sm mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="container mx-auto px-6 lg:px-16 py-20 bg-white">
        <div className=" mx-auto ">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            Our Process
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Transparent, iterative, and measurable—so you always know what’s next.
          </p>

          <div className="grid lg:grid-cols-5 gap-8">
            {process.map((p, i) => (
              <div key={i} className="relative pl-12">
                <span className="absolute left-0 top-0 text-2xl font-extrabold text-cyan-500/40">
                  {p.step}
                </span>
                <h3 className="text-lg font-semibold text-slate-800">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Business Application Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <div className="text-4xl">{c.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mt-3 mb-2">
                  {c.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {c.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="w-2 h-2 mt-1 rounded-full bg-cyan-500"></span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Back link to parent */}
          <div className="text-center mt-12">
            <Link
              href="/website-designing-and-development"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500 text-cyan-700 hover:bg-cyan-50 transition"
            >
              ← Back to Website Designing & Development
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRY USE CASES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
            Industry Use Cases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, i) => (
              <div
                key={i}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES (Format 1) */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Case Studies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/70 border border-slate-200 shadow hover:shadow-xl transition"
              >
                <div className="inline-flex items-center gap-2 text-cyan-700 font-semibold text-sm mb-3">
                  <FaIndustry />
                  {cs.tag}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {cs.title}
                </h3>
                <ul className="text-sm text-slate-700 space-y-2 mb-4">
                  {cs.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="w-2 h-2 mt-1 rounded-full bg-cyan-500"></span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-semibold text-emerald-700">
                  Result: {cs.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLENDED CTA + FAQ with gradient + icons */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* CTA */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white/10 p-10">
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-white/10 rounded-full blur-2xl"></div>
            <h2 className="text-3xl font-bold mb-3 leading-tight">
              Ready to Build Your Business Application?
            </h2>
            <p className="text-cyan-50 mb-8">
              Get a free solution blueprint with architecture recommendations,
              modules list, and an implementation roadmap.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8 text-center">
              <div>
                <FaRegLightbulb className="mx-auto text-2xl" />
                <p className="text-xl font-extrabold">Plan</p>
                <p className="text-xs opacity-80">Discovery</p>
              </div>
              <div>
                <FaHandsHelping className="mx-auto text-2xl" />
                <p className="text-xl font-extrabold">Build</p>
                <p className="text-xs opacity-80">Agile Sprints</p>
              </div>
              <div>
                <FaShieldAlt className="mx-auto text-2xl" />
                <p className="text-xl font-extrabold">Secure</p>
                <p className="text-xs opacity-80">Harden & Launch</p>
              </div>
            </div>

            <Link
              href="/contact-mindsmiratus-technologies"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-cyan-700 rounded-full font-semibold hover:bg-cyan-50 transition"
            >
              Request Free Blueprint
            </Link>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group border border-white/20 rounded-2xl bg-white/10 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <summary className="px-6 py-4 cursor-pointer font-semibold flex justify-between items-center">
                    <span>{f.q}</span>
                    <span className="text-white text-2xl group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-cyan-50 leading-relaxed border-t border-white/10">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Script
        id="structured-data-business-application-development"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
