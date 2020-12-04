import React from 'react';
import { Link, graphql } from 'gatsby';
import { PageProps } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import 'moment-timezone';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styled from '../components/styled';
import SyntaxHighlightStyle from '../styles/syntaxHighlight';

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
      width: 20%;
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
      ${(props) => props.theme.colors.border};
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

    tbody tr:last-child {
      td:first-child {
        border-radius: 0px 0px 0px 8px;
      }

      td:last-child {
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
  .head-update {
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
  .update-icon {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.colors.light};
  }

  .update-icon {
    transform: rotate(-45deg);
  }
`;

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
              <div className="head-date">
                <IconWrapper>
                  {post?.frontmatter?.date ===
                  post?.frontmatter?.update ? (
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
                  ) : (
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
                  )}
                </IconWrapper>
                {post?.frontmatter?.date ===
                post?.frontmatter?.update ? (
                  <time
                    dateTime={moment(
                      post?.frontmatter?.date,
                    )
                      .tz('Asia/Tokyo')
                      .format()}
                  >
                    {moment(post?.frontmatter?.date)
                      .local()
                      .format('YYYY.MM.DD')}
                  </time>
                ) : (
                  <time
                    dateTime={moment(
                      post?.frontmatter?.update,
                    )
                      .tz('Asia/Tokyo')
                      .format()}
                  >
                    {moment(post?.frontmatter?.update)
                      .local()
                      .format('YYYY.MM.DD')}
                  </time>
                )}
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
