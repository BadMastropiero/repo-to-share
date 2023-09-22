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
import * as stories from './Notification.stories';
const { Base } = composeStories(stories);
describe('Notification test', () => {
    test('a toast should appear when any button is clicked, then automatically disappear', () => __awaiter(void 0, void 0, void 0, function* () {
        const tree = render(_jsx(Base, { timeout: 1000 }));
        const types = ['error', 'warning', 'success', 'info', 'default'];
        const randomIndex = Math.floor(Math.random() * types.length);
        const randomType = types[randomIndex];
        const buttonLabel = randomType.toUpperCase();
        const item = tree.getByText(buttonLabel);
        userEvent.click(item);
        const ToastMessage = tree.getByText(`Toast ${randomType}`).parentElement;
        expect(ToastMessage).toBeInTheDocument();
        yield waitForElementToBeRemoved(() => tree.queryByText(`Toast ${randomType}`));
    }));
    test('2 toasts should appear when 2 random buttons are clicked, then both automatically disappear', () => __awaiter(void 0, void 0, void 0, function* () {
        const tree = render(_jsx(Base, { timeout: 1000 }));
        const types = ['error', 'warning', 'success', 'info', 'default'];
        const firstRandomIndex = Math.floor(Math.random() * types.length);
        const secondRandomIndex = Math.floor(Math.random() * types.length);
        const firstButtonLabel = types[firstRandomIndex].toUpperCase();
        const secondButtonLabel = types[secondRandomIndex].toUpperCase();
        const firstItem = tree.getByText(firstButtonLabel);
        const secondItem = tree.getByText(secondButtonLabel);
        userEvent.click(firstItem);
        userEvent.click(secondItem);
        const ToastMessage = tree.queryAllByText('Toast description');
        expect(ToastMessage.length).toBe(2);
        yield waitForElementToBeRemoved(() => tree.queryAllByText('Toast description'));
    }));
});
//# sourceMappingURL=Notification.test.js.map