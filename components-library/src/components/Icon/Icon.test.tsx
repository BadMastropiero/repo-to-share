import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Icon.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const {Base} = composeStories(stories);
const {BigIcon} = composeStories(stories);

describe('Icon tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });

  test('should have 24px height/width', () => {
    render(<Base />);
    expect(screen.getByRole('img')).toHaveAttribute('width', '24px');
    expect(screen.getByRole('img')).toHaveAttribute('height', '24px');
  });
});

describe('Big Icon tests', () => {
  test("should have 48px width and height (size='xl')", () => {
    render(<BigIcon />);
    expect(screen.getByRole('img')).toHaveAttribute('width', '48px');
    expect(screen.getByRole('img')).toHaveAttribute('height', '48px');
  });
});
