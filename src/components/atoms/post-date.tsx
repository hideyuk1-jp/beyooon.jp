import React from 'react';
import moment from 'moment';
import 'moment-timezone';

import styled from '@emotion/styled';

type Size = 'small' | 'medium';

const PostDate: React.FC<{
  publish: string;
  update: string | null;
  size?: Size;
}> = ({ publish, update, size = 'medium' }) => {
  const type = !update || publish === update ? 'publish' : 'update';
  const date = !update || publish === update ? publish : update;
  return (
    <Wrapper size={size}>
      <div className="icon-wrapper">
        {type === 'publish' ? (
          <svg
            className="publish-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        ) : (
          <svg
            className="update-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
          </svg>
        )}
      </div>
      <time dateTime={moment(date).tz('Asia/Tokyo').format()}>
        {moment(date).local().format('YYYY.MM.DD')}
      </time>
    </Wrapper>
  );
};

export default PostDate;

const Wrapper = styled.div<{ size: Size }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: ${(props) => {
    if (props.size === 'small') return '12px';
    else return 'inherit';
  }};

  .icon-wrapper {
    line-height: 0;
    margin-right: 4px;

    .publish-icon,
    .update-icon {
      width: ${(props) => {
        if (props.size === 'small') return '12px';
        else return '16px';
      }};
      height: ${(props) => {
        if (props.size === 'small') return '12px';
        else return '16px';
      }};
      fill: ${(props) => props.theme.colors.light};
    }

    .update-icon {
      transform: rotate(-45deg);
    }
  }
`;
