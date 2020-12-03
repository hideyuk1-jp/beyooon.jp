import React from 'react';

import styled from '../components/styled';
import PostCard from '../components/postCard';
import { Posts } from '../types';

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(240px, 1fr)
  );
  grid-auto-rows: 1fr;
  grid-gap: 24px;
`;

const PostList: React.FC<{ posts: Posts }> = ({
  posts,
}) => (
  <PostListWrapper className="by-container">
    {posts.map((node) => {
      return (
        <PostCard key={node.fields?.slug} node={node} />
      );
    })}
  </PostListWrapper>
);

export default PostList;
