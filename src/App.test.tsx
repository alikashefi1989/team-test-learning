import React from 'react';
import { render, fireEvent, cleanup, screen, getByText } from '@testing-library/react';
import App, { abc } from './App';
import renderer from 'react-test-renderer';

// beforeEach()
// beforeAll()
// afterEach()
// afterAll()

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ghol/i);
  expect(linkElement).toBeInTheDocument();

  const tree = renderer
    .create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
Array [
  <div
    className="App"
  >
    Gholiiiiiiiiiiii
  </div>,
  <span>
    jafar3
  </span>,
  <p
    style={
      Object {
        "textAlign": "center",
      }
    }
  >
    1
  </p>,
  <button
    onClick={[Function]}
  >
    click me
  </button>,
  <button
    data-testid="load-button"
    onClick={[Function]}
  >
    load
  </button>,
]
`);
});

it('CheckboxWithLabel changes the text after click', () => {
  const { getByText } = render(
    <App />,
  );

  // expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByText(/click me/i));

  expect(1).toBe(1);
});

it('abc call', () => {
  expect(abc(8, 9)).toBe(17);
  expect(abc(0, 9)).toBe(9);
  expect(abc(-9, 9)).toBe(0);
  expect(abc(100, 9)).toBe(109);
});
