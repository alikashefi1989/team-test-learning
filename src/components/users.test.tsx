import { render, screen, fireEvent, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import Users from './users'
import { create, ReactTestRendererJSON } from 'react-test-renderer';
// import {screen} from '@testing-library/dom'
describe('users component', () => {

  const renderComponent = (props?: any) => create(<Users {...props} />);

  it('should render users component', () => {
    const component = renderComponent().toJSON();
    expect(component).toMatchSnapshot()
  });

  it('should render users cmp', async () => {
    const { getByText, getByTestId } = render(
      <Users />,
    )

    const button = getByTestId('custom-element')
    fireEvent.click(button);
    const loading = getByText('Loading...')
    expect(loading).toBeInTheDocument()
    expect(loading).toBeTruthy()

    const textData = await waitFor<HTMLElement>(() => getByText('data...'),{
      interval:2,
      timeout:10
    })
    console.log(textData,"jafar")
    expect(textData).toBeTruthy()
    expect(loading).toBeInTheDocument()


    // test('shows how async / await works', async () => {

    //   try {
    //     const value = await Promise.resolve(true);

    //   } catch (error) {

    //   }
    // });

  })
})


