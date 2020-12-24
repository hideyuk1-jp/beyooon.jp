import React from 'react';

import styled from '../../atoms/styled';
import { useColorMode } from '../../../store/theme-provider';

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
    <Wrapper isDark={isDark}>
      <button
        onClick={toggleColorMode}
        data-a11y="false"
        aria-label={
          isDark
            ? 'ライトモードに切替'
            : 'ダークモードに切替'
        }
        title={
          isDark
            ? 'ライトモードに切替'
            : 'ダークモードに切替'
        }
      >
        <div className="moon-or-sun">
          <svg
            height="16px"
            width="40px"
            viewBox="0 0 40 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="moon"
              d="M12.3165 11.0918C8.2225 11.0918 4.9065 7.77324 4.9065 3.68161C4.9065 2.33407 5.293 1.08753 5.922 0C2.51 0.984031 0 4.09363 0 7.82224C0 12.3379 3.66 16 8.176 16C11.9045 16 15.016 13.4884 16 10.0778C14.91 10.7048 13.664 11.0918 12.3165 11.0918Z"
              fill="#B9C6D3"
            />
            <path
              className="sun"
              d="M8.0005 4C5.7915 4 4.0005 5.791 4.0005 8C4.0005 10.209 5.7915 12 8.0005 12C10.2095 12 12 10.209 12 8C12 5.791 10.2095 4 8.0005 4ZM7 1C7 0.4475 7.4475 0 8 0C8.5525 0 9 0.4475 9 1C9 1.5525 8.5525 2 8 2C7.4475 2 7 1.5525 7 1ZM2 3C2 2.4475 2.4475 2 3 2C3.5525 2 4 2.4475 4 3C4 3.5525 3.5525 4 3 4C2.4475 4 2 3.5525 2 3ZM1 7C1.5525 7 2 7.4475 2 8C2 8.5535 1.5525 9 1 9C0.4475 9 0 8.5535 0 8C0 7.4475 0.4475 7 1 7ZM2 13C2 12.4475 2.4475 12 3 12C3.5525 12 4 12.4475 4 13C4 13.5525 3.5525 14 3 14C2.4475 14 2 13.5525 2 13ZM7 15C7 14.4455 7.4475 14 8 14C8.554 14 9 14.4455 9 15C9 15.551 8.554 16 8 16C7.4475 16 7 15.551 7 15ZM12 13C12 12.4475 12.4475 12 13 12C13.5525 12 14 12.4475 14 13C14 13.5525 13.5525 14 13 14C12.4475 14 12 13.5525 12 13ZM15 9C14.448 9 14 8.552 14 8C14 7.4465 14.448 7 15 7C15.552 7 16 7.4465 16 8C16 8.552 15.552 9 15 9ZM12 3C12 2.4475 12.4475 2 13 2C13.5525 2 14 2.4475 14 3C14 3.5525 13.5525 4 13 4C12.4475 4 12 3.5525 12 3Z"
              fill="#FFE4A1"
            />
          </svg>
          <span className="u-a11y">
            {isDark ? 'Dark' : 'Light'}
          </span>
        </div>
      </button>
    </Wrapper>
  );
};

export default DarkModeToggle;

const Wrapper = styled.div<{
  isDark: boolean;
}>`
  border-radius: 12px;
  height: 24px;
  width: 48px;

  overflow: hidden;

  & > button {
    position: relative;
    background-color: ${(props) =>
      props.isDark ? '#1e1f26' : '#0984e3'};
    border: none;
    box-sizing: border-box;
    height: 24px;
    width: 48px;
    outline: none;
    padding: 0;
    text-align: left;
    transition: ${(props) =>
      props.theme.colorModeTransition};

    .u-a11y {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    &::before {
      background: #ffffff;
      border-radius: 50%;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      box-sizing: border-box;
      content: '';
      height: 20px;
      left: ${(props) => (props.isDark ? '26px' : '2px')};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: left 0.25s var(--ease-in-out-quad),
        transform 0.25s var(--ease-in-out-quad);
      width: 20px;
      z-index: 2;
    }

    &:hover {
      cursor: pointer;
    }

    @media screen and (prefers-reduced-motion: reduce) {
      animation: none;
      transition: none;
      &::before,
      .moon,
      .sun {
        animation: none;
        transition: none;
      }
    }

    .moon-or-sun {
      position: relative;
      padding: 4px 0px 0px 4px;

      .moon,
      .sun {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 16px;
        width: 16px;
        transition: opacity 0.25s var(--ease-in-out-quad),
          transform 0.25s var(--ease-in-out-quad),
          visibility 0.25s var(--ease-in-out-quad);
      }
      .moon {
        transform: ${(props) =>
          props.isDark
            ? 'translateX(0px)'
            : 'translateX(8px)'};
        opacity: ${(props) => (props.isDark ? '1' : '0')};
        visibility: ${(props) =>
          props.isDark ? 'visible' : 'hidden'};
      }
      .sun {
        transform: ${(props) =>
          !props.isDark
            ? 'translateX(24px)'
            : 'translateX(20px)'};
        opacity: ${(props) => (!props.isDark ? '1' : '0')};
        visibility: ${(props) =>
          !props.isDark ? 'visible' : 'hidden'};
      }
    }
  }
`;
