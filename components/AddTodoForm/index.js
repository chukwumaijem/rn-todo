import React, { useState, useContext } from 'react';
import { Button, Text, View } from 'native-base';
import { Modal, TextInput } from 'react-native';

import styles from './addTodo.styles';
import { TodoContext } from '../../context';

export const AddTodoModal = ({ modalIsOpen, closeModal }) => {
  const [todo, setTodo] = useState('');
  const { addNewTodo } = useContext(TodoContext);
  const handleInputChange = (value) => {
    setTodo(value);
  };

  const submitTodo = () => {
    addNewTodo(todo);
    exitModal();
  };

  const exitModal = () => {
    setTodo('');
    closeModal();
  };

  return (
    <Modal visible={modalIsOpen} onRequestClose={closeModal} transparent>
      <View style={styles.container}>
        <View style={styles.inputFields}>
          <TextInput
            placeholder="Enter todo title..."
            onChangeText={handleInputChange}
            value={todo}
            style={styles.todoInput}
          />
        </View>
        <View style={styles.actionButtons}>
          <Button bordered small danger onPress={exitModal}>
            <Text>Cancel</Text>
          </Button>
          <Button
            bordered
            small
            primary
            onPress={submitTodo}
            disabled={todo.trim().length < 3}
          >
            <Text>Add</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};
