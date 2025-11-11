import { link } from "node:fs";
import React from "react";



const services = [
  {
    id: "website-apps",
    link:"/website-designing-and-development",
    title: "Website & Application Development",
    subtitle: "Beautiful, fast & maintainable web and mobile apps",
    bullets: [
      "Website Design and Development",
      "eCommerce Website Solutions",
      "Mobile Application Development (Android & iOS)",
      "Custom Web and Mobile Applications for business needs",
    ],
    icon: "code",
  },
  {
    id: "digitization",
    link:"/business-application-development",
    title: "Business Process Digitization",
    subtitle: "Streamline operations, reduce errors and save time",
    bullets: [
      "CRM, Inventory Management, Invoicing, and Lead Management Systems",
      "Custom Workflow Automation",
      "Comprehensive Business Process Transformation",
    ],
    icon: "workflow",
  },
  {
    id: "digital-marketing",
    link:"/digital-marketing-services",
    title: "Digital Marketing & Online Promotion",
    subtitle: "Drive qualified traffic and measurable growth",
    bullets: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM) including Google Ads",
      "Social Media Marketing: Facebook, Instagram, LinkedIn, YouTube",
      "Social Media Optimization (SMO)",
      "Full-Service Digital Marketing Campaigns",
    ],
    icon: "marketing",
  },
  {
    id: "communication",
    link:"/customer-communication-services",
    title: "Customer Communication Services",
    subtitle: "Reliable messaging and voice solutions that scale",
    bullets: [
      "SMS and RCS Messaging Solutions",
      "WhatsApp Business API & Marketing Campaigns",
      "IVR Systems and Voice Broadcasting Services",
    ],
    icon: "communication",
  },
  {
    id: "ecommerce",
    link:"/ecommerce-website-designing",
    title: "E-commerce Suite",
    subtitle: "Retail & Foodservice commerce with POS & analytics",
    bullets: [
      "POS integrations & loyalty",
      "Catalog, pricing & promotions",
      "Analytics, reporting and conversions tracking",
    ],
    icon: "commerce",
  },
  {
    id: "hosting",
    title: "Hosting & IT Support",
    link:"/web-hosting-and-it-support",
    subtitle: "Reliable infrastructure and 24/7 support",
    bullets: [
      "Domains, hosting, email and monitoring",
      "Cloud migration, backups & disaster recovery",
      "Managed servers & performance tuning",
    ],
    icon: "cloud",
  },
];

function SvgIcon({ name }: { name: string }) {
  switch (name) {
    case "workflow":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
          <path d="M3 7h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 7v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 17h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 7v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
          <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "marketing":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
          <path d="M2 12h4l6 8V4L6 12H2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "communication":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "commerce":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
          <path d="M3 6h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 6v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
          <path d="M20 16.58A4.5 4.5 0 0 0 15.5 12H14a4 4 0 1 0-7.9 1.12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 16.58a4.5 4.5 0 0 1-1 1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50"
      aria-label="Our Comprehensive Solutions"
    >
      {/* Decorative top accent */}
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary/80 uppercase tracking-wide">Our Comprehensive Solutions</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Empowering businesses to thrive in the digital era
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Specialized technology and marketing services tailored to fuel growth — from apps and e-commerce to marketing and customer communication.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <article
              key={svc.id}
              className="relative group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 transform-gpu hover:-translate-y-1 focus-within:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="flex-none rounded-xl p-3 shrink-0 ring-1 ring-transparent group-hover:ring-primary/20 transition-all duration-300"
                  aria-hidden
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 text-primary">
                    <SvgIcon name={svc.icon} />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{svc.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{svc.subtitle}</p>
                </div>
              </div>

              {/* bullets */}
              <ul className="mt-4 ml-1 space-y-2 text-sm text-slate-600">
                {svc.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-none mt-1 inline-flex h-3 w-3 rounded-full bg-primary/20 ring-1 ring-primary/10"
                      aria-hidden
                    />
                    <span className="truncate">{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <a
                  href={`${svc.link}`}
                  className="inline-flex items-center gap-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <span className="text-xs inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-500">
                  {/* subtle index badge */}
                  <span className="font-semibold text-slate-700">{idx + 1}</span>
                </span>
              </div>

              {/* decorative corner */}
              <div className="absolute -right-6 -top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden>
                  <circle cx="40" cy="40" r="40" fill="url(#g)" opacity="0.05" />
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0" stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Partner with us to enhance your business performance and digital visibility through tailored technology and marketing strategies.
          </p>
          <div className="mt-6 inline-flex gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white font-semibold shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50 transition"
            >
              Get a free consultation
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
}
