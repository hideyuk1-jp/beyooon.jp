import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import moment from 'moment';
import 'moment-timezone';

import styled from '../components/styled';

const FooterTag = styled.footer<{}>`
  background: ${(props) => props.theme.colors.background};
  border-top: 1px solid
    ${(props) => props.theme.colors.border};

  color: ${(props) => props.theme.colors.base};
  transition: ${(props) => props.theme.colorModeTransition};
`;

const FooterContent = styled.div<{}>`
  padding: 40px 0;
`;

const Copyright = styled.div<{}>`
  padding: 0 ${(props) => props.theme.sideSpace.base};
  text-align: center;

  a.by-foot-title {
    color: ${(props) => props.theme.colors.base};
  }
`;

const Footer: React.FC<{ title: string }> = ({ title }) => {
  const { site } = useStaticQuery<GatsbyTypes.FooterQuery>(
    graphql`
      query Footer {
        site {
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
            <span className="tooltip-text tooltip-right">{`Last build: ${moment(
              site.buildTime,
            )
              .tz('Asia/Tokyo')
              .format()}`}</span>
          </span>
        </Copyright>
      </FooterContent>
    </FooterTag>
  );
};

export default Footer;
