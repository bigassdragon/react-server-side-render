'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './jsx/AppRoutes';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('app'));
};
