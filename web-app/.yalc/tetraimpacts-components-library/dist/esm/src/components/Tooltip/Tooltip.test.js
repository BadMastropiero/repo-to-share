import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Tooltip.stories';
const { Base, ClickEvent } = composeStories(stories);
describe('Tooltip tests', () => {
    test('should render', () => {
        render(_jsx(Base, {}));
        expect(screen.getByText('Testing tooltip')).toBeInTheDocument();
    });
    test('should be hidden by default', () => {
        render(_jsx(Base, {}));
        expect(screen.getByText('Testing tooltip')).not.toBeVisible();
    });
    test('should appear when button clicked', () => {
        const tree2 = render(_jsx(ClickEvent, {}));
        const tooltip = tree2.getByText('Button Clicked');
        expect(tooltip).not.toBeVisible();
        const item = tree2.getByRole('button');
        if (item) {
            userEvent.click(item);
            const tooltipAppears = tree2.getByText('Button Clicked');
            expect(tooltipAppears).toBeVisible();
            userEvent.click(item);
            const tooltipDisappears = tree2.getByText('Button Clicked');
            expect(tooltipDisappears).not.toBeVisible();
        }
    });
});
//# sourceMappingURL=Tooltip.test.js.map