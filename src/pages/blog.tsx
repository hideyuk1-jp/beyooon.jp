import React from 'react';
import { Link, graphql } from 'gatsby';
import { PageProps } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogIndex: React.FC<PageProps<
  GatsbyTypes.BlogIndexQuery
>> = ({ data, location }) => {
  const siteTitle =
    data.site?.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to
          &quot;content/blog&quot; (or the directory you
          specified for the
          &quot;gatsby-source-filesystem&quot; plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title =
            post.frontmatter?.title || post.fields?.slug;

          return (
            <li key={post.fields?.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    {post.fields?.slug && (
                      <Link
                        to={post.fields?.slug}
                        itemProp="url"
                      >
                        <span itemProp="headline">
                          {title}
                        </span>
                      </Link>
                    )}
                  </h2>
                  <small>{post.frontmatter?.date}</small>
                </header>
                <section>
                  {(post.frontmatter?.description && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          post.frontmatter?.description,
                      }}
                      itemProp="description"
                    />
                  )) ||
                    (post.excerpt && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt,
                        }}
                        itemProp="description"
                      />
                    ))}
                </section>
              </article>
            </li>
          );
        })}
      </ol>
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
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
