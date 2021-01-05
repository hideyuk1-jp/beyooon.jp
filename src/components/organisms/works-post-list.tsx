import React from 'react';

import styled from '../atoms/styled';
import PostCard from '../molecules/works-post-card';
import { WorksPosts } from '../../types';

const PostList: React.FC<{ posts: WorksPosts }> = ({
  posts,
}) => (
  <Wrapper className="by-container">
    <div className="post-list">
      {posts.map((node) => {
        return (
          <PostCard key={node.fields?.slug} node={node} />
        );
      })}
    </div>
  </Wrapper>
);

export default PostList;

const Wrapper = styled.div`
  .post-list {
    display: flex;
    flex-wrap: wrap;
    margin: -12px;

    article {
      border: 12px solid transparent;

      width: 100%;

      @media screen and (min-width: ${(props) =>
          props.theme.responsive.medium}) {
        width: 50%;
      }

      @media screen and (min-width: ${(props) =>
          props.theme.responsive.large}) {
        width: 33.33333%;
      }
    }
  }
`;