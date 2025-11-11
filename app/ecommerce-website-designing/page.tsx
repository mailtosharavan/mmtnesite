import Image from "next/image";
import Link from "next/link";
import {
  FaApple,
  FaAndroid,
  FaShieldAlt,
  FaBolt,
  FaLayerGroup,
  FaChartLine,
  FaCogs,
  FaCloud,
  FaUserCheck,
  FaCheckCircle,
  FaStar,
  FaClock,
  FaAward,
  FaQuestionCircle,
} from "react-icons/fa";

// ------------------ SEO ------------------
export const metadata = {
  title:
    "Mobile App Development Company | Cross-Platform iOS & Android Apps",
  description:
    "We design and build high-performance iOS & Android apps using Flutter/React Native. Secure APIs, offline sync, analytics, CI/CD, and store deployment included.",
  keywords:
    "mobile app development, android app, ios app, flutter, react native, cross platform app, app design company, app developers",
  alternates: {
    canonical: "https://www.mindsmiratus.com/mobile-app-development",
  },
};

// ------------------ DATA ------------------
const trust = [
  { icon: <FaStar />, label: "4.9/5 Avg. Rating" },
  { icon: <FaClock />, label: "11+ Years Experience" },
  { icon: <FaAward />, label: "320+ Projects" },
];

const valueProps = [
  {
    icon: <FaBolt className="text-sky-600" />,
    title: "Ship Faster",
    desc: "Reusable UI kits, proven architecture, and CI/CD to reduce time-to-market.",
  },
  {
    icon: <FaShieldAlt className="text-sky-600" />,
    title: "Enterprise-Grade Security",
    desc: "Auth, encryption at rest/in transit, secure storage, and role permissions.",
  },
  {
    icon: <FaUserCheck className="text-sky-600" />,
    title: "Delightful UX",
    desc: "Pixel-perfect UI, accessibility, and device-responsive layouts.",
  },
  {
    icon: <FaChartLine className="text-sky-600" />,
    title: "Measurable Growth",
    desc: "Analytics, events, and funnels wired from day one.",
  },
];

const benefitsA = [
  "Consistent iOS + Android releases with one codebase",
  "Offline-first UX with reliable sync & caching",
  "App Store & Play Store review success guidance",
  "Performance budgets and crash-free sessions >99%",
  "Built-in analytics, A/B tests, and feature flags",
  "DevOps pipeline: staging, QA, and automated tests",
];

const capabilities = [
  {
    icon: "📱",
    title: "Cross-Platform Apps",
    desc: "React Native / Flutter for faster delivery and shared code.",
    points: ["Native modules", "Adaptive UI", "Over-the-air updates"],
  },
  {
    icon: "🧩",
    title: "API & Integrations",
    desc: "Secure REST/GraphQL, payment, maps, chat, notifications.",
    points: ["Auth & SSO", "Payment gateways", "3rd-party SDKs"],
  },
  {
    icon: "🗂️",
    title: "Admin & CMS",
    desc: "Dashboards to manage content, users, and operations.",
    points: ["Headless CMS", "Role based access", "Audit logs"],
  },
  {
    icon: "🛡️",
    title: "Security & Compliance",
    desc: "Best practices for data protection and privacy.",
    points: ["OWASP MASVS", "PII protection", "Secure storage"],
  },
  {
    icon: "⚙️",
    title: "DevOps & CI/CD",
    desc: "Automated build/test/release across environments.",
    points: ["Fastlane/GitHub Actions", "Test suites", "Release gates"],
  },
  {
    icon: "📊",
    title: "Analytics & Growth",
    desc: "Events, funnels, and experiments to scale adoption.",
    points: ["Mixpanel/GA4", "A/B testing", "Cohort insights"],
  },
];

const process = [
  { step: "01", title: "Discovery & Planning", desc: "Goals, jobs-to-be-done, user stories, and success metrics." },
  { step: "02", title: "UX/UI & Prototyping", desc: "Flows, wireframes, and clickable Figma prototypes." },
  { step: "03", title: "Architecture & APIs", desc: "Tech stack, data models, and integration contracts." },
  { step: "04", title: "Build & QA", desc: "Feature sprints, unit/UI tests, performance budgets." },
  { step: "05", title: "Launch & Stores", desc: "Release notes, compliance checks, approvals, and rollout." },
  { step: "06", title: "Measure & Iterate", desc: "Analytics, feedback loops, and growth experiments." },
];

const industries = [
  { icon: "🏥", title: "Healthcare", desc: "Telemedicine, e-prescriptions, HIPAA-aware flows." },
  { icon: "🛒", title: "Retail & eCommerce", desc: "m-commerce, wallets, loyalty, and fulfillment." },
  { icon: "🏦", title: "FinTech", desc: "KYC, payments, statements, and insights dashboards." },
  { icon: "🏫", title: "EdTech", desc: "Courses, live classes, quizzes, and progress tracking." },
  { icon: "🚚", title: "Logistics", desc: "Fleet, routing, POD, and real-time tracking." },
  { icon: "💼", title: "B2B SaaS", desc: "Field apps, approvals, and offline workflows." },
];

// Case Study Format 1 (two concise tiles)
const caseStudies = [
  {
    badge: "FinTech",
    title: "Personal Finance Super-App",
    results: ["MAU +140%", "Crash-free 99.7%", "KYC time −38%"],
    summary:
      "A React Native app integrating KYC, UPI payments, goals, and insights with secure APIs and feature flags for staged rollouts.",
  },
  {
    badge: "Retail",
    title: "Omnichannel Commerce App",
    results: ["ATC +22%", "Push CTR +31%", "Load −45%"],
    summary:
      "Flutter storefront with offline catalog, universal links, deep search, and GA4 funnels—backed by a headless CMS.",
  },
];

const faqs = [
  {
    q: "Which tech stack do you use?",
    a: "React Native and Flutter for cross-platform, plus native modules where needed. Backends on .NET/Node with REST/GraphQL.",
  },
  {
    q: "Can you publish to stores?",
    a: "Yes. We prepare assets, handle review feedback, and set rollout strategies for App Store & Play Store.",
  },
  {
    q: "How long does it take?",
    a: "MVPs typically 4–8 weeks depending on scope, integrations, and compliance needs.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ------------------ PAGE ------------------
export default function MobileAppDevelopmentPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO — Style B (visual right) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-24">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-sky-200 text-sky-700 text-sm mb-4">
              <FaLayerGroup /> Cross-Platform iOS & Android
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Mobile App Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                that Scales from MVP to Millions
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Design-driven apps with robust architecture, secure APIs, and analytics baked in.
              Launch faster, release confidently, and keep users delighted.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact-mindsmiratus-technologies"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold shadow hover:shadow-lg transition"
              >
                Get a Free App Consultation
              </Link>
              <a
                href="#capabilities"
                className="px-7 py-3 rounded-full border border-sky-500 text-sky-600 hover:bg-sky-50 transition"
              >
                Explore Capabilities
              </a>
            </div>

            {/* Trust metrics with icons */}
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              {trust.map((t, i) => (
                <div key={i} className="rounded-2xl bg-white/60 border border-slate-200 p-4">
                  <div className="text-2xl mb-1">{t.icon}</div>
                  <p className="text-sm text-slate-700">{t.label}</p>
                </div>
              ))}
            </div>
          </div>

          <svg width="620" height="460" viewBox="0 0 620 460" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradC" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>

  <rect width="620" height="460" rx="24" fill="#f9fafb"/>

  <rect x="90" y="90" width="440" height="270" rx="18" fill="#fff" stroke="#dce3ef" stroke-width="2"/>

  <rect x="120" y="120" width="120" height="140" rx="12" fill="#f2f6fb"/>
  <rect x="260" y="120" width="120" height="140" rx="12" fill="#f2f6fb"/>
  <rect x="400" y="120" width="120" height="140" rx="12" fill="url(#gradC)" opacity="0.18"/>

  <rect x="120" y="270" width="120" height="20" rx="6" fill="url(#gradC)" opacity="0.9"/>
  <rect x="260" y="270" width="120" height="20" rx="6" fill="url(#gradC)" opacity="0.9"/>
  <rect x="400" y="270" width="120" height="20" rx="6" fill="url(#gradC)" opacity="0.9"/>

  <circle cx="500" cy="90" r="45" fill="url(#gradC)" opacity="0.25"/>
  <path d="M505 78h-15l-3 12h17l-2 6h-15" stroke="#0284c7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>





        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            Value Proposition
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
            We combine product thinking with engineering rigor—so you get a beautiful
            app that’s reliable, secure, and ready to grow.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800">{v.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS — Style A (glass cards) */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            Benefits of Building with Us
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">
            Premium quality, predictable delivery, and growth-ready foundations.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsA.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200 
                           shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-sky-600 mt-1" />
                  <p className="text-slate-700 text-sm">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS + WHY (combined, before capabilities) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            How We Deliver Results
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
            A transparent, sprint-based model with demos every 1–2 weeks—so you see real progress.
          </p>

          <div className="grid lg:grid-cols-3 gap-10">
            {process.map((p, i) => (
              <div key={i} className="relative pl-14">
                <span className="absolute left-0 top-0 text-2xl font-extrabold text-sky-500/30">
                  {p.step}
                </span>
                <h4 className="text-lg font-semibold text-slate-800">{p.title}</h4>
                <p className="text-slate-600 text-sm mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="relative overflow-hidden py-24 bg-gradient-to-br from-sky-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Mobile App Development Capabilities
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
            Everything you need—from strategy and design to APIs, security, and growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {capabilities.map((s, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl 
                           shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                           hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="text-slate-700 text-sm space-y-2">
                  {s.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="w-2 h-2 mt-1 rounded-full bg-sky-500"></span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Back link to parent service hub if needed */}
          <div className="text-center mt-12">
            <Link
              href="/website-designing-and-development"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sky-500 text-sky-700 hover:bg-sky-50 transition"
            >
              ← Back to Website Designing & Development
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRY USE CASES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Industry Use Cases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((it, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-3">{it.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES — Format 1 */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Case Studies
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((c, i) => (
              <div key={i} className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
                <div className="px-8 pt-8">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                    {c.badge}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 mt-3">{c.title}</h3>
                  <p className="text-slate-600 text-sm mt-2">{c.summary}</p>
                  <div className="flex flex-wrap gap-3 mt-5">
                    {c.results.map((r, idx) => (
                      <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-8 pb-8 mt-6">
                  <Link href="/contact-mindsmiratus-technologies" className="text-sky-700 font-semibold hover:underline">
                    Discuss a similar build →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — improved */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Why Choose Mindsmiratus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Product-Centric Delivery",
                desc: "We focus on outcomes, not just outputs—every sprint ties to user value.",
                icon: <FaCogs className="text-sky-600" />,
              },
              {
                title: "Transparent Sprints",
                desc: "Roadmaps, velocity, and demo-ready builds to keep you in control.",
                icon: <FaLayerGroup className="text-sky-600" />,
              },
              {
                title: "Cloud-Native Ready",
                desc: "Scalable APIs, monitoring, and alerting with modern cloud tooling.",
                icon: <FaCloud className="text-sky-600" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-sky-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FAQ (mixed with gradient & icons) */}
      <section className="py-24 bg-gradient-to-r from-sky-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white/10 p-10">
            <div className="absolute -bottom-8 -right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl"></div>
            <h3 className="text-3xl font-bold mb-3">Ready to Build Your App?</h3>
            <p className="text-cyan-50 mb-8">
              Get a free consultation—scope, timeline, and a clear plan to launch.
            </p>

            {/* CTA trust icons */}
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div><FaApple className="mx-auto text-2xl" /><p className="text-xs mt-1">App Store</p></div>
              <div><FaAndroid className="mx-auto text-2xl" /><p className="text-xs mt-1">Play Store</p></div>
              <div><FaShieldAlt className="mx-auto text-2xl" /><p className="text-xs mt-1">Secure</p></div>
            </div>

            <Link
              href="/contact-mindsmiratus-technologies"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-sky-700 rounded-full font-semibold hover:bg-sky-50 transition"
            >
              Start a Project
            </Link>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <FaQuestionCircle /> Frequently Asked Questions
            </h3>
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group border border-white/30 rounded-2xl bg-white/10 backdrop-blur-sm"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold flex justify-between items-center">
                  {f.q}
                  <span className="text-white/80 text-2xl group-open:rotate-45 transition">+</span>
                </summary>
                <div className="px-6 pb-5 text-white/90 border-t border-white/20">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED LINKS / NAV */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <p className="text-slate-600">Looking for something else?</p>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <Link href="/web-application-development" className="px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50">
              Web Application Development
            </Link>
            <Link href="/ecommerce-website-development" className="px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50">
              eCommerce Website Solutions
            </Link>
            <Link href="/business-application-development" className="px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50">
              Business Application Development
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
