"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parameters = exports.decorators = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const index_1 = require("../src/styles/index");
// Carousel related
require("@brainhubeu/react-carousel/lib/style.css");
// The types here are just a workaround, could not find the correct ones
const withThemeProvider = (Story, context) => ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, Object.assign({ theme: index_1.styledDefaultTheme }, { children: (0, jsx_runtime_1.jsx)(Story, Object.assign({}, context)) })));
exports.decorators = [withThemeProvider];
exports.parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
//# sourceMappingURL=preview.js.map