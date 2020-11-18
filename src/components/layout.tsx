import React from 'react';
import { WindowLocation } from '@reach/router';

import { Global } from '@emotion/core';
import globalStyle from '../styles/global';

import Header from '../components/header';
import Footer from '../components/footer';

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
      <Footer title={title} />
      <Global styles={globalStyle} />
    </div>
  );
};

export default Layout;
