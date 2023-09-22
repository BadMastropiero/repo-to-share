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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const testing_react_1 = require("@storybook/testing-react");
require("@testing-library/jest-dom");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const stories = __importStar(require("./Pill.stories"));
// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { Base } = (0, testing_react_1.composeStories)(stories);
describe('Pill tests', () => {
    test('should render', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        expect(react_1.screen.getByRole('listitem')).toBeInTheDocument();
    });
    test('should match snapshot', () => {
        const tree = (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        expect(tree).toMatchSnapshot();
    });
    it('should trigger on click', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockCallBack = jest.fn();
        const tree = (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, { onAfterIconClick: mockCallBack }));
        const pill = (yield tree.findByRole('listitem'))
            .getElementsByClassName('ticons-arrow_left')
            .item(0);
        if (pill) {
            user_event_1.default.click(pill);
            expect(mockCallBack.mock.calls.length).toEqual(1);
        }
    }));
});
//# sourceMappingURL=Pill.test.js.map