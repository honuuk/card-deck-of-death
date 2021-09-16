import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  howToIconWrap: {
    width: 30,
    height: 30,
    borderWidth: 3,
    borderColor: '#1CD8D2',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
    right: 30,
  },
  howToIcon: {
    color: '#1CD8D2',
    fontWeight: '800',
    fontSize: 17,
  },
  emptySpace: {
    width: '100%',
    height: '10%',
  },
  TitleWrap: {
    marginBottom: 30,
  },
  gameTitleKo: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 50,
    color: '#000',
  },
  gameTitleEn: {
    fontFamily: 'NotoSansKR-Black',
    fontSize: 50,
    color: '#787878',
    textAlign: 'center',
    lineHeight: 55,
  },
  gameTitleOf: {
    fontSize: 35,
    marginTop: -10,
  },
  gameTitleDeath: {
    color: '#000',
  },
  button: {
    width: '60%',
    height: '8%',
    backgroundColor: '#1CD8D2',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 4,
  },
  button2: {
    width: '60%',
    height: '8%',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 4,
    borderColor: '#1cd8d2',
    borderWidth: 2,
  },
  buttonTextgmd: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    textAlignVertical: 'center',
  },
  buttonTextgmd2: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#1CD8D2',
    textAlignVertical: 'center',
  },
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
