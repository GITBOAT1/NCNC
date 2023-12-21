# React Firebase Expense Tracker

This project includes React components and custom hooks for building an expense tracker application with Firebase integration. Below are the key components and hooks documented:

## `App.js`

The main application component that sets up routing for authentication and expense tracker pages.

## `Auth.js`

A React component for user authentication. It uses Firebase authentication with Google and stores user information in local storage.

## `ExpenseTracker.js`

The main expense tracker component that allows users to add transactions, displays the current balance, and shows a list of transactions. It utilizes custom hooks for adding and retrieving transactions.

## `useAddTransaction.js`

A custom hook for adding transactions to the Firestore database. It includes functions to add transactions with details like description, amount, and type.

## `useGetTransactions.js`

A custom hook for retrieving user-specific transactions from Firestore. It includes functions to query the Firestore database and update the state with real-time transaction data.

## `useGetUserInfo.js`

A custom hook for retrieving user information from local storage. It parses user details stored in the "auth" key and returns an object containing the user's name, profile photo, user ID, and authentication status.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   to use this app you would need a config forlder in the src "src/config/firebase-config.js" and setup a  firebase API to
   access it...
