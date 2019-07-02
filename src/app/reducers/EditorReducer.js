import { initialEditorState } from '../config/StateConfig';
import { editorActionTypes } from '../config/EditorConfig';

const toggleMenuDrawer = (state, payload) => ({
    ...state,
    ...payload
});

const toggleDialog = (state, payload) => ({
    ...state,
    dialogToggles: {
        ...state.dialogToggles,
        ...payload
    }
});

const initialState = initialEditorState();
export default function EditorReducer(state = initialState, { type, payload }) {
    switch (type) {
        case editorActionTypes.toggleMenuDrawer:
            return toggleMenuDrawer(state, payload);

        case editorActionTypes.toggleDialog:
            return toggleDialog(state, payload);

        default:
            return state;
    }
}