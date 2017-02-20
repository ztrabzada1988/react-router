require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import ContactListContainer from './components/contact-list-container';
import App from './components/app';
import ContactContainer from './components/contact-container';

const routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
            <IndexRoute component={ContactListContainer} />
            <Route path=":contactId" component={ContactContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);
