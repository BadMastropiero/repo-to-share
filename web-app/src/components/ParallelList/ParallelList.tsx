import React from 'react';

// Components

// Styles
import {StyledParallelList} from './ParallelList.styles';

// Interfaces
import ParallelListProps from './ParallelList.interface';

/**
 * Renders a horizontal unordered list
 *
 * @param joinBy Component used as separator
 * @returns
 */
function ParallelList({children, joinBy = '৹'}: ParallelListProps) {
  return (
    <StyledParallelList>
      {React.Children.count(children)
        ? React.Children.map(children, (child, index) => {
            if (index === 0) return <li>{child}</li>;
            return (
              <li>
                {joinBy}
                {child}
              </li>
            );
          })
        : children}
    </StyledParallelList>
  );
}

export default ParallelList;
