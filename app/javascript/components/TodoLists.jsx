import React from 'react'
import { Link } from 'react-router-dom'
import TodoList from "./TodoList";

class TodoLists extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo_lists: {todo_items:[]}
        };
        this.deleteTodoList = this.deleteTodoList.bind(this)
        this.deleteTodoItem = this.deleteTodoItem.bind(this)
        this.updateTodoItem = this. updateTodoItem.bind(this)
    }

    componentDidMount() {
        const url = "/api/v1/todo_lists";
        fetch(url)
            .then(response => {
                if (response.ok){
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ todo_lists: response}))
            .catch(() => this.props.history.push("/"));
    }


    deleteTodoList(id){
        const url = `/api/v1/todo_lists/${id}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(()=>this.props.history.push("/deletelist"))
            .catch(error => console.log(error.message));
    }

    deleteTodoItem(listId, itemId){
        const url = `/api/v1/todo_lists/${listId}/todo_items/${itemId}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;
        console.log(listId);
        console.log(itemId);

        fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(()=>this.props.history.push("/deleteitem"))
            .catch(error => console.log(error.message));
    }

    updateTodoItem = (listId, itemId, itemTitle,itemComplete) =>{
        const url = `/api/v1/todo_lists/${listId}/todo_items/${itemId}`
        const token = document.querySelector('meta[name="csrf-token"]').content;
        console.log(listId);
        console.log(itemId);
        console.log(itemTitle);
        console.log(itemComplete);

        fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                "title": `${itemTitle}`,
                "completed": `${!itemComplete}`
            }),

            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(()=>this.props.history.push("/todo_lists"))
            .catch(error => console.log(error.message));

    }


    render() {



        const { todo_lists } = this.state;
        const allTodoLists =(
            <TodoList
                deleteTodoList = {this.deleteTodoList.bind(this)}
                deleteTodoItem = {this.deleteTodoItem.bind(this)}
                updateTodoItem = {this.updateTodoItem.bind(this)}
                lists = {todo_lists}
                /> );
        const noTodoList = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                    No todo list yet. Why not <Link to="/todo_list">create one</Link>
                </h4>
            </div>
        );

        return (
            <>
                <div className="py-5">
                    <main className="container">
                        <div className="text-right mb-3">
                            <Link to="/todo_list" className="btn custom-button">
                                Create New Todo List
                            </Link>
                        </div>
                        <div>
                            {todo_lists.length > 0 ? allTodoLists : noTodoList}
                        </div>
                        <Link to="/" className="btn btn-link">
                            Home
                        </Link>
                    </main>
                </div>
            </>

        );
    };
}

export default TodoLists;
