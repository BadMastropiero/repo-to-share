import {render} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Modal.stories';

const {Base} = composeStories(stories);

describe('Modal test', () => {
  test('should match snapshot', () => {
    const tree = render(<Base isOpen />);
    expect(tree).toMatchSnapshot();
  });

  test('should appear, then disapear when `Close` button clicked', () => {
    const tree = render(<Base />);
    const item = tree.getByText('Open Modal');

    userEvent.click(item);

    const ButtonInsideCard = tree.getByText('Close').parentElement;
    expect(ButtonInsideCard).toBeInTheDocument();

    if (ButtonInsideCard) {
      userEvent.click(ButtonInsideCard);
      expect(ButtonInsideCard).not.toBeInTheDocument();
    }
  });
});
