import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Dropdown.stories';

const {Base} = composeStories(stories);

describe('Dropdown tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });
});
