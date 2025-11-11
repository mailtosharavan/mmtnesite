"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "They transformed our legacy systems into a fully automated digital process. The impact was immediate and measurable.",
    name: "Rakesh Mehta",
    company: "ABC Retail Pvt. Ltd."
  },
  {
    text: "Excellent team – professional, responsive, and highly skilled. Our mobile app exceeded expectations.",
    name: "Sonal Patel",
    company: "Zenith Healthcare"
  },
  {
    text: "A great partner for our digital marketing and CRM automation needs. Highly recommended!",
    name: "Vivek Sharma",
    company: "NextGen Foods"
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
