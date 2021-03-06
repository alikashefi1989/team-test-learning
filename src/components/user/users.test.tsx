import { render, fireEvent, waitFor } from '@testing-library/react';
import Users from './users'
import { create } from 'react-test-renderer';

describe('users component', () => {

  const renderComponent = (props?: any) => create(<Users {...props} />);

  it('should render users component', () => {
    const component = renderComponent().toJSON();
    expect(component).toMatchSnapshot()
  });

  it('should load data by click load button', async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Users />,
    );

    const button = getByTestId('load-button');
    fireEvent.click(button);
    const loading = getByText('Loading...');
    expect(loading).toBeInTheDocument();
    expect(loading).toBeTruthy();

    const textData = await waitFor<HTMLElement>(() => getByText('data...'));

    expect(textData).toBeTruthy();

    const loading2time = queryByTestId('loading-element');
    expect(loading2time).not.toBeInTheDocument();

  });

  it('should show an error by clicking on load button', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(
      ()=> Promise.reject({status:500})
    );

    const { getByText, getByTestId, queryByTestId } = render(
      <Users />,
    );

    const loadButton = getByTestId('load-button');
    fireEvent.click(loadButton);

    const loading = getByText('Loading...');
    expect(loading).toBeInTheDocument();

    const textError = await waitFor<HTMLElement>(() => getByText('Error...'));
    expect(textError).toBeInTheDocument();

    const loading2time = queryByTestId('loading-element');
    expect(loading2time).not.toBeInTheDocument();

  });

})


