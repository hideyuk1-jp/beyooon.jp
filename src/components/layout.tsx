import React from 'react';
import { WindowLocation } from '@reach/router';

import styled from '../components/styled';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout: React.FC<{
  location: WindowLocation<unknown>;
  title: string;
}> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <GlobalWrapper
      className="global-wrapper"
      data-is-root-path={isRootPath}
    >
      <Header location={location} />
      <main>{children}</main>
      <Footer title={title} />
    </GlobalWrapper>
  );
};

export default Layout;

const GlobalWrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.base};
  transition: ${(props) => props.theme.colorModeTransition};
`;
