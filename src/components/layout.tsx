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
      <Main>{children}</Main>
      <Footer title={title} />
    </GlobalWrapper>
  );
};

export default Layout;

const GlobalWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: ${(props) => props.theme.colors.background};
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.base};
  font-family: 'Helvetica Neue', Arial,
    'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo,
    sans-serif;
  transition: ${(props) => props.theme.colorModeTransition};
  a {
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;
    transition: ${(props) =>
      props.theme.colorModeTransition};
  }
  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .inner {
    margin: 0 auto;
    max-width: ${(props) => props.theme.sizes.maxWidth};
    width: 100%;
  }
`;

const Main = styled.main`
  padding: 64px ${(props) => props.theme.sideSpace.base} 0
    ${(props) => props.theme.sideSpace.base};
`;
