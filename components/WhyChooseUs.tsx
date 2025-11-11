"use client";
import { ShieldCheck, Zap, Users, Globe } from "lucide-react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const features = [
  { icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />, title: "Reliable & Secure", desc: "We ensure your digital assets are safe, scalable, and future-ready." },
  { icon: <Zap className="w-10 h-10 text-indigo-600" />, title: "Fast Delivery", desc: "Agile teams and optimized workflows to deliver projects on time." },
  { icon: <Users className="w-10 h-10 text-indigo-600" />, title: "Expert Team", desc: "Our experienced professionals bring 13+ years of development expertise." },
  { icon: <Globe className="w-10 h-10 text-indigo-600" />, title: "Global Reach", desc: "Trusted by businesses across industries and countries." },
];

export default function WhyChooseUs() {
  const { ref, MotionDiv, animation } = useFadeInOnScroll();

  return (
    <section ref={ref} className="py-20 bg-white">
      <MotionDiv {...animation}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((item, i) => {
              const { ref, MotionDiv, animation } = useFadeInOnScroll(i * 0.2);
              return (
                <MotionDiv
                  key={i}
                  ref={ref}
                  {...animation}
                  className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}
