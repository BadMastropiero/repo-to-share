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
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Carousel.stories';
// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const { Base } = composeStories(stories);
describe('Carousel tests', () => {
    test('should render', () => {
        render(_jsx(Base, {}));
        expect(screen.getByText('Shape your ideas')).toBeInTheDocument();
    });
    test('should match snapshot', () => {
        const tree = render(_jsx(Base, {}));
        expect(tree).toMatchSnapshot();
    });
    it('should trigger next slide', () => __awaiter(void 0, void 0, void 0, function* () {
        let index = 0;
        const setIndex = (number) => {
            index = number;
        };
        const tree = render(_jsx(Base, { slideIndex: index, onSlideChange: setIndex }));
        const nextCard = yield tree.findByText('Shape your ideas'); // If story changes content, this should be updated
        userEvent.click(nextCard);
        expect(index).toEqual(1);
    }));
});
//# sourceMappingURL=Carousel.test.js.map