import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {ThemeProvider} from 'styled-components';
import {styledDefaultTheme} from 'tetraimpacts-components-library';
import Link from './Link';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Link tests', () => {
  test('should trigger alert on external link', async () => {
    const tree = render(
      <ThemeProvider theme={styledDefaultTheme}>
        <Link href="https:/google.com" leaveAlertTitle="Leave this page?">
          Test Link
        </Link>
      </ThemeProvider>
    );
    const link = tree.getByRole('link');
    await userEvent.click(link);
    expect(tree.getByText('Leave this page?')).toBeInTheDocument();
  });

  test('should not trigger alert on internal link', async () => {
    const tree = render(
      <ThemeProvider theme={styledDefaultTheme}>
        <Link href="#TOC">Test Link</Link>
      </ThemeProvider>
    );
    const link = screen.getByRole('link');
    userEvent.click(link);
    expect(tree.queryByText('Leave this page?')).toBeNull();
  });
});
