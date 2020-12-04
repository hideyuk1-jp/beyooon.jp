import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styled from '../components/styled';
import { Post } from '../types';

const PostCardWrapper = styled.article`
  padding-top: 16px;

  .postcard-link {
    .postcard-image {
      transition: transform 0.25s var(--ease-in-out-quad);
    }

    &:hover .postcard-image {
      transform: scale(1.1);
    }
  }
`;

const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.theme.colors.backgroundPostCard};
  height: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.12);
  transition: ${(props) => props.theme.colorModeTransition};
`;

const PostCardImage = styled.div`
  position: relative;
  max-height: 200px;
  border-radius: 8px;
  margin-top: -24px;
  overflow: hidden;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s var(--ease-in-out-quad);
`;

const PostCardCategory = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 1;
  font-size: 0.75rem;
  padding: 2px 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  color: ${(props) => props.theme.colors.background};
  background: ${(props) => props.theme.colors.base};
  border: 1px solid ${(props) => props.theme.colors.base};
  transition: ${(props) => props.theme.colorModeTransition};
`;

const PostCardTitle = styled.h3`
  margin-top: 16px;
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

const PostCardPublishedDate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

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
            <PostCardImage>
              <PostCardCategory>
                {node.frontmatter?.category}
              </PostCardCategory>
              <Img
                className="postcard-image"
                fluid={
                  node.frontmatter?.image?.childImageSharp
                    ?.fluid
                }
              />
            </PostCardImage>
          )}
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
                {node.frontmatter?.date ===
                node.frontmatter?.update ? (
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
              <time>
                {node.frontmatter?.date ===
                node.frontmatter?.update
                  ? node.frontmatter?.date
                  : node.frontmatter?.update}
              </time>
            </PostCardPublishedDate>
          </PostCardFooter>
        </PostCardContent>
      </Link>
    )}
  </PostCardWrapper>
);

export default PostCard;
