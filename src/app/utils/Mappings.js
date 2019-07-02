import { editorActionTypes } from '../config/EditorConfig';
import { gameActionTypes } from "../config/GameConfig";
import * as EditorActions from '../editor/EditorActions';
import * as GameActions from '../game/GameActions';

export function mapStateToProps(state) {
    return { ...state };
}

export function mapEditorActionsToProps(dispatch) {
    return {
        [editorActionTypes.toggleMenuDrawer]: payload => dispatch(EditorActions.toggleMenuDrawer(payload)),
        [editorActionTypes.toggleDialog]: payload => dispatch(EditorActions.toggleDialog(payload))
    };
}

export function mapGameActionsToProps(dispatch) {
    return {
        [gameActionTypes.updateGameConfig]: payload => dispatch(GameActions.updateGameConfig(payload))
    };
}

export function mapActionsToProps(dispatch) {
    return { ...mapEditorActionsToProps(dispatch), ...mapGameActionsToProps(dispatch) }
}