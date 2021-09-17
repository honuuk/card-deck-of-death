import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  timer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer_text: {
    width: 230,
    fontSize: 50,
    color: '#1CD8D2',
    fontWeight: '800',
    textShadowColor: '#1c4abd',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0,
    transform: [{ translateX: 1 }],
  },
});

export default styles;
