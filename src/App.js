import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./views/home/Home";
import Post from "./views/post/Post";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:postid" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
