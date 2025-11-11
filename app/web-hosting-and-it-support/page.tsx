import Image from "next/image";
import Link from "next/link";
import {
  FaShieldAlt,
  FaCloud,
  FaServer,
  FaSync,
  FaHeadset,
  FaCheckCircle,
  FaLock,
  FaChartLine,
  FaClock,
  FaTools,
} from "react-icons/fa";

export const metadata = {
  title: "Hosting & IT Support Services | Reliable Servers, Security & Maintenance",
  description:
    "Managed hosting, cloud migration, email setup, SSL, backups, performance tuning, and 24/7 IT support for websites and business applications.",
  alternates: {
    canonical: "https://www.mindsmiratus.com/hosting-and-it-support",
  },
};

export default function HostingAndITSupportPage() {
  const valueProps = [
    {
      icon: <FaCloud className="text-cyan-600 text-2xl" />,
      title: "Reliable Infrastructure",
      desc: "Optimized, secure hosting with guaranteed uptime.",
    },
    {
      icon: <FaHeadset className="text-cyan-600 text-2xl" />,
      title: "24/7 Support",
      desc: "Quick issue resolution with dedicated support teams.",
    },
    {
      icon: <FaShieldAlt className="text-cyan-600 text-2xl" />,
      title: "Security First",
      desc: "Hardened servers, SSL, firewall rules & threat monitoring.",
    },
    {
      icon: <FaSync className="text-cyan-600 text-2xl" />,
      title: "Zero Downtime Care",
      desc: "Backup + failover systems to prevent disruption.",
    },
  ];

  const services = [
    {
      title: "Managed Hosting & Servers",
      points: [
        "Shared / VPS / Dedicated Setup",
        "Linux, Windows, cPanel, Plesk",
        "Performance Configuration",
        "Load Balancing & CDN Setup",
      ],
    },
    {
      title: "Cloud Setup & Migration",
      points: [
        "AWS / Azure / Google Cloud",
        "App + Database Migration",
        "Cost Optimization & Scaling",
        "Monitoring & SLA Alerts",
      ],
    },
    {
      title: "Email, Domain & DNS Management",
      points: [
        "Google Workspace / Microsoft 365",
        "Spam Filter & Mail Reputation",
        "Domain Renewals & DNS Setup",
        "MX / SPF / DKIM / DMARC Configuration",
      ],
    },
    {
      title: "Backup & Disaster Recovery",
      points: [
        "Automated Nightly Backups",
        "Offsite / Multi-Region Replicas",
        "Rapid Recovery Workflow",
        "Version Snapshot & Rollback",
      ],
    },
    {
      title: "Server Security & Hardening",
      points: [
        "Firewall & IDS/IPS",
        "Malware/Brute Force Protection",
        "OS & Patch Updates",
        "Encryption & SSL/TLS",
      ],
    },
    {
      title: "Maintenance & Performance Tuning",
      points: [
        "Resource Optimization",
        "Server Load Analysis",
        "Database Tuning",
        "Uptime Monitoring",
      ],
    },
  ];

  const process = [
    { step: "01", title: "Assessment", desc: "Review hosting needs, usage patterns & risk points." },
    { step: "02", title: "Setup / Migration", desc: "Deploy or migrate server and services with zero downtime." },
    { step: "03", title: "Security Hardening", desc: "Apply firewall, SSL, patching, backups and monitoring." },
    { step: "04", title: "Continuous Support", desc: "Monitoring, updates, incident response & scaling." },
  ];

  const faqs = [
    {
      q: "Can you migrate without downtime?",
      a: "Yes. We schedule staged cutover, syncing data in real-time to ensure no interruption.",
    },
    {
      q: "Do you support custom application hosting?",
      a: "Yes. We manage hosting for .NET, Node.js, PHP, React, Next.js, SQL, and NoSQL stacks.",
    },
    {
      q: "What about data security?",
      a: "We implement encryption, IAM, backups, firewalls, and audit trails.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Hosting &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                IT Support Services
              </span>
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Reliable infrastructure, proactive monitoring, and dedicated support to
              keep your business online and secure 24/7.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: <FaClock />, label: "Support", value: "24/7" },
                { icon: <FaLock />, label: "Security", value: "Enterprise-grade" },
                { icon: <FaChartLine />, label: "Uptime", value: "99.9%" },
              ].map((t, i) => (
                <div key={i} className="rounded-2xl bg-white/70 p-4 border border-slate-200 text-center shadow-sm">
                  <div className="text-cyan-600 text-xl mx-auto">{t.icon}</div>
                  <p className="text-xl font-bold text-slate-900">{t.value}</p>
                  <p className="text-xs text-slate-600">{t.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact-mindsmiratus-technologies"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold shadow hover:shadow-lg transition"
              >
                Get Support Now
              </Link>
              <a
                href="#services"
                className="px-7 py-3 rounded-full border border-cyan-600 text-cyan-600 hover:bg-cyan-50 transition"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <Image src="/hero-hosting-support.svg" alt="Hosting & Support" width={540} height={410} priority />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-18 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Why Choose Us</h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Managed hosting designed for performance, security, and long-term stability.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition">
                {v.icon}
                <h3 className="mt-3 text-lg font-semibold text-slate-800">{v.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Hosting & IT Support Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border bg-white/70 backdrop-blur-xl border-slate-200 shadow hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{s.title}</h3>
                <ul className="space-y-2 text-sm text-slate-700">
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

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">How We Work</h2>
          <div className="grid lg:grid-cols-4 gap-10 mt-10">
            {process.map((p, i) => (
              <div key={i} className="relative pl-12">
                <span className="absolute left-0 top-0 text-2xl font-extrabold text-cyan-500/40">{p.step}</span>
                <h3 className="text-lg font-semibold text-slate-800">{p.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FAQ */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-start">
          <div className="bg-white/10 p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-cyan-50 mb-8">
              Our support engineers are available 24/7 to resolve hosting or application issues.
            </p>
            <Link
              href="/contact-mindsmiratus-technologies"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-cyan-700 rounded-full font-semibold hover:bg-cyan-50 transition"
            >
              Request Support
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">FAQ</h3>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group border border-white/20 rounded-2xl bg-white/10 shadow-sm transition"
                >
                  <summary className="px-6 py-4 cursor-pointer font-semibold flex justify-between items-center">
                    {f.q}
                    <span className="text-white text-2xl group-open:rotate-45 transition">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-cyan-50 border-t border-white/10">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}