import React from 'react';
import { WindowLocation } from '@reach/router';

import GlobalStyle from '../styles/global';

import Header from '../components/header';

const Layout: React.FC<{
  location: WindowLocation<unknown>;
  title: string;
}> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div
      className="global-wrapper"
      data-is-root-path={isRootPath}
    >
      <Header title={title} location={location} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
      <GlobalStyle />
    </div>
  );
};

export default Layout;
