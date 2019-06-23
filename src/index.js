import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store/Store';
import Editor from './app/editor/Editor';

render(
    <Provider store={store}>
        <Editor />
    </Provider>,
    document.getElementById("root")
);