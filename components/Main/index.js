import React, { useContext } from 'react';
import { Container, Tab, Tabs } from 'native-base';

import { TodoContext } from '../../context';
import { Todos } from '../Todos';
import Header from '../Header';
import { AddTodo } from '../AddTodoForm';

export const HomeScreen = () => {
  const { todos, completedTodos, pendingTodos } = useContext(TodoContext);

  return (
    <Container>
      <Header />
      <AddTodo />
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
    </Container>
  );
};
