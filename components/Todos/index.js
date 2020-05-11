import React, { useContext } from 'react';
import { Text, Card, CardItem, CheckBox, Icon } from 'native-base';
import { FlatList, View, Alert } from 'react-native';

import { TodoContext } from '../../context';
import styles from './todo.styles';

export const Todos = ({ todos }) => {
  const { toggleCheckBox, removeTodo } = useContext(TodoContext);

  const handleRemoveTodo = (id) => {
    Alert.alert(
      'Remove Todo',
      'Are you sure you want to remove this todo?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => removeTodo(id) },
      ],
      { cancelable: true }
    );
  };

  return (
    <FlatList
      data={todos}
      style={styles.container}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { id, title, completed } }) => (
        <Card key={id}>
          <CardItem style={styles.cardItem}>
            <Text
              style={[styles.titleText, completed ? styles.completedText : {}]}
              numberOfLines={1}
            >
              {title}
            </Text>
            <View style={styles.actionButtons}>
              <Icon
                name="md-trash"
                size={6}
                onPress={() => handleRemoveTodo(id)}
              />
              <CheckBox
                checked={completed}
                onPress={() => toggleCheckBox(id)}
              />
            </View>
          </CardItem>
        </Card>
      )}
    />
  );
};
