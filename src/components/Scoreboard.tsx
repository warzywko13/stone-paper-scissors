import React from 'react';

import type { GameState } from '../models/GameModel';

export const Scoreboard:React.FC<GameState> = ({ score }) => {
  const {player, ai} = score;

  return (
    <section>
      <h1 className='pt-5 text-4xl font-semibold'>Papier Kamień Nożyce</h1>
      <div className='text-6xl pt-5 bp-10 font-semibold text-center'>
        <div className='bg-slate-900 pt-3 pb-3'>{player} : {ai}</div>
      </div>
    </section>
  );
}
