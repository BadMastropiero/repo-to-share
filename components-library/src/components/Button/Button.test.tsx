import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Button.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const {Base} = composeStories(stories);

describe('Button tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });

  it('should trigger on click', () => {
    const mockCallBack = jest.fn();

    render(<Base onClick={mockCallBack} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
