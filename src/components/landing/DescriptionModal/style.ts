import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalViewDimmed: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalViewTextArea: {
    width: '80%',
    height: '80%',
    backgroundColor: '#fff',
  },
  modalViewClose: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 20,
    color: '#000',
    right: 20,
    textAlign: 'center',
    fontSize: 28,
  },
});

export default styles;
