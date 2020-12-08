import React from 'react';

import styled from '../components/styled';
import PostCard from '../components/postCard';
import { Posts } from '../types';

const PostListWrapper = styled.div`
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
`;

const PostList: React.FC<{ posts: Posts }> = ({
  posts,
}) => (
  <div className="by-container">
    <PostListWrapper>
      {posts.map((node) => {
        return (
          <PostCard key={node.fields?.slug} node={node} />
        );
      })}
    </PostListWrapper>
  </div>
);

export default PostList;
