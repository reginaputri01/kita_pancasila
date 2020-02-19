/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  buttonLogout: {
    width: scale(400),
    height: scale(50),
    marginTop: scale(50)
  },
  titleContainer: {
    width: '70%',
    marginTop: scale(20),
    marginLeft: scale(60)
  },
  titleHeader: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#000',
  },
  profileContainer: {
    marginTop: scale(40)
  },
  profile: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  avatar: {
    width: scale(100),
    height: scale(100),
    justifyContent: 'center'
  },
  profileName: {
    marginTop: scale(20),
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000'
  },
  profileEmail: {
    marginTop: scale(5),
    fontSize: 15,
    color: '#88898C'
  },
  garis: {
    width: '80%',
    marginTop: scale(40)
  },
  aboutContainer: {
    alignItems: 'center',
    marginTop: scale(25)
  },
  buttonAbout: {
    width: scale(130),
    height: scale(40)
  }
});

export default styles;
