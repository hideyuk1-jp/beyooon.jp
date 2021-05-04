import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import styled from '@emotion/styled';
import { Theme } from '../../types';

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
};
type Variant = 'contained' | 'outlined' | 'text';
type Size = 'small' | 'medium';

const Button: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const {
    variant = 'contained',
    size = 'medium',
    href,
    startIcon,
    endIcon,
    fullWidth,
    children,
    ...others
  } = props;

  return href ? (
    <>
      {/* @ts-ignore */}
      <LinkWrapper
        to={href}
        {...others}
        className={`by-btn by-btn-${variant} by-btn-${size} ${
          fullWidth ? 'by-btn-fullWidth' : ''
        }`}
      >
        {startIcon && (
          <span className="by-btn-start-icon">
            {startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span className="by-btn-end-icon">{endIcon}</span>
        )}
      </LinkWrapper>
    </>
  ) : (
    <ButtonWrapper
      {...others}
      className={`by-btn by-btn-${variant} by-btn-${size} ${
        fullWidth ? 'by-btn-fullWidth' : ''
      }`}
    >
      {startIcon && (
        <span className="by-btn-start-icon">
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className="by-btn-end-icon">{endIcon}</span>
      )}
    </ButtonWrapper>
  );
};

export default Button;

const Style = (theme: Theme) => css`
  &.by-btn {
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;
    appearance: none;
    outline: none;
    line-height: 1;
    padding: 10px 16px;
    font-weight: 400;
    white-space: nowrap;
    border: 0;
    border-radius: 8px;
    color: ${theme.colors.background};
    border: 1px solid ${theme.colors.base};
    background: ${theme.colors.base};
    transition: ${theme.colorModeTransition},
      box-shadow 0.25s var(--ease-in-out-quad),
      transform 0.25s var(--ease-in-out-quad);

    svg {
      fill: ${theme.colors.background};
    }

    &:hover {
      color: ${theme.colors.base};
      border: 1px solid ${theme.colors.base};
      background: transparent;

      svg {
        fill: ${theme.colors.base};
      }
    }

    &.by-btn-outlined {
      color: ${theme.colors.light};
      border: 1px solid ${theme.colors.light};
      background: transparent;

      svg {
        fill: ${theme.colors.light};
      }

      &:hover {
        color: ${theme.colors.base};
        border: 1px solid ${theme.colors.base};

        svg {
          fill: ${theme.colors.base};
        }
      }
    }

    &.by-btn-text {
      color: ${theme.colors.light};
      border: 1px solid transparent;
      background: transparent;

      &:hover {
        color: ${theme.colors.base};

        svg {
          fill: ${theme.colors.base};
        }
      }
    }

    &.by-btn-small {
      font-size: 0.75rem;
      padding: 4px 8px;
    }

    &.by-btn-fullWidth {
      width: 100%;
    }

    .by-btn-start-icon,
    .by-btn-end-icon {
      line-height: 0;
    }

    .by-btn-start-icon {
      margin-right: 4px;
    }

    .by-btn-end-icon {
      margin-left: 4px;
    }
  }
`;

const LinkWrapper = styled(Link)<Props>`
  ${(props) => Style(props.theme)}
`;

const ButtonWrapper = styled.button<Props>`
  ${(props) => Style(props.theme)}
`;
