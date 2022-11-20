import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { WindowLocation } from '@reach/router';
import { throttle } from 'lodash';

import styled from '@emotion/styled';
import DarkModeToggle from './darkmode-toggle';
import Hamburger from './hamburger';

const MENU_ITEMS = [
  { title: 'ブログ', name: 'Blog' },
  { title: 'つくったもの', name: 'Works' },
  { title: 'beyooonとは', name: 'About' },
  { title: 'お問い合わせ', name: 'Contact' },
];

const Header: React.FC<{
  location: WindowLocation<unknown>;
}> = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);
  const headerHeight = 64;
  const scrollThreshold = 5;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollTop = window.pageYOffset;

      if (Math.abs(currentScrollTop - lastScrollTop) <= scrollThreshold) return;

      if (isMobileMenuOpen) {
        setLastScrollTop(currentScrollTop);
        return;
      }

      setHidden(
        currentScrollTop > lastScrollTop && currentScrollTop > headerHeight,
      );
      setLastScrollTop(currentScrollTop);
    }, 250);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop, isMobileMenuOpen]);

  const logoLink = (
    <Link to={`/`} className="logo-link" aria-label="Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 86 25"
        width="86px"
        height="25px"
        className="logo"
      >
        <path d="M73.655,5.878h3.593V8.1a4.1,4.1,0,0,1,4-2.514C84.232,5.589,86,7.583,86,11.34v8.18H82.407V11.543c0-1.908-.725-2.89-2.406-2.89-1.71,0-2.753,1.387-2.753,3.93V19.52H73.655Z" />
        <path d="M71.656,12.729a6.765,6.765,0,0,1-6.173,7A10.637,10.637,0,0,0,68,12.817a.975.975,0,0,0,0-.108,10.794,10.794,0,0,0-2.491-7.04A6.739,6.739,0,0,1,71.656,12.729Z" />
        <path d="M64.678,12.706a6.766,6.766,0,0,1-6.174,7,10.63,10.63,0,0,0,2.519-6.912.975.975,0,0,0,0-.108,10.79,10.79,0,0,0-2.491-7.04A6.739,6.739,0,0,1,64.678,12.706Z" />
        <path d="M43.349,12.688a6.785,6.785,0,0,1,7.042-7.11,6.778,6.778,0,0,1,7.013,7.11,6.817,6.817,0,0,1-7.1,7.052A6.685,6.685,0,0,1,43.349,12.688Zm10.4.086v-.115c0-2.6-1.275-4.162-3.362-4.162C48.276,8.5,47,10.058,47,12.659v.115c0,2.544,1.247,4.047,3.333,4.047C52.448,16.821,53.753,15.318,53.753,12.774Z" />
        <path d="M29.962,21.907h1.42c1.652,0,2.086-.289,2.956-2.543L29.179,5.838h3.768l3.187,9.509,2.985-9.509h3.594L37.5,20.751C36.337,23.757,34.946,25,31.642,25h-1.68Z" />
        <path d="M15.126,12.746c0-4.22,2.84-7.168,6.839-7.168,4.144,0,6.607,2.746,6.607,7.052v1.214H18.661a3.211,3.211,0,0,0,3.449,3.063A3.135,3.135,0,0,0,25.443,14.8l3.129,1.1c-.956,2.2-2.956,3.815-6.52,3.815C17.792,19.711,15.126,16.994,15.126,12.746Zm9.824-1.388c-.145-1.994-1.217-3.005-3.072-3.005A3.187,3.187,0,0,0,18.6,11.358Z" />
        <path d="M3.506,17.717V19.48H0V0H3.535V7.543A5.082,5.082,0,0,1,7.708,5.549c3.42,0,6.057,2.63,6.057,6.994v.029c0,4.422-2.608,7.2-6.085,7.2A5.052,5.052,0,0,1,3.506,17.717Zm6.521-5.029v-.2c0-2.688-1.333-4.018-3.333-4.018-2.057,0-3.332,1.677-3.332,4.133v.231c0,2.457,1.217,4.018,3.332,4.018C8.636,16.85,10.027,15.376,10.027,12.688Z" />
      </svg>
    </Link>
  );

  const logoLinkMobile = (
    <Link to={`/`} className="logo-link" aria-label="Home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23 25"
        width="23px"
        height="25px"
        className="logo"
      >
        <path d="M23,12.574C23,19.307,18.587,24.28,12.2,25A19.053,19.053,0,0,0,16.61,12.731a1.788,1.788,0,0,0,.007-.193A19.337,19.337,0,0,0,12.26.041C18.644.725,23,5.719,23,12.574Z" />
        <path d="M10.8,12.533C10.8,19.266,6.383,24.24,0,24.959A19.045,19.045,0,0,0,4.406,12.69a1.769,1.769,0,0,0,.007-.193A19.337,19.337,0,0,0,.056,0C6.44.684,10.8,5.679,10.8,12.533Z" />
      </svg>
    </Link>
  );

  const menuLinks = (
    <>
      {MENU_ITEMS.map((menuItem) => (
        <div className="menu-link-wrapper" key={menuItem.name}>
          <Link
            to={rootPath + menuItem.name.toLowerCase()}
            className={`navbar-item menu-link ${
              location.pathname.startsWith(
                rootPath + menuItem.name.toLowerCase(),
              )
                ? 'active'
                : ''
            }`}
            aria-label={menuItem.name}
          >
            {menuItem.title}
          </Link>
        </div>
      ))}
    </>
  );

  function toggleMobileMenuOpen(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <HeaderTag
        className={hidden ? 'hidden' : ''}
        isScrolled={lastScrollTop > headerHeight * 2}
      >
        <Navbar>
          <NavbarLeft>
            {isRootPath ? (
              <h1 className="navbar-item main-heading">{logoLink}</h1>
            ) : (
              <h3 className="navbar-item main-heading">{logoLink}</h3>
            )}
          </NavbarLeft>
          <NavbarCenter>{menuLinks}</NavbarCenter>
          <NavbarRight>
            <DarkModeToggle />
          </NavbarRight>
        </Navbar>
      </HeaderTag>

      <HeaderTag
        className={`mobile ${
          isMobileMenuOpen ? 'mobile-menu-open' : hidden ? 'hidden' : ''
        }`}
        isScrolled={lastScrollTop > headerHeight * 2}
      >
        <Navbar>
          <NavbarLeft>
            <Hamburger
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenuOpen}
            />
          </NavbarLeft>
          <NavbarCenter>
            {' '}
            {isRootPath ? (
              <h1 className="navbar-item main-heading">{logoLinkMobile}</h1>
            ) : (
              <h3 className="navbar-item main-heading">{logoLinkMobile}</h3>
            )}
          </NavbarCenter>
          <NavbarRight>
            <DarkModeToggle />
          </NavbarRight>
        </Navbar>
        <MobileMenu isOpen={isMobileMenuOpen}>{menuLinks}</MobileMenu>
      </HeaderTag>
    </>
  );
};

export default Header;

const HeaderTag = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 64px;
  background: ${(props) =>
    props.isScrolled
      ? props.theme.colors.backgroundHeaderNavbar
      : props.theme.colors.backgroundHeader};
  backdrop-filter: saturate(180%) blur(5px);
  overflow: hidden;
  transform: translateY(0);
  transition: height 0.25s var(--ease-in-out-quad),
    transform 0.25s var(--ease-in-out-quad),
    ${(props) => props.theme.colorModeTransition};

  &.hidden {
    transform: translateY(-200%);
  }

  svg.logo {
    fill: ${(props) => props.theme.colors.header};
  }

  display: none;

  &.mobile {
    display: block;

    .main-heading {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-left: 0px;
    }

    &.mobile-menu-open {
      position: fixed;
      height: 100%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    display: block;

    &.mobile {
      display: none;
    }
  }
`;

const Navbar = styled.nav`
  position: relative;
  display: flex;
  padding: 0 ${(props) => props.theme.sideSpace.base};
  align-items: center;
  justify-content: space-between;
  height: 64px;

  svg {
    transition: ${(props) => props.theme.colorModeTransition};
  }

  .navbar-item {
    padding: 10px 15px;
  }

  .main-heading {
    margin-left: -15px;
  }

  .logo-link {
    display: block;
  }

  .logo {
    display: block;
  }
  .menu-link {
    display: block;
    color: ${(props) => props.theme.colors.header};
    text-decoration: none;
    opacity: 0.8;
    transition: ${(props) => props.theme.colorModeTransition},
      opacity 0.25s var(--ease-in-out-quad);

    &:hover {
      opacity: 1;
    }
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarCenter = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

/* MobileMenu */
const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 8vw;
  max-height: calc(100vh - 64px);
  border-top: 1px solid ${(props) => props.theme.colors.borderHeader};
  overflow-y: auto;
  transition: border 0.25s var(--ease-in-out-quad);

  .menu-link-wrapper {
    transform: scale(${(props) => (props.isOpen ? '1' : '1.1')})
      translateY(${(props) => (props.isOpen ? '0px' : '-25px')});
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    transition: opacity 0.25s var(--ease-in-out-quad),
      transform 0.25s var(--ease-in-out-quad);

    &:nth-of-type(1) {
      transition-delay: ${(props) => (props.isOpen ? '0' : '0.15')}s;
      transition-property: opacity, transform;
    }
    &:nth-of-type(2) {
      transition-delay: ${(props) => (props.isOpen ? '0.05' : '0.1')}s;
      transition-property: opacity, transform;
    }
    &:nth-of-type(3) {
      transition-delay: ${(props) => (props.isOpen ? '0.1' : '0.05')}s;
      transition-property: opacity, transform;
    }
    &:nth-of-type(4) {
      transition-delay: ${(props) => (props.isOpen ? '0.15' : '0')}s;
      transition-property: opacity, transform;
    }

    a.menu-link {
      display: block;
      padding: 16px 0;
      color: ${(props) => props.theme.colors.header};
      border-bottom: 1px solid ${(props) => props.theme.colors.borderHeader};
      transition: ${(props) => props.theme.colorModeTransition},
        border 0.25s var(--ease-in-out-quad);
    }
  }
`;
