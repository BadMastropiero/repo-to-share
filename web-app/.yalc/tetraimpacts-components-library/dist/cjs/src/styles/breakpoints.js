"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devices = exports.minimumPaddingsVerticals = exports.halfBreakpointsVerticals = exports.minimumPaddings = exports.halfBreakpoints = exports.breakpoints = void 0;
exports.breakpoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};
exports.halfBreakpoints = {
    tablet: '384px',
    laptop: '512px',
    laptopL: '720px',
    desktop: '1280px',
};
exports.minimumPaddings = {
    mobileS: '6.25vw',
    mobileM: '6.25vw',
    mobileL: '6.25vw',
    tablet: '36px',
    laptop: '62px',
    laptopL: '76px',
    desktop: '90px',
};
exports.halfBreakpointsVerticals = {
    tablet: '384px',
    laptop: '512px',
    laptopL: '720px',
    desktop: '1480px',
};
exports.minimumPaddingsVerticals = {
    mobileS: '6.25vh',
    mobileM: '6.25vh',
    mobileL: '6.25vh',
    tablet: '36px',
    laptop: '162px',
    laptopL: '176px',
    desktop: '1190px',
};
exports.devices = {
    mobileS: `(min-width: ${exports.breakpoints.mobileS})`,
    mobileM: `(min-width: ${exports.breakpoints.mobileM})`,
    mobileL: `(min-width: ${exports.breakpoints.mobileL})`,
    tablet: `(min-width: ${exports.breakpoints.tablet})`,
    laptop: `(min-width: ${exports.breakpoints.laptop})`,
    laptopL: `(min-width: ${exports.breakpoints.laptopL})`,
    desktop: `(min-width: ${exports.breakpoints.desktop})`,
};
//# sourceMappingURL=breakpoints.js.map