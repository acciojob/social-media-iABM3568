import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";
import PostDetails from "./PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* FIRST CHILD (Cypress strict) */}
        <nav>
          <a href="/">Posts</a>
          <a href="/users">Users</a>
          <a href="/notifications">Notifications</a>
        </nav>

        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/notifications" component={Notifications} />
          <Route path="/posts/:id" component={PostDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
