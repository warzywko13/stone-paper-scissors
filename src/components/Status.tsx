import React from "react";

import { IStatus } from "../models/GameModel";

export const Status:React.FC<IStatus> = ({ gameState }) => {
    let color;

    switch(gameState) {
        case 'Wygrałeś':
            color = 'text-green'
            break;
        case 'Przegrałeś':
            color = 'text-red'
            break;
        default:
            color = '';
            break;
    }

    return (
        <h1 className={`mb-20 text-4xl font-bold ${color}`}>{ gameState }</h1>
    );
}
