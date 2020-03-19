import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  container: {
    flex: 1
  },
  settingContainer: {
    padding: scale(20),
    alignItems: 'flex-end'
  },
  setting: {
    justifyContent: 'flex-end',
    width: scale(45),
    height: scale(45)
  },
  logoContainer: {
    paddingTop: scale(55),
    alignItems: 'center'
  },
  logo: {
    width: scale(200),
    height: scale(200),
    marginBottom: scale(50)
  },
  btnKuis: {
    width: scale(400),
    height: scale(50),
    marginBottom: scale(10)
  },
  btnMateri: {
    width: scale(400),
    height: scale(50),
    marginBottom: scale(10)
  }
});

export default styles;
