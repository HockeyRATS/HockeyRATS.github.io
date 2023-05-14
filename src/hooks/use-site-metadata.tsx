import { graphql, useStaticQuery } from "gatsby"

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string
      description: string
      image: string
      siteUrl: string
    }
  }
}

const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
        siteUrl
      }
    }
  }
`

export const useSiteMetadata = () => {
  const data = useStaticQuery<QueryTypes>(SEOStaticQuery)

  return data.site.siteMetadata
}
