import React from "react";
import {
  StyledArea,
  StyledContainer,
  StyledTodoList,
  StyledTitle
} from "./styles";
import TodoListItem from "../todoListItem";

const TodoList = ({ todos, changeTodo, deleteTodo }) => {
  return (
    <>
      <StyledArea>
        <StyledContainer>
          <StyledTitle>Todo's</StyledTitle>
          <StyledTodoList>
            {todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                changeTodo={changeTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </StyledTodoList>
        </StyledContainer>
      </StyledArea>
    </>
  );
};

export default TodoList;
