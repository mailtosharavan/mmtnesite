/*ServiceBenefits.tsx*/
"use client";

import { FaBullseye, FaClock, FaChartLine, FaMobileAlt, FaLock, FaHandshake } from "react-icons/fa";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const benefits = [
  { title: "Enhanced Engagement", desc: "Reach your customers instantly via SMS, WhatsApp, and IVR campaigns.", icon: FaBullseye, delay: 0 },
  { title: "Multi-Channel Communication", desc: "Deliver messages through SMS, RCS, WhatsApp API, and voice calls.", icon: FaMobileAlt, delay: 0.2 },
  { title: "Time & Cost Efficiency", desc: "Automate campaigns to save time, reduce operational costs, and improve productivity.", icon: FaClock, delay: 0.4 },
  { title: "Data-Driven Insights", desc: "Track campaign performance and optimize for better engagement.", icon: FaChartLine, delay: 0.6 },
  { title: "Reliable & Secure", desc: "Secure, compliant, and reliable messaging & voice services.", icon: FaLock, delay: 0.8 },
  { title: "Trusted Partnership", desc: "Expert guidance and continuous support to achieve your communication goals.", icon: FaHandshake, delay: 1 },
];

export default function ServiceBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Benefits of Our Customer Communication Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((item, index) => {
            const { ref, MotionDiv, animation } = useFadeInOnScroll(item.delay);
            const Icon = item.icon;
            return (
              <MotionDiv
                key={index}
                ref={ref}
                initial={animation.initial}
                animate={animation.animate}
                transition={animation.transition}
                className="p-10 bg-cyan-50 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col items-center text-center"
              >
                <Icon className="text-cyan-600 text-4xl mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-700 text-sm">{item.desc}</p>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}