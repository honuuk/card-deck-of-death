import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 5,
    alignItems: 'center',
  },
  timer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer_text: {
    width: 235,
    fontSize: 50,
    color: '#1c4abd',
    fontWeight: '800',
    textShadowColor: '#cdcdcd',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0,
  },
  card_wrap: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcf1d2',
  },
  result: {
    flex: 1,
    textAlign: 'center',
    width: '100%',
    fontSize: 60,
    fontWeight: '800',
    color: 'red',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0,
    transform: [{ rotate: '-15deg' }],
  },
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
  footer: {
    height: 70,
  },
  back_arrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
  },
  arrow_img: {
    flex: 1,
    width: '30%',
    top: '10%',
  },
});

export default styles;
