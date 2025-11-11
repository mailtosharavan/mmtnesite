import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FaHandshake,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaCheckCircle,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us | Mindsmiratus Technologies Pvt. Ltd.",
  description:
    "Mindsmiratus Technologies is a full-stack digital transformation partner delivering custom applications, integrated solutions, cloud hosting, and growth-driven marketing.",
  alternates: { canonical: "https://www.mindsmiratus.com/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              We Build Digital Systems That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                Move Businesses Forward
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Mindsmiratus Technologies Pvt. Ltd. is a technology company
              helping organizations modernize operations, improve efficiency,
              and scale growth through intelligent software and digital innovation.
            </p>
          </div>

          <div className="hidden lg:flex justify-end">
  <Image
    src="/about-company-hero.svg"
    alt="About Mindsmiratus Technologies"
    width={540}
    height={420}
    priority
    className="mm-float"
  />
</div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900">Our Purpose</h2>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            We exist to empower businesses with modern, scalable, and efficient digital systems.
            Every solution we build is practical, measurable, and aligned with real business outcomes.
          </p>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-14">
            What Defines Us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLightbulb className="text-cyan-600 text-3xl" />,
                title: "Innovation Built In",
                desc: "We solve real business challenges with smart, future-ready solutions."
              },
              {
                icon: <FaHandshake className="text-cyan-600 text-3xl" />,
                title: "Partnership Mindset",
                desc: "We work alongside our clients as a growth and technology partner."
              },
              {
                icon: <FaCogs className="text-cyan-600 text-3xl" />,
                title: "Engineering Excellence",
                desc: "Clean architecture, reliability, and performance at every layer."
              },
              {
                icon: <FaChartLine className="text-cyan-600 text-3xl" />,
                title: "Outcome Focused",
                desc: "We measure our success by business impact and results."
              },
            ].map((v, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition"
              >
                {v.icon}
                <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white text-center">
        <div className="container mx-auto px-6 lg:px-16 grid sm:grid-cols-3 gap-12">
          <div>
            <FaUsers className="mx-auto text-4xl mb-2" />
            <h3 className="text-4xl font-extrabold">320+</h3>
            <p className="text-sm opacity-90">Clients Served</p>
          </div>
          <div>
            <FaGlobeAsia className="mx-auto text-4xl mb-2" />
            <h3 className="text-4xl font-extrabold">7 Countries</h3>
            <p className="text-sm opacity-90">Global Reach</p>
          </div>
          <div>
            <FaCheckCircle className="mx-auto text-4xl mb-2" />
            <h3 className="text-4xl font-extrabold">98%</h3>
            <p className="text-sm opacity-90">Project Success Rate</p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      {/* OUR STORY */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6 lg:px-16 max-w-5xl">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Our Journey
    </h2>

    <div className="space-y-8 border-l border-slate-200 pl-8">

      <div className="relative">
        <span className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-cyan-600"></span>
        <p className="text-slate-900 font-semibold">2012</p>
        <p className="text-slate-600 text-sm">
          Started as <strong>Agnith Technologies</strong>, working as a proprietor firm focusing on custom software and website development for small and mid-size businesses.
        </p>
      </div>

      <div className="relative">
        <span className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-cyan-600"></span>
        <p className="text-slate-900 font-semibold">2016</p>
        <p className="text-slate-600 text-sm">
          Incorporated as <strong>Mindsmiratus Technologies Pvt. Ltd.</strong> with a vision to deliver enterprise-grade solutions with structured execution processes.
        </p>
      </div>

      <div className="relative">
        <span className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-cyan-600"></span>
        <p className="text-slate-900 font-semibold">2018</p>
        <p className="text-slate-600 text-sm">
          Expanded into UI/UX, cloud hosting, infrastructure management, digital marketing, and CRM/ERP business applications.
        </p>
      </div>

      <div className="relative">
        <span className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-cyan-600"></span>
        <p className="text-slate-900 font-semibold">2023 - Present</p>
        <p className="text-slate-600 text-sm">
          Established as a trusted <strong>end-to-end digital transformation partner</strong> with global clients across healthcare, education, travel, BFSI, and retail sectors.
        </p>
      </div>

    </div>
  </div>
</section>
{/* FOUNDER MESSAGE */}
<section className="py-20 bg-slate-50">
  <div className="container mx-auto px-6 lg:px-16 max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
    
    <div>
      <Image
        src="/founder-photo.jpg" // replace with real image
        alt="Founder - Mindsmiratus Technologies"
        width={420}
        height={420}
        className="rounded-3xl shadow-lg object-cover"
      />
    </div>

    <div>
      <h2 className="text-3xl font-bold text-slate-900">Message from Our Founder</h2>
      <p className="mt-4 text-slate-600 leading-relaxed">
        When we started in 2012, our goal was simple — to build technology that truly
        solves business problems. Not just apps, not just websites, but solutions that
        help organizations operate better, scale faster, and deliver meaningful value to
        their customers.
      </p>
      <p className="mt-4 text-slate-600 leading-relaxed">
        Today, as Mindsmiratus Technologies Pvt. Ltd., we continue this mission with the
        same passion — combining innovation with practicality, engineering with empathy,
        and long-term partnership with measurable results.
      </p>
      <p className="mt-6 font-semibold text-slate-900">
        — Founder & Director, Mindsmiratus Technologies Pvt. Ltd.
      </p>
    </div>

  </div>
</section>
{/* TEAM */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
      Our Leadership & Core Team
    </h2>

    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-16 text-lg">
      A team of designers, engineers, strategists, and technologists working together
      to create dependable, user-centric digital solutions.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

      {[
        { name: "Founder / Director", img: "/team-1.jpg" },
        { name: "Technical Lead", img: "/team-2.jpg" },
        { name: "UI/UX Lead", img: "/team-3.jpg" },
        { name: "Backend Engineering Team", img: "/team-4.jpg" },
        { name: "Mobile App Team", img: "/team-5.jpg" },
        { name: "Marketing & Solutions Team", img: "/team-6.jpg" },
      ].map((m, i) => (
        <div key={i} className="text-center">
          <Image
            src={m.img}
            alt={m.name}
            width={260}
            height={260}
            className="rounded-2xl shadow-md object-cover w-full"
          />
          <h3 className="mt-4 text-lg font-semibold text-slate-800">{m.name}</h3>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Something Meaningful.</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Whether you're scaling an organization or launching something new,
            we help turn your ideas into reliable, scalable technology.
          </p>

          <Link
            href="/contact-mindsmiratus-technologies"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-cyan-700 rounded-full font-semibold hover:bg-slate-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}