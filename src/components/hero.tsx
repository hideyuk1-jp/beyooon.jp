import React from 'react';

import styled from './styled';

const Hero = styled.header`
  text-align: center;

  h2 {
    position: relative;
    display: block;
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 26px;
    line-height: 1.15;

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
`;

const PageHero: React.FC<{
  title: string;
  description?: string;
}> = ({ title, description }) => (
  <Hero className="by-hero by-spacer">
    <div className="by-container">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  </Hero>
);

export default PageHero;
