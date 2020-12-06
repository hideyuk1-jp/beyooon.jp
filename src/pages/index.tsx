import React from 'react';
import { graphql, Link } from 'gatsby';
import { PageProps } from 'gatsby';

import styled from '../components/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/postList';
import WavesDivider from '../components/wavesDivider';

const Hero = styled.header`
  text-align: center;
  padding: 0px ${(props) => props.theme.sideSpace.base};

  h2 {
    position: relative;
    display: block;
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.15;
  }

  p {
    padding-top: 24px;
    color: ${(props) => props.theme.colors.headerLight};
  }
`;

const TopHeaderWrapper = styled.div`
  position: relative;
  background: ${(props) =>
    props.theme.colors.backgroundHeader};
  color: ${(props) => props.theme.colors.header};
  padding: 64px 0px 60px;
  margin: -64px -${(props) => props.theme.sideSpace.base} 0px;
  transition: ${(props) => props.theme.colorModeTransition};
`;

const Index: React.FC<PageProps<
  GatsbyTypes.IndexQuery
>> = ({ data, location }) => {
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <TopHeaderWrapper>
        <Hero className="by-hero">
          <div className="by-spacer">
            <div className="by-container">
              <h2>{`Develop & Design`}</h2>
              <p>
                {`Web制作 /
            アプリ開発を中心に活動するデジタルなモノづくりが好きなフリーランス`}
              </p>
            </div>
          </div>
        </Hero>
        <WavesDivider />
      </TopHeaderWrapper>
      <section className="by-spacer">
        <header className="by-section-head by-container">
          <h2>{`ブログ`}</h2>
          <p>
            {`Web制作やアプリ開発に関する知見などを書いています。`}
          </p>
        </header>
        <PostList posts={posts} />
        <footer className="by-section-foot by-container">
          <Link
            to="/blog"
            className="by-btn by-btn-outline"
          >
            {`ブログをもっと見る`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              width="14"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </Link>
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
          <Link
            to={`/contact`}
            className="by-btn by-btn-primary"
          >
            {`お問い合わせ`}
          </Link>
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
    allMarkdownRemark(
      filter: { fields: { draft: { eq: false } } }
      sort: { fields: [frontmatter___update], order: DESC }
      limit: 6
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          update(formatString: "YYYY.MM.DD")
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
