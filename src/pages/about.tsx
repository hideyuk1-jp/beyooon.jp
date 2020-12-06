import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHero from '../components/pageHero';

const AboutIndex: React.FC<PageProps<
  GatsbyTypes.AboutIndexQuery
>> = ({ data, location }) => {
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`About`} />
      <PageHero title="beyooonとは" />
      <section className="by-spacer">
        {`ここに内容書く`}
      </section>
    </Layout>
  );
};

export default AboutIndex;

export const pageQuery = graphql`
  query AboutIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
