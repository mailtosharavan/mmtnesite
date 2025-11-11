import Link from "next/link";
import TypeWriter from "../../components/TypingText";

import {
  FaBullhorn,
  FaUsers,
  FaChartPie,
  FaComments,
  FaVideo,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "Social Media Marketing Company | Increase Engagement & Brand Presence",
  description:
    "Professional Social Media Marketing services to grow brand visibility, boost engagement, and generate leads. We manage Facebook, Instagram, LinkedIn, YouTube, and multi-channel campaigns.",
  keywords:
    "social media marketing company, smm services, social media management agency, facebook ads, instagram marketing, linkedin branding",
  alternates: {
    canonical: "https://www.mindsmiratus.com/social-media-marketing",
  },
};

export default function SocialMediaMarketingPage() {
  const services = [
    {
      title: "Social Media Strategy",
      desc: "We develop platform-specific strategies aligned with your business goals.",
      icon: <FaBullhorn className="text-3xl text-cyan-600" />,
      points: [
        "Brand Positioning Framework",
        "Audience Persona & Interests",
        "Content Planning Calendar",
        "Goal & KPI Roadmap",
      ],
    },
    {
      title: "Content Creation & Designing",
      desc: "High-quality visuals, captions, and storytelling to engage and convert.",
      icon: <FaUsers className="text-3xl text-cyan-600" />,
      points: [
        "Post Graphics & Carousels",
        "Reels & Short-Form Videos",
        "Brand Storytelling",
        "Copywriting for Engagement",
      ],
    },
    {
      title: "Social Media Advertising",
      desc: "Target the right audience and drive measurable conversions.",
      icon: <FaChartPie className="text-3xl text-cyan-600" />,
      points: [
        "Facebook & Instagram Ads",
        "LinkedIn Lead Campaigns",
        "YouTube Video Promotions",
        "A/B Testing & Optimization",
      ],
    },
    {
      title: "Community Management",
      desc: "Create meaningful engagements and handle brand communications.",
      icon: <FaComments className="text-3xl text-cyan-600" />,
      points: [
        "Comment & Message Response",
        "Reputation Monitoring",
        "Feedback & Review Management",
        "Engagement Growth Activities",
      ],
    },
    {
      title: "Video & Reel Production",
      desc: "Short-form videos that capture attention and drive interaction.",
      icon: <FaVideo className="text-3xl text-cyan-600" />,
      points: [
        "Script & Concept",
        "Editing & Motion Graphics",
        "On-Brand Visual Identity",
        "Performance Based Iteration",
      ],
    },
    {
      title: "Influencer & Collaboration",
      desc: "Work with the right creators to amplify your brand’s voice.",
      icon: <FaHandshake className="text-3xl text-cyan-600" />,
      points: [
        "Influencer Matchmaking",
        "Outreach & Negotiation",
        "UGC (User Generated Content)",
        "Campaign Performance Tracking",
      ],
    },
  ];

  const pricing = [
    {
      name: "Starter SMM",
      price: "Best for Small & Local Brands",
      items: [
        "1–2 Platforms Managed",
        "12–18 Posts / Month",
        "Basic Engagement Support",
        "Monthly Growth Report",
      ],
    },
    {
      name: "Growth SMM",
      highlight: true,
      price: "Best for Growing Businesses",
      items: [
        "3–4 Platforms Managed",
        "Reels + Carousels + Stories",
        "Ad Campaign Management",
        "Monthly Strategy Calls",
      ],
    },
    {
      name: "Enterprise SMM",
      price: "Brand-Scale Social Media Ops",
      items: [
        "Full Creative & Campaign Team",
        "Influencer & Paid Collaboration",
        "Full Funnel Analytics",
        "Custom Reporting Dashboards",
      ],
    },
  ];

  const faqs = [
    {
      q: "How fast can I see results?",
      a: "Brand visibility improves in 2–4 weeks. Engagement and lead conversions typically grow within 1–3 months.",
    },
    {
      q: "Which platforms do you manage?",
      a: "We manage Instagram, Facebook, LinkedIn, YouTube, Twitter (X), Pinterest, and Threads depending on brand audience.",
    },
    {
      q: "Do you provide content?",
      a: "Yes. We create visuals, copywriting, posting, scheduling, and performance analysis.",
    },
  ];

  return (
    <>

{/* HERO */}
<section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
    
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
        Grow Your Brand Presence with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
          Social Media Marketing
        </span>
      </h1>

      <p className="mt-6 text-lg text-slate-600 leading-relaxed">
        Build trust, engage your audience, and increase conversions with powerful and consistent social media strategies tailored for your brand.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/contact-mindsmiratus-technologies"
          className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow hover:shadow-lg transition"
        >
          Request Strategy Session
        </Link>

        <a
          href="#services"
          className="px-7 py-3 rounded-full border border-cyan-500 text-cyan-600 hover:bg-cyan-50 transition"
        >
          Explore Services
        </a>
      </div>
    </div>

<div className="hidden lg:flex flex-col justify-center text-right max-w-md ml-auto">

  <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-700 to-blue-600 bg-clip-text text-transparent leading-snug">
    <TypeWriter text={`We don’t just post. We build meaningful relationships, communities, and conversions.`} />
  </h2>

  <p className="mt-5 text-slate-500 text-[15px]">
    Social Media Marketing that connects → engages → converts.
  </p>

</div>



  </div>
</section>

{/* WHY + BENEFITS + HOW IT WORKS */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16 max-w-6xl">

    {/* Heading */}
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
      Why Social Media Matters & How We Execute
    </h2>

    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-14 text-lg">
      Social media is where your customers spend most of their time. We help you build a presence that inspires trust, engagement, and conversions.
    </p>

    <div className="grid lg:grid-cols-2 gap-14">

      {/* Benefits */}
      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">What Social Media Marketing Does For You</h3>
        <ul className="space-y-3 text-slate-700 text-base">
          {[
            "Builds brand recognition and recall",
            "Strengthens audience trust and loyalty",
            "Drives traffic, leads, and conversions",
            "Creates community and repeat engagement",
          ].map((item, i) => (
            <li key={i} className="flex gap-2 items-start">
              <FaCheckCircle className="text-cyan-600 mt-1" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Process */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Social Media Growth Process</h3>

        {[
          {
            step: "01",
            title: "Brand Discovery & Audience Insights",
            desc: "We analyze your brand voice, competitors, and audience interests."
          },
          {
            step: "02",
            title: "Content Planning & Creation",
            desc: "We create engaging visuals, captions, videos, and story experiences."
          },
          {
            step: "03",
            title: "Campaigns, Ads & Engagement",
            desc: "We run high-impact engagement & lead generation campaigns."
          },
          {
            step: "04",
            title: "Performance Tracking & Optimization",
            desc: "We refine strategy based on analytics, reach, and conversion goals."
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
      Social Media Marketing Capabilities
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((s, i) => (
        <div
          key={i}
          className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
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

    <div className="text-center mt-12">
      <Link href="/digital-marketing-services"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500 text-cyan-700 hover:bg-cyan-50 transition">
        ← Back to Digital Marketing Services
      </Link>
    </div>
  </div>
</section>

{/* PRICING */}
<section className="py-24 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16 text-center">
    <h2 className="text-3xl font-bold text-slate-900 mb-12">Flexible SMM Plans</h2>

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

      <h2 className="text-3xl font-bold mb-4 leading-tight">
        Ready to Grow Your Brand?
      </h2>
      <p className="text-lg text-cyan-100 mb-10">
        Get a free social media strategy outline tailored to your business.
      </p>

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
        Request Free Strategy Session
      </Link>
    </div>

  </div>
</section>

    </>
  );
}