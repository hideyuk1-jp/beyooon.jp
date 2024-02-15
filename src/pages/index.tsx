import React from 'react';
import { graphql } from 'gatsby';
import { PageProps } from 'gatsby';

import styled from '@emotion/styled';
import Layout from '../components/templates/layout';
import SEO from '../components/organisms/seo';
import Hero from '../components/organisms/hero';
import BlogPostList from '../components/organisms/blog-post-list';
import WorksPostList from '../components/organisms/works-post-list';
import WavesDivider from '../components/organisms/waves-divider';
import Button from '../components/atoms/button';

const Index: React.FC<PageProps<GatsbyTypes.IndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;
  const blogPosts = data.allBlogPosts.nodes;
  const worksPosts = data.allWorksPosts.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <TopHeaderWrapper>
        <Hero
          title="Develop & Design"
          description="Web制作 /
            アプリ開発を中心に活動するデジタルなモノづくりが好きなエンジニア"
          top
        />
        <WavesDivider />
      </TopHeaderWrapper>
      <section className="by-spacer">
        <header className="by-section-head by-container">
          <h2>{`ブログ`}</h2>
          <p>{`Web制作やアプリ開発に関する知見などを書いています。`}</p>
        </header>
        <BlogPostList posts={blogPosts} />
        <footer className="by-section-foot by-container">
          <Button
            href="/blog"
            variant="outlined"
            endIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            }
          >{`もっと見る`}</Button>
        </footer>
      </section>
      <section className="by-spacer">
        <header className="by-section-head by-container">
          <h2>{`つくったもの`}</h2>
          <p>{`Web制作やアプリ開発などで制作した実績です。`}</p>
        </header>
        <WorksPostList posts={worksPosts} />
        <footer className="by-section-foot by-container">
          <Button
            href="/works"
            variant="outlined"
            endIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            }
          >{`もっと見る`}</Button>
        </footer>
      </section>

      <section className="by-spacer">
        <header className="by-container by-section-head by-section-head-center">
          <h2>{`お気軽にお問い合わせください`}</h2>
          <p>
            {`仕事のご依頼、ブログに関することなど`}
            <br />
            {`お気軽にお問い合わせください。`}
          </p>
        </header>
        <footer className="by-container by-section-foot by-center">
          <Button href="/contact" variant="contained">{`お問い合わせ`}</Button>
        </footer>
      </section>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPosts: allMarkdownRemark(
      filter: { fields: { draft: { eq: false }, collection: { eq: "blog" } } }
      sort: { frontmatter: { update: DESC } }
      limit: 6
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
              gatsbyImageData(width: 600, layout: CONSTRAINED)
            }
          }
        }
      }
    }
    allWorksPosts: allMarkdownRemark(
      filter: { fields: { draft: { eq: false }, collection: { eq: "works" } } }
      sort: { frontmatter: { startDate: DESC } }
      limit: 6
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          startDate
          endDate
          description
          title
          category
          skills
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

const TopHeaderWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.backgroundHeader};
  color: ${(props) => props.theme.colors.header};
  padding: 64px 0px 60px;
  margin: -64px -${(props) => props.theme.sideSpace.base} 0px;
  transition: ${(props) => props.theme.colorModeTransition};
`;
