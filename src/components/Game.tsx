import React, { useState, useRef } from 'react';

import { Board } from './Board';
import { Status } from './Status';

import { playerWin, playerLose, resetGame } from '../reducer/GameReducer';

import { GameReducerAction, ChoiseAction,  } from '../config/Config';

import { TGame } from '../models/GameModel';

const winOrLose = [
    {win: ChoiseAction.FaHandPaper, lose: ChoiseAction.FaHandRock},
    {win: ChoiseAction.FaHandRock, lose: ChoiseAction.FaHandScissors},
    {win: ChoiseAction.FaHandScissors, lose: ChoiseAction.FaHandPaper} 
];

export const Game:React.FC<TGame> = ({ state, dispatch }) => {
    const [playerChoise, setPlayerChoise] = useState('');
    const [aiChoise, setAiChoise] = useState('');
    const [gameState, setGameState] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const refTimer = useRef<number | null>(null);

    const handleChoise = async(choise: ChoiseAction) =>  {
        setIsLoading(true);
        setPlayerChoise('');
        setAiChoise('');

        const playerNewChoise = choise;
        const aiNewChoise = getRandomChoise();

        refTimer.current = window.setTimeout(() => {
            setPlayerChoise(playerNewChoise);
            setAiChoise(aiNewChoise);

            const isWinner = winOrLose.find(el => el.win === playerNewChoise && el.lose === aiNewChoise);
            const isLooser = winOrLose.find(el => el.win === aiNewChoise && el.lose === playerNewChoise);

            if( isWinner ) {
                dispatch({type: GameReducerAction.WIN, payload: playerWin});
                setGameState('Wygrałeś');
            } else if( isLooser ) {
                dispatch({type: GameReducerAction.LOSE, payload: playerLose});
                setGameState('Przegrałeś');
            } else {
                setGameState('Remis');
            }
            
            setIsLoading(false);
        }, 1000);
    }

    const getRandomChoise = (): ChoiseAction => {
        const values = Object.values(ChoiseAction);
        const randomIndex = Math.floor(Math.random() * values.length);
        return values[randomIndex];
    }

    const handleResetButton = () => {
        dispatch({type: GameReducerAction.RESET, payload: resetGame });
        setGameState('');
        setPlayerChoise('');
        setAiChoise('');
    }

    return (
        <div className='mt-3 mb-10 w-full mx-auto flex flex-col justify-between items-center md:flex-row md:w-11/12 xl:w-3/4'>        
            <Board 
                isLoading={isLoading} 
                player={'Gracz'} 
                choice={playerChoise} 
                handleChoise={handleChoise}  
            />
            
            <div className='flex flex-col justify-around'>
                {gameState && <Status gameState={gameState} />}

                <button 
                    className='reset-button'
                    onClick={handleResetButton}
                    disabled={isLoading}
                >
                    Reset
                </button>
            </div>

            <Board 
                isLoading={isLoading} 
                player={'AI'} 
                choice={aiChoise} 
                handleChoise={handleChoise}  
            />
        </div>
    );
}
