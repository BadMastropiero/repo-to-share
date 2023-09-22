"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devices = exports.flexAlignment = exports.dynamicBackground = exports.gridAlignment = exports.dynamicPaddingVertical = exports.dynamicPadding = exports.respondBelow = exports.respondAbove = void 0;
const styled_components_1 = require("styled-components");
const breakpoints_1 = require("../../styles/breakpoints");
Object.defineProperty(exports, "devices", { enumerable: true, get: function () { return breakpoints_1.devices; } });
const respondAbove = (breakpoint, content) => {
    const aboveBreakpointValue = breakpoints_1.breakpoints[breakpoint];
    return (0, styled_components_1.css) `
    @media (min-width: ${aboveBreakpointValue}) {
      ${(0, styled_components_1.css)(content)};
    }
  `;
};
exports.respondAbove = respondAbove;
const respondBelow = (breakpoint, content) => {
    const aboveBreakpointValue = breakpoints_1.breakpoints[breakpoint];
    return (0, styled_components_1.css) `
    @media (max-width: ${aboveBreakpointValue}) {
      ${(0, styled_components_1.css)(content)};
    }
  `;
};
exports.respondBelow = respondBelow;
const dynamicPadding = (fixedPaddingLeft, fixedPaddingRight) => {
    const dynamicPaddingSize = (size) => `calc(50vw - ${breakpoints_1.halfBreakpoints[size]})`;
    return (0, styled_components_1.css) `
    padding-left: ${fixedPaddingLeft || '6.25vw'};
    padding-right: ${fixedPaddingRight || '6.25vw'};

    ${respondAbove('tablet', {
        paddingLeft: `calc(max(${dynamicPaddingSize('tablet')}, ${breakpoints_1.minimumPaddings.tablet}))`,
        paddingRight: `calc(max(${dynamicPaddingSize('tablet')}, ${breakpoints_1.minimumPaddings.tablet}))`,
    })}

    ${respondAbove('laptop', {
        paddingLeft: `calc(max(${dynamicPaddingSize('laptop')}, ${breakpoints_1.minimumPaddings.laptop}))`,
        paddingRight: `calc(max(${dynamicPaddingSize('laptop')}, ${breakpoints_1.minimumPaddings.laptop}))`,
    })}

    ${respondAbove('laptopL', {
        paddingLeft: `calc(max(${dynamicPaddingSize('laptopL')}, ${breakpoints_1.minimumPaddings.laptopL}))`,
        paddingRight: `calc(max(${dynamicPaddingSize('laptopL')}, ${breakpoints_1.minimumPaddings.laptopL}))`,
    })}

    ${respondAbove('desktop', {
        paddingLeft: `calc(max(${dynamicPaddingSize('desktop')}, ${breakpoints_1.minimumPaddings.desktop}))`,
        paddingRight: `calc(max(${dynamicPaddingSize('desktop')}, ${breakpoints_1.minimumPaddings.desktop}))`,
    })}
  `;
};
exports.dynamicPadding = dynamicPadding;
const dynamicPaddingVertical = (fixedPaddingTop, fixedPaddingBottom) => {
    const dynamicPaddingSize = (size) => `calc(50vh - ${breakpoints_1.halfBreakpointsVerticals[size]})`;
    return (0, styled_components_1.css) `
    padding-top: ${fixedPaddingTop};
    padding-bottom: ${fixedPaddingBottom};
    ${respondAbove('tablet', {
        paddingTop: `calc(max(${dynamicPaddingSize('tablet')}, ${breakpoints_1.minimumPaddingsVerticals.tablet}))`,
        paddingBottom: `calc(max(${dynamicPaddingSize('tablet')}, ${breakpoints_1.minimumPaddingsVerticals.tablet}))`,
    })}
    ${respondAbove('laptop', {
        paddingTop: `calc(max(${dynamicPaddingSize('laptop')}, ${breakpoints_1.minimumPaddingsVerticals.laptop}))`,
        paddingBottom: `calc(max(${dynamicPaddingSize('laptop')}, ${breakpoints_1.minimumPaddingsVerticals.laptop}))`,
    })}
    ${respondAbove('laptopL', {
        paddingTop: `calc(max(${dynamicPaddingSize('laptopL')}, ${breakpoints_1.minimumPaddingsVerticals.laptopL}))`,
        paddingBottom: `calc(max(${dynamicPaddingSize('laptopL')}, ${breakpoints_1.minimumPaddingsVerticals.laptopL}))`,
    })}
    ${respondAbove('desktop', {
        paddingTop: `calc(max(${dynamicPaddingSize('desktop')}, ${breakpoints_1.minimumPaddingsVerticals.desktop}))`,
        paddingBottom: `calc(max(${dynamicPaddingSize('desktop')}, ${breakpoints_1.minimumPaddingsVerticals.desktop}))`,
    })}
  `;
};
exports.dynamicPaddingVertical = dynamicPaddingVertical;
const gridAlignment = () => (0, styled_components_1.css) `
  display: grid;
  place-items: center;
`;
exports.gridAlignment = gridAlignment;
const dynamicBackground = (background, clipPath) => (0, styled_components_1.css) `
  background: ${background};
  clip-path: polygon(${clipPath});
`;
exports.dynamicBackground = dynamicBackground;
const flexAlignment = (orientation) => {
    switch (orientation) {
        case 'column':
            return (0, styled_components_1.css) `
        display: flex;
        flex-direction: column;
      `;
        case 'row':
            return (0, styled_components_1.css) `
        display: flex;
        flex-direction: row;
      `;
        case 'column-center':
            return (0, styled_components_1.css) `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `;
        case 'row-center':
            return (0, styled_components_1.css) `
        align-items: center;
        display: flex;
        justify-content: center;
      `;
        default:
            return '';
    }
};
exports.flexAlignment = flexAlignment;
//# sourceMappingURL=index.js.map