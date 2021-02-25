import React from 'react'
import { Link } from 'react-router-dom'
import TodoList from "./TodoList";
import {
    Button,
    Box
} from "@material-ui/core";
//import Button from "@material-ui/core/Button";
//import Box from "@material-ui/core/Box";

class TodoLists extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo_lists: {todo_items:[]},
        };
        this.deleteTodoList = this.deleteTodoList.bind(this)
        this.deleteTodoItem = this.deleteTodoItem.bind(this)
        this.updateTodoItem = this. updateTodoItem.bind(this)
        this.createTodoItem = this.createTodoItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)


    }

    refreshPage() {
        window.location.reload(false);
    }

    componentDidMount() {
        const url = "/api/v1/todo_lists";
        fetch(url, {
            method: "GET"
        })
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
            .then(()=>this.refreshPage())
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
            .then(()=>this.refreshPage())
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

    createTodoItem = (todo, listId) =>{
        const url = `/api/v1/todo_lists/${listId}/todo_items`
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "title": `${todo.title}`,
                "completed": `${todo.completed}`
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


    handleChange(e, todo, oldListId) {

        const newListId = e.target.value;
        console.log(newListId);
        this.deleteTodoItem(oldListId, todo.id);
        this.createTodoItem(todo, newListId);

    }

   /* handleSubmit(event) {
        alert('Updated!');
    }

    */





    render() {



        const { todo_lists } = this.state;
        const allTodoLists =(
            <TodoList
                deleteTodoList = {this.deleteTodoList.bind(this)}
                deleteTodoItem = {this.deleteTodoItem.bind(this)}
                updateTodoItem = {this.updateTodoItem.bind(this)}
                createTodoItem = {this.createTodoItem.bind(this)}
                // handleSubmit = {this.handleSubmit.bind(this)}
                handleChange = {this.handleChange.bind(this)}
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
                        <Box p={4}>
                        <Button>
                            <Link to="/todo_list" className="btn custom-button">
                                Create New Todo List
                            </Link>
                        </Button>
                        </Box>
                        <div>
                            {todo_lists.length > 0 ? allTodoLists : noTodoList}
                        </div>
                        <Box p={4}>
                        <Button>
                            <Link to="/" className="btn btn-link">
                                Home
                            </Link>
                        </Button>
                        </Box>
                    </main>
                </div>
            </>

        );
    };
}

export default TodoLists;
