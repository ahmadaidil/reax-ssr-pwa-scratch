import React from 'react';
import { hydrate } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';
import { HelmetProvider } from 'react-helmet-async';
import routes from '../routes';
import './styles/main.css';

hydrate(
  <BrowserRouter>
    <HelmetProvider>
      {renderRoutes(routes)}
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById('reax')
);

const development = module.hot && process.env.NODE_ENV === 'development';
if (development) module.hot.accept();
