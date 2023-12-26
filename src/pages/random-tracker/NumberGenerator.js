import React, { useState } from 'react';
import Header from "../Header/Header.js";
import Footer from '../Footer/Footer.js';
import './style.css'


export const NumberGenerator = () => {
  const [numberOfPersons, setNumberOfPersons] = useState(0);
  const [names, setNames] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleNumberChange = (e) => {
    const number = parseInt(e.target.value, 10);
    setNumberOfPersons(number);
  };

  const handleNameChange = (index, e) => {
    const updatedNames = [...names];
    updatedNames[index] = e.target.value;
    setNames(updatedNames);
  };

  const generateNumbers = () => {
    const numbers = Array.from({ length: numberOfPersons }, () => Math.floor(Math.random() * numberOfPersons));
    setRandomNumbers(numbers);
  };

  return (
    <div style={{minHeight: '100vh'}}>
      <Header />
      <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>
        <p>This is a Number generator for randomizing figures. Enter the number of persons and their names.</p>
        <h1>Number Generator Page</h1>

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

        <button className='generate' onClick={generateNumbers}>Generate Numbers</button>

        <ul className='class="w3-ul w3-card-4 w3-white"'>
          {randomNumbers.map((number, index) => (
            <li className="w3-padding-16" key={index}>{`Person ${index + 1}: ${names[number]}`}</li>
          ))}
        </ul>
      </div>
      <p className='lower'>kk</p>
      <Footer />
    </div>
  );
};
