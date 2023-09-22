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
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import * as stories from './Pill.stories';
// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { Base } = composeStories(stories);
describe('Pill tests', () => {
    test('should render', () => {
        render(_jsx(Base, {}));
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    });
    test('should match snapshot', () => {
        const tree = render(_jsx(Base, {}));
        expect(tree).toMatchSnapshot();
    });
    it('should trigger on click', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockCallBack = jest.fn();
        const tree = render(_jsx(Base, { onAfterIconClick: mockCallBack }));
        const pill = (yield tree.findByRole('listitem'))
            .getElementsByClassName('ticons-arrow_left')
            .item(0);
        if (pill) {
            userEvent.click(pill);
            expect(mockCallBack.mock.calls.length).toEqual(1);
        }
    }));
});
//# sourceMappingURL=Pill.test.js.map