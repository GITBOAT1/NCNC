// NumberGenerator.js
import React, { useState } from 'react';

const NumberGenerator = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateNumbers = () => {
    const numberOfPersons = 8; // You can adjust this as needed
    const numbers = Array.from({ length: numberOfPersons }, () => Math.floor(Math.random() * 100));
    setRandomNumbers(numbers);
  };

  return (
    <div>
      <h1>Number Generator Page</h1>
      <button onClick={generateNumbers}>Generate Numbers</button>
      <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{`Person ${index + 1}: ${number}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberGenerator;
