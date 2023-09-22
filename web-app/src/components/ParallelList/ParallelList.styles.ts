import styled, {css} from 'styled-components';
import {flexAlignment} from 'tetraimpacts-components-library';

export const StyledParallelList = styled.ul(
  ({
    theme: {
      colors: {primary200},
    },
  }) => css`
    margin: 0;
    padding: 0;
    ${flexAlignment('row-center')}
    flex-wrap: wrap;
    gap: 5px;
    list-style-type: none;
    > li {
      display: flex;
      gap: 5px;
      cursor: default;
      user-select: none;

      // TODO Implement similar (optional) behavior in TICL Typography link preset
      > a {
        :hover {
          text-decoration: underline;
          text-decoration-color: ${primary200};
        }
      }
    }
  `
);

export default StyledParallelList;
