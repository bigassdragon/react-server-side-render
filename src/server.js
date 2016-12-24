'use strict';

import path from 'path';
import {Server} from 'http';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from './jsx/routes';
import webpack from 'webpack';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// hello
if (process.env.NODE_ENV === 'development') {
	const config = require('../webpack.config.dev');
	const compiler = webpack(config);

	app.use(require('webpack-dev-middleware')(compiler, {
		publicPath: config.output.publicPath,
		noInfo: true
	}));
	app.use(require('webpack-hot-middleware')(compiler));
	// app.use(Express.static(path.resolve(__dirname, 'src')));
}

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '..', 'build')));

// universal routing and rendering
app.get('*', (req, res) => {
  match(
    {routes, location: req.url},
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps} />);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage />);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.send(`
      	<!DOCTYPE html>
      	<html>
      	  <head>
      	    <meta charset='utf-8' />
      	    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      	  </head>
      	  <body>
      	    <div id='app'><div>${markup}</div></div>
      	    <script src='/js/bundle.js'></script>
      	  </body>
      	</html>
      `);
    }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
