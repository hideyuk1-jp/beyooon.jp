import React from 'react';

import styled from '@emotion/styled';

type Position = 'top' | 'right' | 'bottom' | 'left';

const Tooltip: React.FC<{
  tooltipContent: React.ReactNode;
  position?: Position;
}> = ({ tooltipContent, position = 'top', children }) => (
  <Wrapper>
    {children}
    <span className={`tooltip-text tooltip-${position}`}>
      {tooltipContent}
    </span>
  </Wrapper>
);

export default Tooltip;

const Wrapper = styled.span`
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
`;
