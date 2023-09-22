import { colors } from './colors';
import { typography } from './typography';
import { input } from './input';
export const styledDefaultTheme = {
    colors: {
        primary: colors.blue,
        primary25: colors.blue25,
        primary50: colors.blue50,
        primary100: colors.blue100,
        primary200: colors.blue200,
        primaryLight: colors.blue300,
        primary400: colors.blue400,
        primary600: colors.blue600,
        primaryDark: colors.blue700,
        primary800: colors.blue800,
        primaryBg: colors.white,
        primaryBgDark: colors.blue100,
        support1: colors.green,
        caret: colors.others.cyan,
        toast: {
            error: colors.others.red700,
            warning: colors.others.yellow700,
            success: colors.others.green700,
            info: colors.others.cyan700,
            default: colors.white,
            errorBg: colors.others.red100,
            warningBg: colors.others.yellow100,
            successBg: colors.others.green100,
            infoBg: colors.others.cyan100,
            defaultBg: colors.blue300,
        },
    },
    tooltip: {
        colors: {
            tooltipBg: colors.others.cyan100,
            tooltipText: colors.others.cyan700,
        },
    },
    typography,
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
    input,
};
export const styledDefaultProps = {
    theme: styledDefaultTheme,
};
export const presetSizes = {
    xs: { height: '12px', width: '12px' },
    small: { height: '16px', width: '16px' },
    normalBtn: { height: '20px', width: '20px' },
    normal: { height: '24px', width: '24px' },
    largeBtn: { height: '30px', width: '30px' },
    large: { height: '32px', width: '32px' },
    xl: { height: '48px', width: '48px' },
};
//# sourceMappingURL=index.js.map