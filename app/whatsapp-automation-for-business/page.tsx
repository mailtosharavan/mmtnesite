import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

export const metadata: Metadata = {
  title: "WhatsApp Pricing Landing Page | Mindsmiratus Technologies",
  description:
    "High-conversion WhatsApp API pricing landing page with premium lead form, pricing plans, and FAQ support from Mindsmiratus Technologies.",
  keywords: [
    "WhatsApp API pricing",
    "WhatsApp Business API landing page",
    "lead generation landing page",
    "WhatsApp automation",
    "customer communication services",
  ],
};

export default function LandingPage() {
  return <LandingPageClient />;
}
