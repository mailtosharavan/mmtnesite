import Link from "next/link";
import Image from "next/image";
import {
  FaGoogle, FaBullseye, FaChartLine, FaClipboardCheck, FaAsterisk,
  FaSearchDollar, FaVideo, FaPlay, FaShoppingCart, FaPhoneAlt,
  FaCheckCircle, FaRocket, FaLayerGroup
} from "react-icons/fa";

export const metadata = {
  title: "Google Ads Services (SEM) | Mindsmiratus Technologies Pvt. Ltd.",
  description:
    "Full-funnel Google Ads (SEM) management: Search, Display, Performance Max, Shopping, YouTube & Call Ads. Strategy, setup, optimization, and ROI tracking.",
  keywords:
    "Google Ads services, SEM services, PPC management, Performance Max, YouTube Ads, Shopping Ads, Search Ads, Display Ads, paid campaigns",
  alternates: {
    canonical: "https://www.mindsmiratus.com/google-ads-services",
  },
};

export default function GoogleAdsServicesPage() {
  const features = [
    { icon: <FaBullseye/>, title: "Goal-Driven Strategy", desc: "Target the right audience with laser-focused intent and clear conversion goals." },
    { icon: <FaClipboardCheck/>, title: "Clean Account Setup", desc: "Structure, keywords, negatives, SKAG/SKAG-lite, assets & tracking done right." },
    { icon: <FaChartLine/>, title: "Continuous Optimization", desc: "Bids, audiences, creatives & landing pages tuned for lower CPL and higher ROAS." },
    { icon: <FaLayerGroup/>, title: "Full-Funnel Coverage", desc: "Search, Display, PMax, Shopping, YouTube & Call Ads working together." },
  ];

  const campaignTypes = [
    { icon: <FaSearchDollar/>, title: "Search Ads", points: ["High-intent leads", "Exact/phrase match strategy", "Ad extensions & assets"] },
    { icon: <FaPlay/>, title: "Display Ads", points: ["Awareness & retargeting", "Contextual & in-market", "Creative testing"] },
    { icon: <FaShoppingCart/>, title: "Shopping / PMax", points: ["Product feeds & GMC", "PMax structure & signals", "ROAS optimization"] },
    { icon: <FaVideo/>, title: "YouTube Ads", points: ["In-stream & shorts", "Top-funnel reach", "View-to-lead orchestration"] },
    { icon: <FaPhoneAlt/>, title: "Call Ads", points: ["Call-only/Call-extension", "Call tracking", "Service verticals"] },
  ];

  const plans = [
    {
      name: "Starter",
      note: "Up to ₹50K ad spend / month",
      bullets: ["Account (re)structure", "Conversion tracking setup", "Weekly optimization & reports"],
      cta: "Get Proposal",
    },
    {
      name: "Growth",
      note: "₹50K–₹5L ad spend / month",
      bullets: ["Multi-campaign strategy (Search+PMax+YT)", "Creative/Audience experiments", "Dedicated manager & bi-weekly review"],
      featured: true,
      cta: "Talk to an Expert",
    },
    {
      name: "Custom",
      note: "> ₹5L or multi-geo",
      bullets: ["Advanced attribution & feeds", "Landing page CRO sprints", "SLA & analytics workshop"],
      cta: "Request Custom Plan",
    },
  ];

  const faqs = [
    { q: "Do you handle full setup and tracking?", a: "Yes. From goals, pixels & enhanced conversions to account structure and launch." },
    { q: "How soon can we see results?", a: "Search campaigns can produce early results within days; compounding gains arrive after enough data & iterations." },
    { q: "Do you work with existing accounts?", a: "Yes. We audit, restructure (if needed), and implement a clean optimization cadence." },
    { q: "What about creative & landing pages?", a: "We provide ad copy/asset variants and CRO recommendations or landing page builds as add-ons." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Google Ads Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                (SEM)
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              End-to-end PPC management across Search, Display, Performance Max, Shopping, YouTube and Call Ads — built to lower CPL and grow ROI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact-mindsmiratus-technologies"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow hover:shadow-lg transition">
                Get Free SEM Audit
              </Link>
              <a href="#pricing"
                className="px-7 py-3 rounded-full border border-cyan-500 text-cyan-600 hover:bg-cyan-50 transition">
                See Plans
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-600 text-sm">
              <span className="inline-flex items-center gap-2"><FaCheckCircle className="text-cyan-600"/> Enhanced Conversions</span>
              <span className="inline-flex items-center gap-2"><FaCheckCircle className="text-cyan-600"/> GA4 + GTM Setup</span>
              <span className="inline-flex items-center gap-2"><FaCheckCircle className="text-cyan-600"/> Clear CPL/ROAS Targets</span>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <Image src="/seo-services-abstract.svg" alt="Google Ads & SEM" width={540} height={410} priority/>
          </div>
        </div>
      </section>

      {/* GOOGLE ADS – WHY IT MATTERS & HOW WE SCALE PROFITABLY */}
<section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-white">
  <div className="container mx-auto px-6 lg:px-16 max-w-6xl">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-6 leading-tight">
      Smarter Campaigns. Faster Growth. Performance You Can Measure.
    </h2>

    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-14 text-lg">
      Google Ads turns active search demand into immediate conversions. We ensure every click,
      keyword, and audience is optimized to maximize ROI with precise targeting and continuous improvements.
    </p>

    <div className="grid lg:grid-cols-2 gap-14">

      {/* Benefits */}
      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          Why Businesses Depend on Google Ads
        </h3>
        <ul className="space-y-3 text-slate-700 text-base">
          {[
            "Instant visibility when customers are searching for your services",
            "Full control over budget, location targeting, and audience intent",
            "Pay only for clicks, making spend efficient and measurable",
            "Real-time data to rapidly refine campaigns and boost conversions",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 items-start">
              <span className="text-cyan-600 mt-1">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Process */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">
          Our Performance-Driven Google Ads Framework
        </h3>

        {[
          {
            step: "01",
            title: "Keyword & Audience Intelligence",
            desc: "We identify commercial-intent keywords and segment audiences based on real buying signals."
          },
          {
            step: "02",
            title: "Conversion Tracking & Clean Structure",
            desc: "We configure GA4 + GTM tracking and build disciplined, scalable campaign architecture."
          },
          {
            step: "03",
            title: "Ad Messaging & Landing Page Alignment",
            desc: "We match search intent to offers and craft high-impact ad creatives that drive clicks and action."
          },
          {
            step: "04",
            title: "Optimization & Budget Scaling",
            desc: "We refine bids, placements, and audience layers to lower CPL and increase ROAS as performance improves."
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


      {/* KEY CAPABILITIES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Key Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition bg-white">
                <div className="mb-3 inline-flex p-3 rounded-full bg-cyan-50 text-cyan-700 text-xl">{f.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{f.title}</h3>
                <p className="text-slate-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN TYPES (Services Grid) */}
      <section id="services" className="py-24 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16">

    <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">
      Our Google Ads Service Capabilities
    </h2>

    <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14 text-lg">
      Data-driven campaign planning and optimization to boost conversions, reduce wasted spend, and maximize ROAS.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {campaignTypes.map((c, i) => (
        <div
          key={i}
          className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 
                     shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
        >
          <div className="text-2xl text-cyan-700">{c.icon}</div>

          <h3 className="text-xl font-semibold text-slate-900 mt-4 mb-2">{c.title}</h3>

          <ul className="space-y-2 text-sm text-slate-700 mt-3">
            {c.points.map((p, idx) => (
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
      <Link
        href="/digital-marketing-services"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500 text-cyan-700 hover:bg-cyan-50 transition"
      >
        ← Back to Digital Marketing Services
      </Link>
    </div>

  </div>
</section>


      {/* PRICING */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Pricing Structure</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-center">
            Fees scale with ad spend & complexity. We align on targets (CPL/ROAS) and iterate with a transparent plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div key={i} className={`p-8 rounded-3xl border ${p.featured ? "border-cyan-400 shadow-2xl" : "border-slate-100 shadow"} bg-white`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                  <span className="text-sm text-cyan-700">{p.note}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2"><FaCheckCircle className="mt-0.5 text-cyan-600"/> {b}</li>
                  ))}
                </ul>
                <Link href="/contact-mindsmiratus-technologies"
                  className={`mt-6 inline-block w-full text-center px-5 py-3 rounded-full font-semibold ${p.featured ? "bg-gradient-to-r from-cyan-600 to-blue-500 text-white" : "border border-cyan-500 text-cyan-600 hover:bg-cyan-50"}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA (premium feel) */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-white">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-start">
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
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

          {/* CTA card with numbers */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-12">
            <div className="grid grid-cols-3 gap-6 mb-8 text-center">
              <div>
                <div className="text-3xl font-extrabold">30%+</div>
                <div className="text-cyan-100 text-sm">Avg. CPL Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">2–4x</div>
                <div className="text-cyan-100 text-sm">ROAS Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">14–30d</div>
                <div className="text-cyan-100 text-sm">Optimization Cycle</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-3">Ready to Scale with Google Ads?</h2>
            <p className="text-lg text-cyan-100 mb-8">
              Get a free SEM audit outlining growth opportunities, wasted spend, and an actionable plan.
            </p>
            <Link
              href="/contact-mindsmiratus-technologies"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-cyan-700 rounded-full font-semibold hover:bg-slate-50 transition"
            >
              Request Free SEM Audit
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Google Ads Services (SEM)",
            provider: { "@type": "Organization", name: "Mindsmiratus Technologies Pvt. Ltd." },
            areaServed: "IN",
            serviceType: ["Google Ads", "SEM", "PPC Management"],
            url: "https://www.mindsmiratus.com/google-ads-services",
          }),
        }}
      />
    </>
  );
}
