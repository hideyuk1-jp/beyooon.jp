import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styled from '../atoms/styled';
import { WorksPost } from '../../types';
import PostDate from '../atoms/works-date';

const PostCard: React.FC<{
  node: WorksPost;
}> = ({ node }) => (
  <Wrapper itemScope itemType="http://schema.org/Article">
    {node.fields?.slug && (
      <Link
        className="postcard-link"
        to={node.fields?.slug}
        itemProp="url"
      >
        <div className="postcard-inner">
          {node.frontmatter?.image?.childImageSharp
            ?.fluid && (
            <div className="postcard-image-wrapper">
              <div className="postcard-category">
                {node.frontmatter?.category}
              </div>
              <Img
                className="postcard-image"
                fluid={
                  node.frontmatter?.image?.childImageSharp
                    ?.fluid
                }
              />
            </div>
          )}
          <div className="postcard-title">
            <span itemProp="headline">
              {node.frontmatter?.title}
            </span>
          </div>
          {(node.frontmatter?.description && (
            <div
              className="postcard-description"
              dangerouslySetInnerHTML={{
                __html: node.frontmatter?.description,
              }}
              itemProp="description"
            />
          )) ||
            (node.excerpt && (
              <div
                className="postcard-description"
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
                itemProp="description"
              />
            ))}
          <footer className="postcard-footer">
            {node.frontmatter?.startDate && (
              <PostDate
                startDate={node.frontmatter?.startDate}
                endDate={node.frontmatter?.endDate}
                size="small"
              />
            )}
          </footer>
        </div>
      </Link>
    )}
  </Wrapper>
);

export default PostCard;

const Wrapper = styled.article`
  padding-top: 16px;

  .postcard-link {
    &:hover .postcard-image {
      transform: scale(1.1);
    }
  }

  .postcard-inner {
    display: flex;
    flex-direction: column;
    background: ${(props) =>
      props.theme.colors.backgroundPostCard};
    height: 100%;
    padding: 8px 16px;
    border-radius: 8px;
    box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.12);
    transition: ${(props) =>
      props.theme.colorModeTransition};

    .postcard-image-wrapper {
      position: relative;
      border-radius: 8px;
      margin-top: -24px;
      overflow: hidden;
      box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
        0 8px 10px -5px rgba(0, 0, 0, 0.2);

      .postcard-category {
        position: absolute;
        display: inline-block;
        z-index: 1;
        font-size: 0.75rem;
        padding: 2px 8px;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        color: ${(props) => props.theme.colors.background};
        background: ${(props) => props.theme.colors.base};
        border: 1px solid
          ${(props) => props.theme.colors.base};
        transition: ${(props) =>
          props.theme.colorModeTransition};
      }
      .postcard-image,
      .postcard-image img {
        max-height: 200px;
        transition: transform 0.25s var(--ease-in-out-quad);
      }
    }

    .postcard-title {
      margin-top: 16px;
      margin-bottom: 8px;
      color: ${(props) => props.theme.colors.base};
      transition: ${(props) =>
        props.theme.colorModeTransition};
    }

    .postcard-description {
      flex: 1 1 auto;
      margin: 0 0 8px;
      padding: 0;
      color: ${(props) => props.theme.colors.light};
    }

    .postcard-footer {
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
      transition: ${(props) =>
        props.theme.colorModeTransition};

      & > * {
        margin-right: 8px;
      }
    }
  }
`;
