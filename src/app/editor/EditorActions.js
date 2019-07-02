import { editorActionTypes } from "../config/EditorConfig";

export function toggleMenuDrawer(payload) {
    return { type: editorActionTypes.toggleMenuDrawer, payload };
}

export function toggleDialog(payload) {
    return { type: editorActionTypes.toggleDialog, payload };
}