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
require("@testing-library/jest-dom");
const stories = __importStar(require("./Input.stories"));
// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { Base, Number, Phone } = (0, testing_react_1.composeStories)(stories);
describe('Input tests', () => {
    test('should render', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        expect(react_1.screen.getByRole('textbox')).toBeInTheDocument();
    });
    test('should match snapshot', () => {
        const tree = (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        expect(tree).toMatchSnapshot();
    });
    it('should be controlled', () => {
        let value = '';
        const setValue = (number) => {
            value = number;
        };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, { value: value, onChange: e => {
                setValue(e.target.value);
            } }));
        const input = react_1.screen.getByRole('textbox');
        // userEvent.type(input, 'testing input'); // Not working on controlled input
        react_1.fireEvent.change(input, { target: { value: 'testing input' } });
        expect(value).toEqual('testing input');
    });
});
describe('Number Input tests', () => {
    it('should allow only numbers', () => {
        let value = '';
        const setValue = (number) => {
            value = number;
        };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Number, { value: value, onChange: e => {
                setValue(e.target.value);
            } }));
        const input = react_1.screen.getByRole('textbox');
        // userEvent.type(input, 'testing input 12 asd . 3'); // Not working on controlled input
        react_1.fireEvent.change(input, { target: { value: 'testing input 12 asd . 3' } });
        expect(value).toEqual('12.3');
    });
});
describe('Phone Button tests', () => {
    it('should match EEUU phone format', () => {
        let value = '';
        const setValue = (number) => {
            value = number;
        };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Phone, { value: value, onChange: e => {
                setValue(e.target.value);
            } }));
        const input = react_1.screen.getByRole('textbox');
        // userEvent.type(input, '(5asf65) 16#!#$5-16fwef wf5asfaf1sagg'); // Not working on controlled input
        react_1.fireEvent.change(input, { target: { value: '(5asf65) 16#!#$5-16fwef wf5asfaf1sagg' } });
        expect(value).toEqual('+(565) 165-1651');
    });
});
//# sourceMappingURL=Input.test.js.map