import styled, {css} from 'styled-components';

export const RippleContainer = styled.div<{color: string; duration: number}>(
  ({color, duration}) => css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    span {
      transform: scale(0);
      border-radius: 100%;
      position: absolute;
      opacity: 0.75;
      background-color: ${color};
      animation-name: ripple;
      animation-duration: ${duration}ms;
    }

    @keyframes ripple {
      to {
        opacity: 0;
        transform: scale(2);
      }
    }
  `
);

export default RippleContainer;
