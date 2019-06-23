import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../utils/Mappings';
import { MenuBar } from './menuBar/MenuBar';
import * as Dialogs from './dialogs';
import { dialogProps, dialogTypes } from '../config/EditorConfig';

class Editor extends React.Component {
    render() {
        const dialogToggles = this.props.editor.dialogToggles;

        return (
            <div>
                <MenuBar />
                <Dialogs.NewSceneDialog toggle={dialogToggles[dialogTypes.newSceneDialog]} {...dialogProps[dialogTypes.newSceneDialog]}/>
                <Dialogs.GameConfigDialog toggle={dialogToggles[dialogTypes.gameConfigDailog]} {...dialogProps[dialogTypes.gameConfigDailog]}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Editor);