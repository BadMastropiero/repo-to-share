import styled, {css} from 'styled-components';
import {respondAbove} from 'tetraimpacts-components-library';

export const PlanetBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  /* overflow: hidden; */
  position: relative;
`;

export const Bg = styled.div`
  position: absolute;
  width: 100%;

  // FIx visible gaps
  margin-bottom: -10px;
`;

export const Mountains = styled.div`
  z-index: 2;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-image: url('/illustrations/landing/mountains.svg'); // fallback
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: calc(101%);
`;

export const RiverWrapper = styled.div(
  ({
    theme: {
      // @ts-ignore
      colors: {primary800}, // TODO WARN, check if this is working full server side
    },
  }) => css`
    background-color: ${primary800};
    width: 100%;
    margin-top: -10px;
    z-index: 2;
    display: flex;
    justify-content: center;
  `
);

export const River = styled.img(
  ({
    theme: {
      colors: {primary800},
    },
  }) => css`
    background-color: ${primary800};
    object-position: bottom;
    object-fit: fill;
    width: 100%;
    /* max-width: 1500px; */
    max-height: 260px;
    z-index: 2;
    position: relative;
  `
);

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 575px;
  ${respondAbove('tablet', {
    minHeight: '664px',
  })}
  /* padding-top: 202px;
  padding-bottom: 202px; */
  /* margin-bottom: -10px; */
  /* z-index: 1;? */

  /* background-image: url('/illustrations/landing/mountains.svg'); // fallback */
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: calc(101%);
  background-image: linear-gradient(
      186.86deg,
      #01223a -5.74%,
      #012a49 31.43%,
      rgba(1, 62, 102, 0.299625) 77.59%,
      #01af96 102.17%
    ),
    linear-gradient(0deg, #003f68, #003f68), linear-gradient(45deg, #00eb87 14.64%, #0066a6 85.36%);
`;

export const TetraAstronautWrapper = styled.div`
  position: absolute;
  bottom: 0;
  /* top: 20%; */
  transform: translateY(40%);
  right: calc(50% - min(600px, 45vw));
  z-index: 3;
`;

export const DebrisWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  /* transform: translateX(-50%); */
  z-index: 1;
  max-width: 1500px;
  width: 100vw;
  max-width: 1500px;
`;

export const DebrisWrapper2 = styled.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: end;
  top: 1750px;
  left: 0px;
  transform: scaleX(-1);
  z-index: -2;
  max-width: min(1500px, 100vw);
`;
