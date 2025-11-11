/** WhyChooseBenefits*/
"use client";

import { FaUsers, FaProjectDiagram, FaHandshake, FaShieldAlt, FaRocket } from "react-icons/fa";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const reasons = [
  { title: "Expert Team", desc: "Skilled professionals in SMS, WhatsApp API, IVR, and broadcast systems.", icon: FaUsers, delay: 0 },
  { title: "Customized Solutions", desc: "Tailored communication strategies for your unique business needs.", icon: FaProjectDiagram, delay: 0.2 },
  { title: "Trusted Partner", desc: "We focus on long-term relationships and measurable results.", icon: FaHandshake, delay: 0.4 },
  { title: "Secure & Compliant", desc: "All services comply with data security and privacy regulations.", icon: FaShieldAlt, delay: 0.6 },
  { title: "Fast & Reliable", desc: "Guaranteed high deliverability and uptime for all campaigns.", icon: FaRocket, delay: 0.8 },
];

export default function WhyChooseBenefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Why Choose Mindsmiratus for Customer Communication
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const { ref, MotionDiv, animation } = useFadeInOnScroll(item.delay);
            const Icon = item.icon;
            return (
              <MotionDiv
                key={index}
                ref={ref}
                initial={animation.initial}
                animate={animation.animate}
                transition={animation.transition}
                className="p-6 bg-cyan-100 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center border border-cyan-200"
              >
                <Icon className="text-cyan-700 text-3xl mb-3" />
                <h3 className="text-xl font-semibold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
