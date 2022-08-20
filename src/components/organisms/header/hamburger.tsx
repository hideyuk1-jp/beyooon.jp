import React from 'react';

import styled from '@emotion/styled';

const Hamburger: React.FC<{
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ isOpen, onClick }) => {
  return (
    <IconWrapper onClick={onClick} aria-label="menu">
      <HumbergerInner isOpen={isOpen} />
    </IconWrapper>
  );
};

export default Hamburger;

const IconWrapper = styled.button`
  position: relative;
  display: block;
  background: none;
  border: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.header};
  outline: none;
  width: 24px;
  height: 24px;

  &:hover > *::before,
  &:hover > *::after {
    width: 24px;
  }
`;

const HumbergerInner = styled.div<{ isOpen: boolean }>`
  top: 50%;
  display: block;
  transform: translateY(-50%);
  background: ${(props) =>
    props.isOpen ? 'transparent' : props.theme.colors.header};
  transition: background 0.25s var(--ease-in-out-quad);

  &,
  &::before,
  &::after {
    position: absolute;
    width: 24px;
    height: 2px;
    border-radius: 1px;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    background: ${(props) => props.theme.colors.header};
    transition: top 0.25s var(--ease-in-out-quad),
      background 0.25s var(--ease-in-out-quad),
      width 0.25s var(--ease-in-out-quad),
      transform 0.25s var(--ease-in-out-quad);
  }

  &::before {
    width: ${(props) => (props.isOpen ? '24px' : '18px')};
    top: ${(props) => (props.isOpen ? '0px' : '-8px')};
    transform: ${(props) => (props.isOpen ? 'rotate(315deg)' : 'rotate(0deg)')};
  }

  &::after {
    width: ${(props) => (props.isOpen ? '24px' : '20px')};
    bottom: ${(props) => (props.isOpen ? '0px' : '-8px')};
    transform: ${(props) => (props.isOpen ? 'rotate(-315deg)' : 'rotate(0)')};
  }
`;
