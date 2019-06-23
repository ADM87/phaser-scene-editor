import React from 'react';
import { connect } from 'react-redux';
import { EditorDialog } from './EditorDialog';
import { mapEditorActionsToProps } from '../../utils/Mappings';
import { DialogContent, DialogContentText } from '@material-ui/core';

class NewSceneDialog extends EditorDialog {
    renderDialogContent() {
        return (
            <div>
                <DialogContent>
                    <DialogContentText>{this.props.body}</DialogContentText>
                </DialogContent>
            </div>
        );
    }
}

export default connect(null, mapEditorActionsToProps)(NewSceneDialog);