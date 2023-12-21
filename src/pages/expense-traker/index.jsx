// Importing necessary modules, hooks, and styles
import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import "./styles.css";  // Importing styles for the ExpenseTraker component

// Defining the ExpenseTraker component
export const ExpenseTraker = () => {
  // Using the useAddTransaction and useGetTransactions custom hooks
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();

  // State variables for form inputs
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    // Calling the addTransaction function with form data
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
  };

  // Rendering the JSX structure of the ExpenseTraker component
  return (
    <>
      <div className="expense-tracker">
        <h1>Expense Tracker</h1>
        <div className="balance">
          <h3>Your Balance</h3>
          <h2>$0.00</h2>
        </div>
        <div className="summary">
          <div className="income">
            <h4>Income</h4>
            <p>$0.00</p>
          </div>
          <div className="expenses">
            <h4>Expenses</h4>
            <p>$0.00</p>
          </div>
        </div>
        <div>
          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense">Expenses</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income">Income</label>
            <button type="submit">Add Transaction</button>
          </form>
        </div>
      </div>
      <div className="transactions">
        <h3>Transactions</h3>
        <ul>
          {/* Mapping through transactions and rendering each transaction */}
          {transactions.map((transaction, index) => {
            const { description, transactionAmount, transactionType } = transaction;
            return (
              <li key={index}>
                <h4>
                  {description}
                  <p>
                    ${transactionAmount} . <label> {transactionType} </label>
                  </p>
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

// Exporting the ExpenseTraker component
