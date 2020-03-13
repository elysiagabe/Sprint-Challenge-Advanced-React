import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SubscriptionForm from './SubscriptionForm';

test('renders subscription form without crashing', () => {
    render(<SubscriptionForm />);
})

test('subscription form adds new subscriber', () => {
    const { getByLabelText, getByText } = render(<SubscriptionForm />)

    const nameInput = getByLabelText(/name/i);
    const emailInput = getByLabelText(/email/i);

    fireEvent.change(nameInput, {
        target: { name: 'name', value: 'Elysia' }
    })
    fireEvent.change(emailInput, {
        target: { name: 'email', value: 'elysia@test.com'}
    })

    const submitButton = getByText(/submit/i)
    const clearButton = getByText(/nevermind/i)
    
    //these lines stop error about window alert on submit button
    window.alert = jest.fn();
    window.alert.mockClear(); 
    fireEvent.click(submitButton);
    
    fireEvent.click(clearButton);
    
})

