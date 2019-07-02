import React from 'react';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { connect } from 'react-redux';
import { mapStateToProps, mapEditorActionsToProps } from '../../utils/Mappings';
import { 
    editorVariables, 
    editorActionTypes, 
    menuBarItemGroups 
} from '../../config/EditorConfig';
import { 
    Drawer, 
    makeStyles, 
    IconButton, 
    Divider, 
    ListItem,
    ListItemText,
    ListItemIcon,
    List,
    Tooltip
} from '@material-ui/core';
import { iconMap } from '../../config/IconConfig';

const useStyles = makeStyles(theme => ({
    drawer: {
      width: editorVariables.menuDrawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: editorVariables.menuDrawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...theme.mixins.toolbar,
    }
}));

function MenuOptionDrawer(props) {
    const classes = useStyles();

    function handleMenuDrawerClose() {
        props[editorActionTypes.toggleMenuDrawer]({ menuDrawerOpen: false });
    }

    function handleMenuItemClick(item) {
        props[item.actionType].call(null, item.actionPayload);
    }

    function renderMenuBarItems() {
        let menuOptionLayout = [];

        menuBarItemGroups.forEach((group, i) => {
            menuOptionLayout.push(
                <List key={`MenuItemGroup-${i}`}>
                    {group.map(item => (
                        <Tooltip 
                            key={`MenuItemTooltip-${item.label}`}
                            title={item.label} 
                            placement="right"
                        >
                            <ListItem 
                                button 
                                key={`MenuItem-${item.label}`}
                                onClick={() => handleMenuItemClick(item)}
                            >
                                    <ListItemIcon>{iconMap[item.icon]}</ListItemIcon>
                                    <ListItemText primary={item.label}/>
                            </ListItem>
                        </Tooltip>
                    ))}
                </List>
            );

            if (i < group.length) {
                menuOptionLayout.push(<Divider key={`MenuDivider=${i}`}/>);
            }
        });

        return menuOptionLayout;
    }

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: props.editor.menuDrawerOpen,
              [classes.drawerClose]: !props.editor.menuDrawerOpen,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: props.editor.menuDrawerOpen,
                [classes.drawerClose]: !props.editor.menuDrawerOpen,
              }),
            }}
            open={props.editor.menuDrawerOpen}
        >
            <div className={classes.toolbar}>
            <IconButton onClick={handleMenuDrawerClose}>
                <Tooltip title="Close" placement="left">
                    <ChevronLeftIcon />
                </Tooltip>
            </IconButton>
            </div>
            <Divider />
            {renderMenuBarItems()}
        </Drawer>
    );
}

export default connect(mapStateToProps, mapEditorActionsToProps)(MenuOptionDrawer);