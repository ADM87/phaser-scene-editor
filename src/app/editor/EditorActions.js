import { editorActionTypes } from "../config/EditorConfig";

export function toggleDialog(payload) {
    return { type: editorActionTypes.toggleDialog, payload };
}