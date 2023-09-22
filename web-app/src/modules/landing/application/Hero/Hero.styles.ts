import styled, {css} from 'styled-components';

import {respondAbove, Typography} from 'tetraimpacts-components-library';

export const HeroContainer = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
  grid-column-gap: 20px;
  margin: 0px 20px 0;
  max-width: 1440px;
  padding-top: 100px;
  padding-bottom: 100px;

  ${respondAbove('tablet', {
    zIndex: 1,
    gridColumnGap: '20px',
    margin: '0 40px',
    gridTemplateColumns: 'repeat(8, 1fr)',
    paddingTop: '200px',
    paddingBottom: '100px',
  })}

  ${respondAbove('laptop', {
    gridTemplateColumns: 'repeat(12, 1fr)',
  })}

  ${respondAbove('laptopL', {
    margin: '0px 0px',
  })}
`;

export const HeroFrame = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  align-items: center;
  gap: 30px;

  ${respondAbove('tablet', {
    gridColumn: '2 / 8',
  })}

  ${respondAbove('laptop', {
    gridColumn: '2 / 12',
  })}
`;

export const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
  gap: 30px;
`;

export const TetraimpactsTitle = styled(Typography)<{fancy?: boolean}>(
  ({
    theme: {
      colors: {blueHighLight, support1},
    },
    fancy = false,
  }) => css`
    font-size: 56px;

    color: ${blueHighLight};
    ${fancy &&
    `
      background: linear-gradient(90deg, ${blueHighLight}, ${support1}, ${blueHighLight}) 0 0 / 400%
      100%;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      @media (prefers-reduced-motion: no-preference) {
        animation: moveBg 10s infinite linear;
        @keyframes moveBg {
          to {
            background-position: 400% 0;
          }
        }
      }
    `}

    ${respondAbove('tablet', {
      fontSize: '90px',
    })}

    padding: 0px;
    text-align: center;
  `
);

export default HeroFrame;
