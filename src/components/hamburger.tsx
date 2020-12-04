import React from 'react';

import styled from '../components/styled';

const IconWrapper = styled.button`
  position: relative;
  display: block;
  background: none;
  border: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.base};
  outline: none;
  width: 20px;
  height: 17px;
`;

const HumbergerInner = styled.div<{ isOpen: boolean }>`
  top: 50%;
  display: block;
  transform: translateY(-50%);
  background: ${(props) =>
    props.isOpen ? 'transparent' : props.theme.colors.base};
  transition: background 0.25s var(--ease-in-out-quad);

  &,
  &::before,
  &::after {
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 1px;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    background: ${(props) => props.theme.colors.base};
    transition: top 0.25s var(--ease-in-out-quad),
      background 0.25s var(--ease-in-out-quad),
      transform 0.25s var(--ease-in-out-quad);
  }

  &::before {
    top: ${(props) => (props.isOpen ? '0px' : '-6px')};
    transform: ${(props) =>
      props.isOpen ? 'rotate(315deg)' : 'rotate(0deg)'};
  }

  &::after {
    bottom: ${(props) => (props.isOpen ? '0px' : '-6px')};
    transform: ${(props) =>
      props.isOpen ? 'rotate(-315deg)' : 'rotate(0)'};
  }
`;

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
