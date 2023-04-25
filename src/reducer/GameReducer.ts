import { GameReducerAction } from '../config/Config';

import type { GameState, GameAction } from '../models/GameModel';

export const initialState = {
    score: {
        player: 0,
        ai: 0
    }
}

export const GameReducer = ( state: GameState, action: GameAction ) => {
    switch(action.type) {
        case GameReducerAction.WIN:
            return {
                ...state,
                score: {
                    player: state.score.player + action.payload.score.player,
                    ai: state.score.ai 
                }
            }
        case GameReducerAction.LOSE:
            return {
                ...state,
                score: {
                    player: state.score.player,
                    ai: state.score.ai + action.payload.score.ai
                }
            }
        case GameReducerAction.RESET:
            const { score } = initialState;

            return {
                ...state,
                score
            }
        default :
            throw new Error();
    }
}

export const playerWin = {
    score: {
        player: 1,
        ai: 0
    }
}

export const playerLose = {
    score: {
        player: 0,
        ai: 1
    }
}

export const resetGame = initialState;