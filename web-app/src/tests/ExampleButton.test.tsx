import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Button tests', () => {
  test('should render', () => {
    render(<button type="button">Test</button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<button type="button">Test</button>);
    expect(tree).toMatchSnapshot();
  });

  it('should trigger on click', async () => {
    const mockCallBack = jest.fn();
    render(
      <button type="button" onClick={mockCallBack}>
        Test
      </button>
    );
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
