import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import TodoLists from "../components/TodoLists";
import TodoList from "../components/TodoList";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todo_lists" exact component={TodoLists} />
            <Route path="/todo_list/:id" exact component={TodoList} />
        </Switch>
    </Router>
);