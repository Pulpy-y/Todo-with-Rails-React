
import React from 'react'
import {Link} from "react-router-dom";
import {
    Button,
    Paper,
    Grid,
    Checkbox,
    FormControl, IconButton, InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText, NativeSelect, ButtonGroup, Box
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"




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
                                                                <option> </option>
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



    }
}

export default TodoList;