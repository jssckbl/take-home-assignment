import './App.css';
import React from 'react';

function App() {
  const [textInput, setTextInput] = React.useState(
    'Here is some example text.'
  );
  const [textOutput, setTextOutput] = React.useState('');

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTextOutput('Your formatted text will go here!');
  };

  function handleUpperCase() {
    console.log(textInput.toUpperCase(), 'uppercase clicked');
  }

  function handleLowerCase() {
    console.log(textInput.toLowerCase(), 'lowercase clicked');
  }

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
        {/* <input type='submit' value='Submit' /> */}
        <button onClick={handleUpperCase} value={textInput}>
          UPPERCASE
        </button>
        <button onClick={handleLowerCase} value={textInput}>
          lowercase
        </button>
      </form>
      <div id='result'>{textOutput}</div>
    </div>
  );
}

export default App;
