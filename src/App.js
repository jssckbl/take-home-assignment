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
    setTextOutput(
      textInput ? textInput : alert('please submit text to format!')
    );
  };

  const handleUpperCase = () => {
    setTextOutput(textOutput.toUpperCase());
  };

  const handleLowerCase = () => {
    setTextOutput(textOutput.toLowerCase());
  };

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
