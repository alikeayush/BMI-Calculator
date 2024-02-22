import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // BMI Logic
  let calcBmi = (event) => {
    event.preventDefault(); // This prevents the default form submission behavior
    let weightVal = parseFloat(weight); // Convert string to float
    let heightVal = parseFloat(height); // Convert string to float

    if (weightVal === 0 || heightVal === 0) {
      alert('Please enter a valid Weight and Height');
    } else {
      let bmi = (weightVal / (heightVal * heightVal) * 703);
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage('You are underweight');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You have a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  // Reload Function
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className='app'>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type='text' placeholder='Enter your Weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter your Height' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Calculate</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
