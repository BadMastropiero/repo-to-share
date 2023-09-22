import styled, {css} from 'styled-components';
import {respondAbove, Typography} from 'tetraimpacts-components-library';

export const StyledWrapper = styled.div(
  ({
    theme: {
      colors: {blueHighLight, primaryBg},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0px;
    gap: 30px;
    isolation: isolate;

    .ti-dot {
      border-color: ${blueHighLight};
      background-color: ${primaryBg};
    }

    .ti-dot-selected {
      background-color: transparent;
    }

    ${respondAbove('tablet', {
      paddingBottom: '150px',
    })}
  `
);

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 100%;
  max-width: 1180px;
  padding: 0px 20px;
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px;
  gap: 40px;
  width: 100%;
  max-width: 1180px;
  ul {
    padding: 0;
  }
`;

export const SliderControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  padding: 0px;
  gap: 20px;
  max-width: 1180px;
  width: 100%;
  padding: 0px 20px;
`;

export const StyledSectionTitle = styled(Typography)`
  font-weight: 500;
  font-size: 60px;
  line-height: 86px;
  text-transform: capitalize;

  ${respondAbove('tablet', {
    fontSize: '80px',
    lineHeight: '115px',
  })}
`;
