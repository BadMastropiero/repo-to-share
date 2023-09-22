import styled, {css} from 'styled-components';
import {respondAbove} from 'tetraimpacts-components-library';

export const CommentsContainer = styled.div<{
  active: boolean;
  sticky?: boolean;
}>(
  ({
    theme: {
      colors: {primary25},
    },
    active = false,
    sticky = false,
  }) => css`
    display: flex;
    background: ${primary25};
    border-radius: 20px;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    align-items: stretch;
    padding: 20px 20px 40px;
    gap: 40px;
    isolation: isolate;
    transition: ease 0.3s;
    height: ${active ? '808px' : '175px'};
    width: 100%;

    ${respondAbove('tablet', {
      // Pin the index sidebar position if scroll over title Y
      top: `${sticky ? '100px' : ''}`,
      position: `${sticky ? 'sticky' : 'relative'}`,
    })}

    ${respondAbove('laptop', {
      maxWidth: '280px',
      height: `${active ? 'auto' : '175px'}`,
      maxHeight: `${active ? 'calc(100vh - 130px)' : '175px'}`,
    })}
  `
);

export const CommentsHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
`;

export const FeaturedCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  transition: all 0.3s;
  max-height: 593px;

  ${respondAbove('laptop', {
    maxHeight: `unset`,
  })}

  overflow: auto;
  gap: 20px;
`;

export const Commentary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 5px;
  align-items: stretch;
  gap: 10px;
  isolation: isolate;
  width: 100%;
`;

export const CommentaryHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;
