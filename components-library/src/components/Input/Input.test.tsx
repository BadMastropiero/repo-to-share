import {render, screen, fireEvent} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Input.stories';

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level!
const {Base, Number, Phone} = composeStories(stories);

describe('Input tests', () => {
  test('should render', () => {
    render(<Base />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const tree = render(<Base />);
    expect(tree).toMatchSnapshot();
  });

  it('should be controlled', () => {
    let value = '';
    const setValue = (number: string) => {
      value = number;
    };

    render(
      <Base
        value={value}
        onChange={e => {
          setValue((e.target as HTMLInputElement).value);
        }}
      />
    );
    const input = screen.getByRole('textbox');
    // userEvent.type(input, 'testing input'); // Not working on controlled input
    fireEvent.change(input, {target: {value: 'testing input'}});
    expect(value).toEqual('testing input');
  });
});

describe('Number Input tests', () => {
  it('should allow only numbers', () => {
    let value = '';
    const setValue = (number: string) => {
      value = number;
    };

    render(
      <Number
        value={value}
        onChange={e => {
          setValue((e.target as HTMLInputElement).value);
        }}
      />
    );
    const input = screen.getByRole('textbox');
    // userEvent.type(input, 'testing input 12 asd . 3'); // Not working on controlled input
    fireEvent.change(input, {target: {value: 'testing input 12 asd . 3'}});
    expect(value).toEqual('12.3');
  });
});

describe('Phone Button tests', () => {
  it('should match EEUU phone format', () => {
    let value = '';
    const setValue = (number: string) => {
      value = number;
    };

    render(
      <Phone
        value={value}
        onChange={e => {
          setValue((e.target as HTMLInputElement).value);
        }}
      />
    );
    const input = screen.getByRole('textbox');
    // userEvent.type(input, '(5asf65) 16#!#$5-16fwef wf5asfaf1sagg'); // Not working on controlled input
    fireEvent.change(input, {target: {value: '(5asf65) 16#!#$5-16fwef wf5asfaf1sagg'}});
    expect(value).toEqual('+(565) 165-1651');
  });
});
