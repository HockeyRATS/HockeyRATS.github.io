import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
}

const SEO: React.FC<SEOProps> = (props) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${props.pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="author" content="Jeffry Lew" />
      <meta name="image" content={seo.image} />

      <meta name="og:site_name" content="HockeyRATS" />
      <meta name="og:title" content={seo.title} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:type" content="website" />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:image:width" content="5736" />
      <meta name="og:image:height" content="4167" />
      <meta name="og:image:alt" content="HockeyRATS logo" />
      <meta name="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {props.children}
    </>
  )
}

export default SEO
