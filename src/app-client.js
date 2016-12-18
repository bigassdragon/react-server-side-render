'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './jsx/AppRoutes';

if(process.env.NODE_ENV == 'development' && module.hot) {
	console.log('shit is going on here');
  module.hot.accept('./jsx/AppRoutes', () => {
  	console.log('some bullshit dude!!!');
    const NewAppRoutes = require('./jsx/AppRoutes');

    window.onload = () => ReactDOM.render(<NewAppRoutes />, document.getElementById('app'));
  });
}

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('app'));
};
