import { gameActionTypes } from '../config/GameConfig';

export function updateGameConfig(payload) {
    return { type: gameActionTypes.updateGameConfig, payload };
}