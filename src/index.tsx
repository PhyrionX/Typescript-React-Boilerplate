import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter } from './router';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
//import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
ReactDOM.render(
  <AppRouter />
  , document.getElementById('root'));
