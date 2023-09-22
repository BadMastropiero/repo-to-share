import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Carousel.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const {Base} = composeStories(stories);

describe('Carousel tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByText('Shape your ideas')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });

  it('should trigger next slide', async () => {
    let index = 0;
    const setIndex = (number: number) => {
      index = number;
    };

    const tree = render(<Base slideIndex={index} onSlideChange={setIndex} />);
    const nextCard = await tree.findByText('Shape your ideas'); // If story changes content, this should be updated
    userEvent.click(nextCard);
    expect(index).toEqual(1);
  });
});
