import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import moment from 'moment';
import 'moment-timezone';

import styled from '../components/styled';

const FooterTag = styled.footer<{}>`
  background: ${(props) => props.theme.colors.background};
  border-top: 1px solid
    ${(props) => props.theme.colors.border};
  padding: 0 ${(props) => props.theme.sideSpace.base};
  color: ${(props) => props.theme.colors.base};
  transition: ${(props) => props.theme.colorModeTransition};
`;

const FooterContent = styled.div<{}>`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;

  .foot-icons {
    display: flex;

    a {
      margin-left: 16px;
      line-height: 1;

      .foot-icon-item {
        width: 20px;
        height: 20px;
        fill: ${(props) => props.theme.colors.base};
        transition: ${(props) =>
          props.theme.colorModeTransition};
      }
    }
  }
`;

const Copyright = styled.div<{}>`
  display: inline-block;

  a.by-foot-title {
    color: ${(props) => props.theme.colors.base};
  }
`;

const Footer: React.FC<{ title: string }> = ({ title }) => {
  const { site } = useStaticQuery<GatsbyTypes.FooterQuery>(
    graphql`
      query Footer {
        site {
          siteMetadata {
            social {
              twitter
              github
            }
          }
          buildTime
        }
      }
    `,
  );

  return (
    <FooterTag>
      <FooterContent className="by-container">
        <Copyright>
          © {new Date().getFullYear()}
          {` `}
          <Link to={`/`} className="by-foot-title">
            {title}
          </Link>
          {` `}
          <span className="tooltip-container">
            {`🚀`}
            <span className="tooltip-text tooltip-top">{`Last build: ${moment(
              site?.buildTime,
            )
              .tz('Asia/Tokyo')
              .format()}`}</span>
          </span>
        </Copyright>
        <div className="foot-icons">
          <a
            href={`https://twitter.com/${site?.siteMetadata.social.twitter}`}
            aria-label="twitter"
          >
            <svg
              className="twitter-icon foot-icon-item"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href={`https://github.com/${site?.siteMetadata.social.github}`}
            aria-label="GitHub"
          >
            <svg
              className="github-icon foot-icon-item"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <Link to={`/rss.xml`} aria-label="RSS">
            <svg
              className="rss-icon foot-icon-item"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
            </svg>{' '}
          </Link>
        </div>
      </FooterContent>
    </FooterTag>
  );
};

export default Footer;
