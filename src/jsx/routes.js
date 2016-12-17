'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './Layout';
import NotFoundPage from './pages/NotFound';

const routes = (
  <Route path='/'
  	component={Layout}>
    <Route path='*'
    	component={NotFoundPage}/>
  </Route>
);

export default routes;
