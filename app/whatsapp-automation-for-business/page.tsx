import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

export const metadata: Metadata = {
  title: "WhatsApp Automation & Business API | Automate Your Business",
  description: "Automate customer conversations with WhatsApp Business API. Send notifications, manage leads, automate support, and grow your business with WhatsApp automation.",
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
