// Importing React and ReactDOM's client module for rendering
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main App component
import App from './App';

// Creating a root for ReactDOM to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within a StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: If you want to start measuring performance in your app,
// you can pass a function to log results (e.g., reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
