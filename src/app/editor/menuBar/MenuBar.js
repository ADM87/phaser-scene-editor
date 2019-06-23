import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { menuBarItems } from '../../config/EditorConfig';
import MenuBarItem from './MenuBarItem';

export function MenuBar() {
    return (
        <AppBar position="static">
            <Toolbar>{menuBarItems.map(item => <MenuBarItem key={`MenuBar-${item.label}`} {...item} />)}</Toolbar>
        </AppBar>
    );
};