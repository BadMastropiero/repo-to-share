import styled, {css, createGlobalStyle} from 'styled-components';

import {respondAbove, Typography} from 'tetraimpacts-components-library';

export const StaticPageGlobalStyle = createGlobalStyle`
  main {
    background: linear-gradient(180deg, #00eb87 0%, #0065a6 100%);
  }
`;

export const StyledPageControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  ${respondAbove('laptop', {
    alignItems: 'flex-start',
  })}
`;

export const ControlButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px;
  gap: 10px;
  flex-wrap: wrap;

  ${respondAbove('tablet', {
    gap: '30px',
    flexWrap: 'nowrap',
  })}
`;

export const IllustrationContainer = styled.div<{
  floating?: boolean;
}>(
  ({floating = false}) => css`
    row-gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    /* width: 70vw; // we keep the width to 80% of viewport */
    /* height: 64vw; // and keep the aspect-ratio */

    ${respondAbove('tablet', {
      gridColumn: 'span 8',
    })}

    ${respondAbove('laptop', {
      gridColumn: '1',
    })}

    @keyframes floating {
      50% {
        transform: translatey(10px);
      }
    }

    animation-name: ${floating ? 'floating' : 'none'};
    animation-duration: 5s;
    /* the velocity curve for the animation */
    animation-timing-function: cubic-bezier();
    /* set a delay for the animation playback */
    animation-delay: 1s;
    /* set it to an infinite loop */
    animation-iteration-count: infinite;

    animation-direction: alternate;
    position: relative;
  `
);

export const StyledTypography = styled(Typography)(
  () => css`
    font-size: 75px;
    line-height: 75px;

    ${respondAbove('tablet', {
      fontSize: '60px',
      lineHeight: '60px',
    })}

    ${respondAbove('laptop', {
      textAlign: 'left',
    })}
  `
);

export const ContentWrapper = styled.div`
  display: grid;
  justify-content: space-around;
  gap: 40px;
  grid-template-column: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  padding: 100px 20px;
  justify-items: stretch;
  max-width: 1180px;

  ${respondAbove('tablet', {
    gap: '80px',
    gridColumnGap: '20px',
    gridTemplateColumns: 'repeat(8, 1fr)',
    width: '688px',
  })}

  ${respondAbove('laptop', {
    gridTemplateColumns: 'repeat(12, 1fr)',
    width: 'unset',
  })}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${respondAbove('tablet', {
    gridColumn: 'span 8',
  })}

  ${respondAbove('laptop', {
    alignItems: 'flex-start',
    gridColumn: 'span 5',
  })}
`;

export const WorkingIllustrationContainer = styled.div`
  display: none;

  ${respondAbove('tablet', {
    display: 'flex',
    gridColumn: 'span 8',
  })}

  ${respondAbove('laptop', {
    gridColumn: 'span 7',
  })}
`;
