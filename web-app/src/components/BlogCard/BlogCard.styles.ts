import styled, {css} from 'styled-components';
import {Card, Typography, respondAbove} from 'tetraimpacts-components-library';

export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 280px;
  height: 100%;
  ${respondAbove('tablet', {
    maxWidth: '334px',
  })}

  ${respondAbove('laptop', {
    maxWidth: '380px',
  })}
`;

export const IllustrationContainer = styled.div`
  display: flex;
  position: relative;
  height: 173px;
  max-width: 280px;
  width: 100%;
  transition: all 0.3s;

  &:hover {
    // temporal kinda animation
    transform: scale(1.02);
  }

  ${respondAbove('tablet', {
    height: '173px',
    maxWidth: '334px',
  })}

  ${respondAbove('laptop', {
    height: '200px',
    maxWidth: '380px',
  })}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0px;
  gap: 20px;
  width: 100%;
  flex: 1;

  ${respondAbove('tablet', {
    padding: '20px',
  })}
`;

export const CardStaticticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const CardStaticticsItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 5px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  column-gap: 5px;
  row-gap: 10px; // With uniform 5px gap it seems too tight
  width: 100%;
`;

export const BlogCardTitle = styled(Typography)<{primary?: boolean}>(
  ({
    theme: {
      colors: {primary, primaryBg},
    },
    primary: isPrimary,
  }) => css`
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: ${isPrimary ? primary : primaryBg};

    ${respondAbove('tablet', {
      // To have always the same distance to the TagContainer
      minHeight: '46px', // Since it shows 2 lines always, twice the line-height
    })}
  `
);
