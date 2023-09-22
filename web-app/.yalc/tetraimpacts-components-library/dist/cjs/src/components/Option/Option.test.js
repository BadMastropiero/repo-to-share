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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const testing_react_1 = require("@storybook/testing-react");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
require("@testing-library/jest-dom");
const stories = __importStar(require("./Option.stories"));
// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { Base, NoCheckbox } = (0, testing_react_1.composeStories)(stories);
describe('Option tests', () => {
    test('should render', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        expect(react_1.screen.getByRole('option')).toBeInTheDocument();
    });
    test('should match snapshot', () => {
        const tree = (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        expect(tree).toMatchSnapshot();
    });
    test('should toggle', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        const option = react_1.screen.getByRole('checkbox');
        // Execute the click event of the option
        user_event_1.default.click(option);
        expect(option).toBeChecked();
        // expect(screen.queryByTestId("checkmark")).toBeInTheDocument();
        // Execute the click event again
        user_event_1.default.click(option);
        expect(option).not.toBeChecked();
        // expect(screen.queryByTestId("checkmark")).not.toBeInTheDocument();
    });
});
describe('Option (nocheckbox) tests', () => {
    test('should render', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(NoCheckbox, {}));
        expect(react_1.screen.getByRole('option')).toBeInTheDocument();
    });
    test('should match snapshot', () => {
        const tree = (0, react_1.render)((0, jsx_runtime_1.jsx)(NoCheckbox, {}));
        expect(tree).toMatchSnapshot();
    });
    test('checkbox should not exist', () => {
        const { queryByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(NoCheckbox, {}));
        expect(queryByTestId('checkbox')).toBeNull();
    });
});
//# sourceMappingURL=Option.test.js.map