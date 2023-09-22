import React, {useContext} from 'react';
import {ThemeContext, ThemeProvider} from 'styled-components';

// Styles
import {StyledTypography} from './Typography.styles';

// Interfaces
import {TypographyProps} from './Typography.interface';

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  colorPreset,
  preset: initialPreset = 'content',
  customColor,
  customPreset,
  ...rest
}) => {
  const color = customColor || colorPreset;
  const preset = customPreset || initialPreset;

  const theme = useContext(ThemeContext);
  const {typography} = theme;
  const presets = typography?.presets;
  const selectedPreset = presets && preset ? presets[preset] : null;
  let mergedTypographyBaseTheme = {...typography?.base, ...selectedPreset, ...rest};
  if (color) mergedTypographyBaseTheme = {...mergedTypographyBaseTheme, color};

  if (selectedPreset) {
    return (
      <ThemeProvider
        theme={{...theme, typography: {...typography, base: mergedTypographyBaseTheme}}}
      >
        <StyledTypography tag={variant} {...rest}>
          {children}
        </StyledTypography>
      </ThemeProvider>
    );
  }
  return (
    <StyledTypography tag={variant} {...rest}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
