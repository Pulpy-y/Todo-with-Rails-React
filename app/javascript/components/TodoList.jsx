import React, { useState, useEffect } from 'react';
import Loader from './Loader';
//import Pending from './Pending';
import Completed from './Completed';
import {Link} from "react-router-dom";

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo_list: []
        };
    }

    render(){
        const { todo_list } = this.state;
        const allTodoItems = todo_list.map((todo_item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                    <div className="card-header">
                        {todo_item.title}
                    </div>
                </div>

            </div>
        ));
        const noTodoList = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                    No todo item yet. Why not <Link to="/new_todo_item">create one</Link>
                </h4>
            </div>
        );
        return (
            <>
                <div className="py-5">
                    <main className="container">
                        <div className="text-right mb-3">
                            <Link className="btn custom-button">
                                Create New Todo Item
                            </Link>
                        </div>
                        <div className="row">
                            {todo_list.length > 0 ? allTodoItems : noTodoList}
                        </div>
                        <Link to="/" className="btn btn-link">
                            Home
                        </Link>
                    </main>
                </div>
            </>

        );
    }
}

export default TodoList;