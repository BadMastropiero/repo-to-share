import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Alert.stories';
const { Base } = composeStories(stories);
describe('Alert test', () => {
    test('should match snapshot', () => {
        const tree = render(_jsx(Base, { isOpen: true }));
        expect(tree).toMatchSnapshot();
    });
    test('should appear, then disappear when `CANCEL` button clicked', () => {
        const tree = render(_jsx(Base, {}));
        const item = tree.getByText('Launch Alert');
        userEvent.click(item);
        const ButtonInsideCard = tree.getByText('CANCEL').parentElement;
        expect(ButtonInsideCard).toBeInTheDocument();
        if (ButtonInsideCard) {
            userEvent.click(ButtonInsideCard);
            expect(ButtonInsideCard).not.toBeInTheDocument();
        }
    });
    test('should appear, then disappear when `ACCEPT` button clicked', () => {
        const tree = render(_jsx(Base, {}));
        const item = tree.getByText('Launch Alert');
        userEvent.click(item);
        const ButtonInsideCard = tree.getByText('ACCEPT').parentElement;
        expect(ButtonInsideCard).toBeInTheDocument();
        if (ButtonInsideCard) {
            userEvent.click(ButtonInsideCard);
            expect(ButtonInsideCard).not.toBeInTheDocument();
        }
    });
});
//# sourceMappingURL=Alert.test.js.map