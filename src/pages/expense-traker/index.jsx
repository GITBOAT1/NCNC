// Importing necessary modules, hooks, and styles
import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { userGetUserInfo } from "../../hooks/useGetUserinfo";
import "./styles.css";  // Importing styles for the ExpenseTraker component
import "./w3css.css";
import "../Footer/Footer.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";


// Defining the ExpenseTraker component
export const ExpenseTraker = () => {
  // Using the useAddTransaction and useGetTransactions custom hooks
  const { addTransaction } = useAddTransaction();
  const { transactions, transactonTotoals } = useGetTransactions();
  const { name } = userGetUserInfo();

  // State variables for form inputs
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const { balance, income, expenses } = transactonTotoals;

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    // Calling the addTransaction function with form data
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });

    setDescription('');
    setTransactionAmount('');
  };

  
  // Rendering the JSX structure of the ExpenseTraker component
  return (
    <>
      <Header />
      {/* i will separate them soon*/}
      <header className="w3-container" style={{paddingTop: '22px'}}>
        <h5><b><i className="fa fa-dashboard"></i> My Dashboard</b></h5>
      </header>
      <div className="page-container ">
      <div className="w3-main" style={{marginLeft: '300px', marginTop: '43px'}}>
        <div className="w3-container">
          <h1>{name}'s Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            {balance >= 0 ? <h2>${balance}</h2> : <h2>${balance * -1}</h2>}
          </div>
          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>${income}</p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p>${expenses}</p>
            </div>
          </div>
          <form className="w3-panel" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              value={transactionAmount}
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
      <Footer />
      </div>
    </>
  );
};

// Exporting the ExpenseTraker component
