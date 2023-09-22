"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const testing_react_1 = require("@storybook/testing-react");
// import userEvent from '@testing-library/user-event';
require("@testing-library/jest-dom");
const stories = __importStar(require("./Icon.stories"));
// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { Base } = (0, testing_react_1.composeStories)(stories);
const { BigIcon } = (0, testing_react_1.composeStories)(stories);
describe('Icon tests', () => {
    test('should render', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        expect(react_1.screen.getByRole('img')).toBeInTheDocument();
    });
    test('should match snapshot', () => {
        const tree = (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        expect(tree).toMatchSnapshot();
    });
    test('should have 24px height/width', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        expect(react_1.screen.getByRole('img')).toHaveAttribute('width', '24px');
        expect(react_1.screen.getByRole('img')).toHaveAttribute('height', '24px');
    });
});
describe('Big Icon tests', () => {
    test("should have 48px width and height (size='xl')", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(BigIcon, {}));
        expect(react_1.screen.getByRole('img')).toHaveAttribute('width', '48px');
        expect(react_1.screen.getByRole('img')).toHaveAttribute('height', '48px');
    });
});
//# sourceMappingURL=Icon.test.js.map