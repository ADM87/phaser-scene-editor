import { phaserRenderers, phaserRendererTypes } from "./GameConfig";
import { Scale } from 'phaser';

export const editorVariables = {
    menuDrawerWidth: 240
};

export const editorGameConfig = {
    renderer: phaserRenderers[phaserRendererTypes.auto],
    parent: "EditorGameContainer",
    backgroundColor: "",
    scale: { mode: Scale.RESIZE }
};

export const editorActionTypes = {
    toggleMenuDrawer: "TOGGLE_MENU_DRAWER",
    toggleDialog: "TOGGLE_DIALOG"
};

export const dialogTypes = {
    newSceneDialog: "newSceneDialog",
    gameConfigDailog: "gameConfigDialog",
    editSettingsDialog: "editSettingsDialog"
};

export const dialogProps = {
    [dialogTypes.newSceneDialog]: {
        dialogType: dialogTypes.newSceneDialog,
        title: "Create New Scene",
        body: "Any unsaved changes will be lost!",
        buttonText: { confirm: "Create", cancel: "Cancel" }
    },
    [dialogTypes.gameConfigDailog]: {
        dialogType: dialogTypes.gameConfigDailog,
        title: "Game Config",
        body: "Changes will require the scene to reload. Make sure to save any changes to the scene before saving the game config.",
        buttonText: { confirm: "Save", cancel: "Cancel" }
    }
};

export const menuBarItemGroups = [
    [
        { 
            label: "Game Config", 
            icon: "gameConfig",
            actionType: editorActionTypes.toggleDialog, 
            actionPayload: { [dialogTypes.gameConfigDailog]: true }
        }
    ],
    [
        { 
            label: "New Scene", 
            icon: "newScene",
            actionType: editorActionTypes.toggleDialog, 
            actionPayload: { [dialogTypes.newSceneDialog]: true }
        },
        { 
            label: "Open Scene", 
            icon: "openScene",
            actionType: editorActionTypes.toggleDialog, 
            actionPayload: { [dialogTypes.newSceneDialog]: true }
        },
        { 
            label: "Save Scene", 
            icon: "saveScene",
            actionType: editorActionTypes.toggleDialog, 
            actionPayload: { [dialogTypes.newSceneDialog]: true }
        }
    ]
];