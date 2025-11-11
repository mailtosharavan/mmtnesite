import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaUsers, FaBolt, FaHandshake, FaComments, FaChartLine, FaStar } from "react-icons/fa";
import TypeWriter from "../../components/TypingText";

export const metadata = {
  title: "Influencer Marketing Services | Creators, UGC & Brand Campaigns",
  description:
    "Influencer marketing campaigns that build trust, amplify brand voice, and drive authentic engagement. UGC creators, micro-influencers, macro, celebrity partnerships.",
  alternates: {
    canonical: "https://www.mindsmiratus.com/influencer-marketing",
  },
};

export default function InfluencerMarketingPage() {

  const services = [
    {
      icon: <FaHandshake className="text-3xl text-cyan-600" />,
      title: "Influencer Discovery & Matchmaking",
      desc: "Identify creators that genuinely align with your brand identity.",
      points: [
        "Audience fit & relevance",
        "Authenticity check (non-bot followers)",
        "Platform suitability evaluation",
        "Brand value alignment",
      ],
    },
    {
      icon: <FaUsers className="text-3xl text-cyan-600" />,
      title: "Creator Outreach & Negotiation",
      desc: "We handle all communication, collaboration, and relationship management.",
      points: [
        "Engagement terms & usage rights",
        "Content scheduling",
        "Contract & deliverables",
        "Payment coordination",
      ],
    },
    {
      icon: <FaComments className="text-3xl text-cyan-600" />,
      title: "Campaign Content Management",
      desc: "Ensure creator content matches storytelling, tone, and marketing goals.",
      points: [
        "Briefing & creative direction",
        "Reels / Posts / Stories / Shorts",
        "UGC Content Production",
        "Quality & messaging review",
      ],
    },
    {
      icon: <FaBolt className="text-3xl text-cyan-600" />,
      title: "Viral & Buzz Strategy Execution",
      desc: "Create momentum, participation and conversation around your brand.",
      points: [
        "Hashtag & trend participation",
        "Challenge & hook frameworks",
        "Timed asset release waves",
        "Conversation seeding",
      ],
    },
    {
      icon: <FaStar className="text-3xl text-cyan-600" />,
      title: "Brand Reputation + Advocacy",
      desc: "Convert one-time posts into long-term brand champions.",
      points: [
        "Ambassador Program Setup",
        "Collaborative content series",
        "Creator loyalty engagement",
        "Community presence building",
      ],
    },
    {
      icon: <FaChartLine className="text-3xl text-cyan-600" />,
      title: "Performance Tracking & ROI Attribution",
      desc: "Transparent reporting across reach, engagement & conversions.",
      points: [
        "Campaign analytics dashboard",
        "Audience shift insights",
        "Engagement & conversion scoring",
        "Quarterly scale-up roadmap",
      ],
    },
  ];

  const pricing = [
    {
      name: "Micro Influencer Campaign",
      price: "Best for emerging D2C brands",
      items: [
        "5–15 Micro Influencers",
        "Content + Story Posting",
        "Brand Mentions & Audience Push",
        "Monthly Performance Report",
      ],
    },
    {
      name: "Growth Campaign",
      highlight: true,
      price: "For fast-scaling consumer brands",
      items: [
        "30+ Creators (Micro + Mid-tier)",
        "Reels + Shorts + Live Collabs",
        "UGC Content Library",
        "Strategy & Analytics Call",
      ],
    },
    {
      name: "Celebrity / Macro Campaign",
      price: "High visibility brand awareness",
      items: [
        "Top Creator / Macro Influencer",
        "Press + Social + Community Spread",
        "Contract & Deliverable Management",
        "Brand Reputation Monitoring",
      ],
    },
  ];

  const faqs = [
    {
      q: "How do you choose influencers?",
      a: "We evaluate authenticity, audience relevance, engagement quality, tone fit, and past brand collaborations.",
    },
    {
      q: "Do you manage the influencer directly?",
      a: "Yes. Outreach, communication, contracts, revisions, approvals, coordination — fully handled.",
    },
    {
      q: "How do you measure ROI?",
      a: "Through engagement uplift, attribution tracking, audience shift metrics, and conversion-based scoring.",
    },
  ];

  return (
    <>

{/* HERO */}
<section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
        Influencer Marketing Services
      </h1>

      <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-md">
        Partner with creators your audience already trusts — to build credibility, reach, and real engagement.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/contact-mindsmiratus-technologies"
          className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow hover:shadow-lg transition"
        >
          Request Influencer Strategy
        </Link>

        <a
          href="#services"
          className="px-7 py-3 rounded-full border border-cyan-500 text-cyan-600 hover:bg-cyan-50 transition"
        >
          Explore Services
        </a>
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <div className="hidden lg:flex justify-end">
      <Image
        src="/influencer-hero.svg"
        alt="Influencer Marketing Visual"
        width={540}
        height={410}
        priority
      />
    </div>

  </div>
</section>


{/* WHY + HOW */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
      Why Influencer Marketing Works & How We Execute
    </h2>

    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-14 text-lg">
      People trust people — not ads. We make your brand a part of cultural conversation—not just another promotion.
    </p>

    <div className="grid lg:grid-cols-2 gap-14">

      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Benefits</h3>
        <ul className="space-y-3 text-slate-700 text-base">
          {[
            "Authentic storytelling creates emotional brand connection",
            "Expands brand awareness through audience networks",
            "UGC improves conversion confidence",
            "Social proof strengthens brand reputation",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 items-start">
              <FaCheckCircle className="text-cyan-600 mt-1" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Campaign Process</h3>
        {[
          "Influencer Research & Shortlisting",
          "Creative Direction & Content Approval",
          "Rollout Planning & Multi-Channel Sync",
          "Engagement Analysis & Scale Strategy",
        ].map((step, i) => (
          <div key={i} className="relative pl-14">
            <span className="absolute left-0 top-0 text-2xl font-extrabold text-cyan-500 opacity-30">
              {`0${i + 1}`}
            </span>
            <h4 className="text-lg font-semibold text-slate-800">{step}</h4>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
{/* INDUSTRY USE CASES */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Influencer Marketing Use Cases Across Industries
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        { icon: "💄", title: "Beauty & Skincare", desc: "Creator-based product trials and comparison reels that convert." },
        { icon: "🥗", title: "Food & FMCG", desc: "Snackable tasting reactions + local influencer trust." },
        { icon: "👟", title: "Fashion & Lifestyle", desc: "Fit-checks, try-ons, styling series, and lookbooks." },
        { icon: "🏋️", title: "Fitness & Gym Brands", desc: "Routine collabs, trainer ambassadors, transformation reels." },
        { icon: "🎮", title: "Gaming & Entertainment", desc: "Culture-driven fun format collabs and challenges." },
        { icon: "🏨", title: "Hotels & Travel", desc: "Destination walkthroughs and experience-based storytelling." },
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

{/* SERVICES */}
<section id="services" className="py-24 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">
      Influencer Marketing Capabilities
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((s, i) => (
        <div key={i} className="p-8 rounded-3xl bg-white/70 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
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
  </div>
</section>
{/* TRUST & TESTIMONIALS */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16 text-center max-w-5xl">

    <h2 className="text-3xl font-bold text-slate-900 mb-6">Brands That Trusted Our Influencer Campaigns</h2>
    <p className="text-slate-600 mb-14">
      Real brands. Real creators. Real measurable uplift.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center grayscale hover:grayscale-0 transition">
      {["brand1","brand2","brand3","brand4"].map((b,i)=>(
        <Image key={i} src={`/logos/${b}.png`} width={120} height={60} alt="Brand Logo" className="object-contain" />
      ))}
    </div>

    <div className="mt-16 grid lg:grid-cols-2 gap-8 text-left">
      <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <p className="text-slate-700 italic">
          “Our entire product launch campaign went viral — and felt authentic instead of forced.”
        </p>
        <p className="mt-4 font-semibold text-slate-900">
          — Marketing Director, D2C Cosmetics Brand
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <p className="text-slate-700 italic">
          “The influencer selection was perfect. Audience resonance was real, not inflated numbers.”
        </p>
        <p className="mt-4 font-semibold text-slate-900">
          — Founder, Fitness Apparel Startup
        </p>
      </div>
    </div>

  </div>
</section>

{/* PRICING */}
<section className="py-24 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16 text-center">
    <h2 className="text-3xl font-bold text-slate-900 mb-12">Influencer Marketing Packages</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricing.map((p, i) => (
        <div key={i} className={`p-8 rounded-3xl border shadow-lg ${p.highlight ? "border-cyan-600 bg-cyan-50 shadow-xl scale-105" : "border-slate-200 bg-white"}`}>
          <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
          <p className="text-slate-600 mt-1 text-sm">{p.price}</p>
          <ul className="mt-6 space-y-2 text-left text-slate-700 text-sm">
            {p.items.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <FaCheckCircle className="text-cyan-600 mt-1" /> {item}
              </li>
            ))}
          </ul>
          <Link href="/contact-mindsmiratus-technologies"
            className="mt-6 inline-block w-full px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
            Request Pricing
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>
{/* CAMPAIGN EXAMPLES */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
      Real Campaign Outcomes
    </h2>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Example 1 */}
      <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">
          Skincare D2C Brand — Creator Series Campaign
        </h3>
        <p className="text-sm text-slate-600 mb-5">
          Goal: Drive trust & social proof before launch.
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• 14 creators involved</li>
          <li>• 120+ product trial videos generated</li>
          <li>• 38% increase in repeat followers</li>
          <li>• 2.7x conversion from Instagram traffic</li>
        </ul>
      </div>

      {/* Example 2 */}
      <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">
          Fitness Supplement Brand — Performance & Routine Reels
        </h3>
        <p className="text-sm text-slate-600 mb-5">
          Goal: Reduce CPA & build authenticity.
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• 23 micro + 5 mid-tier creators</li>
          <li>• Engagement increased by 3.4x</li>
          <li>• 25% improvement in ROAS (paid retargeting)</li>
          <li>• Brand recall jump visible in comments</li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* FAQ + CTA */}
<section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-start">

    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
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

    <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-12">
      <div className="absolute -bottom-8 -right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl"></div>
      <h2 className="text-3xl font-bold mb-4 leading-tight">Ready to Amplify Your Brand?</h2>
      <p className="text-lg text-cyan-100 mb-10">
        Let's collaborate with voices that shape your market.
      </p>

      <Link
  href="/contact-mindsmiratus-technologies"
  className="relative inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold 
             bg-gradient-to-r from-cyan-600 to-blue-500 text-white 
             overflow-hidden transition-all duration-300 group shadow-sm"
>
  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
    Request Influencer Strategy
  </span>

  {/* Hover Glow */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                   bg-gradient-to-r from-cyan-500/40 to-blue-500/40 blur-xl"></span>
</Link>

    </div>

  </div>
</section>

    </>
  );
}