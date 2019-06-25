import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './home';

const pages = [
  {
    url: '/',
    label: 'Home',
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
    </Router>
  );
};

export default App;
