import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import * as stories from './Pill.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const {Base} = composeStories(stories);

describe('Pill tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });

  it('should trigger on click', async () => {
    const mockCallBack = jest.fn();
    const tree = render(<Base onAfterIconClick={mockCallBack} />);
    const pill = (await tree.findByRole('listitem'))
      .getElementsByClassName('ticons-arrow_left')
      .item(0);

    if (pill) {
      userEvent.click(pill);
      expect(mockCallBack.mock.calls.length).toEqual(1);
    }
  });
});
