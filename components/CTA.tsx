"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white text-center mt-20 md:mt-28">
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative container mx-auto px-6 max-w-3xl"
      >
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-sm">
          Let’s Build Something Great Together
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
          Whether you need a custom web app, brand revamp, or full-scale digital transformation —
          our team is ready to turn your vision into reality.
        </p>
        <Link
          href="/contact-mindsmiratus-technologies"
          className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-xl hover:bg-indigo-50 transition-all duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>

      {/* Decorative soft gradient blobs */}
      <div className="absolute -bottom-20 -left-16 w-64 h-64 bg-indigo-400/30 blur-3xl rounded-full" />
      <div className="absolute -top-20 -right-16 w-72 h-72 bg-purple-400/30 blur-3xl rounded-full" />
    </section>
  );
}
