import React, { useState, createContext } from 'react';
import shortid from 'shortid';

import { todos as defaultTodos } from './todos';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(defaultTodos);

  const toggleCheckBox = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addNewTodo = (title) => {
    const newTodos = [
      ...todos,
      {
        title,
        id: shortid.generate(),
        completed: false,
      },
    ];
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        completedTodos: todos.filter((todo) => todo.completed),
        pendingTodos: todos.filter((todo) => !todo.completed),
        toggleCheckBox,
        addNewTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
