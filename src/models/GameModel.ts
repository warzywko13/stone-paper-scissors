import { Dispatch } from 'react';

import { GameReducerAction, ChoiseAction } from '../config/Config';


export type GameState = {
    score: {
        player: number,
        ai: number
    }
} 

export type GameAction = {
    type: GameReducerAction,
    payload: GameState
}

export type TGame = {
    state: GameState,
    dispatch: Dispatch<GameAction>
}

export type IStatus = {
    gameState: string;
}

export type IBoard = {
    isLoading: boolean;
    choice: string;
    player: string;
    handleChoise: (choise: ChoiseAction) => Promise<void>;
}
