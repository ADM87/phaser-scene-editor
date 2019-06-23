import React from 'react';
import { connect } from 'react-redux';
import { Button, Menu, MenuItem, withStyles } from '@material-ui/core';
import { mapEditorActionsToProps } from '../../utils/Mappings';

const StyledMenu = withStyles({ 
    paper: { border: '1px solid #d3d4d5' } 
})(props => {
    return (
        <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            {...props}
        />
    );
});

function MenuBarItem(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function optionSelected(option) {
        props[option.actionType](option.actionPayload);
        handleClose();
    }

    const menuOptions = props.options.map(option => {
        return <MenuItem key={`${props.label}-${option.label}`} onClick={() => optionSelected(option)}>{option.label}</MenuItem>;
    });

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {props.label}
            </Button>
            <StyledMenu disableAutoFocus={true} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>{menuOptions}</StyledMenu>
        </div>
    );
};

export default connect(null, mapEditorActionsToProps)(MenuBarItem);