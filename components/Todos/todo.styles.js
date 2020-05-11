import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titleText: {
    width: '80%',
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
  cardItem: {
    justifyContent: 'space-between',
    marginRight: 10,
  },
  container: {
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
