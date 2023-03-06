import React from 'react';

function GuessInput({ handleGuess, status }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Handle guess
    handleGuess(guess);

    // Clear guess
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={status !== 'Playing'}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          const upperCaseGuess = event.target.value.toUpperCase();
          setGuess(upperCaseGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
