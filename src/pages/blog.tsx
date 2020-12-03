import React from 'react';
import { graphql } from 'gatsby';
import { PageProps } from 'gatsby';

import styled from '../components/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/postList';

const Hero = styled.header`
  text-align: center;

  h2 {
    position: relative;
    display: block;
    font-size: 4rem;
    font-weight: 700;
    padding-bottom: 26px;
    line-height: 1.15;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-40px);
      width: 80px;
      height: 4px;
      border-radius: 2px;
      background: ${(props) => props.theme.colors.gradient};
    }
  }

  p {
    padding-top: 24px;
    color: ${(props) => props.theme.colors.light};
  }
`;

const BlogIndex: React.FC<PageProps<
  GatsbyTypes.BlogIndexQuery
>> = ({ data, location }) => {
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`Blog`} />
      <Hero className="by-hero by-spacer">
        <div className="by-container">
          <h2>{`beyooon Blog`}</h2>
          <p>
            {`Web制作やアプリ開発に関する知見や事業に関すること、その他雑記などを書いています。`}
          </p>
        </div>
      </Hero>
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
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
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
