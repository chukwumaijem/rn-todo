import React, { useContext } from 'react';
import { Text, Card, CardItem, CheckBox } from 'native-base';
import { FlatList } from 'react-native';

import { TodoContext } from '../../context';
import styles from './todo.styles';

export const Todos = ({ todos }) => {
  const { toggleCheckBox } = useContext(TodoContext);
  return (
    <FlatList
      data={todos}
      style={styles.container}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { id, title, completed } }) => (
        <Card key={id}>
          <CardItem style={styles.cardItem}>
            <Text
              style={completed ? styles.completedText : null}
              numberOfLines={1}
            >
              {title}
            </Text>
            <CheckBox checked={completed} onPress={() => toggleCheckBox(id)} />
          </CardItem>
        </Card>
      )}
    />
  );
};
