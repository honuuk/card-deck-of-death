import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  resultWrap: {
    flex: 1,
    transform: [{ rotate: '-15deg' }],
  },
  result: {
    textAlign: 'center',
    width: '100%',
    fontSize: 60,
    fontWeight: '800',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0,
  },
});

export default styles;
