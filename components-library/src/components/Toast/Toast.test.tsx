import {render, waitForElementToBeRemoved} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Toast.stories';

const {Base} = composeStories(stories);

describe('Toast test', () => {
  test('should match snapshot', () => {
    const tree = render(<Base isOpen />);
    expect(tree).toMatchSnapshot();
  });

  test('should appear, then disappear execute `ACTION` button', () => {
    const tree = render(<Base />);
    const item = tree.getByText('Launch Toast');

    userEvent.click(item);

    const ButtonInsideCard = tree.getByText('Action').parentElement;
    expect(ButtonInsideCard).toBeInTheDocument();

    if (ButtonInsideCard) {
      userEvent.click(ButtonInsideCard);
      expect(ButtonInsideCard).not.toBeInTheDocument();
    }
  });

  test('should appear, then automatically disappear', async () => {
    const tree = render(<Base timeout={1000} />);
    const item = tree.getByText('Launch Toast');

    userEvent.click(item);

    const ButtonInsideCard = tree.getByText('Action').parentElement;
    expect(ButtonInsideCard).toBeInTheDocument();
    await waitForElementToBeRemoved(() => tree.queryByText('Action'));
  });
});
