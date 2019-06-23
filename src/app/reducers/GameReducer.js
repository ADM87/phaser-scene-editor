import { initialGameState } from '../config/StateConfig';

const initialState = initialGameState();
export default function GameReducer(state = initialState, action) {
    return state;
}