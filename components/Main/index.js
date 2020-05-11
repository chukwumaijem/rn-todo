import React, { useContext, useState } from 'react';
import { Container, Tab, Tabs, Button, Icon, View } from 'native-base';

import { TodoContext } from '../../context';
import { Todos } from '../Todos';
import Header from '../Header';
import { AddTodoModal } from '../AddTodoForm';
import styles from './main.styles';

export const HomeScreen = () => {
  const { todos, completedTodos, pendingTodos } = useContext(TodoContext);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const toggleModalVisibility = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Container>
      <Header />
      <AddTodoModal
        modalIsOpen={modalIsOpen}
        closeModal={toggleModalVisibility}
      />
      <Tabs>
        <Tab heading="All">
          <Todos todos={todos} />
        </Tab>
        <Tab heading="Pending">
          <Todos todos={pendingTodos} />
        </Tab>
        <Tab heading="Done">
          <Todos todos={completedTodos} />
        </Tab>
      </Tabs>
      <View style={styles.addTodoButtonContainer}>
        <Button
          onPress={toggleModalVisibility}
          style={styles.addTodoButton}
          bordered
          rounded
        >
          <Icon name="md-add" size={8} />
        </Button>
      </View>
    </Container>
  );
};
