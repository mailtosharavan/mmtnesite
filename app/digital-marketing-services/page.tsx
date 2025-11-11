// app/digital-marketing/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaSearch } from "react-icons/fa";

export const metadata = {
  title: "Digital Marketing & Online Promotion Services | Mindsmiratus Technologies Pvt. Ltd.",
  description: "Mindsmiratus Technologies provides professional digital marketing services including SEO, SEM, social media marketing, SMO, and full-service campaigns to grow your business online.",
  keywords: "digital marketing, SEO, SEM, Google Ads, social media marketing, SMO, online promotion, Mindsmiratus Technologies",
  alternates: {
    canonical: "https://www.mindsmiratus.com/digital-marketing-services",
  },
};

export default function DigitalMarketingPage() {
  const faqs = [
    {
      question: "What is SEO and why is it important?",
      answer:
        "SEO (Search Engine Optimization) improves your website's visibility on search engines, helping drive organic traffic and increase brand credibility.",
    },
    {
      question: "Do you manage paid advertising campaigns?",
      answer:
        "Yes, we manage SEM campaigns including Google Ads to drive targeted traffic and maximize ROI.",
    },
    {
      question: "Which social media platforms do you focus on?",
      answer:
        "We create strategies for Facebook, Instagram, LinkedIn, YouTube, and other platforms tailored to your audience.",
    },
    {
      question: "What is SMO?",
      answer:
        "Social Media Optimization (SMO) improves your social profiles, engagement, and visibility to enhance brand awareness and traffic.",
    },
    {
      question: "Do you provide full-service digital marketing campaigns?",
      answer:
        "Absolutely! We handle everything from strategy, content creation, and paid ads to analytics and reporting.",
    },
  ];


  return (
    <>
{/* HERO SECTION */}
<section className="relative overflow-hidden py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(0,180,255,0.15),transparent,transparent)]"></div>

  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
    
    {/* Text */}
    <div className="max-w-xl text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
        Data-Driven{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
          Digital Marketing
        </span>{" "}
        for Scalable Business Growth
      </h1>

      <p className="mt-6 text-lg text-slate-600 leading-relaxed">
        Attract, engage, and convert your ideal audience with performance-oriented SEO, paid campaigns, 
        and social media strategies tailored to your brand goals.
      </p>

      <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
        <Link
          href="/contact-mindsmiratus-technologies"
          className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow hover:shadow-xl transition-all"
        >
          Request Free Strategy Session
        </Link>

        <a
          href="#services"
          className="px-7 py-3 rounded-full border border-cyan-500 text-cyan-600 hover:bg-cyan-50 transition"
        >
          Browse Services
        </a>
      </div>
    </div>

    {/* Image */}
    <div className="flex justify-center lg:justify-end relative">
      <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full bg-cyan-200/30 blur-2xl"></div>
      <Image
        src="/hero-digital-marketing.svg"
        alt="Digital Marketing Strategy Illustration"
        width={560}
        height={440}
        className="relative drop-shadow-lg object-contain"
        priority
      />
    </div>

  </div>
</section>

{/* VALUE / OVERVIEW SECTION */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
{/* Visual Illustration */}
    <div className="flex justify-center">
      <div className="bg-white rounded-3xl p-8  w-full max-w-md text-center">
        <Image
          src="/digital-marketing-overview.svg"
          alt="Digital Marketing Growth Analytics"
          width={450}
          height={350}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
    {/* Text Content */}
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
        Build Visibility, Trust & Measurable Business Growth
      </h2>

      <p className="text-slate-600 leading-relaxed mb-6">
        We don’t just run ads or post content — we build full-funnel digital marketing strategies that drive
        real business impact. Our approach combines performance-driven SEO, targeted ad campaigns, and high-engagement
        social media execution supported by continuous optimization and analytics.
      </p>

      <ul className="space-y-3 text-slate-700 text-base">
        <li className="flex gap-2 items-start">
          <span className="text-cyan-600 text-xl leading-none">•</span>
          Increase brand visibility and search presence across platforms.
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-cyan-600 text-xl leading-none">•</span>
          Drive qualified leads and conversions through optimized campaigns.
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-cyan-600 text-xl leading-none">•</span>
          Strengthen customer engagement with consistent and meaningful content.
        </li>
        <li className="flex gap-2 items-start">
          <span className="text-cyan-600 text-xl leading-none">•</span>
          Track measurable growth with transparent performance analytics.
        </li>
      </ul>
    </div>

    

  </div>
</section>

{/* SERVICES */}
<section id="services" className="relative overflow-hidden py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
      Our Digital Marketing Services
    </h2>
    <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
      A performance-driven multi-channel approach designed to increase visibility, capture demand, 
      and convert prospects into loyal customers.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
  title: "SEO - Search Engine Optimization",
  desc: "Grow long-term organic traffic, improve keyword rankings, and build strong domain authority.",
  icon: <FaSearch className="text-cyan-600 text-5xl mb-4 mx-auto" />,
  link: "/seo-services",
  points: [
    "On-Page & Technical SEO Fixes",
    "Keyword Clustering & Search Intent Targeting",
    "High-Quality Authority Backlinks",
    "Organic Traffic & Ranking Growth Monitoring"
  ],
},
{
  title: "Google Ads & Paid Campaigns (SEM)",
  desc: "Get instant visibility and leads with optimized performance-driven ad campaigns.",
  icon: <FaGoogle className="text-yellow-500 text-5xl mb-4 mx-auto" />,
  link: "/google-ads-services",
  points: [
    "Search, Display & YouTube Campaigns",
    "Landing Page & Ad Copy Optimization",
    "Conversion Tracking & A/B Performance Testing",
    "Cost-Per-Lead Optimization for Maximum ROI"
  ],
},
        {
          title: "Social Media Marketing",
          desc: "Build brand awareness and engagement through creative storytelling.",
          icon: "📱",
          link: "/social-media-marketing",
          points: [
            "Facebook / Instagram / LinkedIn",
            "Creative + Video Campaigns",
            "Audience Targeting & Lookalike Ads",
            "Engagement Analytics Tracking"
          ],
        },
        {
          title: "Social Media Optimization (SMO)",
          desc: "Grow brand presence and credibility through content consistency.",
          icon: "📈",
          link: "/smo-services",
          points: [
            "Profile Branding + Optimization",
            "Content Calendars & Hashtag Strategy",
            "Community Interaction & Replies",
            "Organic Reach Enhancement"
          ],
        },
        {
          title: "Influencer & Content Marketing",
          desc: "Leverage creators + brand content to build trust and influence.",
          icon: "🎥",
          link: "/influencer-marketing",
          points: [
            "Influencer Sourcing & Outreach",
            "UGC + Brand Story Content",
            "Campaign Performance Tracking",
            "Brand Awareness Lift"
          ],
        },
        {
          title: "Full-Funnel Growth Campaigns",
          desc: "End-to-end strategy including funnel design to conversion automation.",
          icon: "🚀",
           link: "#",
          points: [
            "Landing Page Design & Copy",
            "Lead Nurture & Retargeting",
            "CRM + WhatsApp Automation",
            "Revenue & ROI Scaling"
          ],
        },
      ].map((s, i) => (
        <Link
          key={i}
          href={s.link}
          className="group relative p-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl 
                     shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                     hover:-translate-y-1 transition-all duration-500"
        >
          <div className="text-5xl mb-4">{s.icon}</div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3">{s.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">{s.desc}</p>

          <ul className="text-slate-700 text-sm space-y-2">
            {s.points.map((point, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <span className="w-2 h-2 mt-1 rounded-full bg-cyan-500"></span>
                {point}
              </li>
            ))}
          </ul>
        </Link>
      ))}

    </div>
  </div>
</section>


{/* FEATURES / KEY CAPABILITIES */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
      Key Capabilities That Drive Growth
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          icon: "📊",
          title: "Data-Driven Strategy",
          desc: "Every campaign is backed by analytics and insights to improve ROI over time.",
        },
        {
          icon: "🎯",
          title: "Audience Targeting",
          desc: "Reach the right customers with platform, demographic, and interest-based targeting.",
        },
        {
          icon: "⚡",
          title: "Conversion Optimization",
          desc: "Landing pages, messaging, visuals, and funnels designed to maximize conversions.",
        },
        {
          icon: "📈",
          title: "Performance Reporting",
          desc: "Transparent reporting dashboards with measurable KPIs and campaign tracking.",
        },
      ].map((f, i) => (
        <div
          key={i}
          className="p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition bg-white text-center"
        >
          <div className="mb-4 inline-flex p-4 rounded-full bg-cyan-50 text-cyan-700 text-3xl">
            {f.icon}
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* INDUSTRY-SPECIFIC USE CASES */}
<section className="py-20 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Industry-Specific Digital Marketing Use Cases
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: "🏦",
          title: "Finance & Fintech",
          desc: "Lead generation, app downloads, trust-building content and long-term retention campaigns.",
        },
        {
          icon: "🏥",
          title: "Healthcare & Clinics",
          desc: "Appointment bookings, reputation management, local SEO visibility and patient engagement.",
        },
        {
          icon: "🛍️",
          title: "E-Commerce & Retail",
          desc: "Performance marketing, remarketing, catalog ads, UGC creatives and conversion optimization.",
        },
        {
          icon: "🏫",
          title: "Education & Training",
          desc: "Student enrollment campaigns, webinar funnels, lead nurturing and career awareness.",
        },
        {
          icon: "🏗️",
          title: "Real Estate & Property Developers",
          desc: "High-intent buyer lead acquisition with WhatsApp follow-ups and CRM integrations.",
        },
        {
          icon: "🚗",
          title: "Travel & Hospitality",
          desc: "Seasonal offers, remarketing campaigns, package awareness, and re-engagement workflows.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            {item.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* WHY CHOOSE US */}
<section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Why Choose Mindsmiratus for Digital Marketing
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: "🎓",
          title: "Certified & Experienced Team",
          desc: "Our team consists of certified SEO specialists, Google Ads experts, and skilled social media strategists.",
        },
        {
          icon: "🎯",
          title: "Performance-Driven Strategy",
          desc: "Every campaign is designed with measurable objectives to improve leads, reach, engagement, and conversions.",
        },
        {
          icon: "🧩",
          title: "Full-Funnel Campaign Execution",
          desc: "We handle targeting, creatives, landing pages, analytics, and optimization — end-to-end.",
        },
        {
          icon: "📊",
          title: "Transparent Reporting & Insights",
          desc: "Detailed performance dashboards and growth reports allow you to track every step of progress.",
        },
        {
          icon: "🤝",
          title: "Personalized Support & Strategy",
          desc: "We collaborate closely with your team to refine messaging and continuously improve performance.",
        },
        {
          icon: "🚀",
          title: "Growth + Brand Building Combined",
          desc: "We balance long-term brand identity with short-term lead and revenue goals for sustainable growth.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 rounded-3xl border border-slate-200 bg-white shadow-md 
                     hover:shadow-xl hover:border-cyan-500 transition-all duration-300 group"
        >
          <div className="text-4xl mb-4 text-cyan-600 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-relaxed text-sm">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


  {/* FAQ + CTA Split Section */}
<section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-start">

    {/* FAQ */}
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 flex justify-between items-center select-none">
              <span>{faq.question}</span>
              <span className="text-cyan-600 text-2xl leading-none rotate-0 group-open:rotate-45 transition-transform duration-300">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>

    {/* CTA PREMUIM PANEL */}
    <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-12">
      
      {/* Glow Accent */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent)] pointer-events-none"></div>

      <h2 className="text-3xl font-bold mb-4 leading-tight">
        Ready to Grow Your Business Online?
      </h2>

      <p className="text-lg text-cyan-100 leading-relaxed max-w-md mb-10">
        Get a tailored digital marketing strategy crafted specifically for your industry, growth goals, and target audience.
      </p>

      {/* CTA Icons for Movement */}
      <div className="flex gap-4 mb-10">
        <span className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-xl animate-pulse">
          🚀
        </span>
        <span className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-xl animate-pulse delay-150">
          🎯
        </span>
      </div>

      <Link
        href="/contact-mindsmiratus-technologies"
        className="inline-flex items-center gap-2 px-7 py-3 bg-white text-cyan-700 rounded-full font-semibold shadow hover:shadow-lg hover:bg-slate-50 transition-all"
      >
        Request Custom Strategy
      </Link>

    </div>

  </div>
</section>


    </>
  );
}