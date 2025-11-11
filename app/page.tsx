import React from "react";
import AnimatedHeadline from "../components/AnimatedHeadline";
import Services from "../components/Services";
import IndustryGrid from "../components/IndustryGrid";
import CTA from "../components/CTA";
import SEO from "../components/SEO";
import HeroClient from "../components/HeroClient"; // client wrapper
import WhyChooseUs from "../components/WhyChooseUs";
import OurClients from "../components/OurClients";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Digital Transformation Services — Custom Apps, Marketing & IT"
        description="Partner with us for end-to-end digital transformation: digitize workflows, build custom apps, deploy cloud infrastructure, and accelerate growth with marketing."
        url="https://www.mindsmiratus.com"
      />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedHeadline
                short="Your Partner in"
                highlighted="Digital Transformation"
                sub="We digitize operations, build custom apps, and grow your business with design, marketing, and infrastructure."
              />
              <p className="mt-6 text-slate-600 max-w-xl">
                End-to-end expertise from process analysis to deployment. Tailored solutions for retail, hospitality, finance, healthcare, logistics and more.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="/contact-mindsmiratus-technologies"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-white shadow hover:brightness-95"
                >
                  Get a Free Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-200 text-slate-700"
                >
                  Explore Services
                </a>
              </div>
            </div>
            <div className="w-full h-[420px]">
              <HeroClient />
            </div>
          </div>
        </div>
      </section>

        <Services />
      <WhyChooseUs />
      <OurClients />
      <Testimonials />
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-6">Industries We Serve</h2>
          <IndustryGrid />
        </div>
      </section>
<CTA />
    </>
  );
}