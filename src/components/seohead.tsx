import React from "react";
import Head from "next/head";
import { MetaTypes } from "@/types/metatypes";
import { useRouter } from "next/router";

export const SeoHead = ({
  title,
  titleTemplate,
  description,
  ogType,
  imgUrl,
}: MetaTypes) => {
  const router = useRouter();
  const siteUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
  const Url = `${siteUrl}${router.asPath}`;
  const siteTitle = `${title} - ${titleTemplate}`;
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={Url} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:site_name" content={titleTemplate} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={Url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imgUrl} />
      <link rel="canonical" href={Url} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
