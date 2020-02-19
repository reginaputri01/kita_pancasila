/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    width: scale(150),
    height: scale(150)
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  text: {
    textAlign: 'center',
    color: '#88898C',
    fontSize: 12
  },
  footerContainer: {
    alignItems: 'center'
  },
  logoTelkom: {
    width: scale(100),
    height: scale(28),
    marginTop: METRICS.baseMargin,
    marginBottom: METRICS.height
  }
});

export default styles;
