import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <h1 className="display-4">Todo Lists</h1>
                <p className="lead">
                    Create a todo list and add items inside!
                </p>
                <hr className="my-4" />
                <Link
                    to="/todo_lists#index"
                    className="btn btn-lg custom-button"
                    role="button"
                >
                    View Lists
                </Link>
            </div>
        </div>
    </div>

};
