
import React from 'react'

//import Loader from './Loader';
//import Pending from './Pending';
//import Completed from './Completed';
import {Link} from "react-router-dom";
//import TodoLists from "./TodoLists";

class TodoList extends React.Component{


    render(){
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

     return(
         <ul>
            {this.props.lists.map((list, index) => {
                 return  <div key={index} className="col-6 col-lg-4">
                     <div className="card mb-4" >
                         <Link to={`/todo_list/${list.id}`} className="card-title">
                             {list.title}
                         </Link>
                         <div className="card-body">
                             {list.description}
                         </div>
                         <div className ="todo_items">
                             {renderTodoItems(list.todo_items, list.id)}
                         </div>
                         <button type="button" className ="add-todo-item" data-todo-list-id={list.id} >
                             <Link to={`/todo_lists/${list.id}`} className="btn custom-button">
                                 +
                             </Link>
                         </button>
                         <div className="col-sm-12 col-lg-2">
                             <button type="button" className="btn btn-danger" onClick={this.props.deleteTodoList.bind(null, list.id)} >
                                 Delete List
                             </button>
                         </div>
                     </div>

                 </div>
             })}
         </ul>


     )


}
}

export default TodoList;