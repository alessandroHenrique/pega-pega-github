// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import UserInformation from './components/UserInformation';
import SearchUser from './components/SearchUser';
import PreviousPageButton from './components/PreviousPageButton';
import NextPageButton from './components/NextPageButton';
import UserRepos from './components/UserRepos';
import getUser from './components/App';

import HTML from './components/courses/HTML';
import CSS from './components/courses/CSS';
import JavaScript from './components/courses/JavaScript';


// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/home" component={Home} />
    <Route path="/repos/:userName" component={UserRepos}/>
  </Router>
);

export default routes;
