"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presetSizes = exports.styledDefaultProps = exports.styledDefaultTheme = void 0;
const colors_1 = require("./colors");
const typography_1 = require("./typography");
const input_1 = require("./input");
exports.styledDefaultTheme = {
    colors: {
        primary: colors_1.colors.blue,
        primary25: colors_1.colors.blue25,
        primary50: colors_1.colors.blue50,
        primary100: colors_1.colors.blue100,
        primary200: colors_1.colors.blue200,
        primaryLight: colors_1.colors.blue300,
        primary400: colors_1.colors.blue400,
        primary600: colors_1.colors.blue600,
        primaryDark: colors_1.colors.blue700,
        primary800: colors_1.colors.blue800,
        primaryBg: colors_1.colors.white,
        primaryBgDark: colors_1.colors.blue100,
        support1: colors_1.colors.green,
        caret: colors_1.colors.others.cyan,
        toast: {
            error: colors_1.colors.others.red700,
            warning: colors_1.colors.others.yellow700,
            success: colors_1.colors.others.green700,
            info: colors_1.colors.others.cyan700,
            default: colors_1.colors.white,
            errorBg: colors_1.colors.others.red100,
            warningBg: colors_1.colors.others.yellow100,
            successBg: colors_1.colors.others.green100,
            infoBg: colors_1.colors.others.cyan100,
            defaultBg: colors_1.colors.blue300,
        },
    },
    tooltip: {
        colors: {
            tooltipBg: colors_1.colors.others.cyan100,
            tooltipText: colors_1.colors.others.cyan700,
        },
    },
    typography: typography_1.typography,
    variantsMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subheading1: 'h6',
        subheading2: 'h6',
        p: 'p',
        body1: 'p',
        body2: 'p',
        title: 'h1',
        button: 'button',
        label: 'label',
        link: 'a',
        listItem: 'li',
        inline: 'span',
    },
    transition: 'all 0.2s',
    input: input_1.input,
};
exports.styledDefaultProps = {
    theme: exports.styledDefaultTheme,
};
exports.presetSizes = {
    xs: { height: '12px', width: '12px' },
    small: { height: '16px', width: '16px' },
    normalBtn: { height: '20px', width: '20px' },
    normal: { height: '24px', width: '24px' },
    largeBtn: { height: '30px', width: '30px' },
    large: { height: '32px', width: '32px' },
    xl: { height: '48px', width: '48px' },
};
//# sourceMappingURL=index.js.map