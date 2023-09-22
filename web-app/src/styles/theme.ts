// TODO avoid disabling eslint and ignoring ts errors
/* eslint-disable @typescript-eslint/dot-notation */
import {styledDefaultTheme} from 'tetraimpacts-components-library';

export const appTheme = styledDefaultTheme;
// Colors
appTheme.colors = {
  ...appTheme.colors,
  // @ts-ignore
  blueHighLight: '#58FFFE',
  lilyWhite: '#E5FAFF',
};

// Typography
appTheme.typography = {
  ...appTheme.typography,
  base: {
    ...appTheme.typography.base,
    colors: {
      ...appTheme.typography.base.colors,
      // @ts-ignore
      blueHighLight: appTheme.colors.blueHighLight,
    },
  },
  presets: {
    ...appTheme.typography.presets,
    content: {
      ...appTheme.typography.presets.content,
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '26px',
    },
    // @ts-ignore
    cardContentPrimary: {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '30px',
      color: appTheme.colors.primary,
    },
  },
};

export default appTheme;
