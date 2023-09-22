import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Option.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const {Base, NoCheckbox} = composeStories(stories);

describe('Option tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });

  test('should toggle', () => {
    render(<Base />);

    const option = screen.getByRole('checkbox');

    // Execute the click event of the option
    userEvent.click(option);
    expect(option).toBeChecked();
    // expect(screen.queryByTestId("checkmark")).toBeInTheDocument();

    // Execute the click event again
    userEvent.click(option);
    expect(option).not.toBeChecked();
    // expect(screen.queryByTestId("checkmark")).not.toBeInTheDocument();
  });
});

describe('Option (nocheckbox) tests', () => {
  test('should render', () => {
    render(<NoCheckbox />);
    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<NoCheckbox />);
    expect(tree).toMatchSnapshot();
  });

  test('checkbox should not exist', () => {
    const {queryByTestId} = render(<NoCheckbox />);
    expect(queryByTestId('checkbox')).toBeNull();
  });
});
