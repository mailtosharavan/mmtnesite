import React from "react";

export const metadata = {
  title: "Privacy Policy | Digital Transformation",
  description:
    "Learn how Digital Transformation collects, uses, and protects your personal information while delivering IT, app development, and marketing services."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Digital Transformation</strong>, we value your privacy. This Privacy Policy
        explains how we collect, use, and safeguard your information when you visit our website,
        use our services, or interact with our team.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email, phone number, company details,
        and project requirements when you:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Fill out a contact or inquiry form.</li>
        <li>Subscribe to our newsletter or promotional materials.</li>
        <li>Request a quotation, demo, or consultation.</li>
        <li>Use our hosted or cloud-based services.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">We use the information collected to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Deliver requested IT and software development services.</li>
        <li>Respond to inquiries and provide support.</li>
        <li>Improve website performance, design, and user experience.</li>
        <li>Send relevant updates, newsletters, or offers (only with your consent).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Data Protection & Security</h2>
      <p className="mb-4">
        We implement strong technical and organizational measures to protect your data against
        unauthorized access, alteration, or misuse. Access to data is limited to authorized team
        members only.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party analytics, payment processors, and hosting services (e.g., Google
        Analytics, AWS, Azure, Stripe) to help deliver our offerings efficiently. These services
        operate under their respective privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance your browsing experience. You can manage or disable
        cookies from your browser settings at any time.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Data Retention</h2>
      <p className="mb-4">
        We retain personal information only as long as necessary to fulfill the purpose for which it
        was collected or as required by applicable laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Your Rights</h2>
      <p className="mb-4">
        You may request access, correction, or deletion of your personal information at any time by
        contacting us. We comply with GDPR and India’s IT (Reasonable Security Practices) Rules.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at: <br />
        <strong>Email:</strong> support@digitaltransformation.com <br />
        <strong>Address:</strong> 123 Innovation Park, Bengaluru, India
      </p>

      <p className="mt-8 text-sm text-slate-500">
        Last updated on {new Date().toLocaleDateString("en-IN")}.
      </p>
    </div>
  );
}
