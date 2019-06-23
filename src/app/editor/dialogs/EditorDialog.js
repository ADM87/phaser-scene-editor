import React from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { Paper, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { mapEditorActionsToProps } from '../../utils/Mappings';
import { editorActionTypes } from '../../config/EditorConfig';

export class EditorDialog extends React.Component {
    handleEnter() {

    }

    handleClose() {
        this.props[editorActionTypes.toggleDialog]({ [this.props.dialogType]: false });
    }

    handleCancel() {
        this.handleClose();
    }

    handleConfirm() {
        this.handleClose();
    }

    renderDialogContent() {
        // Override this function to render custom dialog content.
        return <div></div>;
    }

    render() {
        function renderDialogHandle(props) {
            return (
                <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
                    <Paper {...props} />
                </Draggable>
            );
        }

        return (
            <div>
                <Dialog
                    open={this.props.toggle}
                    onEnter={() => this.handleEnter()}
                    onClose={() => this.handleClose()}
                    PaperComponent={renderDialogHandle}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">{this.props.title}</DialogTitle>
                    {this.renderDialogContent()}
                    <DialogActions>
                        <Button variant="outlined" color="secondary" onClick={() => this.handleCancel()}>{this.props.buttonText.cancel}</Button>
                        <Button variant="outlined" color="primary" onClick={() => this.handleConfirm()}>{this.props.buttonText.confirm}</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default connect(null, mapEditorActionsToProps)(EditorDialog);