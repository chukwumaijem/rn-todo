import React, { useState, useContext } from 'react';
import { Form, Icon, Input, Button } from 'native-base';

import styles from './addTodo.styles';
import { TodoContext } from '../../context';

export const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const { addNewTodo } = useContext(TodoContext);
  const handleInputChange = (value) => {
    setTodo(value);
  };

  const submitTodo = () => {
    addNewTodo(todo);
    setTodo('');
  };
  return (
    <Form style={styles.form}>
      <Input
        placeholder="Enter todo title..."
        onChangeText={handleInputChange}
        value={todo}
        style={styles.todoInput}
      />
      <Button
        bordered
        small
        rounded
        primary
        onPress={submitTodo}
        disabled={todo.trim().length < 3}
        >
        <Icon name="md-add" size={10} />
      </Button>
    </Form>
  );
};
