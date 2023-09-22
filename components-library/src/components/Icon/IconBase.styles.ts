import styled, {css} from 'styled-components';

const Svg = styled.svg<{primary: boolean; disabled: boolean; viewBox?: string}>(
  ({
    theme: {
      colors: {primary: primaryColor, primaryBg, primaryLight: disabledColor},
    },
    primary,
    disabled,
    color,
    width,
    height,
  }) => css`
    border-radius: 0px;
    width: ${width}; // default should be 24px
    height: ${height};
    // display: inline-block;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;

    // Prioritize custom color over the theme's colors
    // stroke-width: .1px;
    // The following could be applied to the stroke as well
    fill: ${(disabled && disabledColor) || color || (primary && primaryColor) || primaryBg};
  `
);

export default Svg;
