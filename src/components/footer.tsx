import React from 'react';
import { Link } from 'gatsby';

import styled from '../components/styled';

const Footer: React.FC<{ title: string }> = ({ title }) => (
  <FooterTag>
    <FooterContent className="inner">
      <Copyright>
        © {new Date().getFullYear()}
        {` `}
        <Link to={`/`}>{title}</Link>
      </Copyright>
    </FooterContent>
  </FooterTag>
);

export default Footer;

const FooterTag = styled.footer<{}>`
  background: ${(props) =>
    props.theme.colors.backgroundAccent};
`;

const FooterContent = styled.footer<{}>`
  padding: 40px 0;
`;

const Copyright = styled.div<{}>`
  padding: 0 ${(props) => props.theme.sideSpace.base};
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.base};
  }
`;
