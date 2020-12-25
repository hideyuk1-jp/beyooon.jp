import React from 'react';
import { graphql } from 'gatsby';
import { PageProps } from 'gatsby';

import Layout from '../components/templates/layout';
import SEO from '../components/organisms/seo';
import PostList from '../components/organisms/blog-post-list';
import PageHero from '../components/organisms/hero';

const BlogIndex: React.FC<
  PageProps<GatsbyTypes.BlogIndexQuery>
> = ({ data, location }) => {
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`Blog`} />
      <PageHero title="beyooon Blog" />
      <section className="by-spacer">
        <PostList posts={posts} />
      </section>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { draft: { eq: false } } }
      sort: { fields: [frontmatter___update], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date
          update
          title
          description
          category
          tags
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
