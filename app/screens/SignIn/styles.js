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
    width: scale(170),
    height: scale(170)
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginBottom: scale(30)
  },
  textEmail: {
    ...FONT_TEXT_PRIMARY,
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
    ...FONT_TEXT_PRIMARY,
    width: '80%',
    height: scale(50),
    borderColor: '#CCCCCC',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#FBFCFE',
    marginBottom: scale(15),
    padding: scale(10)
  },
  btnMasuk: {
    width: scale(500),
    height: scale(48),
    marginTop: scale(5),
    marginBottom: scale(10)
  },
  noHaveAkun: {
    ...FONT_TEXT_PRIMARY,
    marginBottom: scale(30)
  },
  daftar: {
    ...FONT_BOLD_PRIMARY,
    color: '#3ABFDC'
  }
});

export default styles;