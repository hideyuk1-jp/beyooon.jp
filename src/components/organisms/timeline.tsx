import React, { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

type TimelineData = {
  during: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
}[];

const Timeline: React.FC<{ data: TimelineData }> = ({ data }) => (
  <Wrapper className="timeline">
    {data.map(({ during, title, content }) => (
      <div className="timeline-item">
        <p className="during">{during}</p>
        <h3>{title}</h3>
        <div className="content">{content}</div>
      </div>
    ))}
  </Wrapper>
);

export default Timeline;

const Wrapper = styled.div`
  margin-left: 0.5rem;
  padding-left: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0.1875rem;
    width: 0.125rem;
    height: 100%;
    background: ${(props) => props.theme.colors.border};
    transition: ${(props) => props.theme.colorModeTransition};
  }

  .timeline-item {
    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }

    &::before {
      content: '';
      position: absolute;
      left: -0.5rem;
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 9999px;
      border: 0.5rem solid ${(props) => props.theme.colors.background};
      background: ${(props) => props.theme.colors.gradient};
      transition: ${(props) => props.theme.colorModeTransition};
    }

    .during {
      color: ${(props) => props.theme.colors.light};
      transition: ${(props) => props.theme.colorModeTransition};
      margin-bottom: 0.25rem;
    }

    .content {
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      background: ${(props) => props.theme.colors.backgroundPostCard};
      transition: ${(props) => props.theme.colorModeTransition};
      box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.08);

      & :last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;
