// Importing necessary modules, hooks, and styles
import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { userGetUserInfo } from "../../hooks/useGetUserinfo";

import "./styles.css";  // Importing styles for the ExpenseTraker component
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

// Defining the ExpenseTraker component
export const ExpenseTraker = () => {
  // Using the useAddTransaction and useGetTransactions custom hooks
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();
  const { name, profilePhoto } = userGetUserInfo();
  const Navigate = useNavigate();

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

  const sinUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      Navigate("/");
    }catch (err) {
      console.error(err);
    }
    
  }

  // Rendering the JSX structure of the ExpenseTraker component
  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1>{name},s Expense Tracker</h1>
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
          {profilePhoto && (
           <div className='profile'> 
              <img className="profile-photo" 
              src={profilePhoto} alt="profile_photo"/>
              <button className="sign-out-button" onClick={sinUserOut}>
                Sign Out
              </button>
            </div>
          )}
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
