import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `HockeyRATS`,
    description: `HockeyRATS is home to fanatics who live to train and play hockey`,
    image: `/HockeyRATS_Logo.png`,
    siteUrl: `https://www.hockeyrats.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-M4KQQPNPGB",],
        pluginConfig: {
          head: false,
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "HockeyRATS",
        short_name: "HockeyRATS",
        start_url: "/",
        background_color: "#84d4f7",
        theme_color: "#2298d8",
        display: "standalone",
        icon: "src/images/HockeyRATS_Icon.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    }
  ],
}

export default config
