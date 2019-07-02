import { initialGameState } from '../config/StateConfig';
import { gameActionTypes } from '../config/GameConfig';

const updateGameConfig = (state, payload) => ({
    ...state,
    gameConfig: {
        ...state.gameConfig,
        ...payload
    }
})

const initialState = initialGameState();
export default function GameReducer(state = initialState, { type, payload }) {
    switch (type) {
        case gameActionTypes.updateGameConfig:
            return updateGameConfig(state, payload);

        default:
            return state;
    }
};