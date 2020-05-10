import React, { Component, createContext } from 'react';
import shortid from 'shortid';

import { todos } from './todos';

export const TodoContext = createContext();

class TodoProvider extends Component {
  state = {
    todos,
  };

  toggleCheckBox = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  addNewTodo = (title) => {
    const todos = [
      ...this.state.todos,
      {
        title,
        id: shortid.generate(),
        completed: false,
      },
    ];
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <TodoContext.Provider
        value={{
          todos,
          completedTodos: todos.filter((todo) => todo.completed),
          pendingTodos: todos.filter((todo) => !todo.completed),
          toggleCheckBox: this.toggleCheckBox,
          addNewTodo: this.addNewTodo,
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export default TodoProvider;
