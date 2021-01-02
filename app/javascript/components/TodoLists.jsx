import React from 'react'
import { Link } from 'react-router-dom'

class TodoLists extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo_lists: []
        };
    }

    componentDidMount() {
        const url = "/api/v1/todo_lists/index";
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

    render(){
        const { todo_lists } = this.state;
        const allTodoLists = todo_lists.map((todo_list, index) => (
            <div key={index} className="col-md-6 col-lg-4">
                <div className="card mb-4">
                        <Link to={`/todo_list/${todo_list.id}`} className="card-title">
                            {todo_list.title}
                        </Link>
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
                            <Link to="/todo_lists/new" className="btn custom-button">
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
