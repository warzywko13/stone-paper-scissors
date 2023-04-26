import React from 'react';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

import { ChoiseAction } from '../config/Config';

import { IBoard } from '../models/GameModel';

const choises = [
    { action: ChoiseAction.FaHandPaper, icon: <FaHandPaper /> },
    { action: ChoiseAction.FaHandRock, icon: <FaHandRock /> },
    { action: ChoiseAction.FaHandScissors, icon: <FaHandScissors /> }
];

export const Board:React.FC<IBoard> = ({ isLoading, player, choice, handleChoise }) => {
    const playerChoise = choises.find(({ action }) => action === choice);
    const loadingAnimation = isLoading && 'animate-pulse duration-700';

    const optionButtons = choises.map(({ action, icon }) => (
        <button
            key={action}
            className='rounded-full m-1 p-5 bg-primary hover:scale-110 ease-in-out duration-200'
            disabled={isLoading}
            onClick={() => handleChoise(action)}
        >
            {icon}
        </button>
    ));
    
    return (
        <div className={`${loadingAnimation} block w-96 h-96 mt-5 mb-3`}>
            <div className='h-72 bg-slate-900 relative rounded-lg'>
                <h2 className='text-2xl font-bold pt-2'>{player}</h2>
                
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-8xl'>
                    {playerChoise?.icon}
                </div>
            </div>

            {player === 'Gracz' && (
                <div className='mt-3 mx-auto flex flex-row justify-between text-5xl'>
                    { optionButtons }
                </div>
            )}
        </div>
    );
}
