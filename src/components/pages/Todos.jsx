import React, { Fragment } from 'react'
import TodoList from '../todoList'
import TodoForm from '../todoForm';


const Todos = ({todos, addTodo, changeTodo, deleteTodo }) => {
    return (
        <Fragment>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} changeTodo={changeTodo} deleteTodo={deleteTodo} />
        </Fragment>
    )
}
export default Todos;
