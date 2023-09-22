export const breakpoints: Record<string, string> = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const halfBreakpoints: Record<string, string> = {
  tablet: '384px',
  laptop: '512px',
  laptopL: '720px',
  desktop: '1280px',
};

export const minimumPaddings: Record<string, string> = {
  mobileS: '6.25vw',
  mobileM: '6.25vw',
  mobileL: '6.25vw',
  tablet: '36px',
  laptop: '62px',
  laptopL: '76px',
  desktop: '90px',
};

export const halfBreakpointsVerticals: Record<string, string> = {
  tablet: '384px',
  laptop: '512px',
  laptopL: '720px',
  desktop: '1480px',
};

export const minimumPaddingsVerticals: Record<string, string> = {
  mobileS: '6.25vh',
  mobileM: '6.25vh',
  mobileL: '6.25vh',
  tablet: '36px',
  laptop: '162px',
  laptopL: '176px',
  desktop: '1190px',
};

export const devices: Record<string, string> = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};
