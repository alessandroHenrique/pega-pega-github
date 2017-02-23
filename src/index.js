// Libs
import React from 'react';
import { render } from 'react-dom';

// CSS
import './css/bootstrap.min.css';
import './css/style.css';

// Routes
import routes from './router';

// Render
render(
  routes,
  document.getElementById('app')
);
