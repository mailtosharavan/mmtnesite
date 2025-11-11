import Head from "next/head";
import React from "react";

export default function SEO({
  title,
  description,
  url,
  image
}: {
  title: string;
  description: string;
  url?: string;
  image?: string;
}) {
  const metaImage = image ?? "/og-default.png";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="digital transformation, custom applications, web development, mobile apps, IT, marketing, SEO" />
      <link rel="canonical" href={url ?? "https://example.com/"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url ?? "https://example.com/"} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
    </Head>
  );
}