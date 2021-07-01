import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  back_arrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  arrow_img: {
    width: 20,
    height: 20,
  },
  back_text: {
    flex: 1,
    fontSize: 20,
    color: '#b7b7b7',
    fontFamily: 'NotoSansKR-Bold',
    marginLeft: 8,
  },
});

export default styles;
