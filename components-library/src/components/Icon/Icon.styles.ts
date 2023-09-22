import styled, {css} from 'styled-components';

const Svg = styled.svg<{primary: boolean; disabled: boolean}>(
  ({
    theme: {checkedBg, primaryCheckedBg, primaryLight: disabledColor},
    primary,
    disabled,
    color,
  }) => css`
    display: inline-block;
    border-radius: 0px;
    width: 4em;
    height: 3em;
    fill: none;

    // Priorize color over the theme
    // stroke: ${disabled && disabledColor};
    stroke: ${(disabled && disabledColor) || color || (primary && primaryCheckedBg) || checkedBg};

    // background: ${primary ? checkedBg : primaryCheckedBg};
    stroke-width: 1em;

    &.bold {
      stroke-width: 8px;
    }

    &.fill-icon {
      fill: currentColor;
      stroke: none;
    }
  `
);

export default Svg;
