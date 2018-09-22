import { withRouter } from 'react-router-dom';
import Homepage from './client/pages/home';

export default [
  {
    path: '/',
    component: withRouter(Homepage)
  }
];
