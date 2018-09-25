import { withRouter } from 'react-router-dom';
import { Universal, Home, NotFound } from './client/pages';

export default [
  {
    path: '/',
    component: withRouter(Home),
    exact: true
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    component: Universal
  }
];
