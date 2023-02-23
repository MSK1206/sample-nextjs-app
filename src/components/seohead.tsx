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
      <meta name="viewport" content={"width=device-width, initial-scale=1"} />
      <title>{siteTitle}</title>
      <link href={Url} rel="canonical" />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={Url} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imgUrl} />
      <link rel="icon" href={"/favicon.ico"} />
    </Head>
  );
};
