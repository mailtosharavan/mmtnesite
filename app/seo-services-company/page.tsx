import Image from "next/image";
import Link from "next/link";
import {FaCheckCircle,FaSearch,FaTools,FaLink,FaMapMarkerAlt,FaGlobe,FaChartLine,
  FaCheckSquare,} from "react-icons/fa";
import { getServiceSchema } from "../lib/schema/serviceSchema";
import Script from "next/script";

export const metadata = {
  title: "SEO Services Company | Boost Rankings, Traffic & Lead Growth",
  description:
    "Boost your online visibility with expert SEO services — keyword research, on-page & off-page SEO, technical audits, by Mindsmiratus to grow organic traffic.",
  keywords:
    "seo services company, seo agency, seo expert services, search engine optimization services, local seo, link building services",
 
};

export default async function SeoServicesCompanyPage() {
  const services = [
    {
      title: "On-Page SEO Optimization",
      desc: "Enhance site structure, content quality, and relevance to match search intent.",
      icon: <FaSearch className="text-3xl text-cyan-600" />,
      points: [
        "Keyword Strategy & Research",
        "Meta Tags & Schema",
        "Content Structure & UX",
        "Internal Linking Strategy",
      ],
    },
    {
      title: "Technical SEO",
      desc: "Fix crawl, index, speed & performance issues for better search visibility.",
      icon: <FaTools className="text-3xl text-cyan-600" />,
      points: [
        "Page Speed Optimization",
        "XML / Robots / Canonical Fixes",
        "Core Web Vitals Optimization",
        "Mobile First Improvements",
      ],
    },
    {
      title: "High-Authority Backlinks",
      desc: "Increase trust and domain authority through safe, relevant link building.",
      icon: <FaLink className="text-3xl text-cyan-600" />,
      points: [
        "Outreach & Guest Posting",
        "Industry Authority Links",
        "Brand Mentions",
        "Anchor Strategy",
      ],
    },
    {
      title: "Local SEO & Google Maps Ranking",
      desc: "Improve visibility for location-based and service-based searches.",
      icon: <FaMapMarkerAlt className="text-3xl text-cyan-600" />,
      points: [
        "Google Business Profile Optimization",
        "Local Citation Management",
        "Review & Rating Strategy",
        "Local Content Optimization",
      ],
    },
    {
      title: "E-Commerce SEO",
      desc: "Drive high-intent product traffic and improve store conversions.",
      icon: <FaGlobe className="text-3xl text-cyan-600" />,
      points: [
        "Product Schema Optimization",
        "Category SEO Structure",
        "Merchant Center Optimization",
        "Conversion Growth Tracking",
      ],
    },
    {
      title: "Monthly Reporting & Strategy",
      desc: "Clear, transparent analytics with progress and next steps.",
      icon: <FaChartLine className="text-3xl text-cyan-600" />,
      points: [
        "Ranking & Traffic Dashboard",
        "Competitor Tracking",
        "Conversion & Lead Insights",
        "Monthly Strategy Review",
      ],
    },
  ];

  const pricing = [
    {
      name: "Starter SEO",
      price: "Best for Local Businesses",
      items: [
        "Up to 10 Keywords",
        "On-Page Optimization",
        "Basic Technical Fixes",
        "Monthly Report",
      ],
    },
    {
      name: "Growth SEO",
      highlight: true,
      price: "Best for Growing Brands",
      items: [
        "30+ Keywords",
        "Technical SEO + Content Strategy",
        "Authority Backlinks Campaign",
        "Monthly Strategy Calls",
      ],
    },
    {
      name: "Enterprise SEO",
      price: "Scalable Enterprise SEO",
      items: [
        "Full Website / Multi-Geo SEO",
        "High Authority Backlinks",
        "Dedicated Success Manager",
        "Custom Reporting Dashboards",
      ],
    },
  ];

  const faqs = [
   {
      q: "What is the difference between SEO and Google Ads?",
      a: "SEO brings long-term, organic traffic without paying per click. Google Ads brings fast results but requires a constant budget. Most businesses get the best results by combining both — SEO for stability, ads for immediate reach."
    },
    {
      q: "What is included in your SEO services?",
      a: "Our SEO services include on-page SEO, off-page SEO, technical SEO, keyword research, content optimization, link building, local SEO, and monthly reporting.",
    },
   {
      q: "Why is SEO important for my business or Webiste?",
      a: "SEO helps your website rank higher on Google, attract organic traffic, build trust, and generate consistent leads without paid advertising."
    },
    {
      q: "How long does SEO take?",
      a: "Initial improvements appear in 8-12 weeks. Strong ranking movement typically takes 3–6 months depending on competition.",
    },
    {
      q: "Do I need SEO if I run ads?",
      a: "Yes. SEO builds long-term, free, recurring traffic. Ads stop when the budget stops. The best growth is SEO + Paid together.",
    },
    
    
  ];
const serviceSchema = await getServiceSchema({
  name: "SEO Services Company",
  description:
    "Expert SEO services by Mindsmiratus including keyword research, on-page SEO, off-page SEO, technical SEO audits, local SEO, and link building to improve rankings, organic traffic, and lead growth.",
  slug: "/seo-services-company",
  serviceType:
    "SEO Services, Search Engine Optimization, Technical SEO, On-Page SEO, Off-Page SEO, Local SEO, Link Building",
});
  return (
    <>

{/* HERO */}
<section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
    
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
        SEO Services to Help Your Customers{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
          Find You First
        </span>
      </h1>

      <p className="mt-6 text-lg text-slate-600 leading-relaxed">
        Get discovered where your customers are searching. Improve rankings, increase
        traffic, and convert more leads with ethical & data-driven SEO. <br></br> Your customers are searching for businesses every day.
 If your website doesn't appear on the first page of Google, you’re losing potential leads and revenue.

      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/contact-mindsmiratus-technologies"
          className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow hover:shadow-lg transition"
        >
          Request Free SEO Audit
        </Link>

        <a
          href="#services"
          className="px-7 py-3 rounded-full border border-cyan-500 text-cyan-600 hover:bg-cyan-50 transition"
        >
          Explore Services
        </a>
      </div>
    </div>

    <div className="hidden lg:flex justify-end">
      <Image src="/seo-services-abstract.png" alt="SEO Services" width={540} height={410} priority />
    </div>
  </div>
</section>

{/* WHY SEO + HOW IT WORKS (Combined Section) */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16 max-w-6xl">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
      Why SEO Matters & How We Drive Results
    </h2>

    <p className="text-slate-600 text-center mx-auto mb-14 text-lg">
      SEO is more than ranking — it ensures your brand is discovered at the exact moment
      customers are searching. We follow a proven approach to build visibility, trust,
      and sustainable growth. <br></br> At Mindsmiratus Technologies, we offer professional Search Engine Optimization (SEO) services that help your brand appear exactly where your audience is looking. Our approach focuses on long-term growth, clean SEO practices, and a strategy tailored to your business goals
    </p>

    <div className="grid lg:grid-cols-2 gap-14">

      {/* Benefits (Why SEO) */}
      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          What SEO Does for Your Business
        </h3>
        <ul className="space-y-3 text-slate-700 text-base">
          {[
            "Improves search visibility & positions your brand above competitors.",
            "Drives high-intent organic traffic that converts better than ads.",
            "Builds trust, credibility, and long-term brand recognition",
            "Reduces dependency on paid advertising.",
            "Sustainable results built on white-hat strategies not shortcuts.",
            "SEO brings quality leads & conversions, not just traffic numbers.",
            "Long-Term Business Growth.",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 items-start">
              <FaCheckSquare className="text-cyan-600 mt-1" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Process (How SEO Works) */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          Our SEO Growth Process
        </h3>

        {[
          {
            step: "01",
            title: "Research & Competitor Insights",
            desc: "We identify search opportunities and define a clear ranking strategy."
          },
          {
            step: "02",
            title: "On-Page & Technical Optimization",
            desc: "We optimize structure, speed, metadata, indexability, and page quality."
          },
          {
            step: "03",
            title: "Content Strategy & Authority Building",
            desc: "We create relevant content and acquire quality backlinks to build trust."
          },
          {
            step: "04",
            title: "Measurement & Continuous Improvement",
            desc: "We monitor ranking trends, traffic growth, and conversion impact."
          },
        ].map((item, i) => (
          <div key={i} className="relative pl-14">
            <span className="absolute left-0 top-0 text-2xl font-extrabold text-cyan-500 opacity-30">
              {item.step}
            </span>
            <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
            <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
          </div>
        ))}

      </div>

    </div>

  </div>
</section>


{/* SERVICES */}
<section id="services" className="py-24 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">
      Our SEO Service Capabilities
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((s, i) => (
        <div
          key={i}
          className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 
                     shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
        >
          {s.icon}
          <h3 className="text-xl font-semibold text-slate-900 mt-4 mb-2">{s.title}</h3>
          <p className="text-slate-600 text-sm mb-4">{s.desc}</p>

          <ul className="space-y-2 text-sm text-slate-700">
            {s.points.map((p, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 mt-1"></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    {/* link back to parent Digital Marketing page */}
          <div className="text-center mt-12">
            <Link href="/digital-marketing-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500 text-cyan-700 hover:bg-cyan-50 transition">
              ← Back to Digital Marketing Services
            </Link>
          </div>
  </div>
</section>

{/* INDUSTRY USE CASES */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      SEO Use Cases Across Industries
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: "🏥", title: "Healthcare & Clinics", desc: "Rank for treatment searches and increase appointment bookings." },
        { icon: "🏫", title: "Education & Coaching", desc: "Increase inquiries for courses, training, and admissions." },
        { icon: "🛒", title: "E-Commerce Stores", desc: "Grow organic product visibility and drive sales." },
        { icon: "🏨", title: "Hotels & Travel", desc: "Capture search traffic for packages and travel interests." },
        { icon: "💼", title: "B2B & IT Services", desc: "Rank for buyer-intent decision keywords." },
        { icon: "🏗️", title: "Real Estate", desc: "Rank for location + property focused lead keywords." },
      ].map((item, i) => (
        <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
          <p className="text-slate-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* PRICING */}
<section className="py-24 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16 text-center">
    <h2 className="text-3xl font-bold text-slate-900 mb-12">Flexible SEO Plans</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricing.map((p, i) => (
        <div
          key={i}
          className={`p-8 rounded-3xl border shadow-lg ${
            p.highlight ? "border-cyan-600 bg-cyan-50 shadow-xl scale-105" : "border-slate-200 bg-white"
          }`}
        >
          <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
          <p className="text-slate-600 mt-1 text-sm">{p.price}</p>
          <ul className="mt-6 space-y-2 text-left text-slate-700 text-sm">
            {p.items.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <FaCheckCircle className="text-cyan-600 mt-1" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/contact-mindsmiratus-technologies"
            className="mt-6 inline-block w-full px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
          >
            Request Pricing
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ + CTA */}
<section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-start">

    {/* FAQ */}
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details 
            key={i} 
            className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 flex justify-between items-center">
              {f.q}
              <span className="text-cyan-600 text-2xl group-open:rotate-45 transition">+</span>
            </summary>
            <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-12">

      {/* Decorative Glow */}
      <div className="absolute -bottom-8 -right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl"></div>

      <h2 className="text-3xl font-bold mb-4 leading-tight">
        Ready to Improve Your Rankings?
      </h2>
      <p className="text-lg text-cyan-100 mb-10">
        Get a free SEO audit outlining growth opportunities, ranking improvements, and keyword strategy.
      </p>

      {/* Mini Trust Metrics */}
      <div className="grid grid-cols-3 gap-6 mb-10 text-center">
        <div>
          <p className="text-3xl font-extrabold">320+</p>
          <p className="text-sm text-cyan-100">Projects</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold">11+ Yrs</p>
          <p className="text-sm text-cyan-100">Experience</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold">98%</p>
          <p className="text-sm text-cyan-100">Client Success</p>
        </div>
      </div>

      <Link
        href="/contact-mindsmiratus-technologies"
        className="inline-flex items-center gap-2 px-7 py-3 bg-white text-cyan-700 rounded-full font-semibold hover:bg-cyan-50 transition"
      >
        Request Free SEO Audit
      </Link>
    </div>

  </div>
</section>
<Script
        id="structured-data-seo-services-company"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
