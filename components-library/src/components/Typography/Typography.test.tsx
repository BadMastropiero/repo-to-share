import {render} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Typography.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const {Base} = composeStories(stories);

describe('Typography tests', () => {
  test('should render', () => {
    const component = render(<Base />);
    expect(component.baseElement).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });

  test('should render correct tag type', () => {
    const {container} = render(<Base variant="h2" />);
    expect(container.querySelector('h2')).toBeInTheDocument();
  });
});
