/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // URL Redirects - Old URLs to New URLs (301 Permanent Redirects for SEO)
  redirects: async () => {
    return [
      // Example redirects - Add more as needed
      {
        source: '/contact-us',
        destination: '/contact-mindsmiratus-technologies',
        permanent: true, // 301 permanent redirect
      },
      {
        source: '/designing-services',
        destination: '/website-designing-and-development',
        permanent: true,
      },
      {
        source: '/website-designing-services',
        destination: '/website-designing-and-development',
        permanent: true,
      },
      {
        source: '/development-services',
        destination: '/website-designing-and-development',
        permanent: true,
      },
      {
        source: '/software-development',
        destination: '/business-application-development',
        permanent: true,
      },
      {
        source: '/gst-billing-software',
        destination: '/business-application-development',
        permanent: true,
      },
      {
        source: '/ecommerce-designing-services',
        destination: '/ecommerce-website-designing',
        permanent: true,
      },
      {
        source: '/seo-services',
        destination: '/seo-services-company',
        permanent: true,
      },
      {
        source: '/ppc-services',
        destination: '/google-ads-services',
        permanent: true,
      },
      {
        source: '/bulk-sms-service',
        destination: '/sms-rcs-messaging-service',
        permanent: true,
      },
      {
        source: '/telemarketing-services',
        destination: '/customer-communication-services',
        permanent: true,
      },
      {
        source: '/rcs-messaging-service',
        destination: '/sms-rcs-messaging-service',
        permanent: true,
      },
      {
        source: '/voice-call-sms-service',
        destination: '/voice-call-services',
        permanent: true,
      },
      {
        source: '/whatsapp-bussiness-api-for-bulk-messaging-and-marketing-services',
        destination: '/whatsapp-api-service-provider',
        permanent: true,
      },
      // --- Legacy ASPX Redirects ---
      {
        source: '/Default.aspx',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/designining.aspx',
        destination: '/website-designing-and-development',
        permanent: true,
      },
      {
        source: '/development.aspx',
        destination: '/website-designing-and-development',
        permanent: true,
      },
      {
        source: '/website-development.aspx',
        destination: '/website-designing-and-development',
        permanent: true,
      },
      {
        source: '/search-engin-optimisation.aspx',
        destination: '/seo-services-company',
        permanent: true,
      },
      {
        source: '/social-media-optimization.aspx',
        destination: '/smo-services',
        permanent: true,
      },
      {
        source: '/pay-per-click.aspx',
        destination: '/google-ads-services',
        permanent: true,
      },
      {
        source: '/video-editing.aspx',
        destination: '/graphic-designing-service',
        permanent: true,
      },
      {
        source: '/contact-us.aspx',
        destination: '/contact-mindsmiratus-technologies',
        permanent: true,
      },
      // Review legacy nested paths if they exist
      {
        source: '/:path*/contact-us',
        destination: '/contact-mindsmiratus-technologies',
        permanent: true,
      },
      {
        source: '/:path*/payment-gateway', // Cleaning up broken links seen in index
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
