import { editorActionTypes } from '../config/EditorConfig';
import { gameActionTypes } from "../config/GameConfig";
import * as EditorActions from '../editor/EditorActions';
import * as GameActions from '../game/GameActions';

export function mapStateToProps(state) {
    return Object.assign({}, state);
}

export function mapEditorActionsToProps(dispatch) {
    return {
        [editorActionTypes.toggleDialog]: payload => dispatch(EditorActions.toggleDialog(payload))
    };
}

export function mapGameActionsToProps(dispatch) {
    return {
        [gameActionTypes.updateGameConfig]: payload => dispatch(GameActions.updateGameConfig(payload))
    };
}

export function mapActionsToProps(dispatch) {
    return Object.assign({}, mapEditorActionsToProps(dispatch), mapGameActionsToProps(dispatch));
}