"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  return (
    <>
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 pt-10">
      
      <div className="container mx-auto px-6 text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
  Work With a Team That Delivers Real Outcomes.
</h3>
<p className="mt-3 text-slate-400 max-w-2xl mx-auto">
  From product strategy to design and development — we help you launch, scale, and grow with confidence.
</p>

      </div>

      {/* Footer Main Grid */}
      <div className="container mx-auto px-6 pb-16 grid gap-12 md:grid-cols-4">

        {/* Company Info */}
        <motion.div {...fadeIn(0)}>
          <h3 className="text-white text-xl font-semibold mb-3">
            Mindsmiratus Technologies Pvt. Ltd.
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Digital Transformation & Software Engineering Company specializing in 
            Web Apps, Mobile Apps, Cloud, Hosting, and Growth Marketing.
          </p>

          <p className="text-sm">
            <strong>Head Office:</strong><br/>
            New Delhi, Delhi, India
          </p>
          <p className="text-sm mt-1">📧 mail@mindsmiratus.com</p>
          <p className="text-sm mt-1">📞 +91-XXXXXXXXXX</p>
        </motion.div>

        {/* Services */}
        <motion.div {...fadeIn(0.1)}>
          <h4 className="text-white font-semibold text-lg mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/website-designing-and-development" className="hover:text-white transition">Website Designing & Development</Link></li>
            <li><Link href="/web-application-development" className="hover:text-white transition">Web Application Development</Link></li>
            <li><Link href="/mobile-app-development" className="hover:text-white transition">Mobile App Development</Link></li>
            <li><Link href="/ecommerce-website-development" className="hover:text-white transition">eCommerce Development</Link></li>
            <li><Link href="/business-application-development" className="hover:text-white transition">Business / ERP / CRM Systems</Link></li>
            <li><Link href="/web-hosting-and-it-support" className="hover:text-white transition">Hosting & IT Support</Link></li>
          </ul>
        </motion.div>

        {/* Digital Marketing */}
        <motion.div {...fadeIn(0.2)}>
          <h4 className="text-white font-semibold text-lg mb-3">Digital Marketing</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/digital-marketing-services" className="hover:text-white transition">Digital Marketing Services</Link></li>
            <li><Link href="/seo-services" className="hover:text-white transition">SEO Services</Link></li>
            <li><Link href="/social-media-marketing" className="hover:text-white transition">Social Media Marketing</Link></li>
            <li><Link href="/smo-services" className="hover:text-white transition">SMO Services</Link></li>
            <li><Link href="/influencer-marketing" className="hover:text-white transition">Influencer Marketing</Link></li>
            <li><Link href="/google-ads-services" className="hover:text-white transition">Google Ads / PPC</Link></li>
          </ul>
        </motion.div>

        {/* Legal & Social */}
        <motion.div {...fadeIn(0.3)}>
          <h4 className="text-white font-semibold text-lg mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact-mindsmiratus-technologies" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
          </ul>

          <div className="flex gap-4 mt-6 text-slate-400">
            <a href="#" className="hover:text-white transition"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition"><Facebook size={18} /></a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-6"></div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 pb-6 text-center md:flex md:justify-between md:items-center text-slate-500 text-sm">
        <div>© {currentYear} Mindsmiratus Technologies Pvt. Ltd. All Rights Reserved.</div>
        <div className="flex justify-center md:justify-end gap-4 mt-3 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white transition">Privacy</Link>
          <Link href="/terms-and-conditions" className="hover:text-white transition">Terms</Link>
          <Link href="/refund-policy" className="hover:text-white transition">Refund</Link>
          <Link href="/sitemap.xml" className="hover:text-white transition">Sitemap</Link>
        </div>
      </div>

    </footer>
    </>
  );
}
