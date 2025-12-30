"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "They transformed our legacy systems into a fully automated digital process. The impact was immediate and measurable.",
    name: "Mr. Talha Saiffudin",
    company: "Crystal Air Systems"
  },
  {
    text: "Good service and knowledgeable team. Would definitely recommend MindsMiratus for business solutions.",
    name: "Mrs.Rucha Tayade",
    company: "VAMA Events"
  },
  {
    text: "A great partner for our digital marketing and CRM automation needs. Highly recommended!",
    name: "Dr. S.K. Gupta",
    company: "RVO ICMAI"
  },
 {
    text: "Reliable company for web development and digital marketing services. Happy with the results.",
    name: "Dr. parul Sony",
    company: "Complete Eye Care"
  },
  {
    text: "Very satisfied with their services. Good communication, quality work, and fair pricing.",
    name: "Mr. Anil Bakshi",
    company: "Creative Shrine"
  },
  {
    text: "Great experience with MindsMiratus Technologies. Very professional team and timely delivery. Highly recommended!",
    name: "Mr. Anand",
    company: "Credo Manipur"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-slate-800"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-slate-600 mb-12 max-w-2xl mx-auto"
        >
          Our clients' success stories speak for themselves. Here's what they
          have to say about working with us.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 text-left"
            >
              <p className="text-slate-700 italic">“{t.text}”</p>
              <div className="mt-4">
                <h4 className="font-semibold text-primary">{t.name}</h4>
                <p className="text-sm text-slate-500">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
