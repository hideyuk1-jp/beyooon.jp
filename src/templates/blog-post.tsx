import React from 'react';
import { Link, graphql } from 'gatsby';
import { PageProps } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import 'moment-timezone';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ShareButtons from '../components/share-buttons';

import styled from '../components/styled';
import SyntaxHighlightStyle from '../styles/syntax-highlight';

const PostWrapper = styled.article`
  header {
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

    .head-image {
      border-radius: 8px;
      max-height: 480px;
      box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.12);
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
`;

const PostContent = styled.section`
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
      background: ${(props) => props.theme.colors.gradient};
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
`;

const PostHeadHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  .head-category,
  .head-tag {
    display: inline-block;
    margin: 0px 8px 16px 0px;
    padding: 2px 8px;
    border-radius: 8px;
    transition: ${(props) =>
      props.theme.colorModeTransition};
  }

  .head-category {
    color: ${(props) => props.theme.colors.background};
    background: ${(props) => props.theme.colors.base};
    border: 1px solid ${(props) => props.theme.colors.base};
  }

  .head-tag {
    color: ${(props) => props.theme.colors.base};
    border: 1px solid ${(props) => props.theme.colors.base};
  }
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

  .head-date,
  .head-update,
  .head-timetoread {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 12px;
  }
`;

const IconWrapper = styled.div`
  line-height: 0;
  margin-right: 4px;

  .date-icon,
  .update-icon,
  .timetoread-icon {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.colors.light};
  }

  .update-icon {
    transform: rotate(-45deg);
  }
`;

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.BlogPostBySlugQuery>
> = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  const HeadDate = () => (
    <div className="head-date">
      <IconWrapper>
        <svg
          className="date-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      </IconWrapper>
      <time
        dateTime={moment(post?.frontmatter?.date)
          .tz('Asia/Tokyo')
          .format()}
      >
        {moment(post?.frontmatter?.date)
          .local()
          .format('YYYY.MM.DD')}
      </time>
    </div>
  );

  const HeadUpdate = () => (
    <div className="head-date tooltip-container">
      <IconWrapper>
        <svg
          className="update-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
        </svg>
      </IconWrapper>
      <time
        dateTime={moment(post?.frontmatter?.update)
          .tz('Asia/Tokyo')
          .format()}
      >
        {moment(post?.frontmatter?.update)
          .local()
          .format('YYYY.MM.DD')}
      </time>
      <span className="tooltip-text tooltip-bottom">
        {`投稿日: ${moment(post?.frontmatter?.date)
          .local()
          .format('YYYY.MM.DD')}`}
        <br />
        {`更新日: ${moment(post?.frontmatter?.update)
          .local()
          .format('YYYY.MM.DD')}`}
      </span>
    </div>
  );

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
      <PostWrapper
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div className="by-container-small by-spacer">
            <PostHeadHeader>
              <div className="head-category">
                {post?.frontmatter?.category}
              </div>
              {post?.frontmatter?.tags &&
                post?.frontmatter?.tags.length > 0 &&
                post?.frontmatter?.tags.map((tag) => (
                  <div key={tag} className="head-tag">
                    {`# ${tag}`}
                  </div>
                ))}
            </PostHeadHeader>
            <h1 itemProp="headline">
              {post?.frontmatter?.title}
            </h1>
            <PostHeadFooter>
              {post?.frontmatter?.date ===
              post?.frontmatter?.update ? (
                <HeadDate />
              ) : (
                <HeadUpdate />
              )}
              <div className="head-timetoread">
                <IconWrapper>
                  <svg
                    className="timetoread-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </IconWrapper>
                {`${post?.timeToRead}分`}
              </div>
            </PostHeadFooter>
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
        <PostContent
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
      </PostWrapper>
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
