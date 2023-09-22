import {css} from 'styled-components';

export const floatInSpace = (delay: number = 1) => css`
  @keyframes floating {
    50% {
      transform: translatey(10px);
    }
  }
  animation-name: floating;
  animation-duration: 5s;
  /* the velocity curve for the animation */
  animation-timing-function: cubic-bezier();
  /* set a delay for the animation playback */
  animation-delay: ${`${delay}s`};
  /* set it to an infinite loop */
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const fadeIn = () => css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 5s;
`;

export const svgGlow = (amount: number = 32, yOffset: number = 5) => css`
  /* filter: drop-shadow(0px 5px 32px rgba(255,255,255,1)); */
  filter: drop-shadow(0px ${yOffset}px ${amount}px rgba(0, 235, 134, 0.7));
`;
