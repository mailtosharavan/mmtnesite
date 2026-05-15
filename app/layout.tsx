import "./../styles/globals.css";
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import ProgressBar from '../components/ProgressBar';
import FloatingActions from "../components/FloatingActions";
import { FloatingActionsProvider } from "../context/FloatingActionsContext";
import { getOGMetadata } from "../lib/og-metadata";


//Marketing / SEO pages may benefit from caching and Incremental Static Regeneration (ISR) so avoide below settings
// export const dynamic = "force-dynamic"; // need for Authentication pages
// export const fetchCache = "default-no-store"; // for fetch requests that should not be cached
// export const revalidate = 0;
export const revalidate = 3600; // 1 hour ISR


export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();

  const host = headersList.get("x-forwarded-host")
    ?? headersList.get("host")
    ?? "www.mindsmiratus.com";

  const baseUrl = `https://${host}`;
  const pathname = headersList.get("x-pathname") || "/";
  const canonicalUrl = `${baseUrl}${pathname}`;

  // Get page-specific OG metadata
  const ogMetadata = getOGMetadata(pathname, baseUrl);

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },

    title: ogMetadata.title,
    description: ogMetadata.description,

    openGraph: {
      title: ogMetadata.title,
      description: ogMetadata.description,
      url: canonicalUrl,
      siteName: "Mindsmiratus Technologies Pvt. Ltd.",
      images: [
        {
          url: ogMetadata.image,
          width: 1200,
          height: 630,
          alt: "Mindsmiratus Technologies Pvt. Ltd.",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: ogMetadata.title,
      description: ogMetadata.description,
      images: [ogMetadata.image],
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

  const host = headersList.get("x-forwarded-host")
    ?? headersList.get("host")
    ?? "www.mindsmiratus.com";

  const baseUrl = `https://${host}`;
  const pathname = headersList.get("x-pathname") || "";
  const canonicalUrl = `${baseUrl}${pathname}`;

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
      email: "mail@mindsmiratus.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      "streetAddress": "New Delhi",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110044",
      "addressCountry": "IN"
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

  // Generate breadcrumb schema dynamically based on pathname
  const generateBreadcrumbs = () => {
    if (!pathname || pathname === '/') {
      return null;
    }

    const paths = pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
    ];

    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      breadcrumbItems.push({
        "@type": "ListItem",
        position: index + 2,
        name: path
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        item: `${baseUrl}${currentPath}`,
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    };
  };

  const breadcrumbSchema = generateBreadcrumbs();

  // WebPage schema for current page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Mindsmiratus Technologies",
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/og-default.jpg`,
      width: 1200,
      height: 630,
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
        <FloatingActionsProvider>
          <ProgressBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </FloatingActionsProvider>
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              webPageSchema,
              ...(breadcrumbSchema ? [breadcrumbSchema] : []),
            ]),
          }}
        />
      </body>
    </html>
  );
}