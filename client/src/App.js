import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (

      <div>
        <header>
          <Link to="/">Daily News!</Link>
        </header>
          <Router>
            <SearchParams path="/" />
          </Router>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));