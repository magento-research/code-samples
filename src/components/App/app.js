import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home";

import { Mask } from "../../examples/venia";

import {
  useSearchParamExample,
  useQueryResultExample
} from "../../examples/peregrine";

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
  },
  {
    url: "/usequeryresult",
    label: "useQueryResult Hook Example"
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
      <Route path="/usequeryresult" component={useQueryResultExample} />
    </Router>
  );
};

export default App;
