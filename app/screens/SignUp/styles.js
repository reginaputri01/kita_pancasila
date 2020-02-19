/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logoContainer: {
    width: scale(540),
    height: scale(90)
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginBottom: scale(35)
  },
  textNamaLengkap: {
    width: '80%',
    height: scale(50),
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#FBFCFE',
    padding: scale(10)
  },
  textEmail: {
    width: '80%',
    height: scale(50),
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#FBFCFE',
    margin: scale(15),
    padding: scale(10)
  },
  textSandi: {
    width: '80%',
    height: scale(50),
    borderColor: '#CCCCCC',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#FBFCFE',
    marginBottom: scale(15),
    padding: scale(10)
  },
  textKonfirmasiSandi: {
    width: '80%',
    height: scale(50),
    borderColor: '#CCCCCC',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#FBFCFE',
    padding: scale(10)
  },
  btnMasuk: {
    width: scale(500),
    height: scale(48),
    marginTop: scale(20),
    marginBottom: scale(10)
  },
  punyaAkun: {
    marginBottom: scale(30)
  },
  masuk: {
    fontWeight: 'bold',
    color: '#3ABFDC'
  }
});

export default styles;
