import styled, {css} from 'styled-components';
import {DynamicComponent} from '../DynamicComponent';

export const StyledTypography = styled(DynamicComponent)<{
  margin?: string;
  padding?: string;
  lineNumbers?: number;
}>(
  ({
    theme: {
      typography: {
        base: {
          fontFamily,
          margin,
          padding,
          colors,
          color,
          lineHeight,
          fontSize,
          fontStyle,
          fontWeight,
          textAlign,
          textTransform,
          letterSpacing,
          textDecorationLine,
          gradient,
        },
      },
    },
    margin: customMargin,
    padding: customPadding,
    lineNumbers,
  }) => css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    text-align: ${textAlign};
    text-transform: ${textTransform};
    letter-spacing: ${letterSpacing};
    text-decoration-line: ${textDecorationLine};
    margin: ${customMargin || margin};
    padding: ${customPadding || padding};
    color: ${color && !gradient ? colors[color] || color : null};
    background: ${gradient};
    -webkit-background-clip: ${gradient ? 'text' : null};
    background-clip: ${gradient ? 'text' : null};
    -webkit-text-fill-color: ${gradient ? 'transparent' : null};
    text-fill-color: ${gradient ? 'transparent' : null};
    width: ${gradient ? 'fit-content' : null};

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${lineNumbers};
    display: -webkit-box;
    -webkit-box-orient: vertical;
  `
);

export default StyledTypography;
