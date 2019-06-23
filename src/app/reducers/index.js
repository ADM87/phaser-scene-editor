import { combineReducers } from 'redux';
import EditorReducer from './EditorReducer';
import GameReducer from './GameReducer';

export default combineReducers({
    editor: EditorReducer,
    game: GameReducer
});