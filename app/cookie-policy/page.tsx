import React from "react";

export const metadata = {
  title: "Cookie Policy | Digital Transformation",
  description:
    "Understand how Digital Transformation uses cookies and similar technologies to enhance your browsing experience."
};

export default function CookiePolicyPage() {
  return (
    <div className="container py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p className="mb-4">
        This Cookie Policy explains how <strong>Digital Transformation</strong> uses cookies and
        similar technologies on our website to improve functionality and user experience.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device when you visit a website. They help us
        remember your preferences, analyze usage patterns, and enhance navigation.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Types of Cookies We Use</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Essential Cookies:</strong> Required for website functionality and security.
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us understand how users interact with our site.
        </li>
        <li>
          <strong>Marketing Cookies:</strong> Used to deliver relevant ads and track campaign
          effectiveness.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Managing Cookies</h2>
      <p className="mb-4">
        You can control or delete cookies through your browser settings. Please note that disabling
        cookies may affect some website features.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-Party Cookies</h2>
      <p className="mb-4">
        We may use third-party cookies from analytics, advertising, or social media platforms. These
        third parties have their own privacy and cookie policies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Updates</h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time. Changes will be posted on this page.
      </p>

      <p className="mt-8 text-sm text-slate-500">
        Last updated on {new Date().toLocaleDateString("en-IN")}.
      </p>
    </div>
  );
}
