import { render, fireEvent,waitFor } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import Login from './Login';

describe('login component', () => {
    const renderComponent = (props?: any) => create(<Login {...props} />);

    it('should render login component', () => {
        const component = renderComponent().toJSON();
        expect(component).toMatchSnapshot()
    });

    it('should find the login page with only two inputs', () => {
        const { getByTestId, container } = render(<Login />);
        const usernameInput = getByTestId('username-input');
        const passwordInput = getByTestId('password-input');

        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

        const otherInputs = container.querySelectorAll('input');
        expect(otherInputs.length).toBe(2);
    });

    it('should find the inputs empty', () => {
        const { getByTestId } = render(<Login />);
        const usernameInput = getByTestId('username-input');
        const passwordInput = getByTestId('password-input');

        expect(usernameInput).toHaveValue('');
        expect(passwordInput).toHaveValue('');
    });

    it('should fill and submit the form', async() => {
        const { getByTestId } = render(<Login />);
        const usernameInput = getByTestId('username-input');
        const passwordInput = getByTestId('password-input');
        const submitButton = getByTestId('submit-button');

        fireEvent.change(usernameInput, { target: { value: 'abolhasan' } });
        fireEvent.change(passwordInput, { target: { value: '1357' } });

        fireEvent.click(submitButton);

        const dataResponse = await waitFor<HTMLElement>(() => getByTestId('data-response'));
        expect(dataResponse).toBeInTheDocument();
    });
});
