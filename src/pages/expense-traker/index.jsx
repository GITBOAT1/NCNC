// Importing necessary modules, hooks, and styles
import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { userGetUserInfo } from "../../hooks/useGetUserinfo";
import "./styles.css";  // Importing styles for the ExpenseTraker component
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";
import "./w3css.css";


// Defining the ExpenseTraker component
export const ExpenseTraker = () => {
  // Using the useAddTransaction and useGetTransactions custom hooks
  const { addTransaction } = useAddTransaction();
  const { transactions, transactonTotoals } = useGetTransactions();
  const { name, profilePhoto } = userGetUserInfo();
  const Navigate = useNavigate();

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

  const sinUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      Navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // Rendering the JSX structure of the ExpenseTraker component
  return (
    <>
      <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: "300px" }} id="mySidebar">
        <div className="w3-container w3-row">
          <div className="w3-col s4">
          {profilePhoto && (
              <img className="w3-circle w3-margin-right"
              src={profilePhoto} alt="profile_photo" style={{width: '46px'}} />
          )}
          </div>
          <div className="w3-col s8 w3-bar">
            <span>Welcome, <strong>{name}</strong></span><br />
            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
            <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
            <button className="sign-out-button" onClick={sinUserOut}>
              Sign Out
            </button>
          </div>
        </div>
        <hr />
        <div className="w3-container">
          <h5>Dashboard</h5>
        </div>
        <div className="w3-bar-block">
          {/* ... Your menu items here */
            <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onChange="w3_close()" title="close menu"><i className="fa fa-remove fa-fw"></i>  Close Menu</a>
          }
        </div>
      </nav>
      {/* i will separate them soon*/}
      <header className="w3-container" style={{paddingTop: '22px'}}>
        <h5><b><i className="fa fa-dashboard"></i> My Dashboard</b></h5>
      </header>
      <div className="w3-main">
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
      </div>
    </>
  );
};

// Exporting the ExpenseTraker component
