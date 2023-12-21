import { render, screen, fireEvent } from '@testing-library/react';
import ExpenseTracker from './ExpenseTracker';

test('renders ExpenseTracker component', () => {
  render(<ExpenseTracker />);
  const addTransactionButton = screen.getByText(/Add Transaction/i);
  expect(addTransactionButton).toBeInTheDocument();
});

test('clicking the Add Transaction button triggers the addTransaction function', () => {
  const mockAddTransaction = jest.fn();
  jest.mock('./useAddTransaction', () => ({
    useAddTransaction: () => ({ addTransaction: mockAddTransaction }),
  }));

  render(<ExpenseTracker />);
  const addTransactionButton = screen.getByText(/Add Transaction/i);
  fireEvent.click(addTransactionButton);

  expect(mockAddTransaction).toHaveBeenCalled();
});
