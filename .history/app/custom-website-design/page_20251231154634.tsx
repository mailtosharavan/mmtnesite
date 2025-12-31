import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCheckCircle, FaBolt, FaShieldAlt, FaUsersCog, FaCubes, FaClock, FaThumbsUp,
  FaHeadset, FaRocket, FaStar, FaServer, FaCodeBranch, FaQuestionCircle, FaChartLine,
} from "react-icons/fa";
import { getServiceSchema } from "../lib/schema/serviceSchema";
import Script from "next/script";
export const metadata = {
  title:
    "Custom Graphic Designing Services Company | Mindsmiratus",
  description:
    "Get professional graphic design services by Mindsmiratus Technologies – logos, branding, creatives & designs that make your brand stand out.",
  keywords:
    "graphic designing, logo design, Brand logo Designing, Trademark Designing,",

};

export default async function WebsiteApplicationDevelopment() {
  // ----- DATA -----
  const services = [
    {
      icon: "🎨",
      title: "Custom Graphic Design",
      desc: "Beautiful, responsive, and brand-aligned graphic designs.",
      points: [
        "Creative Layouts & UI/UX",
        "Mobile Responsive Design",
        "Brand-Aligned Visual Identity",
        "SEO-Optimized Structure",
      ],
      href: "/website-designing-and-development",
    },
    {
      icon: "💻",
      title: "Web Application Development",
      desc: "High-performance, secure, and scalable custom applications.",
      points: [
        ".NET / Node.js / PHP / React / Next.js",
        "API Integrations",
        "Role & Access Based Modules",
        "Secure Cloud Deployment",
      ],
      href: "/custom-web-application-development",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Cross-platform Android & iOS mobile applications.",
      points: [
        "React Native / Flutter",
        "High-Performance UI Components",
        "Push Notifications & Offline Sync",
        "App Store + Play Store Deployment",
      ],
      href: "/mobile-app-development",
    },
    {
      icon: "🛒",
      title: "eCommerce Website Solutions",
      desc: "Convert visitors into customers with optimized storefronts.",
      points: [
        "Custom or Shopify/WooCommerce",
        "Secure Payments & Checkout",
        "Inventory & Order Automation",
        "Sales Analytics Dashboard",
      ],
      href: "/ecommerce-website-development",
    },
    {
      icon: "🏢",
      title: "Business Application Development",
      desc: "ERP, CRM, HRMS & workflow systems tailored to your operations.",
      points: [
        "Custom Business Logic",
        "Data Security & Role Permissions",
        "Integrated Workflows",
        "Scalable Multi-User System",
      ],
      href: "/business-application-development",
    },
    {
      icon: "🛠️",
      title: "Maintenance & Support",
      desc: "Keep your website fast, secure & updated at all times.",
      points: [
        "Security Updates & Fixes",
        "Performance Optimization",
        "Server Monitoring",
        "Feature Enhancements",
      ],
      href: "/website-maintenance-and-support",
    },
  ];

  const faqs = [
    {
      question:
        "What is the difference between website designing and website development?",
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
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const serviceSchema = await getServiceSchema({
    name: "Custom Website Designing Services Company",
    description:
      "Professional custom website designing services by Mindsmiratus including SEO-optimized website design, custom web application development, and scalable business solutions tailored to unique business needs.",
    slug: "/custom-website-design",
    serviceType:
      "Custom Website Designing, Website Development, Web Application Development, SEO Optimized Websites, Custom Business Applications, eCommerce Website Development",

    // 🔗 Parent relationship (VERY IMPORTANT)
    isPartOf: {
      "@type": "Service",
      name: "Website Designing & Development Services",
      url: "https://www.mindsmiratus.com/website-designing-and-development",
    },
  });


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO — Style B (visual right, premium) */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-sky-50 via-white to-cyan-50">
        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,132,199,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Left — copy */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 bg-white/60 backdrop-blur mb-4">
              <FaRocket className="text-sky-600" />
              <span className="text-sm text-slate-700">
                Design • Develop • Deploy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Creative {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                Graphic Designing Services
              </span>{" "}

              <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                That Build Your Brand Identity
              </span>
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We delivers creative and result-driven graphic designing services that help businesses build a powerful brand identity,
              attract the right audience, and stand
              out in today’s competitive digital world. From logos to complete brand visuals,
              we design everything with creativity and purpose.
            </p>

            {/* Trust metrics with icons */}
            <div className="mt-7 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="rounded-2xl bg-white shadow border border-slate-100 p-4 text-center">
                <FaStar className="mx-auto text-sky-600" />
                <p className="text-xl font-bold text-slate-900 mt-1">4.9/5</p>
                <p className="text-xs text-slate-500">Client Rating</p>
              </div>
              <div className="rounded-2xl bg-white shadow border border-slate-100 p-4 text-center">
                <FaServer className="mx-auto text-sky-600" />
                <p className="text-xl font-bold text-slate-900 mt-1">200+</p>
                <p className="text-xs text-slate-500">Deployments</p>
              </div>
              <div className="rounded-2xl bg-white shadow border border-slate-100 p-4 text-center">
                <FaClock className="mx-auto text-sky-600" />
                <p className="text-xl font-bold text-slate-900 mt-1">11+ yrs</p>
                <p className="text-xs text-slate-500">Experience</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/contact-mindsmiratus-technologies"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold shadow hover:shadow-lg transition-all"
              >
                Get Free Consultation
              </Link>
              <a
                href="#services"
                className="px-6 py-3 rounded-full border border-sky-500 text-sky-600 hover:bg-sky-50 transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right — visual */}
          <div className="flex-1 relative hidden md:flex justify-center lg:justify-end">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-200/30 blur-3xl rounded-full" />
            <Image
              src="/hero-webapp.svg"
              alt="Professional website designing and web application development"
              width={560}
              height={420}
              className="drop-shadow-xl max-w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* BENEFITS — premium look */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            Why Graphic Design Matters
          </h2>
          <p className="text-slate-600 text-center mx-auto mb-14 text-lg">
            Professional graphic design plays a crucial role in shaping how your brand is perceived.
            It’s not just about visuals—it’s about communication, trust, and impact. A well-designed brand
            creates a strong first impression, builds credibility, and helps your business stand out in a competitive market.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Build a consistent and recognizable brand identity",
              "Communicate your message clearly and effectively",
              "Increase trust, credibility, and brand value",
              "Attract and engage the right audience",
            ].map((benefit, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-200/30 blur-2xl rounded-full" />
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">
                    <FaCheckCircle />
                  </span>
                  <p className="text-slate-800">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — upgraded like Digital Marketing cards */}
      <section
        id="services"
        className="relative overflow-hidden py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50"
      >
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Our Graphic Design Services
          </h2>
          <p className="text-slate-600 text-center mx-auto mb-14">
            At Mindsmiratus Technologies, we offer creative and result-driven graphic design services that help businesses 
            build a strong visual identity. Our designs are not only 
            visually appealing but also strategically crafted to communicate your brand message clearly and effectively.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group relative p-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl 
                shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>
                <ul className="text-slate-700 text-sm space-y-2">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="w-2 h-2 mt-1 rounded-full bg-cyan-500"></span>
                      {p}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-2 text-sky-700 text-sm font-semibold">
                  Learn more
                  <FaCodeBranch />
                </span>
              </Link>
            ))}
          </div>

          {/* link back or cross-nav, if needed */}
          <div className="text-center mt-12">
            <Link
              href="/digital-marketing-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500 text-cyan-700 hover:bg-cyan-50 transition"
            >
              Explore Digital Marketing Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — improved with icons & gradient accents */}
      <section className="relative py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Why Choose Mindsmiratus as Your Development Partner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsersCog />,
                title: "Experienced Engineers",
                desc: "Frontend, backend, mobile & DevOps under one roof, shipping reliably.",
              },
              {
                icon: <FaCubes />,
                title: "Modular Architecture",
                desc: "Maintainable codebases with clean boundaries for faster iteration.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Security & Compliance",
                desc: "OWASP-aware builds, least-privilege access and hardened deployments.",
              },
              {
                icon: <FaBolt />,
                title: "Performance Obsessed",
                desc: "Lighthouse-friendly UI and tuned APIs for real speed at scale.",
              },
              {
                icon: <FaHeadset />,
                title: "Clear Communication",
                desc: "Agile sprints, demos, and transparent roadmaps — no surprises.",
              },
              {
                icon: <FaThumbsUp />,
                title: "End-to-End Ownership",
                desc: "From discovery to launch and beyond, we own the outcome.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-sky-600 text-2xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* micro trust row */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { k: "98%", v: "Client Success", i: <FaStar /> },
              { k: "200+", v: "Projects Delivered", i: <FaRocket /> },
              { k: "24x7", v: "Support SLA", i: <FaHeadset /> },
              { k: "A+", v: "Security Grade", i: <FaShieldAlt /> },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 rounded-xl bg-white border border-slate-200 py-3 px-4"
              >
                <span className="text-sky-600">{t.i}</span>
                <div>
                  <p className="text-base font-bold text-slate-900">{t.k}</p>
                  <p className="text-xs text-slate-500">{t.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FAQ — mixed section with gradient & icons */}
      <section className="relative py-24 bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,white_0,transparent_40%),radial-gradient(circle_at_80%_80%,white_0,transparent_40%)]" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 relative">
          {/* Left: CTA card */}
          <div className="relative rounded-3xl bg-white text-slate-900 p-10 shadow-xl">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sky-300/30 blur-2xl rounded-full" />
            <h3 className="text-2xl font-bold mb-2">
              Let’s Build Your Website or App — The Right Way
            </h3>
            <p className="text-slate-600 mb-8">
              Partner with Mindsmiratus for stunning design, clean engineering
              and reliable delivery.
            </p>

            {/* trust metrics with icons */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="rounded-2xl border border-slate-200 p-4 text-center">
                <FaChartLine className="mx-auto text-sky-600" />
                <p className="text-xl font-bold text-slate-900 mt-1">+65%</p>
                <p className="text-xs text-slate-500">Avg. Load Speed Gain</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 text-center">
                <FaShieldAlt className="mx-auto text-sky-600" />
                <p className="text-xl font-bold text-slate-900 mt-1">0 CVEs</p>
                <p className="text-xs text-slate-500">In Latest Audits</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 text-center">
                <FaClock className="mx-auto text-sky-600" />
                <p className="text-xl font-bold text-slate-900 mt-1">On-Time</p>
                <p className="text-xs text-slate-500">Delivery Track</p>
              </div>
            </div>

            <Link
              href="/contact-mindsmiratus-technologies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition"
            >
              Request a Free Quote
            </Link>
          </div>

          {/* Right: FAQs with icons */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group border border-white/30 rounded-2xl bg-white/10 backdrop-blur-sm shadow-sm hover:shadow-md transition"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold flex justify-between items-center">
                  <span className="flex items-center gap-3">
                    <FaQuestionCircle className="text-white/90" />
                    {f.question}
                  </span>
                  <span className="text-white text-2xl group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-white/90 leading-relaxed border-t border-white/20">
                  {f.answer}
                </div>
              </details>
            ))}
            <div className="pt-2">
              <Link
                href="/contact-mindsmiratus-technologies"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sky-700 font-semibold hover:bg-slate-100 transition"
              >
                Still have questions? Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="structured-data-custom-website-designing-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}