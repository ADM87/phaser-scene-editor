import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { 
    AppBar, 
    Toolbar, 
    makeStyles, 
    Typography, 
    IconButton, 
} from '@material-ui/core';
import CenterFocusWeak from '@material-ui/icons/CenterFocusWeak';
import MenuIcon from '@material-ui/icons/Menu';
import { mapEditorActionsToProps, mapStateToProps } from '../../utils/Mappings';
import { editorActionTypes, editorVariables } from '../../config/EditorConfig';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: editorVariables.menuDrawerWidth,
      width: `calc(100% - ${editorVariables.menuDrawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    hide: {
      display: 'none'
    },
    title: {
      flexGrow: 1
    }
}));

function MenuBar(props) {
    const classes = useStyles();

    function handleMenuIconClick() {
        props[editorActionTypes.toggleMenuDrawer]({ menuDrawerOpen: true });
    }
    
    return (
        <AppBar 
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.editor.menuDrawerOpen
            })}
        >
            <Toolbar id="EditorToolBar">
                <IconButton 
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleMenuIconClick}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: props.editor.menuDrawerOpen,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title}>
                    {props.game.gameConfig.title || "Untitled Game"}
                </Typography>
                <IconButton color="inherit">
                    <CenterFocusWeak />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default connect(mapStateToProps, mapEditorActionsToProps)(MenuBar);