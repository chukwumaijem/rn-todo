import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  todoInput: {
    lineHeight: 14,
    fontSize: 14,
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    padding: 10,
  },
  inputFields: {
    paddingVertical: 30,
    paddingHorizontal: 50,
    width: '100%',
  },
  actionButtons: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
});
