import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  action_name: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  action_name_text: {
    fontSize: 50,
    fontWeight: '800',
    color: '#ff802b',
    textAlign: 'center',
    textShadowColor: '#1c4abd',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 0,
  },
  return_to_start: {
    width: 170,
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    borderBottomWidth: 0,
    shadowColor: '#acacac',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  return_to_start_text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default styles;
