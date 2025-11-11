import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaServer,
  FaClock,
  FaCheckCircle,
  FaShieldAlt,
  FaCubes,
  FaUsersCog,
  FaBolt,
  FaHeadset,
  FaThumbsUp,
  FaRocket,
  FaChartLine,
  FaMobileAlt,
  FaQuestionCircle,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

export const metadata = {
  title: "Mobile App Development Company | Android & iOS App Development",
  description:
    "We build high-performance, scalable Android & iOS apps using Flutter and React Native. From UI/UX design to backend APIs and deployment — full end-to-end delivery.",
  alternates: { canonical: "https://www.mindsmiratus.com/mobile-app-development" },
};

export default function MobileAppDevelopmentPage() {
  const capabilities = [
    {
      icon: "📱",
      title: "Cross-Platform App Development",
      desc: "Develop once, deploy on both iOS & Android.",
      points: [
        "Flutter / React Native",
        "Shared codebase efficiency",
        "Consistent UI & Experience",
        "Reduced development cost",
      ],
    },
    {
      icon: "💾",
      title: "Backend & API Development",
      desc: "Secure and scalable server architecture.",
      points: [
        "REST / GraphQL APIs",
        "Authentication & Permissions",
        "Real-time & Offline Sync",
        "Cloud Hosted Infrastructure",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design for Mobile",
      desc: "Intuitive, engaging, and conversion-driven interfaces.",
      points: [
        "User Flow & Wireframes",
        "Micro-interactions",
        "Human Interface / Material Design",
        "Brand Consistency",
      ],
    },
    {
      icon: "🔔",
      title: "Push Notifications & Messaging",
      desc: "Engage & retain users with timely communication.",
      points: [
        "Firebase Cloud Messaging",
        "In-App Alerts & Prompts",
        "User-based Targeting",
        "Analytics + Triggering",
      ],
    },
    {
      icon: "📊",
      title: "Analytics & Usage Insights",
      desc: "Track behavior, journeys, performance & outcomes.",
      points: [
        "User Funnels",
        "Crash & Performance Logs",
        "Heatmaps & Screen Flow",
        "Conversion Metrics",
      ],
    },
    {
      icon: "🚀",
      title: "App Store & Play Store Deployment",
      desc: "Guidance, build configuration, and listing.",
      points: [
        "Store Listing Setup",
        "Compliance & Policies",
        "Release Management",
        "Version Iteration",
      ],
    },
  ];

  const faqs = [
    {
      q: "Which frameworks do you use for app development?",
      a: "We build apps using Flutter and React Native, depending on performance needs and UI complexity.",
    },
    {
      q: "Can you connect the app to my existing website system?",
      a: "Yes — we integrate with CRMs, ERPs, databases, and custom APIs.",
    },
    {
      q: "Do you offer post-launch updates?",
      a: "Yes — we provide maintenance, monitoring, and new feature rollout support.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-sky-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
          
          {/* TEXT */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-snug">
              Mobile App Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                Android • iOS • Cross-Platform
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We design and develop mobile apps that are fast, intuitive, and engineered for scale —
              ensuring your users stay engaged and your business grows.
            </p>

            {/* Trust Stats */}
            <div className="mt-7 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { icon: <FaStar />, label: "Client Rating", value: "4.9/5" },
                { icon: <FaMobileAlt />, label: "Apps Delivered", value: "120+" },
                { icon: <FaClock />, label: "Experience", value: "11+ yrs" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-100 p-4 text-center shadow-sm"
                >
                  <div className="text-sky-600 text-xl mx-auto">{t.icon}</div>
                  <p className="text-xl font-bold text-slate-900">{t.value}</p>
                  <p className="text-xs text-slate-500">{t.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/contact-mindsmiratus-technologies" className="px-7 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold shadow hover:shadow-lg transition">Start Your App</Link>
              <a href="#capabilities" className="px-7 py-3 rounded-full border border-sky-500 text-sky-600 hover:bg-sky-50 transition">View Capabilities</a>
            </div>
          </div>

          {/* VISUAL */}
           <svg width="620" height="460" viewBox="0 0 620 460" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="grad2" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#e0f7ff"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="620" height="460" rx="24" fill="url(#grad2)"/>

  <circle cx="480" cy="120" r="90" fill="url(#grad1)" opacity="0.15"/>
  <circle cx="160" cy="350" r="120" fill="url(#grad1)" opacity="0.12"/>

  <rect x="200" y="60" width="220" height="340" rx="28" fill="#ffffff" stroke="url(#grad1)" stroke-width="3"/>
  <rect x="230" y="95" width="160" height="35" rx="10" fill="#f1f5f9"/>
  <rect x="230" y="140" width="160" height="35" rx="10" fill="#e2e8f0"/>
  <rect x="230" y="185" width="160" height="35" rx="10" fill="#f1f5f9"/>
  <rect x="230" y="230" width="160" height="90" rx="14" fill="url(#grad1)" opacity="0.25"/>
  <rect x="230" y="330" width="160" height="35" rx="10" fill="#e2e8f0"/>

  <rect x="80" y="130" width="120" height="70" rx="16" fill="#ffffff" stroke="url(#grad1)" stroke-width="2"/>
  <rect x="420" y="200" width="120" height="70" rx="16" fill="#ffffff" stroke="url(#grad1)" stroke-width="2"/>
  <rect x="100" y="260" width="140" height="60" rx="16" fill="#ffffff" stroke="url(#grad1)" stroke-width="2"/>

  <circle cx="140" cy="165" r="6" fill="url(#grad1)"/>
  <circle cx="460" cy="235" r="6" fill="url(#grad1)"/>
  <circle cx="160" cy="290" r="6" fill="url(#grad1)"/>
</svg>

        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-12 bg-gradient-to-r from-sky-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <FaBolt />, title: "Fast & Responsive", desc: "Smooth animations & instant interactions." },
            { icon: <FaShieldAlt />, title: "Secure Architecture", desc: "Encrypted data & hardened APIs." },
            { icon: <FaThumbsUp />, title: "User-Centered Design", desc: "Built for adoption & retention." },
            { icon: <FaCubes />, title: "Scalable Backend", desc: "Add new features without rewrites." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-2xl text-sky-600">{item.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {capabilities.map((c, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow hover:-translate-y-1 hover:shadow-xl transition">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-slate-600 text-sm mb-5">{c.desc}</p>
                <ul className="text-slate-700 text-sm space-y-2">
                  {c.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-1" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">Our Process</h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-14 text-lg">
            A smooth, transparent lifecycle from concept to launch.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { n: "01", t: "Research & Strategy", d: "Feature planning, UX flows, and success goals." },
              { n: "02", t: "UI/UX & Prototype", d: "Interactive preview to validate experience early." },
              { n: "03", t: "Development", d: "App build, backend APIs, theme system, QA cycles." },
              { n: "04", t: "Launch & Iteration", d: "Store release, monitoring, and version updates." },
            ].map((s, i) => (
              <div key={i} className="relative pl-14">
                <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white flex items-center justify-center font-bold shadow">
                  {s.n}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{s.t}</h3>
                <p className="text-slate-600 text-sm mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Where Mobile Apps Drive Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🛍️", title: "eCommerce", desc: "Product browsing, checkout, member rewards." },
              { icon: "🚚", title: "Logistics", desc: "Driver apps, route planning, live tracking." },
              { icon: "🏥", title: "Healthcare", desc: "Telemed, patient records, reminders." },
              { icon: "🏫", title: "Education", desc: "LMS, quizzes, student-parent-teacher apps." },
              { icon: "💼", title: "Enterprise", desc: "Workflows, data capture, field apps." },
              { icon: "🏨", title: "Travel & Booking", desc: "Search, schedule, messaging, payments." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-gradient-to-br from-sky-50 via-white to-cyan-50">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                tag: "Mobile App",
                title: "Delivery Tracking App",
                desc: "Live route tracking, updates, driver performance and analytics dashboard.",
                img: "/case-mobile-delivery.jpg",
                metrics: [
                  { label: "Delivery Time", value: "-22%" },
                  { label: "Accuracy", value: "+41%" },
                  { label: "User Adoption", value: "89%" },
                ],
              },
              {
                tag: "Cross-Platform App",
                title: "Fitness & Coaching App",
                desc: "Custom workout builder, progress insights, streaks & push reminders.",
                img: "/case-mobile-fitness.jpg",
                metrics: [
                  { label: "Engagement", value: "+37%" },
                  { label: "Churn Drop", value: "-19%" },
                  { label: "App Rating", value: "4.8★" },
                ],
              },
            ].map((c, i) => (
              <div key={i} className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow hover:shadow-xl transition">
                <div className="aspect-[16/9] bg-slate-100">
                  <Image src={c.img} alt={c.title} width={960} height={540} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 text-sky-700">
                    {c.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{c.title}</h3>
                  <p className="text-slate-600 text-sm">{c.desc}</p>

                  <div className="mt-5 grid grid-cols-3 gap-4">
                    {c.metrics.map((m, idx) => (
                      <div key={idx} className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
                        <p className="text-sm text-slate-500">{m.label}</p>
                        <p className="text-base font-semibold text-slate-900">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link href="/contact-mindsmiratus-technologies" className="text-sky-700 font-semibold hover:underline">
                      Discuss a similar build →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FAQ */}
      <section className="py-24 bg-gradient-to-br from-sky-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16">
          
          {/* CTA CARD */}
          <div className="bg-white text-slate-900 p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Let's Build Your Mobile App</h3>
            <p className="text-slate-600 mb-8">From concept to store launch — we partner end-to-end.</p>
            <Link href="/contact-mindsmiratus-technologies" className="px-7 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition">
              Request Free Consultation
            </Link>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-2xl font-bold mb-6">FAQ</h3>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm shadow-sm">
                  <summary className="cursor-pointer px-6 py-4 flex justify-between items-center font-semibold">
                    {f.q}
                    <span className="text-2xl group-open:rotate-45 transition">+</span>
                  </summary>
                  <div className="px-6 pb-4 text-white/90 border-t border-white/20">{f.a}</div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}