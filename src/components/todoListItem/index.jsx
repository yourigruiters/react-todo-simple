import React from 'react'
import { StyledTodoListItem, StyledDeleteIcon, StyledRow } from './styles'

const TodoListItem = ({todo, changeTodo, deleteTodo}) => {
    
    const handleClick = (id) => {
        changeTodo(id);
    }

    const handleDelete = (id) => {
        deleteTodo(id);
    }

    return (
        <StyledRow>
            <span onClick={() => handleDelete(todo.id)}><StyledDeleteIcon className="fas fa-trash-alt"/></span>{ todo.completed ? <StyledTodoListItem onClick={() => handleClick(todo.id)} finished>{todo.title}</StyledTodoListItem> : <StyledTodoListItem onClick={() => handleClick(todo.id)}>{todo.title}</StyledTodoListItem> }
        </StyledRow>
    )
}

export default TodoListItem;
