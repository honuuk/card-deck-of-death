import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  record: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1CD8D2',
    marginBottom: 10,
  },
  recordTextHeader: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 25,
    color: '#fff',
    marginBottom: 8,
  },
  recordText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 20,
    color: '#fff',
  },
  recordValue: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 20,
    color: '#000',
  },
  recordTextWrap: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
