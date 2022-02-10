import { render ,screen} from '@testing-library/react';
import Users from './users'
import { create, ReactTestRendererJSON } from 'react-test-renderer';
// import {screen} from '@testing-library/dom'
describe('users component', () => {

  const renderComponent = (props?: any) => create(<Users {...props} />);

  it('should render users component', () => {
    const component = renderComponent().toJSON();
    expect(component).toMatchInlineSnapshot(`
Array [
  <div
    onClick={[Function]}
  />,
  <button
    data-testid="custom-element"
    onClick={[Function]}
  >
    load
  </button>,
]
`);
  });

  it('should render users cmp', () => {
    render(<Users />)
    const element = screen.getByTestId('custom-element');
    element.click()
    // const component = renderComponent().toJSON();
    // console.log((component as ReactTestRendererJSON).props,"1");
    // console.log((component as ReactTestRendererJSON).props.onClick,"3");
  })
})


