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
  modalViewWrap: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
  },
  modalViewHeader: {
    height: 30,
    flexDirection: 'row-reverse',
    marginBottom: -20,
  },
  modalViewCloseButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalViewCloseText: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'NotoSansKR-Light',
  },
  modalViewA: {
    marginBottom: 10,
  },
  workOutType: {
    marginBottom: 20,
  },
  disclaimerWork: {
    fontSize: 16,
  },
  disclaimerWorkTitle: {
    fontFamily: 'NotoSansKR-Black',
    fontSize: 16,
    color: '#1CD8D2',
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 16,
  },
  disclaimerWorkText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 12,
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
    fontFamily: 'NotoSansKR-Medium',
    fontSize: 12,
    height: 20,
    color: '#6e6e6e',
    marginTop: 5,
  },
  disclaimerJoker: {
    fontFamily: 'NotoSansKR-Regular',
    textAlign: 'right',
    fontSize: 12,
    marginTop: 10,
    color: '#828282',
  },
});

export default styles;
