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
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  modalViewHeader: {
    height: 30,
    flexDirection: 'row-reverse',
    marginTop: -10,
  },
  modalViewCloseButton: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalViewCloseText: {
    color: '#000',
    fontSize: 28,
  },
  modalViewA: {
    marginBottom: 20,
  },
  modalViewB: {
    flex: 1,
  },
  workOutType: {
    marginBottom: 20,
  },
  workOutCount: {},
  disclaimerWork: {
    fontSize: 16,
    textAlign: 'center',
  },
  disclaimerWorkTitle: {
    fontSize: 18,
    color: '#1CD8D2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalViewC: {
    flex: 1,
    flexDirection: 'row',
  },
  example: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  exampleImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  exampleText: {
    height: 20,
  },
});

export default styles;
