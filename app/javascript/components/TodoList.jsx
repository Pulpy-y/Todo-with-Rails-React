
import React, { useState, useEffect } from 'react'

//import Loader from './Loader';
//import Pending from './Pending';
//import Completed from './Completed';
import {Link} from "react-router-dom";
import TodoLists from "./TodoLists";

class TodoList extends React.Component{
    // todo_list id = {this.props.match.params.id}
    constructor(props) {
        super(props);
        /*this.emptyItem = {
            title:'',
            completed:false
        };
        this.state = {
            todo_list: {
                title: '',
                description: '',
                todo_items_attributes: [Object.assign(({}, this.emptyItem))]
            }
        };*/
        const todo_list = {};
        this.state = {
            todo_list
        }
    }

    componentDidMount() {
        /*const url = `/api/v1/todo_list/${this.props.match.params.id}`;
        console.log(url);
        fetch(url)
            .then(response => {
                if (response.ok){
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ todo_list: response.data}))
            .catch(() => this.props.history.push("/"));*/
        TodoLists.getTodo(this.props.match.params.id).then((result) => {
            console.log(result.data);
            this.setState(() => ({todo_list: result.data}));
        }).catch(() => this.props.history.push("/"))
        }


    render(){

        const { todo_list } = this.state;
        console.log(todo_list);
        const allTodoItems = todo_list.todo_items_attributes.map((todo_item, index) => (
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
                            <div className="btn custom-button">
                                Create New Todo Item
                            </div>
                        </div>
                        <div className="row">
                            {todo_list.length > 0 ? allTodoItems: noTodoList}
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