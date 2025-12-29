import "./../styles/globals.css";
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";

//Marketing / SEO pages may benefit from caching and Incremental Static Regeneration (ISR) so avoide below settings
// export const dynamic = "force-dynamic"; // need for Authentication pages
// export const fetchCache = "default-no-store"; // for fetch requests that should not be cached
// export const revalidate = 0;
export const revalidate = 3600; // 1 hour ISR


export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();

  const protocol =
    headersList.get("x-forwarded-proto") ?? "https";

  const host =
    headersList.get("x-forwarded-host") ??
    headersList.get("host");

  const baseUrl = `${protocol}://${host}`;


  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${baseUrl}/#organization`,

    name: "Mindsmiratus Technologies Pvt. Ltd.",
    alternateName: "Mindsmiratus Technologies",

    url: `${baseUrl}/`,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-default.jpg`,

    description:
      "Mindsmiratus Technologies Pvt. Ltd. delivers digital transformation solutions including custom web & mobile applications, ERP, CRM, cloud solutions, and digital marketing services.",

    foundingDate: "2019",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9625306474",
      contactType: "customer support",
      email: "support@mindsmiratus.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },

    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },

    sameAs: [
      "https://www.linkedin.com/company/mindsmiratus/",
      "https://x.com/mindsmiratus",
      "https://www.facebook.com/mindsmiratus.tech/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: `${baseUrl}/`,
    name: "Mindsmiratus Technologies Pvt. Ltd.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };

  return {
    metadataBase: new URL(baseUrl),

    title: "Mindsmiratus Technologies Pvt. Ltd. — Digital Transformation",
    description:
      "We accelerate digital transformation with custom apps, process digitization, web & mobile development, digital marketing, IT infrastructure, and tailored e-commerce solutions.",

    openGraph: {
      title: "Mindsmiratus Technologies Pvt. Ltd. — Digital Transformation",
      description:
        "Accelerate digital transformation: web & mobile, branding, marketing, IT & e-commerce.",
      url: baseUrl,
      siteName: "Mindsmiratus Technologies Pvt. Ltd.",
      images: [
        {
          url: `${baseUrl}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: "Mindsmiratus Technologies Pvt. Ltd.",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Mindsmiratus Technologies Pvt. Ltd. — Digital Transformation",
      description:
        "We accelerate digital transformation: custom apps, marketing, and IT.",
      images: [`${baseUrl}/og-default.jpg`],
      creator: "@mindsmiratus",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

  export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();

  const protocol =
    headersList.get("x-forwarded-proto") ?? "https";

  const host =
    headersList.get("x-forwarded-host") ??
    headersList.get("host");

  const baseUrl = `${protocol}://${host}`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${baseUrl}/#organization`,

    name: "Mindsmiratus Technologies Pvt. Ltd.",
    alternateName: "Mindsmiratus Technologies",

    url: `${baseUrl}/`,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-default.jpg`,

    description:
      "Mindsmiratus Technologies Pvt. Ltd. delivers digital transformation solutions including custom web & mobile applications, ERP, CRM, cloud solutions, and digital marketing services.",

    foundingDate: "2019",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9625306474",
      contactType: "customer support",
      email: "support@mindsmiratus.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },

    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },

    sameAs: [
      "https://www.linkedin.com/company/mindsmiratus/",
      "https://x.com/mindsmiratus",
      "https://www.facebook.com/mindsmiratus.tech/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: `${baseUrl}/`,
    name: "Mindsmiratus Technologies Pvt. Ltd.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5CDC9LGF');`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CDC9LGF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </body>
    </html>
  );
}