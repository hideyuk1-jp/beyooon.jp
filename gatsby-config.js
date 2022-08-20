module.exports = {
  siteMetadata: {
    title: `beyooon`,
    longTitle: `beyooon | Web制作・アプリ開発`,
    author: {
      name: `Hideyuki Hashimoto`,
      summary: `Web Developer`,
    },
    description: `Web制作 /
    アプリ開発を中心に活動するデジタルなモノづくりが好きなエンジニア`,
    siteUrl: `https://beyooon.jp`,
    social: {
      twitter: `hideyuk1_jp`,
      github: `hideyuk1-jp`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/works`,
        name: `works`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-draft`,
      options: {
        publishDraft: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-121549185-3`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allMarkdownRemark },
            }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign(
                  {},
                  edge.node.frontmatter,
                  {
                    description:
                      edge.node.frontmatter.description ||
                      edge.node.excerpt,
                    date: edge.node.frontmatter.date,
                    url:
                      site.siteMetadata.siteUrl +
                      edge.node.fields.slug,
                    guid:
                      site.siteMetadata.siteUrl +
                      edge.node.fields.slug,
                    custom_elements: [
                      { 'content:encoded': edge.node.html },
                    ],
                  },
                );
              });
            },
            query: `
                 {
                   allMarkdownRemark(
                     filter: { fields: {
                       draft: { eq: false },
                       collection: { eq: "blog" }
                     } }
                     sort: {order: DESC, fields: [frontmatter___update]},
                     ) {
                     edges {
                       node {
                         excerpt
                         html
                         fields {
                           slug
                         }
                         frontmatter {
                           title
                           date
                           description
                         }
                       }
                     }
                   }
                 }
                 `,
            output: 'rss.xml',
            title: 'beyooon Blog',
            description: 'beyooon Blogを表示します',
            language: 'ja',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `beyooon | Web制作/アプリ開発`,
        short_name: `beyooon`,
        start_url: `/`,
        // TODO: 背景色やテーマカラー、アイコンは変更する
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
  ],
};
