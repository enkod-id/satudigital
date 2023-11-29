import { waitFor, fireEvent, render, screen } from '@testing-library/react'
import LoginForm from '.';

describe('test login form', () => {
    const mockProps = jest.fn();
    test('title render correctly', async () => {
        render(<LoginForm onSubmit={mockProps}/>)
        const title = screen.getByText('Login Page')
        expect(title).toBeDefined();
    })

    test('label username render correctly', async () => {
        render(<LoginForm onSubmit={mockProps}/>)
        const title = screen.getByText('Username')
        expect(title).toBeDefined();
    })

    test('label password render correctly', async () => {
        render(<LoginForm onSubmit={mockProps}/>)
        const title = screen.getByText('Password')
        expect(title).toBeDefined();
    })

    test('button submit render correctly', async () => {
        render(<LoginForm onSubmit={mockProps}/>)
        const title = screen.getByText('Submit')
        expect(title).toBeDefined();
    })

    test('onSubmit works correctly', async () => {
        const { getByPlaceholderText, getByText } = render(<LoginForm onSubmit={mockProps} />);
        const usernameInput = getByPlaceholderText('Enter username') as HTMLInputElement;
        const passwordInput = getByPlaceholderText('Enter password') as HTMLInputElement;
        const submitButton = getByText('Submit');

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockProps).toHaveBeenCalledTimes(1);
            expect(mockProps).toHaveBeenCalledWith({
                username: 'testuser',
                password: 'testpassword',
            });
        });
    });
})
