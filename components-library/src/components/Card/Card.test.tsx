import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Card.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const {Base} = composeStories(stories);

describe('Card tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByText('Shape your ideas')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });

  it('should trigger on click', async () => {
    const mockCallBack = jest.fn();
    const tree = render(<Base onClick={mockCallBack} />);
    const card = await tree.findByText('Shape your ideas');
    userEvent.click(card);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
