import React from 'react';
import moment from 'moment';
import 'moment-timezone';

import styled from './styled';

type Size = 'small' | 'medium';

const PostDate: React.FC<{
  startDate: string;
  endDate?: string;
  size?: Size;
}> = ({ startDate, endDate, size = 'medium' }) => {
  return (
    <Wrapper size={size}>
      <div className="icon-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
        </svg>
      </div>
      <p>
        {moment(startDate).local().format('YYYY.MM')}
        {endDate === startDate
          ? ' - Now'
          : moment(startDate).local().format('YYYY.MM') !==
              moment(endDate).local().format('YYYY.MM') &&
            ` - ${moment(endDate)
              .local()
              .format('YYYY.MM')}`}
      </p>
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

    & > svg {
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
