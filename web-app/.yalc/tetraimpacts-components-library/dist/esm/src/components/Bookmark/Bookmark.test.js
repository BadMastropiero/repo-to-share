import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Bookmark.stories';
const { Base, MailBookmark } = composeStories(stories);
describe('Bookmark tests', () => {
    test('should render', () => {
        render(_jsx(Base, {}));
        expect(screen.getByText('Bookmark text')).toBeInTheDocument();
    });
    test('should match snapshot', () => {
        const tree = render(_jsx(MailBookmark, {}));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=Bookmark.test.js.map