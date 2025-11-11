
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.mindsmiratus.com", // ← your domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*"], // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/admin"],
      },
    ],
    additionalSitemaps: [
      "https://www.mindsmiratus.com/sitemap.xml",
    ],
  },
};
