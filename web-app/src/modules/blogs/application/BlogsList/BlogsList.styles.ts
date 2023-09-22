import styled, {createGlobalStyle, css} from 'styled-components';
import {Typography, respondAbove, respondBelow} from 'tetraimpacts-components-library';

export const StyledBlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  isolation: isolate;
  padding: 20px 20px 100px;
`;

export const HeadingContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
  max-width: 1180px;
  width: 100%;
`;

export const HeadingTitle = styled(Typography)(
  ({
    theme: {
      colors: {primary},
    },
  }) => css`
    font-family: 'Teko';
    font-weight: 500;
    font-size: 54px;
    line-height: 77px;
    color: ${primary};

    ${respondAbove('laptop', {
      order: -1,
    })}
  `
);

export const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  border-radius: 10px;

  p,
  div {
    font-size: 20px;
    line-height: 100%;
    overflow: visible;
  }

  // Removing min-width from Dd's control, this is a workaround and can break easily
  div:last-child {
    div:last-child {
      div {
        min-width: unset;
      }
    }
  }

  // Set fixed Dropdown's control width to avoid displacements
  div div div:nth-child(3) {
    width: 160px;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  form {
    ${respondBelow('laptop', {
      width: '100%',
    })}
    ${respondAbove('laptopL', {
      width: '100%',
    })}
  }

  ${respondAbove('laptop', {
    width: '380px',
    order: -1,
  })}

  // Overriding original button size, similar to Subscriber component
  button {
    height: 36px;
    aspect-ratio: 1;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 'repeat(1, 280px)';

  align-items: flex-start;
  justify-content: space-evenly;

  padding: 0px;
  gap: 20px;
  /* max-width: 1180px; */

  ${respondAbove('tablet', {
    rowGap: '40px',
    gridTemplateColumns: 'repeat(2, 334px)',
  })}

  ${respondAbove('laptopL', {
    gridTemplateColumns: 'repeat(3, 1fr)',
  })}
`;

export const NoContentText = styled(Typography)`
  font-family: 'Teko';
  font-weight: 500;
  font-size: 30px;
  line-height: 77px;

  ${respondAbove('tablet', {
    gridColumn: 'span 2',
  })}

  ${respondAbove('laptopL', {
    gridColumn: 'span 3',
  })}
`;

export const PaginationWrapper = styled.div`
  display: grid;
  justify-content: end;

  ${respondAbove('tablet', {
    gridColumn: 'span 2',
  })}

  ${respondAbove('laptopL', {
    gridColumn: 'span 3',
  })}
`;

export const StyledBlogsGlobalStyle = createGlobalStyle(
  ({
    theme: {
      /* @ts-ignore */
      colors: {primary25}, // Ignoring error because this colors object should come in default theme
    },
  }) => css`
    body {
      background-color: ${primary25};
    }
  `
);

export const SelectedTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  max-width: 1180px;
  width: 100%;
`;
