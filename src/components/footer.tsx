import React from 'react';
import { Link } from 'gatsby';

const Footer: React.FC<{ title: string }> = ({ title }) => (
  <footer>
    © {new Date().getFullYear()}
    {` `}
    <Link to={`/`}>{title}</Link>
  </footer>
);

export default Footer;
