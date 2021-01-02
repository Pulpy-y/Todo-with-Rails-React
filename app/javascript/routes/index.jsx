import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import TodoLists from "../components/TodoLists";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todo_lists" exact component={TodoLists} />
        </Switch>
    </Router>
);