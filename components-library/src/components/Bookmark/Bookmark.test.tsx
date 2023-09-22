import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import '@testing-library/jest-dom';

import * as stories from './Bookmark.stories';

const {Base, MailBookmark} = composeStories(stories);

describe('Bookmark tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByText('Bookmark text')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<MailBookmark />);
    expect(tree).toMatchSnapshot();
  });
});
