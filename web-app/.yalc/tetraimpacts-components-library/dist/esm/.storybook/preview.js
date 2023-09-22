import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from 'styled-components';
import { styledDefaultTheme } from '../src/styles/index';
// Carousel related
import '@brainhubeu/react-carousel/lib/style.css';
// The types here are just a workaround, could not find the correct ones
const withThemeProvider = (Story, context) => (_jsx(ThemeProvider, Object.assign({ theme: styledDefaultTheme }, { children: _jsx(Story, Object.assign({}, context)) })));
export const decorators = [withThemeProvider];
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
//# sourceMappingURL=preview.js.map