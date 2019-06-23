import { editorActionTypes } from "../config/EditorConfig";
import * as EditorActions from "../editor/EditorActions";

export function mapStateToProps(state) {
    return Object.assign({}, state);
}

export function mapEditorActionsToProps(dispatch) {
    return {
        [editorActionTypes.toggleDialog]: payload => dispatch(EditorActions.toggleDialog(payload))
    };
}