
import React from 'react'
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
    Checkbox,
    FormControl, IconButton, InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText, NativeSelect, ButtonGroup, Box
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';




class TodoList extends React.Component {


    render() {
        function refreshPage() {
            window.location.reload(false);
        }



        return (
            <Grid container spacing={10}>
                {this.props.lists.map((list, index) => {
                        return (
                            <Grid item key={index} xs={6}>
                                <Paper color="blue">
                                <Box p={2}>
                                    <h3>{list.title}</h3>
                                </Box>
                                <Box p={2}>
                                    <li>{list.description}</li>
                                </Box>
                                <List>
                                {list.todo_items.map((todo) => {
                                    return (
                                            <ListItem key={todo.id} >
                                                <ListItemIcon>
                                                    <Checkbox
                                                        onChange={this.props.updateTodoItem.bind(null, list.id, todo.id, todo.title, todo.completed)}
                                                        onClick={refreshPage}
                                                        checked={todo.completed}/>
                                                </ListItemIcon>
                                                <ListItemText id={todo.id} primary={`${todo.title}`}>

                                                </ListItemText>
                                                <ListItemSecondaryAction
                                                style={{
                                                    paddingRight:30
                                                }}>

                                                        <FormControl>
                                                            <InputLabel htmlFor="change-list-naive-helper">
                                                                Change List
                                                            </InputLabel>
                                                            <NativeSelect
                                                                onChange={(e) => this.props.handleChange(e, todo, list.id)}>
                                                                <option></option>
                                                                {this.props.lists.map((list) => {
                                                                    return <option key={list.id}
                                                                                value={list.id}
                                                                    >{list.title}
                                                                    </option>
                                                                })}
                                                            </NativeSelect>
                                                        </FormControl>
                                                        <IconButton edge="end" aria-label="delete"
                                                                onClick={this.props.deleteTodoItem.bind(null, list.id, todo.id)}>
                                                            <DeleteIcon />
                                                        </IconButton>

                                                </ListItemSecondaryAction>
                                            </ListItem>
                                    )
                                })}
                                </List>
                                 <Box mx="auto" p={1}>
                                    <ButtonGroup variant="text" aria-label="text primary button group">

                                        <Button data-todo-list-id={list.id}
                                            variant="contained"
                                            href={`/todo_lists/${list.id}`}
                                            component={Link}>
                                            <Link to={`/todo_lists/${list.id}`} className="btn custom-button">
                                                ADD ITEM
                                            </Link>
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={this.props.deleteTodoList.bind(null, list.id)}>
                                            Delete List
                                        </Button>
                                    </ButtonGroup>
                                 </Box>

                                </Paper>
                            </Grid>
                        )
                    }
                )
                }
            </Grid>
        )

        /*return(
            <ul>
                <Grid container spacing={4}>

                    {this.props.lists.map((list, index) => {
                        return (
                            <Grid item key={index} className="col-6 col-lg-4">
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
                                                            <Checkbox type="checkbox"
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

                            </Grid>
                        )
                    })}
                </Grid>
            </ul>


        )}

         */


    }
}

export default TodoList;