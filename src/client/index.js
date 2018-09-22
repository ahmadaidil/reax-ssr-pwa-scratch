import React from 'react';
import { hydrate } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';

hydrate(
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById('reax')
);

const development = module.hot && process.env.NODE_ENV === 'development';
if (development) module.hot.accept();
