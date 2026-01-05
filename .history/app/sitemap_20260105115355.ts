import { MetadataRoute } from "next";

const BASE_URL = "https://www.mindsmiratus.com";

/** 1️⃣ Static pages */
const staticPages = [
  "/",
  "/about-us",
  "/contact-mindsmiratus-technologies",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-policy",
  "/cookie-policy",
];

/** 2️⃣ Service pages */
const servicePages = [
  "/web-application-development",
  "/mobile-app-development",
  "/seo-services-company",
  "/smo-services",
  "/digital-marketing-services",
  "/google-ads-services",
  "/social-media-marketing",
  "/influencer-marketing",
  "/whatsapp-api-service-provider",
  "/ivr-service-provider",
  "/voice-call-services",
  "/sms-rcs-messaging-service",
  "/website-designing-and-development",
  "/graphic-designing-service",
  "/ecommerce-website-designing",
  "/customer-communication-services",
  "/business-application-development",
  "/web-hosting-and-it-support",
];

/** 3️⃣ Generate sitemap */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [...staticPages, ...servicePages].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
