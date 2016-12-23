'use strict';

import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import Layout from './Layout';
import NotFoundPage from './pages/NotFound';
import Test from './pages/Test';
import Dashboard from './Dashboard';

const routes = (
  <Route path='/'
  	component={Layout}>
  	<IndexRedirect to='dashboard' />
  	<Route path='dashboard'
  		component={Dashboard}>
  		<IndexRedirect to='test' />
  		<Route path='test'
  			component={Test} />
  	</Route>
    <Route path='*'
    	component={NotFoundPage}/>
  </Route>
);

export default routes;
