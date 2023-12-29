import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './style.css';

export const NumberGenerator = () => {
  const [numberOfPersons, setNumberOfPersons] = useState(0);
  const [names, setNames] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [isInputUpdated, setIsInputUpdated] = useState(false);
  const [notification, setNotification] = useState('');

  const handleNumberChange = (e) => {
    const number = parseInt(e.target.value, 10);
    setNumberOfPersons(number);
    setIsInputUpdated(true);
  };

  const handleNameChange = (index, e) => {
    const updatedNames = [...names];
    updatedNames[index] = e.target.value;
    setNames(updatedNames);
    setIsInputUpdated(true);
  };

  const generateNumbers = () => {
    const numbers = Array.from({ length: numberOfPersons }, () => Math.floor(Math.random() * numberOfPersons));
    setRandomNumbers(numbers);
    setIsInputUpdated(false);

    // Show notification
    setNotification('Random numbers assigned successfully!');
    setTimeout(() => {
      setNotification('');
    }, 2000); // Notification lasts for 2 seconds
  };

  const resetForm = () => {
    setNumberOfPersons(0);
    setNames([]);
    setRandomNumbers([]);
    setIsInputUpdated(false);
    setNotification('');
  };

  useEffect(() => {
    // Clean up notification when component unmounts
    return () => {
      setNotification('');
    };
  }, []);

  return (
    <div style={{ minHeight: '20vh' }}>
      <Header />
      <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>
        <h1>Number Generator Page</h1>
        <p className="w3-container">Enter the number of persons and their names in the input fields.
          The "Generate Numbers" button will become visible only when the
           input fields are updated.Click the "Generate Numbers" button 
           to assign random numbers to persons.The generated numbers
            and corresponding names will be displayed in a list.</p>
        <label>
          Number of Persons:
          <input type="number" value={numberOfPersons} onChange={handleNumberChange} />
        </label>

        {Array.from({ length: numberOfPersons }).map((_, index) => (
          <div key={index}>
            <label>
              Person {index + 1} Name:
              <input type="text" value={names[index] || ''} onChange={(e) => handleNameChange(index, e)} required />
            </label>
          </div>
        ))}

        {isInputUpdated && (
          <>
            <button className='generate' onClick={generateNumbers}>
              Generate Numbers
            </button>

            <button className='reset' onClick={resetForm}>
              Reset
            </button>
          </>
        )}

        {notification && <div className='notification'>{notification}</div>}

        <ul className='w3-ul w3-card-4 w3-white'>
          {randomNumbers.map((number, index) => (
            <li className='w3-padding-16' key={index}>{`Person ${index + 1}: ${names[number]}`}</li>
          ))}
        </ul>
      </div>
      <p className='lower'></p>
      <Footer />
    </div>
  );
};
