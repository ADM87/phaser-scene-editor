import { initialEditorState } from '../config/StateConfig';
import { editorActionTypes } from '../config/EditorConfig';

const initialState = initialEditorState();
export default function EditorReducer(state = initialState, action) {
    switch (action.type) {
        case editorActionTypes.toggleDialog:
            return Object.assign({}, state, { dialogToggles: Object.assign({}, state.dialogToggles, action.payload) });

        default:
            return state;
    }
}