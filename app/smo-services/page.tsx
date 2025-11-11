import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaBullhorn, FaComments, FaShareAlt, FaUsers, FaChartLine, FaHashtag } from "react-icons/fa";
import TypeWriter from "../../components/TypingText";

export const metadata = {
  title: "SMO Services Company | Social Media Optimization for Brand Growth",
  description:
    "Professional SMO services to improve brand visibility, increase engagement, and grow your audience across social media platforms.",
  keywords:
    "smo services company, social media optimization, social media branding, facebook optimization, instagram optimization",
  alternates: {
    canonical: "https://www.mindsmiratus.com/smo-services",
  },
};

export default function SMOServicesPage() {

  const services = [
    {
      icon: <FaShareAlt className="text-3xl text-cyan-600" />,
      title: "Profile & Page Optimization",
      desc: "Strengthen brand identity and improve first-impression trust.",
      points: [
        "Profile Branding + Bio Rewrite",
        "Optimized Page Structure",
        "Cover / Highlight Designs",
        "Consistent Brand Aesthetic",
      ],
    },
    {
      icon: <FaHashtag className="text-3xl text-cyan-600" />,
      title: "Content Framework & Posting Strategy",
      desc: "Structured posting calendar designed to maintain visibility & engagement.",
      points: [
        "Daily/Weekly Posting Mix",
        "Creative Themes & Carousels",
        "Storytelling & Hook Format",
        "Hashtag & Topic Targeting",
      ],
    },
    {
      icon: <FaUsers className="text-3xl text-cyan-600" />,
      title: "Community Growth & Engagement",
      desc: "Build active, loyal followers who engage and advocate.",
      points: [
        "Comment & DM Response",
        "Audience Q&A & Polls",
        "Community Interaction",
        "Engagement Routines",
      ],
    },
    {
      icon: <FaBullhorn className="text-3xl text-cyan-600" />,
      title: "Social Campaign Promotions",
      desc: "Promote offers, launches, announcements with strategic visibility.",
      points: [
        "Campaign Planning",
        "Captions & Visual Narrative",
        "Reels / Posts / Stories Package",
        "Performance Monitoring",
      ],
    },
    {
      icon: <FaComments className="text-3xl text-cyan-600" />,
      title: "Reputation & Review Management",
      desc: "Build trust and credibility through positive narrative shaping.",
      points: [
        "Review Response System",
        "Brand Sentiment Observation",
        "Customer Interaction Flow",
        "Feedback Capture Strategy",
      ],
    },
    {
      icon: <FaChartLine className="text-3xl text-cyan-600" />,
      title: "Monthly Insights & Strategy Direction",
      desc: "Clear metrics → clear decision → clear growth.",
      points: [
        "Engagement & Reach Analysis",
        "Audience Behavior Insights",
        "Content Performance Breakdown",
        "Next Month Strategy Plan",
      ],
    },
  ];

  const pricing = [
    {
      name: "Starter SMO",
      price: "Best for small & personal brands",
      items: [
        "2 Platforms Managed",
        "12 Creative Posts Monthly",
        "Engagement Routine",
        "Monthly Report",
      ],
    },
    {
      name: "Growth SMO",
      highlight: true,
      price: "Best for growing businesses",
      items: [
        "4 Platforms Managed",
        "Reels + Carousel Designs",
        "Community Growth Plan",
        "Strategy Consultation",
      ],
    },
    {
      name: "Enterprise SMO",
      price: "For large / multi-location brands",
      items: [
        "Full Creative Team Support",
        "Brand Reputation Monitoring",
        "Influencer Collaboration Aid",
        "Custom Monthly Dashboard",
      ],
    },
  ];

  const faqs = [
    {
      q: "What’s the difference between SMO and SMM?",
      a: "SMO focuses on optimizing your social profiles & content for organic engagement. SMM involves paid promotions and advertising.",
    },
    {
      q: "How soon can I expect results?",
      a: "Engagement and visibility improvements generally begin within 3-5 weeks depending on industry and consistency.",
    },
    {
      q: "Do you handle content creation?",
      a: "Yes, we handle post designs, captions, posting schedule, and engagement support.",
    },
  ];

  return (
    <>
{/* HERO */}
<section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">

    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
        Social Media Optimization (SMO)
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Strengthen brand identity, increase engagement, and build credibility with structured social presence.
      </p>

      <div className="mt-8 flex gap-4">
        <Link href="/contact-mindsmiratus-technologies"
          className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow hover:shadow-lg transition">
          Request SMO Strategy
        </Link>
        <a href="#services" className="px-7 py-3 rounded-full border border-cyan-500 text-cyan-600 hover:bg-cyan-50 transition">
          View Services
        </a>
      </div>
    </div>

    <div className="hidden lg:flex flex-col justify-center text-right max-w-md ml-auto">
      <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-700 to-blue-600 bg-clip-text text-transparent leading-snug">
        <TypeWriter
          text={`We refine your brand's presence to inspire trust, engagement, and organic growth.`}
          minSpeed={60}
          maxSpeed={110}
        />
      </h2>
    </div>

  </div>
</section>

{/* WHY + HOW */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16 max-w-6xl">

    <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">Why SMO Matters & How We Execute</h2>

    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-14 text-lg">
      SMO ensures your brand looks professional, trustworthy, and active — driving meaningful audience engagement over time.
    </p>

    <div className="grid lg:grid-cols-2 gap-14">
      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Benefits of SMO</h3>
        <ul className="space-y-3 text-slate-700 text-base">
          {[
            "Improves brand credibility & trust",
            "Creates consistent audience engagement",
            "Strengthens long-term brand recall",
            "Supports organic growth without heavy ads",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 items-start">
              <FaCheckCircle className="text-cyan-600 mt-1" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Our SMO Process</h3>
        {[
          { step: "01", title: "Profile Branding & Identity Setup" },
          { step: "02", title: "Content Planning & Calendar Approach" },
          { step: "03", title: "Community Engagement Routines" },
          { step: "04", title: "Performance Analysis & Strategy Review" },
        ].map((s, i) => (
          <div key={i} className="relative pl-14">
            <span className="absolute left-0 top-0 text-2xl font-extrabold text-cyan-500 opacity-30">{s.step}</span>
            <h4 className="text-lg font-semibold text-slate-800">{s.title}</h4>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

{/* SERVICES */}
<section id="services" className="py-24 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">Our SMO Capabilities</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((s, i) => (
        <div key={i} className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
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
      SMO Use Cases Across Industries
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        { icon: "🏥", title: "Healthcare & Clinics", desc: "Build patient trust & appointment inquiries." },
        { icon: "🏫", title: "Education & Coaching", desc: "Increase enrollments & webinar participation." },
        { icon: "🛒", title: "E-Commerce & D2C Brands", desc: "Boost product visibility & repeat customers." },
        { icon: "🏨", title: "Hotels & Travel", desc: "Help travelers explore & choose your offerings." },
        { icon: "💼", title: "IT & B2B Firms", desc: "Build credibility & authority in niche markets." },
        { icon: "🏗️", title: "Real Estate Developers", desc: "Drive property-focused lead interest & walk-ins." },
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
{/* TRUST METRICS / TESTIMONIALS */}
<section className="py-20 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16 text-center max-w-5xl">

    <h2 className="text-3xl font-bold text-slate-900 mb-6">Trusted by Brands Across Industries</h2>
    <p className="text-slate-600 mb-12">
      We manage social presence for startups, enterprises, and growth-stage brands.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 opacity-90">
      {["client-1","client-2","client-3","client-4","client-5","client-6"].map((logo,i)=>(
        <div key={i} className="flex justify-center">
          <Image 
            src={`/logos/${logo}.png`} 
            alt="Brand Logo" 
            width={100} 
            height={60} 
            className="object-contain grayscale hover:grayscale-0 transition"
          />
        </div>
      ))}
    </div>

    <div className="mt-16 grid lg:grid-cols-2 gap-8 text-left">
      <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <p className="text-slate-700 italic">
          “Our brand engagement improved drastically within 2 months. Their structured posting and
          consistency gave our page a professional edge.”
        </p>
        <p className="mt-4 font-semibold text-slate-900">— Marketing Head, E-commerce Brand</p>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <p className="text-slate-700 italic">
          “We started receiving genuine leads and meaningful comments instead of empty likes.
          Community engagement was the biggest win.”
        </p>
        <p className="mt-4 font-semibold text-slate-900">— Founder, Coaching Institute</p>
      </div>
    </div>

  </div>
</section>

{/* PRICING */}
<section className="py-24 bg-slate-50">
  <div className="container mx-auto px6 lg:px-16 text-center">
    <h2 className="text-3xl font-bold text-slate-900 mb-12">SMO Pricing Plans</h2>

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

{/* FAQ + CTA */}
<section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-start">

    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="group border border-sate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
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
      <h2 className="text-3xl font-bold mb-4 leading-tight">Ready to Strengthen Your Brand?</h2>
      <p className="text-lg text-cyan-100 mb-10">
        Get a free SMO evaluation & improvement roadmap.
      </p>

      <Link href="/contact-mindsmiratus-technologies"
        className="inline-flex items-center gap-2 px-7 py-3 bg-white text-cyan-700 rounded-full font-semibold hover:bg-cyan-50 transition">
        Request SMO Strategy
      </Link>
    </div>

  </div>
</section>

    </>
  );
}