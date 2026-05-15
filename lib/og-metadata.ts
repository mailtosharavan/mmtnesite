// OG metadata mapping for different pages
export const pageOGMetadata: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    slug: string;
  }
> = {
  "/": {
    title: "Web Design, Digital Marketing & IT Solutions Company | MindsMiratus",
    description:
      "We accelerate digital transformation with custom apps, web & mobile development, digital marketing, IT infrastructure, and tailored e-commerce solutions.",
    image: "/og-default.jpg",
    slug: "/",
  },
  "/about-us": {
    title: "About MindsMiratus - Digital Transformation & IT Solutions Company",
    description:
      "Learn about MindsMiratus Technologies - a leading digital transformation and IT solutions company in India. We've been delivering custom development, digital marketing, and cloud solutions since 2019.",
    image: "/og-about-us.jpg",
    slug: "/about-us",
  },
  "/digital-marketing-services": {
    title: "Digital Marketing & Online Promotion Services | Mindsmiratus",
    description:
      "Professional digital marketing services by Mindsmiratus including performance marketing, SEO, Google Ads (SEM), social media marketing, SMO, and online brand promotion to grow business visibility and conversions.",
    image: "/og-digital-marketing.jpg",
    slug: "/digital-marketing-services",
  },
  "/seo-services-company": {
    title: "SEO Services Company | Expert Search Engine Optimization | Mindsmiratus",
    description:
      "Professional SEO services by Mindsmiratus to improve search rankings, increase organic traffic, and build domain authority. On-page, technical, and link building expertise.",
    image: "/og-seo-services.jpg",
    slug: "/seo-services-company",
  },
  "/google-ads-services": {
    title: "Google Ads & PPC Services | SEM Management | Mindsmiratus",
    description:
      "Expert Google Ads management services by Mindsmiratus. Optimize your SEM campaigns for maximum ROI with targeted ads, conversion tracking, and continuous optimization.",
    image: "/og-google-ads.jpg",
    slug: "/google-ads-services",
  },
  "/social-media-marketing": {
    title: "Social Media Marketing Services | Facebook, Instagram, LinkedIn | Mindsmiratus",
    description:
      "Professional social media marketing services across Facebook, Instagram, LinkedIn, and YouTube. Build brand awareness, engagement, and drive conversions with creative content.",
    image: "/og-social-media.jpg",
    slug: "/social-media-marketing",
  },
  "/mobile-app-development": {
    title: "Mobile App Development Services | iOS & Android | Mindsmiratus",
    description:
      "Custom mobile app development for iOS and Android. We build scalable, user-friendly apps with modern technologies and agile methodology.",
    image: "/og-mobile-app.jpg",
    slug: "/mobile-app-development",
  },
  "/web-application-development": {
    title: "Web Application Development Services | Mindsmiratus",
    description:
      "Custom web application development using modern frameworks and technologies. Scalable, secure, and user-focused solutions for your business.",
    image: "/og-web-app.jpg",
    slug: "/web-application-development",
  },
  "/website-designing-and-development": {
    title: "Website Design & Development Services | Mindsmiratus",
    description:
      "Professional website design and development services. Responsive, SEO-friendly, and conversion-optimized websites that represent your brand.",
    image: "/og-web-design.jpg",
    slug: "/website-designing-and-development",
  },
  "/contact-mindsmiratus-technologies": {
    title: "Contact Us | Mindsmiratus Technologies",
    description:
      "Get in touch with Mindsmiratus Technologies. Discuss your project requirements and get a free consultation from our experts.",
    image: "/og-contact.jpg",
    slug: "/contact-mindsmiratus-technologies",
  },
};

export function getOGMetadata(pathname: string, baseUrl: string) {
  const metadata = pageOGMetadata[pathname] || pageOGMetadata["/"];

  return {
    title: metadata.title,
    description: metadata.description,
    image: `${baseUrl}${metadata.image}`,
    url: `${baseUrl}${metadata.slug}`,
  };
}
