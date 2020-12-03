import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styled from '../components/styled';
import { Post } from '../types';

const PostCard: React.FC<{
  node: Post;
}> = ({ node }) => (
  <PostCardWrapper
    className="postcard-wrapper"
    itemScope
    itemType="http://schema.org/Article"
  >
    {node.fields?.slug && (
      <Link
        className="postcard-link"
        to={node.fields?.slug}
        itemProp="url"
      >
        <PostCardContent>
          {node.frontmatter?.image?.childImageSharp
            ?.fluid && (
            <PostCardImage className="postcard-image">
              <Img
                fluid={
                  node.frontmatter?.image?.childImageSharp
                    ?.fluid
                }
              />
            </PostCardImage>
          )}
          <header>
            <PostCardCategory>
              {node.frontmatter?.category}
            </PostCardCategory>
          </header>
          <PostCardTitle>
            <span itemProp="headline">
              {node.frontmatter?.title}
            </span>
          </PostCardTitle>
          {(node.frontmatter?.description && (
            <PostCardDescription
              dangerouslySetInnerHTML={{
                __html: node.frontmatter?.description,
              }}
              itemProp="description"
            />
          )) ||
            (node.excerpt && (
              <PostCardDescription
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
                itemProp="description"
              />
            ))}
          <PostCardFooter>
            <PostCardPublishedDate>
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
              {node.frontmatter?.date}
            </PostCardPublishedDate>
          </PostCardFooter>
        </PostCardContent>
      </Link>
    )}
  </PostCardWrapper>
);

export default PostCard;

const PostCardWrapper = styled.article`
  padding-top: 16px;

  .postcard-link {
    .postcard-image > div {
      transition: transform 0.25s var(--ease-in-out-quad);
    }

    &:hover .postcard-image > div {
      transform: scale(1.1);
    }
  }
`;

const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.theme.colors.backgroundAccent};
  height: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  transition: ${(props) => props.theme.colorModeTransition};
`;

const PostCardImage = styled.div`
  max-height: 200px;
  border-radius: 8px;
  margin-top: -24px;
  overflow: hidden;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s var(--ease-in-out-quad);
`;

const PostCardCategory = styled.div`
  display: inline-block;
  font-size: 0.75rem;
  margin-top: 16px;
  margin-bottom: 8px;
  padding: 2px 8px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  transition: ${(props) => props.theme.colorModeTransition};
`;

const PostCardTitle = styled.h3`
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.base};
  transition: ${(props) => props.theme.colorModeTransition};
`;

const PostCardDescription = styled.p`
  flex: 1 1 auto;
  margin: 0 0 8px;
  padding: 0;
  color: ${(props) => props.theme.colors.light};
`;

const PostCardFooter = styled.footer`
  font-size: 0.75rem;
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

const PostCardPublishedDate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
