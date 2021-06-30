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
    fontSize: 20,
    color: '#fff',
  },
  recordResult: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 40,
    color: '#fff',
    marginVertical: 8,
  },
  recordText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 20,
    color: '#fff',
  },
  recordTextWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
