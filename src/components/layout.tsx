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
  .flex-right {
    display: flex;
    justify-content: center;
  }

  .by-section-head {
    margin-bottom: 24px;

    h2 {
      position: relative;
      margin: 0 0 12px;

      &::after {
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

  .by-btn {
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;
    line-height: 1;
    padding: 10px 16px;
    font-weight: 400;
    white-space: nowrap;
    border: 0;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.base};
    background: ${(props) => props.theme.colors.base};
    transition: ${(props) =>
        props.theme.colorModeTransition},
      box-shadow 0.25s var(--ease-in-out-quad),
      transform 0.25s var(--ease-in-out-quad);

    &:hover {
      color: ${(props) => props.theme.colors.base};
      border: 1px solid
        ${(props) => props.theme.colors.base};
      background: transparent;
    }

    svg {
      fill: ${(props) => props.theme.colors.light};
      margin-left: 4px;
    }

    &.by-btn-outline {
      color: ${(props) => props.theme.colors.light};
      border: 1px solid
        ${(props) => props.theme.colors.light};
      background: transparent;

      &:hover {
        color: ${(props) => props.theme.colors.base};
        border: 1px solid
          ${(props) => props.theme.colors.base};

        svg {
          fill: ${(props) => props.theme.colors.base};
        }
      }
    }
  }

  .tooltip-container {
    position: relative;

    .tooltip-text {
      position: absolute;
      display: inline-block;
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: 4px;
      color: ${(props) => props.theme.colors.background};
      background: ${(props) => props.theme.colors.base};
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s var(--ease-in-out-quad),
        visibility 0.25s var(--ease-in-out-quad);

      &::after {
        content: ' ';
        position: absolute;
        border-width: 5px;
        border-style: solid;
        border-color: ${(props) => props.theme.colors.base}
          transparent transparent transparent;
      }
    }

    .tooltip-top {
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);

      &::after {
        top: 100%;
        left: 50%;
        transform: translateX(-5px);
      }
    }

    .tooltip-bottom {
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);

      &::after {
        bottom: 100%;
        left: 50%;
        transform: translateX(-5px) rotate(180deg);
      }
    }

    .tooltip-right {
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);

      &::after {
        right: 100%;
        top: 50%;
        transform: translateY(-5px) rotate(90deg);
      }
    }

    .tooltip-left {
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);

      &::after {
        left: 100%;
        top: 50%;
        transform: translateY(-5px) rotate(-90deg);
      }
    }

    &:hover {
      .tooltip-text {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

const Main = styled.main`
  padding: 64px ${(props) => props.theme.sideSpace.base} 0
    ${(props) => props.theme.sideSpace.base};
`;
