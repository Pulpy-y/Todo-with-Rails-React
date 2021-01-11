import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import TodoLists from "../components/TodoLists";
import TodoList from "../components/TodoList";
import NewList from "../components/NewList";
import NewItem from "../components/NewItem";
import DeleteList from "../components/DeleteList";
import DeleteItem from "../components/DeleteItem";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todo_lists" exact component={TodoLists} />
            <Route path="/todo_list" exact component={NewList} />
            <Route path="/todo_lists/:todo_list_id" exact component={NewItem} />
            <Route path="/deletelist" exact component={DeleteList} />
            <Route path="/deleteitem" exact component={DeleteItem} />

        </Switch>
    </Router>
);