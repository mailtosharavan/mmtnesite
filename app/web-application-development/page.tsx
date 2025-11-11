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
  FaQuestionCircle,
  FaCogs,
  FaUsers,
} from "react-icons/fa";

export const metadata = {
  title: "Web Application Development Company | Custom Web Apps & SaaS Solutions",
  description:
    "We build secure, scalable, and high-performance web applications tailored to your business. From dashboards and portals to SaaS platforms and workflow automation systems.",
  alternates: { canonical: "https://www.mindsmiratus.com/web-application-development" },
};

export default function WebApplicationDevelopmentPage() {
  const services = [
    {
      icon: "⚙️",
      title: "Custom Web App Development",
      desc: "Fully tailored apps that align with your workflow and business logic.",
      points: [
        "User Roles & Permissions",
        "Custom Data Models",
        "Integrated Dashboards",
        "Secure Web Architecture",
      ],
    },
    {
      icon: "🧩",
      title: "SaaS Product Development",
      desc: "Multi-tenant SaaS platforms built for subscription & scalability.",
      points: [
        "Tenant Isolation & RBAC",
        "Usage Analytics",
        "Payment/Subscription Modules",
        "High-Availability Hosting",
      ],
    },
    {
      icon: "🔗",
      title: "API Development & Integrations",
      desc: "Connect internal systems, third-party services & automation workflows.",
      points: [
        "REST / GraphQL API",
        "CRM / ERP / Payment Gateways",
        "Webhooks & Event Pipelines",
        "Secure Token Auth",
      ],
    },
    {
      icon: "📊",
      title: "Admin Dashboards & Portals",
      desc: "Internal business control systems with real-time data visibility.",
      points: [
        "Real-Time Analytics",
        "Role-Based Visibility",
        "Custom Reporting",
        "Data Export & Insights",
      ],
    },
    {
      icon: "🔍",
      title: "Performance Optimization",
      desc: "Make your app faster, more efficient, and cost-effective.",
      points: [
        "API Response Tuning",
        "Caching & Load Handling",
        "DB Query Optimization",
        "Core Web Vitals Boost",
      ],
    },
    {
      icon: "🛠️",
      title: "Maintenance & Feature Enhancements",
      desc: "Keep your app secure, stable, and continuously improving.",
      points: [
        "Feature Upgrades",
        "Security Patch Management",
        "Monitoring & Logs",
        "Support SLA Options",
      ],
    },
  ];

  const faqs = [
    {
      q: "Which tech stacks do you use for web app development?",
      a: "We commonly use React, Next.js, Node.js, .NET, and SQL/NoSQL databases depending on scalability and performance needs.",
    },
    {
      q: "Can you modernize or upgrade my existing web application?",
      a: "Yes — we refactor, rebuild, migrate tech stacks, optimize performance, and redesign UI/UX.",
    },
    {
      q: "Do you provide long-term support?",
      a: "Yes — we offer ongoing maintenance, SLAs, monitoring & continuous optimization.",
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
              Web Application Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                Dashboards • Portals • SaaS • Automation Systems
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We build secure, scalable & high-performance web applications that streamline business operations
              and deliver a seamless user experience.
            </p>

            {/* Trust Stats */}
            <div className="mt-7 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { icon: <FaStar />, label: "Client Rating", value: "4.9/5" },
                { icon: <FaServer />, label: "App Deployments", value: "200+" },
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
              <Link href="/contact-mindsmiratus-technologies" className="px-7 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold shadow hover:shadow-lg transition">Start Your Project</Link>
              <a href="#services" className="px-7 py-3 rounded-full border border-sky-500 text-sky-600 hover:bg-sky-50 transition">View Services</a>
            </div>
          </div>

          {/* VISUAL */}
          <svg width="620" height="460" viewBox="0 0 620 460" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradB" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>

  <rect width="620" height="460" rx="24" fill="#f8fafc"/>

  <rect x="100" y="80" width="420" height="260" rx="18" fill="#fff" stroke="#dbe3f0" stroke-width="2"/>

  <rect x="120" y="105" width="90" height="14" rx="7" fill="url(#gradB)" opacity="0.6"/>
  <rect x="220" y="105" width="65" height="14" rx="7" fill="#e2e8f0"/>
  <rect x="295" y="105" width="55" height="14" rx="7" fill="#e2e8f0"/>

  <rect x="120" y="140" width="40" height="160" rx="10" fill="#f1f5f9"/>

  <rect x="180" y="150" width="120" height="70" rx="12" fill="url(#gradB)" opacity="0.12"/>
  <rect x="320" y="150" width="150" height="70" rx="12" fill="#f1f5f9"/>

  <rect x="180" y="240" width="150" height="60" rx="12" fill="#f1f5f9"/>
  <rect x="350" y="240" width="120" height="60" rx="12" fill="url(#gradB)" opacity="0.12"/>

  <circle cx="520" cy="110" r="70" fill="url(#gradB)" opacity="0.14"/>
</svg>


        </div>
      </section>
{/* VALUE PROPOSITION */}
<section className="relative py-10 bg-gradient-to-r from-sky-50 via-white to-cyan-50">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { icon: <FaBolt />, title: "Fast & SEO-Ready", desc: "Core Web Vitals, clean code, and schema." },
        { icon: <FaShieldAlt />, title: "Secure by Design", desc: "Hardened auth, roles, & cloud best practices." },
        { icon: <FaThumbsUp />, title: "Delightful UX", desc: "Conversion-focused layouts & micro-interactions." },
        { icon: <FaCogs />, title: "Scalable Stack", desc: "Modern frameworks, CI/CD, and modular code." },
      ].map((item, i) => (
        <div key={i}
          className="group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-6 shadow hover:shadow-lg hover:-translate-y-0.5 transition">
          <div className="text-2xl text-sky-600">{item.icon}</div>
          <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
          <p className="text-sm text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* SERVICES GRID */}
      <section id="services" className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">What We Build</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow hover:shadow-2xl hover:-translate-y-1 transition">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm mb-5">{s.desc}</p>

                <ul className="text-slate-700 text-sm space-y-2">
                  {s.points.map((p, idx) => (
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
{/* BENEFITS (Glass Cards) */}
<section className="py-20 bg-gradient-to-b from-white to-slate-50">
  <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
      Tangible Benefits for Your Business
    </h2>
    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-14 text-lg">
      We blend strategy, design, and engineering to deliver measurable outcomes.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { k: "↑", title: "Higher Conversions", desc: "Clear UX, faster loads, and persuasive content flow." },
        { k: "★", title: "Brand Credibility", desc: "A polished presence that builds instant trust." },
        { k: "⚙︎", title: "Operational Efficiency", desc: "Automations and integrations that save hours." },
        { k: "🔎", title: "Search Visibility", desc: "SEO-first structure with technical best practices." },
        { k: "🔐", title: "Enterprise-grade Security", desc: "Hardened auth, OWASP-aware development." },
        { k: "📈", title: "Scalable Growth", desc: "Modular architecture ready for new features." },
      ].map((b, i) => (
        <div key={i}
          className="rounded-3xl p-8 border border-slate-200 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition">
          <div className="text-3xl">{b.k}</div>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">{b.title}</h3>
          <p className="text-slate-600 text-sm">{b.desc}</p>
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
      A transparent, collaborative path from idea to impact.
    </p>

    <div className="grid md:grid-cols-2 gap-10">
      {[
        { n: "01", t: "Discovery & Strategy", d: "Workshops, requirements, success metrics, and scope." },
        { n: "02", t: "UX/UI & Prototyping", d: "Flows, wireframes, high-fidelity design, design system." },
        { n: "03", t: "Development", d: "Iterative sprints, clean APIs, testing, and performance." },
        { n: "04", t: "QA, Launch & Optimize", d: "Security/UX QA, SEO, analytics, and ongoing improvements." },
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
{/* INDUSTRY USE CASES */}
<section className="py-20 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Industry Use Cases</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: "🏥", title: "Healthcare", desc: "Appointment portals, EMR dashboards, HIPAA-aware flows." },
        { icon: "🏫", title: "Education", desc: "LMS, admission funnels, test engines, and parent apps." },
        { icon: "🛒", title: "eCommerce", desc: "Headless storefronts, checkout optimization, analytics." },
        { icon: "💼", title: "B2B/SaaS", desc: "Self-serve onboarding, billing, usage analytics." },
        { icon: "🏗️", title: "Real Estate", desc: "Property listings, CRM, lead routing, site visits." },
        { icon: "🚚", title: "Logistics", desc: "Tracking, route planning, partner portals, invoicing." },
      ].map((it, i) => (
        <div key={i} className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
          <div className="text-4xl mb-4">{it.icon}</div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">{it.title}</h3>
          <p className="text-slate-600 text-sm">{it.desc}</p>
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
          tag: "Web Application",
          title: "Operations Dashboard for D2C Brand",
          desc: "Unified orders, inventory, and support with role-based access and real-time KPIs.",
          img: "/case-webapp-ops.jpg",
          metrics: [
            { icon: <FaChartLine />, label: "Lead-time", value: "-28%" },
            { icon: <FaClock />, label: "Task TAT", value: "-34%" },
            { icon: <FaUsers />, label: "Adoption", value: "92%" },
          ],
        },
        {
          tag: "Website + SEO",
          title: "High-Conversion Site for B2B SaaS",
          desc: "Redesigned IA, performance tuning, and SEO setup boosted demo requests.",
          img: "/case-site-b2b.jpg",
          metrics: [
            { icon: <FaChartLine />, label: "Demo CTR", value: "+41%" },
            { icon: <FaBolt />, label: "CWV Score", value: "90+ LCP" },
            { icon: <FaThumbsUp />, label: "Bounce", value: "-22%" },
          ],
        },
      ].map((c, i) => (
        <div key={i}
          className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow hover:shadow-xl transition">
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
                  <div className="text-sky-600 text-lg flex justify-center">{m.icon}</div>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Web Application?</h3>
            <p className="text-slate-600 mb-8">Let’s transform your idea into a scalable, efficient & user-friendly digital platform.</p>
            
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