import styled, {css} from 'styled-components';
import {svgGlow} from 'styles/animations/animations';

export const AsteroidStyled = styled.div<{size: number}>(
  ({size}) => css`
    border-radius: 50%;
    width: ${size}px;
    aspect-ratio: 1;

    background: linear-gradient(158.63deg, #1fc3e7 24.95%, #003f68 87.02%);
    ${svgGlow(size / 2, 0)}
  `
);

export const BlurredEffect = styled.div<{size: number; blurAmount: number}>(
  ({size, blurAmount}) => css`
    width: ${size}px;
    aspect-ratio: 1;
    position: absolute;
    top: 0;
    border-radius: 50%;
    object-fit: contain;
    backdrop-filter: blur(${blurAmount}px);
    transform: scale(1.5);
    background: transparent;
  `
);

export const Container = styled.div`
  position: relative;
`;

export default AsteroidStyled;
