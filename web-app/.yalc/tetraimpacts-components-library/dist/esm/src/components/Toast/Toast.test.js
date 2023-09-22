var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Toast.stories';
const { Base } = composeStories(stories);
describe('Toast test', () => {
    test('should match snapshot', () => {
        const tree = render(_jsx(Base, { isOpen: true }));
        expect(tree).toMatchSnapshot();
    });
    test('should appear, then disappear execute `ACTION` button', () => {
        const tree = render(_jsx(Base, {}));
        const item = tree.getByText('Launch Toast');
        userEvent.click(item);
        const ButtonInsideCard = tree.getByText('Action').parentElement;
        expect(ButtonInsideCard).toBeInTheDocument();
        if (ButtonInsideCard) {
            userEvent.click(ButtonInsideCard);
            expect(ButtonInsideCard).not.toBeInTheDocument();
        }
    });
    test('should appear, then automatically disappear', () => __awaiter(void 0, void 0, void 0, function* () {
        const tree = render(_jsx(Base, { timeout: 1000 }));
        const item = tree.getByText('Launch Toast');
        userEvent.click(item);
        const ButtonInsideCard = tree.getByText('Action').parentElement;
        expect(ButtonInsideCard).toBeInTheDocument();
        yield waitForElementToBeRemoved(() => tree.queryByText('Action'));
    }));
});
//# sourceMappingURL=Toast.test.js.map