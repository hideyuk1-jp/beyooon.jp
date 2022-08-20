import React from 'react';
import { WindowLocation } from '@reach/router';

import styled from '@emotion/styled';
import Header from '../organisms/header';
import Footer from '../organisms/footer';

const Layout: React.FC<{
  location: WindowLocation<unknown>;
  title: string;
  children?: React.ReactNode;
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
  min-width: 100%;
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
  svg {
    transition: ${(props) =>
      props.theme.colorModeTransition};
  }
  .by-spacer {
    padding: 64px 0;
  }
  .by-spacer-large {
    padding: 128px 0;
  }
  .by-spacer-small {
    padding: 32px 0;
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
  .flex-center {
    display: flex;
    justify-content: center;
  }

  .by-section-head {
    margin-bottom: 24px;

    h2 {
      position: relative;
      margin: 0 0 12px;
      padding-bottom: 16px;

      &::after {
        content: '';
        position: absolute;
        border-radius: 2px;
        background: ${(props) =>
          props.theme.colors.gradient};
        bottom: 0;
        left: 0;
        width: 80px;
        height: 4px;
      }

      @media screen and (min-width: ${(props) =>
          props.theme.responsive.medium}) {
        padding-bottom: 0px;

        &::after {
          top: 50%;
          bottom: unset;
          left: auto;
          margin-left: 16px;
          transform: translateY(-2px);
          width: 80px;
          height: 4px;
        }
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

        &::after {
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
`;

const Main = styled.main`
  padding: 64px ${(props) => props.theme.sideSpace.base} 0
    ${(props) => props.theme.sideSpace.base};
`;
