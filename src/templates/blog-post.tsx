import React from 'react';
import { Link, graphql } from 'gatsby';
import { PageProps } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styled from '../components/styled';
import SyntaxHighlightStyle from '../styles/syntaxHighlight';

const BlogPostTemplate: React.FC<PageProps<
  GatsbyTypes.BlogPostBySlugQuery
>> = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post?.frontmatter?.title ?? ''}
        description={
          post?.frontmatter?.description || post?.excerpt
        }
      />
      <PostWrapper
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="by-container-small by-spacer">
            <PostHeadCategory className="head-category">
              {post?.frontmatter?.category}
            </PostHeadCategory>
            <h1 itemProp="headline">
              {post?.frontmatter?.title}
            </h1>
            <PostHeadFooter>
              <div className="head-date">
                <IconWrapper>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="14"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </IconWrapper>
                {post?.frontmatter?.date}
              </div>
            </PostHeadFooter>
          </div>
          <Img
            className="by-container head-image"
            fluid={
              post?.frontmatter?.image?.childImageSharp
                ?.fluid
            }
          />
        </header>
        <PostContent
          className="by-container-small by-spacer"
          dangerouslySetInnerHTML={{
            __html: post?.html ?? '',
          }}
          itemProp="articleBody"
        />
      </PostWrapper>
      <nav className="blog-post-nav by-container">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous?.fields?.slug && (
              <Link to={previous?.fields?.slug} rel="prev">
                ← {previous?.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next?.fields?.slug && (
              <Link to={next?.fields?.slug} rel="next">
                {next?.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
        category
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
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
`;

const PostWrapper = styled.article`
  header {
    h1 {
      font-size: 3.2rem;
    }

    .head-image {
      border-radius: 8px;
    }

    .head-date {
      display: flex;
      align-items: center;
      flex-direction: row;
    }
  }
`;

const PostContent = styled.section`
  font-size: 1rem;
  line-height: 2em;

  h2,
  h3,
  h4,
  h5 {
    margin-top: 48px;
    margin-bottom: 24px;
  }

  h2 {
    position: relative;
    padding-bottom: 16px;
    z-index: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      border-radius: 2px;
      transition: ${(props) =>
        props.theme.colorModeTransition};
    }

    &::before {
      z-index: -1;
      width: 160px;
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.colors.primary} 0%,
        ${(props) => props.theme.colors.secondary} 50%,
        ${(props) => props.theme.colors.tertiary} 100%
      );
    }

    &::after {
      z-index: -2;
      width: 100%;
      background: ${(props) => props.theme.colors.border};
    }
  }

  p,
  hr {
    margin: 0px 0px 24px 0;
    min-width: 100%;
  }

  hr {
    display: block;
    height: 1px;
    background: ${(props) => props.theme.colors.border};
    border: 0;
    transition: ${(props) =>
      props.theme.colorModeTransition};
  }

  ul,
  ol {
    list-style: none;
    margin: 0 16px 24px 24px;
    padding: 0px;
  }

  li {
    margin-bottom: 8px;

    &::before {
      display: inline-block;
      position: absolute;
      margin-left: -16px;
      color: ${(props) => props.theme.colors.light};
    }

    p {
      margin: 0px;
    }

    & > ul {
      margin-top: 8px;
      margin-bottom: 0px;
    }
  }

  ul li {
    &::before {
      content: '–';
    }
  }

  ol {
    counter-reset: number 0;

    li {
      &::before {
        content: counter(number);
        counter-increment: number 1;
      }
    }
  }

  p > code,
  li > code {
    display: inline-block;
    background: #1e1f26;
    padding: 0.1em 0.3em;
    margin: 0px 0.2em;
    border-radius: 4px;
    color: #d4d4d4 !important;
    transition: ${(props) =>
      props.theme.colorModeTransition};
  }

  a:hover {
    text-decoration: underline;
  }

  blockquote {
    margin: 0 0 24px 0;
    padding: 8px 16px;
    border-left: 4px solid
      ${(props) => props.theme.colors.light};
    p {
      white-space: pre-wrap;
      margin: 4px 0;
    }

    & > blockquote {
      margin-top: 24px;
    }
  }

  table {
    margin-bottom: 24px;
  }

  .gatsby-resp-image-wrapper {
    border-radius: 8px;
    overflow: hidden;
  }

  /* syntaxhighlight */
  ${SyntaxHighlightStyle}
  pre[class*='language-'] {
    padding: 16px;
    margin: 0;
    background: #1e1f26;
  }
  .gatsby-highlight {
    margin: 0px 0px 24px 0px;
    border-radius: 8px;
    overflow: hidden;
  }
  .gatsby-code-title {
    position: relative;
    display: table;
    color: #d4d4d4;
    margin: 0px 0px -24px auto;
    height: 24px;
    padding: 0px 8px;
    line-height: 24px;

    & + .gatsby-highlight {
      margin-top: 0px;

      pre[class*='language-'] {
        padding-top: 26px;
      }
    }
  }
`;

const PostHeadCategory = styled.div`
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 8px;
  padding: 2px 8px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  transition: ${(props) => props.theme.colorModeTransition};
`;

const PostHeadFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  line-height: 22px;
  border-top: 1px solid
    ${(props) => props.theme.colors.border};
  padding-top: 8px;
  color: ${(props) => props.theme.colors.light};
  transition: ${(props) => props.theme.colorModeTransition};
`;

const IconWrapper = styled.div`
  line-height: 0;
  margin-right: 4px;

  svg {
    fill: ${(props) => props.theme.colors.light};
  }
`;
