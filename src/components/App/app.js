import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home";

import { Mask } from "../../examples/venia";

import { useSearchParamExample } from "../../examples/peregrine";

const pages = [
  {
    url: "/",
    label: "Home"
  },
  {
    url: "/mask",
    label: "Mask Example"
  },
  {
    url: "/usesearchparam?query=hello+world",
    label: "useSearchParam Hook Example"
  }
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
      <Route path="/usesearchparam" component={useSearchParamExample} />
    </Router>
  );
};

export default App;
