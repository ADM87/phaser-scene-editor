import React from 'react';
import { connect } from 'react-redux';
import { EditorDialog } from './EditorDialog';
import { mapActionsToProps, mapStateToProps } from '../../utils/Mappings';
import { 
    DialogContent,
    Grid, 
    TextField, 
    Select, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Input, 
    Divider 
} from '@material-ui/core';
import { gameActionTypes, phaserRendererOptions, phaserRenderers } from '../../config/GameConfig';

class GameConfigDialog extends EditorDialog {
    constructor(props) {
        super(props);
        // Store a local copy of the current game config.
        // This will be used for editing and ignored if the dialog is cancelled.
        this.state = { ...props.game.gameConfig };
    }

    handleEnter() {
        this.setState({ ...this.props.game.gameConfig });
    }

    handleChange(name, event) {
        this.setState({ [name]: event.target.value });
    }

    handleConfirm() {
        // Dispatch the update game config action and send a copy of the edits that were made.
        this.props[gameActionTypes.updateGameConfig]({ ...this.state });
        this.handleClose();
    }

    renderDialogContent() {
        const renderRendererOptions = () => {
            const options = phaserRendererOptions.map(option => {
                return <MenuItem key={`PhaserRenderer-${option}`} value={phaserRenderers[option]}>{option}</MenuItem >
            })
            return options;
        };
        return (
            <div>
                <DialogContent>
                    <Divider />
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField fullWidth id="TextField-Title" label="Title" variant="outlined" margin="normal" type="tel"
                                        value={this.state.title} onChange={(event) => this.handleChange('title', event)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth id="TextField-Width" label="Width" variant="outlined" margin="normal" type="number"
                                       value={this.state.width} onChange={(event) => this.handleChange('width', event)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth id="TextField-Height" label="Height" variant="outlined" margin="normal" type="number"
                                       value={this.state.height} onChange={(event) => this.handleChange('height', event)} />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="Phaser-Renderer-Options">Renderer</InputLabel>
                                <Select
                                    value={this.state.renderer}
                                    onChange={(event) => this.handleChange('renderer', event)}
                                    input={<Input id="Phaser-Renderer-Options"/>}
                                >
                                    {renderRendererOptions()}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapActionsToProps)(GameConfigDialog);