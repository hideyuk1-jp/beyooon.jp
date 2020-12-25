import React from 'react';

import styled from '../atoms/styled';

const Hero: React.FC<{
  title: string;
  description?: string;
  top?: boolean;
}> = ({ title, description, top }) => (
  <Wrapper>
    <div className="by-spacer">
      <div className={`by-container ${top ? 'top' : ''}`}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  </Wrapper>
);

export default Hero;

const Wrapper = styled.header`
  text-align: center;
  padding: 0px ${(props) => props.theme.sideSpace.base};

  h2 {
    position: relative;
    display: block;
    font-weight: 700;
    padding-bottom: 26px;
    line-height: 1.15;
    font-size: 2rem;

    @media screen and (min-width: ${(props) =>
        props.theme.responsive.small}) {
      font-size: 2.4rem;
    }

    @media screen and (min-width: ${(props) =>
        props.theme.responsive.medium}) {
      font-size: 2.8rem;
    }

    @media screen and (min-width: ${(props) =>
        props.theme.responsive.large}) {
      font-size: 3.2rem;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-40px);
      width: 80px;
      height: 4px;
      border-radius: 2px;
      background: ${(props) => props.theme.colors.gradient};
    }
  }

  p {
    padding-top: 24px;
    color: ${(props) => props.theme.colors.light};
  }

  .top {
    & > h2 {
      font-size: 4rem;
    }

    & > p {
      color: ${(props) => props.theme.colors.headerLight};
    }
  }
`;
