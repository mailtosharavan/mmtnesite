import "./../styles/globals.css";
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mindsmiratus Technologies Pvt ltd — Digital Transformation",
  description:
    "We accelerate digital transformation with custom apps, process digitization, web & mobile development, digital marketing, IT infrastructure, and tailored e-commerce solutions.",
  metadataBase: new URL("https://www.mindsmiratus.com"), // for relative alternates/canonical
  openGraph: {
    title: "Mindsmiratus Technologies Pvt ltd — Digital Transformation",
    description:
      "Accelerate digital transformation: web & mobile, branding, marketing, IT & e-commerce.",
    url: "https://www.mindsmiratus.com",
    siteName: "Mindsmiratus Technologies Pvt ltd",
    images: [
      {
        url: "https://www.mindsmiratus.com/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Mindsmiratus Technologies Pvt ltd — Digital Transformation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindsmiratus Technologies Pvt ltd — Digital Transformation",
    description:
      "We accelerate digital transformation: custom apps, marketing, and IT.",
    images: ["https://www.mindsmiratus.com/og-default.jpg"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digital Transformation Pvt. Ltd.",
              url: "https://www.digitaltransformation.com",
              logo: "https://www.digitaltransformation.com/logo.png",
              description:
                "We accelerate digital transformation through custom web & mobile apps, cloud solutions, and marketing services.",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91 98765 43210",
                  contactType: "customer service",
                  email: "support@digitaltransformation.com",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/digitaltransformation",
                "https://twitter.com/digitaltransformation",
                "https://facebook.com/digitaltransformation",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}