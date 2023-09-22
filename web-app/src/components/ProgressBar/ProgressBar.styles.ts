import styled, {css} from 'styled-components';

export const FixedBar = styled.div(
  ({
    theme: {
      colors: {caret},
    },
  }) => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    width: 100vw;
    // background-color: ${caret};
    z-index: 99;
  `
);

export const MovingBar = styled.div<{progress?: number}>(
  ({
    theme: {
      colors: {caret},
    },
    progress,
  }) => css`
    height: 4px;
    width: ${progress}vw;
    background-color: ${caret};
    transition: width 0.5s;
  `
);
