
import React from 'react'
import {Link} from "react-router-dom";



class TodoList extends React.Component{




    render(){
        function refreshPage(){
            window.location.reload(false);
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
                             <div >
                                 <ul >
                                     {list.todo_items.map((todo) => {
                                         return(
                                             <li className="task"  key={todo.id}>
                                                 <input type="checkbox"
                                                        onChange={this.props.updateTodoItem.bind(null, list.id, todo.id, todo.title, todo.completed)}
                                                        onClick={refreshPage}
                                                        checked={todo.completed}/>
                                                 <label >{todo.title}</label>
                                                 <button className="deleteTaskBtn" onClick={this.props.deleteTodoItem.bind(null, list.id, todo.id)}>x</button>
                                                 <form onSubmit={this.props.handleSubmit.bind(null, todo)}>
                                                     <label>
                                                         Change the list for this item:
                                                         <select
                                                             onChange={(e) =>this.props.handleChange(e, todo, list.id)}
                                                         >
                                                             <option> </option>
                                                             {this.props.lists.map((list) =>{
                                                                return <option key = {list.id}
                                                                               value={list.id}
                                                                >{list.title}
                                                                </option>
                                                             })}
                                                         </select>
                                                     </label>
                                                     <input type="submit" value="Submit" />
                                                 </form>
                                             </li>
                                         )
                                     })}
                                 </ul>
                             </div>
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