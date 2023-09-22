import styled, {css} from 'styled-components';
import {Bookmark, respondAbove} from 'tetraimpacts-components-library';

const StyledSkillBookmark = styled(Bookmark)<{isClickable?: boolean}>(
  ({
    theme: {
      colors: {primary100, primary200, primary800},
    },
    isClickable,
  }) => css`
    background-color: ${primary100};
    color: ${primary800};
    justify-content: flex-start;
    padding-right: 20px;
    height: 100%;

    > div:first-child {
      align-self: center;
      width: 13px;
      margin-right: 15px;
      height: 90%;
    }

    ul {
      display: none;
      ${respondAbove('tablet', {
        display: 'flex',
      })}
    }

    &:hover {
      background-color: ${isClickable && primary200};
    }
  `
);

export const MarkdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0px;

  ${respondAbove('tablet', {
    width: '70%',
  })}

  div {
    font-size: 20px;
    line-height: 30px;
    align-self: flex-start;
    width: 100%;
  }
`;

export default StyledSkillBookmark;
