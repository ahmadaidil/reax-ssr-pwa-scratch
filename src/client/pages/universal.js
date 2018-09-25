import React, { Fragment } from 'react';
import { Redirect } from 'react-router';
import { PageHeader } from '../components/commons';

export default () => (
  <Fragment>
    <PageHeader />
    <Redirect to="/404" />
  </Fragment>
);
