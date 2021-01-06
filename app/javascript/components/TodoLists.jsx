import React from 'react'
import { Link } from 'react-router-dom'

class TodoLists extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo_lists: [[]]
        };
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

    render() {

        function renderTodoItems(todo_items, listId){
            if(!!todo_items){
                return (
                    <div >
                        <ul >
                            {todo_items.map((todo) => {
                                return(
                                    <li className="task"  key={todo.id}>
                                        <input type="checkbox" />
                                        <label >{todo.title}</label>
                                        <span className="deleteTaskBtn">x</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    )
                }

        }

        function createItem(){}

        const { todo_lists } = this.state;
        const allTodoLists = todo_lists.map((todo_list, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                        <Link to={`/todo_list/${todo_list.id}`} className="card-title">
                            {todo_list.title}
                        </Link>
                    <div className="card-body">
                        {todo_list.description}
                    </div>
                    <div className ="todo_items">
                        {renderTodoItems(todo_list.todo_items, todo_list.id)}
                    </div>
                    <button type="button" className ="add-todo-item" data-todo-list-id={todo_list.id} >
                        <Link to={`/todo_lists/${todo_list.id}/todo_items`} className="btn custom-button">
                            +
                        </Link>
                    </button>
                </div>

            </div>
        ));
        const noTodoList = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                    No todo list yet. Why not <Link to="/new_todo_list">create one</Link>
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
                        <div className="row">
                            {todo_lists.length > 0 ? allTodoLists : noTodoList}
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

export default TodoLists;
