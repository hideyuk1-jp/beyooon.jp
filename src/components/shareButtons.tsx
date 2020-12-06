import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  HatenaIcon,
} from 'react-share';
import styled from './styled';

const ShareBtnWrapper = styled.div`
  button {
    outline: none;
  }

  .share-btn-items {
    margin-right: 16px;
    &:last-child {
      margin-right: 0px;
    }

    svg {
      width: 32px;
      height: 32px;

      circle,
      path {
        transition: ${(props) =>
            props.theme.colorModeTransition},
          opacity 0.25s var(--ease-in-out-quad);
      }

      &:not(:hover) {
        circle {
          fill: ${(props) => props.theme.colors.base};
          opacity: 0.5;
        }

        path {
          fill: ${(props) => props.theme.colors.background};
        }
      }
    }
  }
`;

const ShareButtons: React.FC<{
  title: string;
  postUrl: string;
}> = ({ title, postUrl }) => {
  const data = useStaticQuery<
    GatsbyTypes.ShareButtonsQuery
  >(graphql`
    query ShareButtons {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `);

  return (
    <ShareBtnWrapper>
      <TwitterShareButton
        className="share-btn-items"
        title={title}
        via={data.site.siteMetadata.social.twitter}
        url={postUrl}
      >
        <TwitterIcon round />
      </TwitterShareButton>
      <FacebookShareButton
        className="share-btn-items"
        url={postUrl}
      >
        <FacebookIcon round />
      </FacebookShareButton>
      <HatenaShareButton
        className="share-btn-items"
        url={postUrl}
      >
        <HatenaIcon round />
      </HatenaShareButton>
    </ShareBtnWrapper>
  );
};

export default ShareButtons;
