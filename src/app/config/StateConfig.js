import { dialogTypes } from "./EditorConfig";
import { newGameConfig } from "./GameConfig";

export function initialEditorState() {
    // TODO - Try to load local storage and return it if it exists.
    return {
        settings: { test: "This is a test" },
        menuDrawerOpen: false,
        dialogToggles: {
            [dialogTypes.newSceneDialog]: false,
            [dialogTypes.gameConfigDailog]: false,
            [dialogTypes.editSettingsDialog]: false
        }
    };
}

export function initialGameState() {
    // TODO - Try to load local storage and return it if it exists.
    return {
        scenes: [],
        gameConfig: { ...newGameConfig }
    }
}