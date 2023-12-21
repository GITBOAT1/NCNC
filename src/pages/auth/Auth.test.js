import { render, screen, fireEvent } from '@testing-library/react';
import Auth from './Auth';

test('renders Auth component', () => {
  render(<Auth />);
  const signInButton = screen.getByText(/Sign In/i);
  expect(signInButton).toBeInTheDocument();
});

test('clicking the Sign In button triggers the sign-in function', () => {
  const mockSignIn = jest.fn();
  jest.mock('./useAddTransaction', () => ({
    useAddTransaction: () => ({ signInWithGoogle: mockSignIn }),
  }));

  render(<Auth />);
  const signInButton = screen.getByText(/Sign In/i);
  fireEvent.click(signInButton);

  expect(mockSignIn).toHaveBeenCalled();
});
