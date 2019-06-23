export const editorActionTypes = {
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
        body: "Changes will require the scene to reload. Make sure to save any changes to the scene before saving.",
        buttonText: { confirm: "Save", cancel: "Cancel" }
    }
};

export const menuBarItems = [
    {
        label: "File" ,
        options: [
            { 
                label: "New Scene", 
                actionType: editorActionTypes.toggleDialog, 
                actionPayload: { [dialogTypes.newSceneDialog]: true } 
            }
        ]
    },
    {
        label: "Edit",
        options: [
            { 
                label: "Game Config", 
                actionType: editorActionTypes.toggleDialog, 
                actionPayload: { [dialogTypes.gameConfigDailog]: true } 
            },
            { 
                label: "Settings", 
                actionType: editorActionTypes.toggleDialog, 
                actionPayload: { [dialogTypes.editSettingsDialog]: true } 
            }
        ]
    }
];