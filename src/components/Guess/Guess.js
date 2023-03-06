import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  let result;
  if (guess === '     ') {
    result = checkGuess(null, answer);
  } else {
    result = checkGuess(guess, answer);
  }

  return (
    <p className="guess">
      {guess.split('').map((letter, index) => (
        <span className={`cell${result ? ' ' + result[index].status : ''}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
