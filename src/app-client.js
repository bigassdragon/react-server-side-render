'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './jsx/AppRoutes';

// enable hot-module-reloading
// if (process.env.NODE_ENV === 'development' && module.hot) {
// 	module.hot.accept();
// }

ReactDOM.render(<AppRoutes/>, document.getElementById('app'));

// if(process.env.NODE_ENV == 'development' && module.hot) {
//   module.hot.accept('./jsx/AppRoutes', () => {
//     const NewAppRoutes = require('./jsx/AppRoutes').default;
//     ReactDOM.render(<NewAppRoutes />, document.getElementById('app'));
//   });
// }
