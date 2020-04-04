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
    borderRadius: 5
  },
  noSoal: {
    ...FONT_BOLD_PRIMARY,
    textAlign: 'center',
    marginTop: scale(7),
    fontSize: 20
  },
  exitKuis: {
    width: scale(90),
    height: scale(40),
    backgroundColor: '#F97484',
    borderColor: '#E8495C',
    borderWidth: 2,
    margin: scale(15),
    borderRadius: 5
  },
  textExit: {
    ...FONT_BOLD_PRIMARY,
    textAlign: 'center',
    marginTop: scale(7),
    fontSize: 16,
    color: '#fff'
  },
  soalContainer: {
    paddingRight: scale(25), 
    paddingLeft: scale(25)
  },
  textSoal: {
    ...FONT_TEXT_PRIMARY,
    marginTop: scale(15),
    marginBottom: scale(10),
    fontSize: 16,
    lineHeight: 25,
    color: '#515151'
  },
  jawabanContainer: {
    width: scale(320),
    height: scale(60),
    borderWidth: 1,
    borderColor: '#A3A3A3',
    marginTop: scale(20),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  textJawaban: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15),
    fontSize: 15,
    color: '#515151',
    alignItems: 'center'
  },
  textJawabanPressed: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15), 
    fontSize: 15, 
    color: '#fff', 
    alignItems: 'center'
  },
  jawabanPressedContainer: {
    width: scale(320),
    height: scale(60),
    borderWidth: 1,
    borderColor: '#00BFFF',
    backgroundColor: '#00BFFF',
    marginTop: scale(20),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
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
    marginLeft: scale(40)
  },
  btnNext2: {
    width: scale(30),
    height: scale(50),
    marginLeft: '86%',
    marginTop: scale(15)
  },
  btnPrevious: {
    width: scale(30),
    height: scale(50),
    marginLeft: scale(40),
    marginRight: '50%'
  },
  btnPrevious2: {
    width: scale(30),
    height: scale(50),
    marginLeft: scale(40),
    marginRight: scale(30)
  },
  btnSelesai: {
    width: scale(150),
    height: scale(50)
  }
});

export default styles;
