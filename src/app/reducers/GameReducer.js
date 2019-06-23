import { initialGameState } from '../config/StateConfig';
import { gameActionTypes } from '../config/GameConfig';

const initialState = initialGameState();
export default function GameReducer(state = initialState, action) {
    switch (action.type) {
        case gameActionTypes.updateGameConfig:
            const test = Object.assign({}, state, { gameConfig: action.payload });
            console.log(test);
            return test;

        default:
            return state;
    }
}