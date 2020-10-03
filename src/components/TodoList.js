import { Checkbox, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';




const TodoList = ({todos, deleteTodo}) => {
    return <List>
        {todos.map((todo, index) => (
            <ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton
                    aria-label="Delete"
                    onClick={()=> {
                        deleteTodo (index);
                    }}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
}

export default TodoList;