import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './home';

import {Mask} from '../../examples/venia';

const pages = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/mask',
    label: 'Mask Example',
  },
];

const App = props => {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={routeProps => {
          return <Home pages={pages} />;
        }}
      />
      <Route path="/mask" component={Mask} />
    </Router>
  );
};

export default App;
