import React from 'react';
import { connect } from 'react-redux';
import { EditorDialog } from './EditorDialog';
import { mapEditorActionsToProps, mapStateToProps } from '../../utils/Mappings';
import { DialogContent, DialogContentText, Grid, TextField } from '@material-ui/core';

class GameConfigDialog extends EditorDialog {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props.game.gameConfig);
    }

    handleEnter() {
        // Reset the editing state to match the current game config.
        this.setState(Object.assign({}, this.props.game.gameConfig));
    }

    handleChange(name, event) {
        this.setState({ [name]: parseInt(event.target.value) });
    }

    handleConfirm() {
        // TODO - dispatch action to update game state's game config.
        super.handleConfirm();
    }

    renderDialogContent() {
        return (
            <div>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item>
                            <TextField id="TextField-Width" label="Width" variant="outlined" margin="normal" type="number" 
                                       value={this.state.width} onChange={(event) => this.handleChange('width', event)} />
                        </Grid>
                        <Grid item>
                            <TextField id="TextField-Height" label="Height" variant="outlined" margin="normal" type="number" 
                                       value={this.state.height} onChange={(event) => this.handleChange('height', event)} />
                        </Grid>
                    </Grid>
                    <DialogContentText>{this.props.body}</DialogContentText>
                </DialogContent>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapEditorActionsToProps)(GameConfigDialog);