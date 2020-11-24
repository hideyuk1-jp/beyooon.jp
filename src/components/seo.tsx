/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Meta = {
  name: string;
  content: string;
};

type Props = {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title?: string;
};

const SEO: React.FC<Props> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            longTitle
            description
            social {
              twitter
            }
          }
        }
      }
    `,
  );

  const metaDescription =
    description || site.siteMetadata.description;
  const defaultTitle = title
    ? site.siteMetadata?.title
    : site.siteMetadata?.longTitle;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle || ''}
      titleTemplate={
        title && defaultTitle ? `%s | ${defaultTitle}` : ''
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
