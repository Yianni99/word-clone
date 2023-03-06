import React from 'react';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import GameOver from '../GameOver/GameOver';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [status, setStatus] = React.useState('Playing');
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    // Add ID
    const idGuess = {
      id: crypto.randomUUID(),
      guess: guess,
    };

    // Update guesses
    const updatedGuesses = [...guesses, idGuess];
    setGuesses(updatedGuesses);

    // Check if game over
    if (guess === answer) {
      setStatus('Won');
    } else if (updatedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('Lost');
    }
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} status={status} />
      {status !== 'Playing' && (
        <GameOver status={status} guesses={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
