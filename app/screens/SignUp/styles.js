/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {FONT_TEXT_PRIMARY, FONT_BOLD_PRIMARY} from '../../styles';

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
    width: scale(550),
    height: scale(95)
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginBottom: scale(35)
  },
  textNamaLengkap: {
    ...FONT_TEXT_PRIMARY,
    width: '80%',
    height: scale(55),
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#FBFCFE',
    padding: scale(10)
  },
  textEmail: {
    ...FONT_TEXT_PRIMARY,
    width: '80%',
    height: scale(55),
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#FBFCFE',
    margin: scale(15),
    padding: scale(10)
  },
  textSandi: {
    ...FONT_TEXT_PRIMARY,
    width: '80%',
    height: scale(55),
    borderColor: '#CCCCCC',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#FBFCFE',
    marginBottom: scale(15),
    padding: scale(10)
  },
  textKonfirmasiSandi: {
    ...FONT_TEXT_PRIMARY,
    width: '80%',
    height: scale(55),
    borderColor: '#CCCCCC',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#FBFCFE',
    padding: scale(10)
  },
  btnMasuk: {
    width: scale(500),
    height: scale(47),
    marginTop: scale(20),
    marginBottom: scale(10)
  },
  punyaAkun: {
    ...FONT_TEXT_PRIMARY,
    marginBottom: scale(30)
  },
  masuk: {
    ...FONT_BOLD_PRIMARY,
    color: '#3ABFDC'
  }
});

export default styles;
