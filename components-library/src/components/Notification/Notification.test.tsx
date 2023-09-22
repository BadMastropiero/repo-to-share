import {render, waitForElementToBeRemoved} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import * as stories from './Notification.stories';

const {Base} = composeStories(stories);

describe('Notification test', () => {
  test('a toast should appear when any button is clicked, then automatically disappear', async () => {
    const tree = render(<Base timeout={1000} />);

    const types: string[] = ['error', 'warning', 'success', 'info', 'default'];

    const randomIndex = Math.floor(Math.random() * types.length);
    const randomType = types[randomIndex];
    const buttonLabel = randomType.toUpperCase();

    const item = tree.getByText(buttonLabel);
    userEvent.click(item);

    const ToastMessage = tree.getByText(`Toast ${randomType}`).parentElement;
    expect(ToastMessage).toBeInTheDocument();
    await waitForElementToBeRemoved(() => tree.queryByText(`Toast ${randomType}`));
  });

  test('2 toasts should appear when 2 random buttons are clicked, then both automatically disappear', async () => {
    const tree = render(<Base timeout={1000} />);

    const types: string[] = ['error', 'warning', 'success', 'info', 'default'];

    const firstRandomIndex = Math.floor(Math.random() * types.length);
    const secondRandomIndex = Math.floor(Math.random() * types.length);

    const firstButtonLabel = types[firstRandomIndex].toUpperCase();
    const secondButtonLabel = types[secondRandomIndex].toUpperCase();

    const firstItem = tree.getByText(firstButtonLabel);
    const secondItem = tree.getByText(secondButtonLabel);

    userEvent.click(firstItem);
    userEvent.click(secondItem);

    const ToastMessage = tree.queryAllByText('Toast description');
    expect(ToastMessage.length).toBe(2);

    await waitForElementToBeRemoved(() => tree.queryAllByText('Toast description'));
  });
});
