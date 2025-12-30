import { headers } from "next/headers";

export async function getServiceSchema({
  name,
  description,
  slug,
  serviceType,
  isPartOf, // 👈 NEW (optional)
}: {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
  isPartOf?: {
    "@type": "Service";
    name: string;
    url: string;
  };
}) {
  const headersList = await headers();

  const protocol =
    headersList.get("x-forwarded-proto") ??
    (process.env.NODE_ENV === "development" ? "http" : "https");

  const host =
    headersList.get("x-forwarded-host") ??
    headersList.get("host");

  const baseUrl = `${protocol}://${host}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}${slug}#service`,

    name,
    description,
    serviceType: serviceType ?? name,

    provider: {
      "@type": "Corporation",
      "@id": `${baseUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    url: `${baseUrl}${slug}`,

    //  Added ONLY if provided
    ...(isPartOf ? { isPartOf } : {}),
  };
}
