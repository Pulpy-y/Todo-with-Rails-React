import React from "react";
import {Link} from "react-router-dom";

const DeleteItem = () => {
    return (
        <div>
            <h1>You have successfully deleted the todo item!</h1>
            <Link to="/todo_lists" className="btn btn-link mt-3">Back to lists</Link>
        </div>
    )
};

export default DeleteItem;