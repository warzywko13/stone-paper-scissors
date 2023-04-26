import React, { useReducer } from 'react';

import { Scoreboard } from './components/Scoreboard';
import { Game } from './components/Game';

import { initialState, GameReducer } from './reducer/GameReducer';

const App:React.FC = () => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <div className='w-full md:h-screen flex justify-center items-center bg-primary text-secondary'>
      <div className='bg-boardPanel w-full text-center lg:w-3/4'>
        <Scoreboard score={state.score} />
        <Game state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
