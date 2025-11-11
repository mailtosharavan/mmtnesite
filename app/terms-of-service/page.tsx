import React from "react";

export const metadata = {
  title: "Terms of Service | Digital Transformation",
  description:
    "Read the terms of service governing the use of Digital Transformation’s IT, app development, and digital marketing services."
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Welcome to <strong>Digital Transformation</strong>. By accessing or using our website and
        services, you agree to comply with these Terms of Service.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Services Overview</h2>
      <p className="mb-4">
        We offer IT consulting, software development, mobile app development, website design,
        digital marketing, cloud, and automation services to businesses and individuals.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Use of Services</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes and in accordance with applicable
        laws. Misuse, unauthorized access, or reverse engineering of our systems is strictly
        prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Payments & Billing</h2>
      <p className="mb-4">
        All projects and subscriptions are subject to agreed pricing and payment schedules. Delayed
        payments may result in suspension of services until dues are cleared.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Intellectual Property</h2>
      <p className="mb-4">
        All software, code, design, and digital materials developed by Digital Transformation remain
        our intellectual property until full payment is received, unless otherwise stated in a
        written agreement.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Confidentiality</h2>
      <p className="mb-4">
        Both parties agree to maintain confidentiality of all business and technical information
        shared during the course of engagement.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for indirect, incidental, or consequential damages arising out of use or
        inability to use our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend access to our services at any time for conduct
        that violates these terms or causes harm to our systems or clients.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by the laws of India. Any disputes shall be subject to the
        jurisdiction of Bengaluru, Karnataka.
      </p>

      <p className="mt-8 text-sm text-slate-500">
        Last updated on {new Date().toLocaleDateString("en-IN")}.
      </p>
    </div>
  );
}
