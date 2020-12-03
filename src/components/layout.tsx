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
  button {
    text-decoration: none;
    cursor: pointer;
  }
  .by-spacer {
    padding: 64px 0;
  }
  .by-container {
    margin: 0 auto;
    max-width: ${(props) => props.theme.sizes.maxWidth};
    width: 100%;
  }
  .by-center {
    text-align: center;
  }
  .by-container-small {
    margin: 0 auto;
    max-width: ${(props) =>
      props.theme.sizes.maxWidthSmall};
    width: 100%;
  }
  .by-section-head {
    margin-bottom: 24px;

    h2 {
      position: relative;
      margin: 0 0 12px;

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        margin-left: 16px;
        transform: translateY(-2px);
        width: 80px;
        height: 4px;
        border-radius: 2px;
        background: ${(props) =>
          props.theme.colors.gradient};
      }
    }

    p {
      color: ${(props) => props.theme.colors.light};
    }

    &.by-section-head-center {
      text-align: center;

      h2 {
        margin-bottom: 14px;
        padding-bottom: 14px;

        &:after {
          top: auto;
          bottom: 0;
          left: 50%;
          margin-left: 0px;
          transform: translateX(-40px);
          width: 80px;
        }
      }
    }
  }

  .by-section-foot {
    margin-top: 24px;
  }

  .by-btn {
    display: inline-flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    padding: 8px 16px;
    font-weight: 400;
    white-space: nowrap;
    border-radius: 4px;
    transition: background 0.25s var(--ease-in-out-quad),
      box-shadow 0.25s var(--ease-in-out-quad),
      transform 0.25s var(--ease-in-out-quad);

    &:hover {
      background: ${(props) =>
        props.theme.colors.backgroundAccent};
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
      transform: scale(1.1);
    }

    svg {
      fill: ${(props) => props.theme.colors.light};
      margin-left: 4px;
    }

    &.by-btn-primary {
      color: #ffffff;
      background: ${(props) => props.theme.colors.primary};
    }

    &.by-btn-outline {
      color: ${(props) => props.theme.colors.light};
      border: 1px solid
        ${(props) => props.theme.colors.light};
    }
  }
`;

const Main = styled.main`
  padding: 64px ${(props) => props.theme.sideSpace.base} 0
    ${(props) => props.theme.sideSpace.base};
`;
