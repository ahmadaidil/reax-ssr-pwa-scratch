import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';

import routes from '../routes';

const router = express.Router();

router.get('*', (req, res) => {
  const context = {};
  const reax = renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );
  res.render('index', { reax });
});

module.exports = router;
