import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {FONT_TEXT_PRIMARY, FONT_BOLD_PRIMARY} from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    width: '20%'
  },
  backContainer: {
    padding: scale(15),
    alignItems: 'flex-start'
  },
  buttonBack: {
    justifyContent: 'flex-end',
    width: scale(45),
    height: scale(45)
  },
  titleContainer: {
    width: '70%',
    marginTop: scale(20),
    marginLeft: scale(40)
  },
  titleHeader: {
    ...FONT_BOLD_PRIMARY,
    fontSize: 25,
    color: '#000',
  },
  contentContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  viewNoSoal: {
    width: scale(70), 
    height: scale(40), 
    backgroundColor: '#AEE7F9', 
    marginTop: scale(10), 
    marginLeft: scale(20),
    marginBottom: scale(10),
    borderRadius: 5
  },
  noSoal: {
    ...FONT_BOLD_PRIMARY,
    textAlign: 'center', 
    marginTop: scale(7), 
    fontSize: 20,
  },
  viewPoin: {
    width: scale(100), 
    height: scale(35), 
    marginLeft: scale(20)
  },
  poin: {
    ...FONT_TEXT_PRIMARY,
    textAlign: 'center', 
    marginTop: scale(20), 
    fontSize: 17, 
    color: 'red'
  },
  viewSoal: {
    paddingRight: scale(25), 
    paddingLeft: scale(25)
  },
  soal: {
    ...FONT_TEXT_PRIMARY,
    marginTop: scale(10), 
    fontSize: 16, 
    lineHeight: 25, 
    color: '#515151'
  },
  viewJawaban: {
    width: scale(320),
    height: scale(60),
    borderWidth: 1,
    borderColor: '#A3A3A3',
    marginTop: scale(15),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  jawaban: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15), 
    fontSize: 15, 
    color: '#515151', 
    alignItems: 'center'
  },
  konfirmasiJawaban: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15), 
    fontSize: 15, 
    color: '#fff', 
    alignItems: 'center'
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
  jawabanContainerBener: {
    width: scale(320),
    height: scale(60),
    borderWidth: 1,
    borderColor: '#00BFFF',
    backgroundColor: 'green',
    marginTop: scale(20),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  jawabanContainerSalah: {
    width: scale(320),
    height: scale(60),
    borderWidth: 1,
    borderColor: '#00BFFF',
    backgroundColor: 'red',
    marginTop: scale(20),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  viewJawabanBener: {
    width: scale(320),
    height: scale(60),
    backgroundColor: '#3ECD77',
    marginTop: scale(15),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5
  },
  viewJawabanSalah: {
    width: scale(320),
    height: scale(60),
    backgroundColor: '#F26565',
    marginTop: scale(15),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  titlePembahasan: {
    ...FONT_BOLD_PRIMARY,
    marginLeft: scale(30), 
    marginTop: scale(20),
    fontSize: 16
  },
  viewPembahasan: {
    backgroundColor: '#FAFAFA', 
    width: '85%', 
    alignSelf: 'center', 
    borderRadius: 5, 
    margin: scale(10)
  },
  nextPrevious: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(30)
  },
  btnNext: {
    width: scale(30),
    height: scale(50)
  },
  btnNext2: {
    width: scale(30),
    height: scale(50),
    marginLeft: '82%',
    marginTop: scale(30),
    marginBottom: scale(30)
  },
  btnPrevious: {
    width: scale(30),
    height: scale(50)
  },
  btnPrevious2: {
    width: scale(30),
    height: scale(50)
  },
  btnSelesai: {
    width: scale(150),
    height: scale(50),
    marginRight: scale(80)
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
  pembahasan: {
    ...FONT_TEXT_PRIMARY,
    fontSize: 14,
    color: '#000',
    lineHeight: 18,
    justifyContent: 'center',
    padding: scale(15)
  }
});

export default styles;
