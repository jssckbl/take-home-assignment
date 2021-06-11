import './App.css';
import React from 'react';

function App() {
  const [textInput, setTextInput] = React.useState('');
  const [textOutput, setTextOutput] = React.useState('');

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTextOutput(textInput ? textInput : 'Formatted text will appear here');
  };

  const handleUpperCase = () => {
    setTextOutput(textOutput.toUpperCase());
    console.log(textInput.toUpperCase(), 'uppercase clicked');
  };

  const handleLowerCase = () => {
    setTextOutput(textOutput.toLowerCase());
    console.log(textInput.toLowerCase(), 'lowercase clicked');
  };

  // Add two functions- handleUpperCase and handleLowerCase.
  // Connect the two functions to the uppercase and lowercase buttons.

  return (
    <div className='App'>
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea onChange={handleChange} value={textInput} />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <div id='result'>{textOutput}</div>
      <button onClick={handleUpperCase}>UPPERCASE</button>
      <button onClick={handleLowerCase}>lowercase</button>
    </div>
  );
}

export default App;
