import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
