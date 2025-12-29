import Image from "next/image";
import Link from "next/link";
import { link } from "node:fs";
import React from "react";
import { FaCheckCircle, FaProjectDiagram, FaUserTie } from "react-icons/fa";


export const metadata = {
  title: "Professional Web Design & Development Solutions by Mindsmiratus",
  description: "Mindsmiratus Technologies is a professional website designing and development company that builds stunning, SEO-optimized websites, powerful web apps, and mobile applications to grow your business.",
  keywords: "website designing, website development, mobile app development, custom business applications, eCommerce website, Mindsmiratus Technologies",

};
export default function WebsiteApplicationDevelopment() {

  const faqs = [
    {
      question: "What is the difference between website designing and website development?",
      answer:
        "Website designing focuses on the visual layout, user experience, and aesthetics, while website development involves coding and backend logic that make the site functional.",
    },
    {
      question: "Do you offer custom website designing services?",
      answer:
        "Yes, we create fully customized website designs tailored to your brand, goals, and audience — ensuring unique layouts, responsive performance, and SEO optimization.",
    },
    {
      question: "Can you develop both web and mobile applications?",
      answer:
        "Absolutely! We specialize in developing both web and mobile apps using the latest technologies like .NET, React, Node.js, Flutter, and React Native.",
    },
    {
      question: "Do you provide post-launch maintenance and support?",
      answer:
        "Yes, we offer ongoing maintenance, updates, and performance optimization to ensure your website and applications remain fast, secure, and up to date.",
    },
    {
      question: "How long does it take to design and develop a website?",
      answer:
        "Project timelines vary based on complexity and requirements. A standard business website typically takes 2–4 weeks, while advanced web apps may take longer.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        " Yes, we can completely redesign and improve your current website for a modern look and better performance.",
    },
    {
      question: "Can you integrate WhatsApp, CRM, or other tools into the website?",
      answer:
        " Yes, we offer WhatsApp Chat Integration, CRM Integration, API Integration, and many custom features based on your business requirements",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <>


      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-sky-50 via-white to-cyan-50">

        {/* Soft Accent Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_35%,rgba(0,160,255,0.18),transparent_60%)]"></div>

        <div className="container relative mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-14">

          {/* LEFT TEXT */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                Website Designing
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-500">
                Application Development
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Your website is more than just an online presence — it’s the face of your business. We create fast, secure, and visually 
              engaging websites that reflect your brand, connect with customers, and drive measurable growth. Mindsmiratus Technologies
               Pvt. Ltd., a Delhi-based top-notch and eminent website designing and development company, is committed as well as pledged to provide the most excellent Web Designing and Development Services in India.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/contact-mindsmiratus-technologies"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold shadow hover:shadow-lg transition-all"
              >
                Get Free Consultation
              </Link>

              <a
                href="#services"
                className="px-7 py-3 rounded-full border border-sky-500 text-sky-600 hover:bg-sky-50 transition-all"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-10 text-slate-600 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-cyan-600 text-xl">✓</span> 12+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-600 text-xl">✓</span> 450+ Projects Delivered
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 relative hidden md:flex justify-center items-center">
            <div className="relative rounded-3xl shadow-xl bg-white/70 backdrop-blur-xl p-4">
              <Image
                src="/hero-webapp.svg"
                alt="Website & Application Development"
                width={560}
                height={420}
                className="object-contain rounded-2xl drop-shadow"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-sky-50">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,rgba(0,150,255,0.08),transparent_60%)]"></div>

        <div className="container relative mx-auto px-6 lg:px-16 max-w-6xl">

          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Why a Professionally Designed Website Matters
          </h2>

          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
            Your website is your digital identity. A modern, high-performing website establishes trust,
            improves customer experience, and drives business growth.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: "⭐",
                title: "Builds Trust & Brand Credibility",
                desc: "A clean, professional look helps customers instantly trust your business.",
              },
              {
                icon: "⚡",
                title: "Improved User Experience",
                desc: "Seamless layouts and smooth navigation encourage visitors to explore more.",
              },
              {
                icon: "📈",
                title: "Better Search Visibility",
                desc: "Well-structured design improves SEO rankings and organic traffic.",
              },
              {
                icon: "💼",
                title: "Drives Leads & Conversions",
                desc: "Clear call-to-actions and funnel-focused layouts convert visitors into customers.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl 
                     shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                     hover:-translate-y-1 transition-all duration-500 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* SERVICES / CAPABILITIES */}
      <section id="services" className="relative overflow-hidden py-24 bg-white from-sky-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-16">

          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Website Designing & Development Services
          </h2>

          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
            We create visually stunning, fast, secure, and scalable websites & applications
            designed to enhance brand presence and drive real business outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "🎨",
                title: "Custom Website Design",
                desc: "Beautiful, responsive, and brand-aligned website designs.",
                link: "/custom-website-design",
                points: [
                  "Creative Layouts & UI/UX",
                  "Mobile Responsive Design",
                  "Brand-Aligned Visual Identity",
                  "SEO-Optimized Structure",
                ],
              },
              {
                icon: "💻",
                title: "Web Application Development",
                desc: "High-performance, secure, and scalable custom applications.",
                link: "/web-application-development",
                points: [
                  ".NET / Node.js / PHP / React / Next.js",
                  "API Integrations",
                  "Role & Access Based Modules",
                  "Secure Cloud Deployment",
                ],
              },
              {
                icon: "📱",
                title: "Mobile App Development",
                desc: "Cross-platform Android & iOS mobile applications.",
                link: "/mobile-app-development",
                points: [
                  "React Native / Flutter",
                  "High-Performance UI Components",
                  "Push Notifications & Offline Sync",
                  "App Store + Play Store Deployment",
                ],
              },
              {
                icon: "🛒",
                title: "eCommerce Website Solutions",
                desc: "Convert visitors into paying customers with optimized storefronts.",
                link: "/ecommerce-website-designing",
                points: [
                  "Custom or Shopify/WooCommerce",
                  "Secure Payments & Checkout",
                  "Inventory & Order Automation",
                  "Sales Analytics Dashboard",
                ],
              },
              {
                icon: "🏢",
                title: "Business Application Development",
                desc: "ERP, CRM, HRMS & workflow systems tailored to your operations.",
                link: "/business-application-development",
                points: [
                  "Custom Business Logic",
                  "Data Security & Role Permissions",
                  "Integrated Workflows",
                  "Scalable Multi-User System",
                ],
              },
              {
                icon: "🛠️",
                title: "Maintenance & Support",
                desc: "Keep your website fast, secure & updated at all times.",
                link: "#",
                points: [
                  "Security Updates & Fixes",
                  "Performance Optimization",
                  "Server Monitoring",
                  "Feature Enhancements",
                ],
              },
            ].map((s, i) => (
              <Link
                href={s.link}
                key={i}
                className="p-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl 
                     shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                     hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-5xl mb-4 text-center">{s.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2 text-center">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 text-center">{s.desc}</p>

                <ul className="text-slate-700 text-sm space-y-2">
                  {s.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="w-2 h-2 mt-1 rounded-full bg-sky-500"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* PROCESS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">

          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Our Website & Application Development Process
          </h2>

          <div className="space-y-8">
            {[
              { step: "01", title: "Requirement Understanding & Planning", desc: "We deeply understand your goals, audience, and business workflow." },
              { step: "02", title: "UI/UX Design & Wireframing", desc: "We design intuitive, engaging interfaces aligned with your brand identity." },
              { step: "03", title: "Development & Integration", desc: "We build secure, scalable, and high-performance web/mobile apps." },
              { step: "04", title: "Testing & Launch", desc: "Rigorous testing ensures flawless performance before going live." },
              { step: "05", title: "Support, Maintenance & Enhancements", desc: "Ongoing improvements to keep your solutions up-to-date and optimized." },
            ].map((step, index) => (
              <div key={index} className="relative pl-16">
                <span className="absolute left-0 top-0 text-3xl font-extrabold text-sky-500 opacity-30">{step.step}</span>
                <h3 className="text-xl font-semibold text-slate-800">{step.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-sky-50 via-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-16">

          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Why Choose Mindsmiratus as Your Development Partner
          </h2>

          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
            We don’t just build websites and applications — we build reliable digital systems that support
            your business growth, customer experience, and operational scale.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                icon: "🧑‍💻",
                title: "Skilled & Experienced Team",
                desc: "Full-stack experts with 10+ years of experience delivering high-quality, scalable digital platforms.",
              },
              {
                icon: "⚡",
                title: "Agile, Clear, and Transparent Process",
                desc: "We follow a structured, collaborative workflow with predictable delivery and weekly progress updates.",
              },
              {
                icon: "🔒",
                title: "Secure & Future-Ready Architecture",
                desc: "We prioritize code quality, maintainability, data security, and long-term scalability.",
              },
              {
                icon: "🔗",
                title: "Seamless Integrations",
                desc: "We connect systems, CRMs, APIs, and external services for unified business flow.",
              },
              {
                icon: "🎯",
                title: "Goal-Driven Approach",
                desc: "Design and development aligned to business outcomes — not just visuals or code output.",
              },
              {
                icon: "🤝",
                title: "End-to-End Support",
                desc: "From planning → build → launch → maintenance — we remain your long-term technology partner.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl
                     shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                     hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Website Solutions for Every Industry
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏥", title: "Healthcare & Clinics", desc: "Appointment systems, patient portals, service pages" },
              { icon: "🏫", title: "Education & Coaching", desc: "Course websites, LMS, student dashboards" },
              { icon: "🛒", title: "eCommerce & Retail", desc: "Online stores, payment gateways, order tracking" },
              { icon: "🏢", title: "Corporate & Consulting", desc: "Company sites, proposal systems, CRMs" },
              { icon: "🚚", title: "Logistics & Services", desc: "Fleet tracking dashboards, service portals" },
              { icon: "🏗️", title: "Real Estate", desc: "Property listing, lead capture, virtual tour integration" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Recent Projects & Case Studies
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Custom CRM for Sales Team
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Improved team productivity and closed deals faster with structured lead workflows.
              </p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• 32% faster lead response time</li>
                <li>• Real-time sales pipeline tracking</li>
                <li>• Fully cloud-accessible dashboard</li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                E-Commerce Website with Payment Gateway
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Designed to convert visitors into recurring buyers through simplified experience.
              </p>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• User-first checkout experience</li>
                <li>• Inventory + Order tracking system</li>
                <li>• 48% increase in retained customers</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST & TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 text-center max-w-5xl">

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Trusted by Businesses Across India & Beyond
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 grayscale hover:grayscale-0 transition mx-auto my-10">
            {["brand1", "brand2", "brand3", "brand4"].map((logo, i) => (
              <Image key={i} src={`/logos/${logo}.png`} alt="Brand Logo" width={120} height={60} className="object-contain" />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 text-left mt-12">
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm">
              <p className="text-slate-700 italic">
                “Our website redesign increased inbound leads significantly. Their communication and delivery were excellent.”
              </p>
              <p className="mt-4 font-semibold text-slate-900">— CEO, IT Consulting Firm</p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm">
              <p className="text-slate-700 italic">
                “They built a clean, fast, and scalable web app exactly as required — highly professional team.”
              </p>
              <p className="mt-4 font-semibold text-slate-900">— Founder, Education Startup</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA + FAQ COMBINED SECTION */}
      <section id="faq" className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-slate-50">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,255,0.15),transparent_60%)]"></div>

        <div className="container relative mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CTA PANEL */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-sky-700 via-cyan-600 to-cyan-500 text-white p-12">

            {/* Soft Glow Accents */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-cyan-300/20 rounded-full blur-[90px]"></div>

            <h2 className="text-3xl font-bold leading-tight mb-4">
              Let’s Build Your Website or App — The Right Way
            </h2>

            <p className="text-lg text-sky-100 mb-10 leading-relaxed">
              Modern UI/UX, scalable engineering, secure infrastructure — built for performance and growth.
            </p>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 text-center mb-10">
              <div className="flex flex-col items-center">
                <FaProjectDiagram className="text-white text-3xl mb-2" />
                <p className="text-3xl font-extrabold">450+</p>
                <p className="text-sm text-sky-100">Projects</p>
              </div>

              <div className="flex flex-col items-center">
                <FaUserTie className="text-white text-3xl mb-2" />
                <p className="text-3xl font-extrabold">12+ Yrs</p>
                <p className="text-sm text-sky-100">Experience</p>
              </div>

              <div className="flex flex-col items-center">
                <FaCheckCircle className="text-white text-3xl mb-2" />
                <p className="text-3xl font-extrabold">98%</p>
                <p className="text-sm text-sky-100">Success</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact-mindsmiratus-technologies"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-sky-700 rounded-full font-semibold 
                     hover:bg-sky-50 transition-all duration-300"
            >
              Request Free Consultation →
            </Link>
          </div>

          {/* RIGHT FAQ PANEL */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 flex justify-between items-center">
                    {faq.question}
                    <span className="text-sky-600 text-2xl group-open:rotate-45 transition">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact-mindsmiratus-technologies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-500 text-white 
                     rounded-full font-semibold hover:shadow-lg transition"
              >
                Still Have Questions? Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
