import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../navigation/";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import Axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    const data = await Axios(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const todos = data.data;

    this.setState({
      todos: todos
    });
  }

  addTodo = (todo) => {
    const id = Math.floor(Math.random() * 1000);

    todo.id = id;
    todo.completed = false;

    const todos = [...this.state.todos, todo];

    this.setState({
      todos: todos
    });
  };

  changeTodo = (id) => {
    let index = this.state.todos.findIndex((todo) => todo.id === id);

    let todos = this.state.todos;
    todos[index].completed = !todos[index].completed;

    this.setState({
      todos: todos
    });
  };

  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <Route path="/" component={Navigation} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/todos"
              exact
              render={(...props) => (
                <Todos
                  todos={this.state.todos}
                  addTodo={this.addTodo}
                  changeTodo={this.changeTodo}
                  deleteTodo={this.deleteTodo}
                />
              )}
            />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
