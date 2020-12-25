import React from 'react';
import { Link, graphql } from 'gatsby';
import { PageProps } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';

import Layout from '../components/templates/layout';
import SEO from '../components/organisms/seo';
import ShareButtons from '../components/organisms/share-buttons';

import styled from '../components/atoms/styled';
import SyntaxHighlightStyle from '../styles/syntax-highlight';
import TimeToRead from '../components/atoms/time-to-read';
import PostDate from '../components/atoms/post-date';
import Tooltip from '../components/atoms/tooltip';
import Button from '../components/atoms/button';

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.BlogPostBySlugQuery>
> = ({ data, location }) => {
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
        image={
          post?.frontmatter?.image?.childImageSharp?.fluid
            ?.src
        }
      />
      <Wrapper
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="by-container-small by-spacer">
            <header className="post-header-header">
              <div className="head-category">
                <Button href="#" size="small">
                  {post?.frontmatter?.category}
                </Button>
              </div>
              {post?.frontmatter?.tags &&
                post?.frontmatter?.tags.length > 0 &&
                post?.frontmatter?.tags.map((tag) => (
                  <div key={tag} className="head-tag">
                    <Button
                      href="#"
                      variant="outlined"
                      size="small"
                      startIcon={`#`}
                    >
                      {`${tag}`}
                    </Button>
                  </div>
                ))}
            </header>
            <h1 itemProp="headline">
              {post?.frontmatter?.title}
            </h1>
            <footer className="post-header-footer">
              <Tooltip
                tooltipContent={
                  <>
                    {`投稿日: ${moment(
                      post?.frontmatter?.date,
                    )
                      .local()
                      .format('YYYY.MM.DD')}`}
                    <br />
                    {`更新日: ${moment(
                      post?.frontmatter?.update,
                    )
                      .local()
                      .format('YYYY.MM.DD')}`}
                  </>
                }
                position="bottom"
              >
                {post?.frontmatter?.date && (
                  <PostDate
                    publish={post?.frontmatter?.date}
                    update={post?.frontmatter?.update}
                  />
                )}
              </Tooltip>
              {post?.timeToRead && (
                <TimeToRead time={post?.timeToRead} />
              )}
            </footer>
          </div>
          {post?.frontmatter?.image?.childImageSharp
            ?.fluid && (
            <Img
              className="by-container head-image"
              fluid={
                post?.frontmatter?.image?.childImageSharp
                  ?.fluid
              }
            />
          )}
        </header>
        <main
          className="by-container-small by-spacer"
          dangerouslySetInnerHTML={{
            __html: post?.html ?? '',
          }}
          itemProp="articleBody"
        />
        <section className="share-section by-spacer-small">
          <div className="flex-center by-container-small">
            <h2>{`ぜひこの記事のシェアをお願いします`}</h2>
          </div>
          <div className="flex-center by-container-small">
            <ShareButtons
              title={`${post?.frontmatter?.title} | ${siteTitle}`}
              postUrl={`${data.site?.siteMetadata?.siteUrl}${post?.fields?.slug}`}
            />
          </div>
        </section>
        <nav className="blog-post-nav by-container-small">
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
                <Link
                  to={previous?.fields?.slug}
                  rel="prev"
                >
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
      </Wrapper>
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
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date
        update
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

const Wrapper = styled.article`
  & > header {
    h1 {
      font-size: 2rem;
      margin-bottom: 16px;

      @media screen and (min-width: ${(props) =>
          props.theme.responsive.small}) {
        font-size: 2.4rem;
      }

      @media screen and (min-width: ${(props) =>
          props.theme.responsive.medium}) {
        font-size: 2.8rem;
      }

      @media screen and (min-width: ${(props) =>
          props.theme.responsive.large}) {
        font-size: 3.2rem;
      }
    }

    .post-header-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      flex-wrap: wrap;
      margin: 0px -8px 8px 0px;

      .head-category,
      .head-tag {
        display: inline-block;
        padding: 0px 8px 8px 0px;
      }
    }

    .post-header-footer {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      line-height: 22px;
      border-top: 1px solid
        ${(props) => props.theme.colors.border};
      padding-top: 8px;
      color: ${(props) => props.theme.colors.light};
      transition: ${(props) =>
        props.theme.colorModeTransition};

      & > * {
        margin-right: 12px;
      }
    }

    .head-image {
      border-radius: 8px;
      max-height: 480px;
      box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.12);
    }
  }

  & > main {
    font-size: 1rem;
    line-height: 2em;

    h2,
    h3,
    h4,
    h5 {
      position: relative;
      margin-top: 48px;
      margin-bottom: 24px;
    }

    h2 {
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
        width: 20%;
        background: ${(props) =>
          props.theme.colors.gradient};
      }

      &::after {
        z-index: -2;
        width: 100%;
        background: ${(props) => props.theme.colors.border};
      }
    }

    h3 {
      padding: 2px 8px 2px 14px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        border-radius: 2px;
        background: ${(props) => props.theme.colors.border};
        transition: ${(props) =>
          props.theme.colorModeTransition};
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
      background: #3f4150;
      padding: 0.1em 0.3em;
      margin: 0px 0.2em;
      border-radius: 4px;
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
        ${(props) => props.theme.colors.border};
      transition: border 0.25s var(--ease-in-out-quad);

      p {
        white-space: pre-wrap;
        margin: 4px 0;
      }

      & > blockquote {
        margin-top: 24px;
      }
    }

    table {
      display: block;
      border-spacing: 0px;
      border-collapse: collapse;
      overflow: auto;
      width: auto;
      margin-bottom: 24px;

      th,
      td {
        border-top: 1px solid
          ${(props) => props.theme.colors.border};
        border-bottom: 1px solid
          ${(props) => props.theme.colors.border};
        padding: 8px 16px;
        transition: ${(props) =>
          props.theme.colorModeTransition};
      }

      th {
        background: ${(props) => props.theme.colors.border};
      }

      td {
      }

      tbody tr:last-of-type {
        td:first-of-type {
          border-radius: 0px 0px 0px 8px;
        }

        td:last-of-type {
          border-radius: 0px 0px 8px 0px;
        }
      }
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
  }

  .share-section {
    h2 {
      margin-top: 96px;
      margin-bottom: 16px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: calc(100% + 16px);
        left: 50%;
        transform: translateX(-2px);
        width: 4px;
        height: 80px;
        border-radius: 2px;
        background: ${(props) => props.theme.colors.border};
      }
    }
  }

  .blog-post-nav {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      list-style: none;
      padding: 0;
    }
  }
`;
