import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';

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
    width: scale(40),
    height: scale(40)
  },
  titleContainer: {
    width: '70%',
    marginTop: scale(20),
    marginLeft: scale(40)
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#000',
  },
  contentContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  viewNoSoal: {
    width: scale(50), 
    height: scale(35), 
    backgroundColor: '#AEE7F9', 
    margin: scale(15), 
    borderRadius: 5
  },
  noSoal: {
    textAlign: 'center', 
    marginTop: scale(5), 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  viewPoin: {
    width: scale(100), 
    height: scale(35), 
    marginLeft: scale(20)
  },
  poin: {
    textAlign: 'center', 
    marginTop: scale(20), 
    fontSize: 16, 
    color: 'red'
  },
  viewSoal: {
    paddingRight: scale(25), 
    paddingLeft: scale(25)
  },
  soal: {
    marginTop: scale(5), 
    marginBottom: scale(10), 
    fontSize: 16, 
    lineHeight: 25, 
    color: '#515151'
  },
  viewJawaban: {
    width: scale(320),
    height: scale(55),
    borderWidth: 1,
    borderColor: '#A3A3A3',
    marginTop: scale(15),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  jawaban: {
    margin: scale(15), 
    fontSize: 15, 
    color: '#515151', 
    alignItems: 'center'
  },
  konfirmasiJawaban: {
    margin: scale(15), 
    fontSize: 15, 
    color: '#fff', 
    alignItems: 'center'
  },
  viewJawabanBener: {
    width: scale(320),
    height: scale(55),
    backgroundColor: '#3ECD77',
    marginTop: scale(15),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5
  },
  viewJawabanSalah: {
    width: scale(320),
    height: scale(55),
    backgroundColor: '#F26565',
    marginTop: scale(15),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  titlePembahasan: {
    marginLeft: scale(30), 
    marginTop: scale(20), 
    fontWeight: 'bold', 
    fontSize: 16
  },
  viewPembahasan: {
    backgroundColor: '#FAFAFA', 
    width: '85%', 
    alignSelf: 'center', 
    borderRadius: 5, 
    margin: scale(10)
  },
  pembahasan: {
    fontSize: 14,
    color: '#000',
    lineHeight: 18,
    justifyContent: 'center',
    padding: scale(15)
  },
  garis: {
    alignSelf: 'center',
    width: '90%',
    marginTop: scale(15),
    marginBottom: scale(40)
  }
});

export default styles;
