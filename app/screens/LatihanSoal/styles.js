import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {FONT_TEXT_PRIMARY, FONT_BOLD_PRIMARY} from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(15)
  },
  viewNoSoal: {
    width: scale(70),
    height: scale(40),
    backgroundColor: '#AEE7F9',
    margin: scale(15),
    borderRadius: scale(5)
  },
  noSoal: {
    ...FONT_BOLD_PRIMARY,
    textAlign: 'center',
    marginTop: scale(7),
    fontSize: scale(20)
  },
  exitKuis: {
    width: scale(90),
    height: scale(40),
    backgroundColor: '#F97484',
    borderColor: '#E8495C',
    borderWidth: 2,
    marginTop: scale(15),
    marginLeft: scale(15),
    marginRight: scale(20),
    borderRadius: scale(5)
  },
  textExit: {
    ...FONT_BOLD_PRIMARY,
    textAlign: 'center',
    marginTop: scale(7),
    fontSize: scale(16),
    color: '#fff'
  },
  soalContainer: {
    paddingRight: scale(25), 
    paddingLeft: scale(25)
  },
  textSoal: {
    ...FONT_TEXT_PRIMARY,
    marginTop: scale(10),
    marginBottom: scale(5),
    fontSize: scale(16),
    lineHeight: 25,
    color: '#515151'
  },
  jawabanContainer: {
    width: scale(310),
    height: scale(60),
    borderWidth: 1,
    borderColor: '#A3A3A3',
    marginTop: scale(10),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: scale(5),
    justifyContent: 'center'
  },
  textJawaban: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15),
    fontSize: scale(15),
    color: '#515151',
    alignItems: 'center'
  },
  textJawabanPressed: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15), 
    fontSize: scale(15), 
    color: '#fff', 
    alignItems: 'center'
  },
  jawabanPressedContainer: {
    width: scale(310),
    height: scale(60),
    borderWidth: 1,
    borderColor: '#00BFFF',
    backgroundColor: '#00BFFF',
    marginTop: scale(10),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: scale(5),
    justifyContent: 'center'
  },
  nextPrevious: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(20)
  },
  btnNext: {
    width: scale(30),
    height: scale(50),
    marginLeft: scale(40),
    marginTop: scale(20)
  },
  btnNext2: {
    width: scale(30),
    height: scale(50),
    marginLeft: '82%',
    marginTop: scale(20)
  },
  btnPrevious: {
    width: scale(30),
    height: scale(50),
    marginLeft: scale(40),
    marginRight: '50%',
    marginTop: scale(20)
  },
  btnPrevious2: {
    width: scale(30),
    height: scale(50),
    marginLeft: scale(40),
    marginRight: scale(30),
    marginTop: scale(20)
  },
  btnSelesai: {
    width: scale(150),
    height: scale(50),
    marginTop: scale(20)
  }
});

export default styles;
