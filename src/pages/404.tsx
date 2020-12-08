import React from 'react';
import { graphql } from 'gatsby';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHero from '../components/pageHero';

const NotFoundPage: React.FC<PageProps<
  GatsbyTypes.Page404Query
>> = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata?.title ?? '';

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <PageHero
        title="404: Not Found"
        description="お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。またURLに間違いがないかご確認ください。"
      />
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query Page404 {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
