import React from 'react';
import { Link } from 'gatsby';
import { WindowLocation } from '@reach/router';

import svgLogo from '../svg/logo.svg';

const Header: React.FC<{
  location: WindowLocation<unknown>;
  title: string;
}> = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const logoLink = (
    <Link to={`/`} className="logo-link">
      <img className="logo" src={svgLogo} alt={title} />
    </Link>
  );

  let header;
  if (isRootPath) {
    header = <h1 className="main-heading">{logoLink}</h1>;
  } else {
    header = <h3 className="main-heading">{logoLink}</h3>;
  }

  return (
    <header className="global-header">{header}</header>
  );
};

export default Header;
