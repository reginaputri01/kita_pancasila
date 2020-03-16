import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {FONT_TEXT_PRIMARY, FONT_BOLD_PRIMARY} from '../../styles';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(70)
  },
  text: {
    ...FONT_BOLD_PRIMARY,
    color: '#fff',
    fontSize: 24
  },
  piala: {
    width: scale(180),
    height: scale(180),
    marginTop: scale(45),
    marginBottom: scale(20)
  },
  titleSkor: {
    ...FONT_BOLD_PRIMARY,
    color: '#fff',
    fontSize: 22
  },
  skorContainer: {
    width: scale(90),
    height: scale(45),
    backgroundColor: '#FBDD56',
    borderRadius: scale(5),
    margin: scale(10)
  },
  skor: {
    ...FONT_BOLD_PRIMARY,
    textAlign: 'center',
    marginTop: scale(5),
    fontSize: 26,
    color: '#165C84'
  },
  btnTutupKuis: {
    width: scale(280),
    height: scale(50),
    marginTop: scale(40),
    marginBottom: scale(20)
  }
});

export default styles;
