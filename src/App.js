// Importing necessary modules and components
import './App.css';  // Importing styles for the App component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing components from 'react-router-dom' for handling routing
import { Auth } from './pages/auth/index';  // Importing the Auth component from the 'auth' directory
import { ExpenseTraker } from './pages/expense-traker/index';  // Importing the ExpenseTraker component from the 'expense-traker' directory
import { NumberGenerator } from './pages/random-tracker/NumberGenerator'
import { Chat } from './pages/Chat/Chat';
import { RoomSelector} from './pages/Chat/RoomSelector';
import Cookies from 'universal-cookie';
import { useRef, useState } from 'react';



// Defining the main App component

const cookie = new Cookies();

function App() {
  const [room, setRoom] = useState(null);
  const [isAuth, setIsAuth] = useState(cookie.get('auth-tokeen'));
  
  const roomInputRef = useRef(null);  

  // Rendering the App component
  return (
    <div className="App">
      {/* Setting up the React Router for navigation */}
      <Router>
        {/* Defining the routes for the application */}
        <Routes>
          {/* Route for the home page, rendering the Auth component */}
          <Route
           path='/' 
           exact 
           element={<Auth setIsAuth={setIsAuth}
           setRoom={setRoom}
           roomInputRef={roomInputRef}
           />} />
          
          {/* Route for the expense tracker page, rendering the ExpenseTraker component */}
          <Route path='/expense-tracker' exact element={<ExpenseTraker />} />
          <Route path='/random-tracker' element={<NumberGenerator />} />
          <Route path='/roomSelector' element={<RoomSelector setRoom={setRoom} />} />
          <Route path='/chat' element={<Chat room={room}/>} />
        </Routes>
      </Router>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
