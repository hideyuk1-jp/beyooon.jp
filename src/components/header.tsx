import React from 'react';
import { Link } from 'gatsby';
import { WindowLocation } from '@reach/router';
import { useTheme } from 'emotion-theming';

import styled from '../components/styled';
import { Theme } from '../types';
import { useColorMode } from '../themeContext';

const DarkModeToggle: React.FC<{}> = () => {
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  function toggleColorMode(
    event: React.MouseEvent<HTMLElement>,
  ) {
    event.preventDefault();
    setColorMode();
  }

  return (
    <IconWrapper
      isDark={isDark}
      onClick={toggleColorMode}
      data-a11y="false"
      aria-label={
        isDark ? 'ライトモードに切替' : 'ダークモードに切替'
      }
      title={
        isDark ? 'ライトモードに切替' : 'ダークモードに切替'
      }
    >
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} />
    </IconWrapper>
  );
};

const Header: React.FC<{
  location: WindowLocation<unknown>;
}> = ({ location }) => {
  const theme: Theme = useTheme();
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const logoLink = (
    <Link to={`/`} className="logo-link" ariaLabel="HOME">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 85.768 25"
        width="86px"
        height="25px"
        className="logo"
        fill={theme.colors.base}
      >
        <g id="logo-bold">
          <path d="M73.456,5.878H77.04V8.1a4.091,4.091,0,0,1,3.988-2.514c2.977,0,4.74,1.994,4.74,5.751v8.18H82.185V11.543c0-1.908-.723-2.89-2.4-2.89-1.706,0-2.746,1.387-2.746,3.93V19.52H73.456Z" />
          <path d="M71.463,12.729a6.759,6.759,0,0,1-6.157,7,10.649,10.649,0,0,0,2.513-6.912.975.975,0,0,0,0-.108,10.805,10.805,0,0,0-2.485-7.04A6.733,6.733,0,0,1,71.463,12.729Z" />
          <path d="M64.5,12.706a6.76,6.76,0,0,1-6.158,7,10.647,10.647,0,0,0,2.513-6.912.975.975,0,0,0,0-.108,10.812,10.812,0,0,0-2.484-7.04A6.733,6.733,0,0,1,64.5,12.706Z" />
          <path d="M43.232,12.688a7.009,7.009,0,1,1,14.017,0,6.807,6.807,0,0,1-7.08,7.052A6.677,6.677,0,0,1,43.232,12.688Zm10.376.086v-.115c0-2.6-1.272-4.162-3.353-4.162-2.109,0-3.381,1.561-3.381,4.162v.115c0,2.544,1.243,4.047,3.324,4.047C52.307,16.821,53.608,15.318,53.608,12.774Z" />
          <path d="M29.881,21.907H31.3c1.648,0,2.081-.289,2.948-2.543L29.1,5.838h3.757l3.179,9.509,2.977-9.509H42.6L37.4,20.751C36.239,23.757,34.852,25,31.557,25H29.881Z" />
          <path d="M15.085,12.746c0-4.22,2.833-7.168,6.821-7.168,4.133,0,6.589,2.746,6.589,7.052v1.214H18.611a3.205,3.205,0,0,0,3.439,3.063A3.126,3.126,0,0,0,25.374,14.8L28.5,15.9c-.953,2.2-2.948,3.815-6.5,3.815C17.744,19.711,15.085,16.994,15.085,12.746Zm9.8-1.388c-.145-1.994-1.214-3.005-3.064-3.005a3.182,3.182,0,0,0-3.266,3.005Z" />
          <path d="M3.5,17.717V19.48H0V0H3.526V7.543A5.062,5.062,0,0,1,7.688,5.549c3.41,0,6.04,2.63,6.04,6.994v.029c0,4.422-2.6,7.2-6.069,7.2A5.032,5.032,0,0,1,3.5,17.717ZM10,12.688v-.2C10,9.8,8.67,8.468,6.676,8.468c-2.052,0-3.323,1.677-3.323,4.133v.231c0,2.457,1.213,4.018,3.323,4.018C8.613,16.85,10,15.376,10,12.688Z" />
        </g>
      </svg>
    </Link>
  );

  const menuLink = (
    <>
      <Link to={`/`} className="navbar-item menu-link">
        {'Blog'}
      </Link>
      <Link to={`/`} className="navbar-item menu-link">
        {'Works'}
      </Link>
      <Link to={`/`} className="navbar-item menu-link">
        {'About'}
      </Link>
      <Link to={`/`} className="navbar-item menu-link">
        {'Contact'}
      </Link>
    </>
  );

  return (
    <HeaderTag>
      <Navbar>
        <NavbarLeft>
          {isRootPath ? (
            <h1 className="navbar-item main-heading">
              {logoLink}
            </h1>
          ) : (
            <h3 className="navbar-item main-heading">
              {logoLink}
            </h3>
          )}
          {menuLink}
        </NavbarLeft>
        <NavbarRight>
          <DarkModeToggle />
        </NavbarRight>
      </Navbar>
    </HeaderTag>
  );
};

export default Header;

const HeaderTag = styled.header`
  position: relative;
  z-index: 1000;
  width: 100%;
  padding: 0 ${(props) => props.theme.sideSpace.base};
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  .navbar-item {
    padding: 10px 15px;
  }
  .main-heading {
    margin-left: -15px;
  }
  .logo-link {
    display: block;
  }
  .menu-link {
    display: block;
    color: ${(props) => props.theme.sideSpace.base};
  }
  .logo {
    display: block;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.button<{ isDark: boolean }>`
  opacity: 0.5;
  position: relative;
  border: none;
  outline: none;
  background: none;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;
  &:hover {
    opacity: 1;
  }
  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    border: 2px solid ${(props) => props.theme.colors.base};
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`;

// This is based off a codepen! Much appreciated to: https://codepen.io/aaroniker/pen/KGpXZo
const MoonOrSun = styled.div<{ isDark: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${(props) => (!props.isDark ? '4px' : '2px')}
    solid ${(props) => props.theme.colors.base};
  background: ${(props) => props.theme.colors.base};
  transform: scale(
    ${(props) => (!props.isDark ? 0.55 : 1)}
  );
  transition: all 0.45s ease;
  overflow: ${(props) =>
    !props.isDark ? 'visible' : 'hidden'};
  &::before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: 2px solid ${(props) => props.theme.colors.base};
    border-radius: 50%;
    transform: translate(
      ${(props) => (props.isDark ? '14px, -14px' : '0, 0')}
    );
    opacity: ${(props) => (!props.isDark ? 0 : 1)};
    transition: transform 0.45s ease;
  }
  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 ${(props) => props.theme.colors.base},
      0 23px 0 ${(props) => props.theme.colors.base},
      23px 0 0 ${(props) => props.theme.colors.base},
      -23px 0 0 ${(props) => props.theme.colors.base},
      15px 15px 0 ${(props) => props.theme.colors.base},
      -15px 15px 0 ${(props) => props.theme.colors.base},
      15px -15px 0 ${(props) => props.theme.colors.base},
      -15px -15px 0 ${(props) => props.theme.colors.base};
    transform: scale(${(props) => (!props.isDark ? 1 : 0)});
    transition: all 0.35s ease;
  }
`;

const MoonMask = styled.div<{ isDark: boolean }>`
  position: absolute;
  right: -1px;
  top: -8px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: ${(props) => props.theme.colors.background};
  transform: translate(
    ${(props) => (!props.isDark ? '14px, -14px' : '0, 0')}
  );
  opacity: ${(props) => (!props.isDark ? 0 : 1)};
  transition: ${(props) => props.theme.colorModeTransition},
    transform 0.45s ease;
`;
