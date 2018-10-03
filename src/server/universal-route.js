import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';
import { HelmetProvider } from 'react-helmet-async';

import routes from '../routes';

const router = express.Router();

router.get('*', (req, res) => {
  const context = {};
  const helmetContext = {};
  const reax = renderToString(
    <StaticRouter location={req.url} context={context}>
      <HelmetProvider context={helmetContext}>
        {renderRoutes(routes)}
      </HelmetProvider>
    </StaticRouter>
  );

  const { helmet } = helmetContext;
  const isProduction = process.env.NODE_ENV === 'production';
  res.render('index', {
    helmet,
    reax,
    isProduction
  });
});

module.exports = router;
