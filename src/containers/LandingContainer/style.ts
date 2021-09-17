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
  titleWrap: {
    marginBottom: 30,
  },
  gameTitleCard: {
    fontFamily: 'NotoSansKR-Black',
    fontSize: 50,
    color: '#787878',
    textAlign: 'center',
    lineHeight: 55,
  },
  gameTitleSquat: {
    fontFamily: 'NotoSansKR-Black',
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 55,
    color: '#3d3d3d',
  },
  playButton: {
    width: 230,
    height: 60,
    backgroundColor: '#1CD8D2',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 4,
  },
  recordButton: {
    width: 230,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 4,
    borderColor: '#1cd8d2',
    borderWidth: 2,
  },
  playButtonTextgmd: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    textAlignVertical: 'center',
    transform: [{ translateY: -2 }],
  },
  recordButtonTextgmd: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#1CD8D2',
    textAlignVertical: 'center',
    transform: [{ translateY: -2 }],
  },
});

export default styles;
