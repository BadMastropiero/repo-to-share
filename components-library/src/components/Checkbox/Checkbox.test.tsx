import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Checkbox.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const {Base} = composeStories(stories);

describe('Checkbox tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });

  test('should toggle', () => {
    render(<Base />);

    const checkbox = screen.getByRole('checkbox');

    // Execute the click event of the checkbox
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    // expect(screen.queryByTestId("checkmark")).toBeInTheDocument(); // TODO improve this test by checking if checkmark is being rendered

    // Execute the click event again
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    // expect(screen.queryByTestId("checkmark")).not.toBeInTheDocument(); // TODO improve this test by checking if checkmark is being rendered
  });
});
