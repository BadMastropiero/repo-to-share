import {css, CSSObject} from 'styled-components';

import {
  breakpoints,
  halfBreakpoints,
  minimumPaddings,
  minimumPaddingsVerticals,
  halfBreakpointsVerticals,
  devices,
} from '../../styles/breakpoints';

import {TDevices} from '../../styles/devices';

type FlexAlignments = 'column' | 'row' | 'column-center' | 'row-center';

const respondAbove = (breakpoint: TDevices, content: CSSObject) => {
  const aboveBreakpointValue = breakpoints[breakpoint];

  return css`
    @media (min-width: ${aboveBreakpointValue}) {
      ${css(content)};
    }
  `;
};

const respondBelow = (breakpoint: TDevices, content: CSSObject) => {
  const aboveBreakpointValue = breakpoints[breakpoint];

  return css`
    @media (max-width: ${aboveBreakpointValue}) {
      ${css(content)};
    }
  `;
};

const dynamicPadding = (fixedPaddingLeft: string, fixedPaddingRight: string) => {
  const dynamicPaddingSize = (size: TDevices) => `calc(50vw - ${halfBreakpoints[size]})`;

  return css`
    padding-left: ${fixedPaddingLeft || '6.25vw'};
    padding-right: ${fixedPaddingRight || '6.25vw'};

    ${respondAbove('tablet', {
      paddingLeft: `calc(max(${dynamicPaddingSize('tablet')}, ${minimumPaddings.tablet}))`,
      paddingRight: `calc(max(${dynamicPaddingSize('tablet')}, ${minimumPaddings.tablet}))`,
    })}

    ${respondAbove('laptop', {
      paddingLeft: `calc(max(${dynamicPaddingSize('laptop')}, ${minimumPaddings.laptop}))`,
      paddingRight: `calc(max(${dynamicPaddingSize('laptop')}, ${minimumPaddings.laptop}))`,
    })}

    ${respondAbove('laptopL', {
      paddingLeft: `calc(max(${dynamicPaddingSize('laptopL')}, ${minimumPaddings.laptopL}))`,
      paddingRight: `calc(max(${dynamicPaddingSize('laptopL')}, ${minimumPaddings.laptopL}))`,
    })}

    ${respondAbove('desktop', {
      paddingLeft: `calc(max(${dynamicPaddingSize('desktop')}, ${minimumPaddings.desktop}))`,
      paddingRight: `calc(max(${dynamicPaddingSize('desktop')}, ${minimumPaddings.desktop}))`,
    })}
  `;
};

const dynamicPaddingVertical = (fixedPaddingTop: string, fixedPaddingBottom: string) => {
  const dynamicPaddingSize = (size: TDevices) => `calc(50vh - ${halfBreakpointsVerticals[size]})`;

  return css`
    padding-top: ${fixedPaddingTop};
    padding-bottom: ${fixedPaddingBottom};
    ${respondAbove('tablet', {
      paddingTop: `calc(max(${dynamicPaddingSize('tablet')}, ${minimumPaddingsVerticals.tablet}))`,
      paddingBottom: `calc(max(${dynamicPaddingSize('tablet')}, ${
        minimumPaddingsVerticals.tablet
      }))`,
    })}
    ${respondAbove('laptop', {
      paddingTop: `calc(max(${dynamicPaddingSize('laptop')}, ${minimumPaddingsVerticals.laptop}))`,
      paddingBottom: `calc(max(${dynamicPaddingSize('laptop')}, ${
        minimumPaddingsVerticals.laptop
      }))`,
    })}
    ${respondAbove('laptopL', {
      paddingTop: `calc(max(${dynamicPaddingSize('laptopL')}, ${
        minimumPaddingsVerticals.laptopL
      }))`,
      paddingBottom: `calc(max(${dynamicPaddingSize('laptopL')}, ${
        minimumPaddingsVerticals.laptopL
      }))`,
    })}
    ${respondAbove('desktop', {
      paddingTop: `calc(max(${dynamicPaddingSize('desktop')}, ${
        minimumPaddingsVerticals.desktop
      }))`,
      paddingBottom: `calc(max(${dynamicPaddingSize('desktop')}, ${
        minimumPaddingsVerticals.desktop
      }))`,
    })}
  `;
};

const gridAlignment = () => css`
  display: grid;
  place-items: center;
`;

const dynamicBackground = (background: string, clipPath: string) => css`
  background: ${background};
  clip-path: polygon(${clipPath});
`;

const flexAlignment = (orientation: FlexAlignments) => {
  switch (orientation) {
    case 'column':
      return css`
        display: flex;
        flex-direction: column;
      `;
    case 'row':
      return css`
        display: flex;
        flex-direction: row;
      `;

    case 'column-center':
      return css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `;

    case 'row-center':
      return css`
        align-items: center;
        display: flex;
        justify-content: center;
      `;

    default:
      return '';
  }
};

export {
  respondAbove,
  respondBelow,
  dynamicPadding,
  dynamicPaddingVertical,
  gridAlignment,
  dynamicBackground,
  flexAlignment,
  devices,
};
