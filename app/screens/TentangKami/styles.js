import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonBack: {
    justifyContent: 'flex-end',
    width: scale(40),
    height: scale(40)
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backContainer: {
    width: '20%',
    padding: scale(15),
    alignItems: 'flex-start'
  },
  buttonBack: {
    justifyContent: 'flex-end',
    width: scale(40),
    height: scale(40)
  },
  headerTitle: {
    width: '100%',
    marginTop: scale(20),
    marginLeft: scale(40)
  },
  titlenya: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#000'
  },
  deskripsiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA',
    width: '92%',
    alignSelf: 'center',
    borderRadius: 5
  },
  logoContainer: {
    width: '25%'
  },
  logo: {
    justifyContent: 'flex-end',
    margin: scale(15),
    width: scale(65),
    height: scale(65),
    borderRadius: scale(20)
  },
  textDeskripsi: {
    width: '70%',
    marginTop: scale(15),
    paddingRight: scale(10)
  },
  desc: {
    fontSize: 14,
    color: '#000',
    lineHeight: 18
  },
  garisContainer: {
    alignItems: 'center'
  },
  creatorTitle: {
    marginTop: scale(20),
    marginLeft: scale(20),
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'flex-start'
  },
  garis: {
    width: '92%',
    marginTop: scale(5)
  },
  creatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  fotoContainer: {
    width: '20%'
  },
  foto: {
    justifyContent: 'flex-end',
    margin: scale(15),
    width: scale(55),
    height: scale(55)
  },
  textContainer: {
    width: '75%',
    marginTop: scale(15)
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000'
  },
  tugas: {
    fontSize: 13,
    color: '#000'
  },
  email: {
    fontSize: 13,
    color: '#88898C'
  },
  footer: {
    marginTop: scale(20)
  },
  textFooter: {
    textAlign: 'center',
    color: '#88898C',
    fontSize: 12
  },
  logoFooter: {
    alignItems: 'center'
  },
  logoTelkom: {
    width: scale(100),
    height: scale(28),
    marginTop: scale(10),
    marginBottom: scale(30)
  }
});

export default styles;
