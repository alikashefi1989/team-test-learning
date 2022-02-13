import React from 'react';
import { create } from 'react-test-renderer';
import Login from './Login';

describe('login compoentn', () => {
    const renderComponent = (props?: any) => create(<Login {...props} />);

    it('should render login component', () => {
        const component = renderComponent().toJSON();
        expect(component).toMatchSnapshot()
    });

});
