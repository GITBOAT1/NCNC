// Importing necessary modules and components
import './App.css';  // Importing styles for the App component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing components from 'react-router-dom' for handling routing
import { Auth } from './pages/auth/index';  // Importing the Auth component from the 'auth' directory
import { ExpenseTraker } from './pages/expense-traker/index';  // Importing the ExpenseTraker component from the 'expense-traker' directory

// Defining the main App component
function App() {
  // Rendering the App component
  return (
    <div className="App">
      {/* Setting up the React Router for navigation */}
      <Router>
        {/* Defining the routes for the application */}
        <Routes>
          {/* Route for the home page, rendering the Auth component */}
          <Route path='/' exact element={<Auth />} />
          
          {/* Route for the expense tracker page, rendering the ExpenseTraker component */}
          <Route path='/expense-tracker' exact element={<ExpenseTraker />} />
        </Routes>
      </Router>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
