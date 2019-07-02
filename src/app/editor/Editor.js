import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../utils/Mappings';
import * as Dialogs from './dialogs';
import { dialogProps, dialogTypes } from '../config/EditorConfig';
import GameWrapper from '../game/GameWrapper';
import MenuBar from './menuBar/MenuBar';
import MenuOptionDrawer from './menuBar/MenuOptionDrawer';
import { CssBaseline, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...theme.mixins.toolbar,
    },
    content: {
        paddingLeft: 64,
        margin: 0,
        flexGrow: 1
    }
}));

function Editor(props) {
    const classes = useStyle();
    const dialogToggles = props.editor.dialogToggles;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MenuBar />
            <MenuOptionDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <GameWrapper/>
            </main>
            <Dialogs.NewSceneDialog toggle={dialogToggles[dialogTypes.newSceneDialog]} {...dialogProps[dialogTypes.newSceneDialog]}/>
            <Dialogs.GameConfigDialog toggle={dialogToggles[dialogTypes.gameConfigDailog]} {...dialogProps[dialogTypes.gameConfigDailog]}/>
        </div>
    );
}

export default connect(mapStateToProps)(Editor);