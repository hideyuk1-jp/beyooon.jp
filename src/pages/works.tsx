import React from 'react';
import { graphql } from 'gatsby';
import { PageProps } from 'gatsby';

import Layout from '../components/templates/layout';
import SEO from '../components/organisms/seo';
import PostList from '../components/organisms/works-post-list';
import PageHero from '../components/organisms/hero';

const WorksIndex: React.FC<PageProps<GatsbyTypes.WorksIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`Works`} />
      <PageHero title="Works" />
      <section className="by-spacer">
        <PostList posts={posts} />
      </section>
    </Layout>
  );
};

export default WorksIndex;

export const pageQuery = graphql`
  query WorksIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { draft: { eq: false }, collection: { eq: "works" } } }
      sort: { fields: [frontmatter___startDate], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          startDate
          endDate
          title
          category
          skills
          description
          link
          image {
            childImageSharp {
              gatsbyImageData(width: 600, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
