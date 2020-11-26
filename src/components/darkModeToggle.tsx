import React from 'react';

import styled from '../components/styled';
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
      <MoonOrSun isDark={isDark}>
        <svg
          height="16px"
          width="40px"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="moon"
            d="M12.316511.0918C8.222511.09184.90657.773244.90653.68161C4.90652.334075.2931.087535.9220C2.510.98403104.0936307.82224C012.33793.66168.17616C11.90451615.01613.48841610.0778C14.9110.704813.66411.091812.316511.0918Z"
            fill="#B9C6D3"
          />
          <path
            className="sun"
            d="M8.00054C5.791544.00055.7914.00058C4.000510.2095.7915128.000512C10.2095121210.209128C125.79110.209548.00054ZM71C70.44757.4475080C8.5525090.447591C91.55258.5525282C7.4475271.552571ZM23C22.44752.4475232C3.5525242.447543C43.55253.5525434C2.4475423.552523ZM17C1.5525727.447528C28.55351.5525919C0.4475908.553508C07.44750.4475717ZM213C212.44752.447512312C3.552512412.4475413C413.55253.552514314C2.447514213.5525213ZM715C714.44557.447514814C8.55414914.4455915C915.5518.55416816C7.447516715.551715ZM1213C1212.447512.4475121312C13.5525121412.44751413C1413.552513.5525141314C12.4475141213.55251213ZM159C14.4489148.552148C147.446514.4487157C15.5527167.4465168C168.55215.5529159ZM123C122.447512.44752132C13.55252142.4475143C143.552513.55254134C12.44754123.5525123Z"
            fill="#FFE4A1"
          />
        </svg>
        <span className="u-a11y">
          {isDark ? 'Dark' : 'Light'}
        </span>
      </MoonOrSun>
    </IconWrapper>
  );
};

export default DarkModeToggle;

const IconWrapper = styled.button<{ isDark: boolean }>`
  position: relative;
  background-color: ${(props) =>
    props.isDark ? '#000000' : '#0984e3'};
  border: 0;
  border-radius: 12px;
  box-sizing: border-box;
  height: 24px;
  width: 48px;
  outline: none;
  padding: 0;
  text-align: left;
  transition: background-color 0.3s;

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

  &:before {
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
    transition: all 0.25s var(--ease-in-out-quad);
    width: 20px;
    z-index: 2;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
    &:before,
    .moon,
    .sun {
      animation: none;
      transition: none;
    }
  }
`;

const MoonOrSun = styled.div<{ isDark: boolean }>`
  position: relative;
  padding: 4px 0 0 4px;

  .moon,
  .sun {
    position: absolute;
    top: 0;
    height: 16px;
    width: 16px;
    transition: all 0.25s var(--ease-in-out-quad);
  }
  .moon {
    transform: ${(props) =>
      props.isDark ? 'translateX(0px)' : 'translateX(8px)'};
    opacity: ${(props) => (props.isDark ? '1' : '0')};
  }
  .sun {
    transform: ${(props) =>
      !props.isDark
        ? 'translateX(24px)'
        : 'translateX(20px)'};
    opacity: ${(props) => (!props.isDark ? '1' : '0')};
  }
`;
