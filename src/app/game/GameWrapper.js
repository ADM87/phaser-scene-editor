import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../utils/Mappings';
import { editorGameConfig } from '../config/EditorConfig';
import { createGame, updateGame } from './Game';

class GameWrapper extends React.Component {
    componentDidMount() {
        createGame(this.props.game);
    }

    componentDidUpdate() {
        updateGame(this.props.game);
    }

    render() {
        return (
            <div id={editorGameConfig.parent} style={{position: "absolute"}} />
        );
    }
}

export default connect(mapStateToProps)(GameWrapper);