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
const user_event_1 = __importDefault(require("@testing-library/user-event"));
require("@testing-library/jest-dom");
const stories = __importStar(require("./Toast.stories"));
const { Base } = (0, testing_react_1.composeStories)(stories);
describe('Toast test', () => {
    test('should match snapshot', () => {
        const tree = (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, { isOpen: true }));
        expect(tree).toMatchSnapshot();
    });
    test('should appear, then disappear execute `ACTION` button', () => {
        const tree = (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, {}));
        const item = tree.getByText('Launch Toast');
        user_event_1.default.click(item);
        const ButtonInsideCard = tree.getByText('Action').parentElement;
        expect(ButtonInsideCard).toBeInTheDocument();
        if (ButtonInsideCard) {
            user_event_1.default.click(ButtonInsideCard);
            expect(ButtonInsideCard).not.toBeInTheDocument();
        }
    });
    test('should appear, then automatically disappear', () => __awaiter(void 0, void 0, void 0, function* () {
        const tree = (0, react_1.render)((0, jsx_runtime_1.jsx)(Base, { timeout: 1000 }));
        const item = tree.getByText('Launch Toast');
        user_event_1.default.click(item);
        const ButtonInsideCard = tree.getByText('Action').parentElement;
        expect(ButtonInsideCard).toBeInTheDocument();
        yield (0, react_1.waitForElementToBeRemoved)(() => tree.queryByText('Action'));
    }));
});
//# sourceMappingURL=Toast.test.js.map