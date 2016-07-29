import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import React from 'react';
import hbs from 'hbs';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { Router, match, RouterContext, RoutingContext, IndexRoute } from 'react-router';
import routes from './app/routes/routes';

const app = express();
const port = 6500;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    var content = ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps}/>);
      res.render('index.hbs', {body: content});
  });
});

app.listen(port);
console.log(`Server is up and running at http://localhost:${port}`);